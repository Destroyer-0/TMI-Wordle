(function () {
  "use strict";

  const MIN_GUESSES = 1;
  const MAX_GUESSES = 20;
  const START_DATE_UTC = Date.UTC(2026, 0, 1);
  const DAY_MS = 86400000;
  const BEIJING_OFFSET_MS = 8 * 60 * 60 * 1000;
  const CATEGORIES = {
    recipe: {
      data: Array.isArray(window.TMI_RECIPES) ? window.TMI_RECIPES : [],
      noun: "料理",
      defaultGuesses: 6,
      legacyGuessLimit: 8,
      placeholder: "例如：海鲜味噌汤",
      headers: ["料理", "厨具", "价格", "等级", "食材", "制作时间", "正向 Tag", "反向 Tag", "获得方式", "DLC"],
      storage: {
        dailyPrefix: "tmi-wordle:recipe:v1:daily:",
        infinite: "tmi-wordle:recipe:v1:infinite",
        stats: "tmi-wordle:recipe:v1:stats",
        guessLimit: "tmi-wordle:recipe:v1:guess-limit"
      }
    },
    beverage: {
      data: Array.isArray(window.TMI_BEVERAGES) ? window.TMI_BEVERAGES : [],
      noun: "酒水",
      defaultGuesses: 6,
      placeholder: "例如：绿茶",
      headers: ["酒水", "等级", "价格", "正向 Tag", "DLC"],
      storage: {
        dailyPrefix: "tmi-wordle:beverage:v1:daily:",
        infinite: "tmi-wordle:beverage:v1:infinite",
        stats: "tmi-wordle:beverage:v1:stats",
        guessLimit: "tmi-wordle:beverage:v1:guess-limit"
      }
    }
  };

  const els = {
    form: document.querySelector("#guess-form"),
    input: document.querySelector("#guess-input"),
    submit: document.querySelector("#submit-button"),
    suggestions: document.querySelector("#suggestions"),
    message: document.querySelector("#form-message"),
    resultWrap: document.querySelector("#result-wrap"),
    resultTable: document.querySelector(".result-table"),
    resultCaption: document.querySelector("#result-caption"),
    resultHead: document.querySelector("#result-head"),
    resultBody: document.querySelector("#result-body"),
    counter: document.querySelector("#attempt-counter"),
    roundNumber: document.querySelector("#round-number"),
    challengeLabel: document.querySelector("#challenge-label"),
    endPanel: document.querySelector("#end-panel"),
    endKicker: document.querySelector("#end-kicker"),
    endTitle: document.querySelector("#end-title"),
    endCopy: document.querySelector("#end-copy"),
    newGame: document.querySelector("#new-game-button"),
    help: document.querySelector("#help-dialog"),
    stats: document.querySelector("#stats-dialog"),
    statsScope: document.querySelector("#stats-scope"),
    limitForm: document.querySelector("#limit-form"),
    limitInput: document.querySelector("#max-guesses-input"),
    guessLabel: document.querySelector("#guess-label"),
    inputHint: document.querySelector("#input-hint"),
    toast: document.querySelector("#toast")
  };

  let mode = "daily";
  let category = "recipe";
  let answer = null;
  let guesses = [];
  let gameStatus = "playing";
  let activeSuggestion = -1;
  let visibleSuggestions = [];
  let toastTimer;
  let guessLimit = CATEGORIES.recipe.defaultGuesses;

  function categoryConfig() { return CATEGORIES[category]; }
  function dataSet() { return categoryConfig().data; }

  function beijingDateKey() {
    return new Date(Date.now() + BEIJING_OFFSET_MS).toISOString().slice(0, 10);
  }

  function beijingDayNumber() {
    const [year, month, day] = beijingDateKey().split("-").map(Number);
    const beijingCalendarDate = Date.UTC(year, month - 1, day);
    return Math.max(0, Math.floor((beijingCalendarDate - START_DATE_UTC) / DAY_MS));
  }

  function dailyKey() { return beijingDateKey(); }
  function dailyAnswer() {
    const data = dataSet();
    return data[beijingDayNumber() % data.length];
  }
  function safeParse(value, fallback) {
    try { return value ? JSON.parse(value) : fallback; } catch (_) { return fallback; }
  }

  function clampGuessLimit(value) {
    const parsed = Number.parseInt(value, 10);
    if (!Number.isFinite(parsed)) return categoryConfig().defaultGuesses;
    return Math.min(MAX_GUESSES, Math.max(MIN_GUESSES, parsed));
  }

  function emptyStats() { return { played: 0, wins: 0, streak: 0, best: 0 }; }
  function loadStatsStore() {
    const config = categoryConfig();
    const saved = safeParse(localStorage.getItem(config.storage.stats), null);
    if (saved?.byLimit) return saved;
    if (saved && typeof saved.played === "number") return { byLimit: { [config.legacyGuessLimit || config.defaultGuesses]: saved } };
    return { byLimit: {} };
  }
  function loadStats() {
    const store = loadStatsStore();
    return { ...emptyStats(), ...(store.byLimit[guessLimit] || {}) };
  }
  function saveStats(won) {
    const store = loadStatsStore();
    const stats = loadStats();
    stats.played += 1;
    if (won) {
      stats.wins += 1;
      stats.streak += 1;
      stats.best = Math.max(stats.best, stats.streak);
    } else {
      stats.streak = 0;
    }
    store.byLimit[guessLimit] = stats;
    localStorage.setItem(categoryConfig().storage.stats, JSON.stringify(store));
    updateStatsView();
  }
  function updateStatsView() {
    const stats = loadStats();
    document.querySelector("#stat-played").textContent = stats.played;
    document.querySelector("#stat-win-rate").textContent = stats.played ? `${Math.round((stats.wins / stats.played) * 100)}%` : "0%";
    document.querySelector("#stat-streak").textContent = stats.streak;
    document.querySelector("#stat-best").textContent = stats.best;
    els.statsScope.textContent = `猜${categoryConfig().noun} · ${guessLimit} 次模式`;
  }

  function randomAnswer(previousId) {
    const data = dataSet();
    if (data.length < 2) return data[0];
    let next;
    do { next = data[Math.floor(Math.random() * data.length)]; } while (next.id === previousId);
    return next;
  }

  function baseGameStorageKey(selectedMode) {
    const storage = categoryConfig().storage;
    return selectedMode === "daily" ? storage.dailyPrefix + dailyKey() : storage.infinite;
  }
  function gameStorageKey(selectedMode) {
    return `${baseGameStorageKey(selectedMode)}:limit:${guessLimit}`;
  }

  function saveGame() {
    const state = { answerId: answer.id, guessIds: guesses.map((item) => item.id), status: gameStatus, guessLimit };
    localStorage.setItem(gameStorageKey(mode), JSON.stringify(state));
  }

  function loadGame(nextMode, forceNew) {
    mode = nextMode;
    const data = dataSet();
    if (!data.length) {
      answer = null;
      guesses = [];
      gameStatus = "playing";
      render();
      return;
    }
    const key = gameStorageKey(mode);
    let saved = forceNew ? null : safeParse(localStorage.getItem(key), null);
    if (!saved && !forceNew && categoryConfig().legacyGuessLimit === guessLimit) {
      saved = safeParse(localStorage.getItem(baseGameStorageKey(mode)), null);
      if (saved) localStorage.setItem(key, JSON.stringify({ ...saved, guessLimit }));
    }
    const fixedAnswer = mode === "daily" ? dailyAnswer() : null;
    answer = fixedAnswer || data.find((item) => item.id === saved?.answerId) || randomAnswer();
    guesses = (saved?.guessIds || []).map((id) => data.find((item) => item.id === id)).filter(Boolean);
    gameStatus = saved?.status || "playing";
    if (mode === "daily" && saved?.answerId && saved.answerId !== fixedAnswer.id) {
      guesses = [];
      gameStatus = "playing";
    }
    if (forceNew) {
      answer = randomAnswer(answer?.id);
      guesses = [];
      gameStatus = "playing";
      saveGame();
    }
    render();
  }

  function applyGuessLimit(event) {
    event.preventDefault();
    const nextLimit = clampGuessLimit(els.limitInput.value);
    els.limitInput.value = nextLimit;
    if (nextLimit === guessLimit) {
      showToast(`当前已经是 ${guessLimit} 次模式`);
      return;
    }
    guessLimit = nextLimit;
    localStorage.setItem(categoryConfig().storage.guessLimit, String(guessLimit));
    loadGame(mode, false);
    showToast(`已切换到 ${guessLimit} 次模式`);
  }

  function switchCategory(nextCategory) {
    if (!CATEGORIES[nextCategory] || nextCategory === category) return;
    category = nextCategory;
    const config = categoryConfig();
    guessLimit = clampGuessLimit(localStorage.getItem(config.storage.guessLimit) || config.defaultGuesses);
    els.input.value = "";
    loadGame(mode, false);
  }

  function normalize(value) { return value.trim().toLocaleLowerCase("zh-CN").replace(/\s+/g, ""); }
  function findExact(value) {
    const query = normalize(value);
    return dataSet().find((item) => normalize(item.name) === query);
  }
  function findMatches(value) {
    const query = normalize(value);
    if (!query) return [];
    return dataSet().filter((item) => normalize(item.name).includes(query)).slice(0, 8);
  }

  function setState(guessValues, answerValues) {
    const guessSet = new Set(guessValues || []);
    const answerSet = new Set(answerValues || []);
    const exact = guessSet.size === answerSet.size && [...guessSet].every((value) => answerSet.has(value));
    if (exact) return "exact";
    return [...guessSet].some((value) => answerSet.has(value)) ? "near" : "miss";
  }
  function numericLabel(value, target, suffix = "") {
    if (value === target) return `${value}${suffix}`;
    return `${value}${suffix} ${target > value ? "↑" : "↓"}`;
  }
  function acquisitionType(value) {
    if (value.includes("初始拥有")) return "初始料理";
    if (/^【DLC\d+】?等级|^等级/.test(value)) return "升级获取料理";
    if (/Lv\d+->Lv\d+/.test(value)) return "羁绊料理";
    if (/任务|支线|主线/.test(value)) return "任务料理";
    return "购买获取";
  }
  function acquisitionState(guessValue, answerValue) {
    if (guessValue === answerValue) return "exact";
    return acquisitionType(guessValue) === acquisitionType(answerValue) ? "near" : "miss";
  }
  function comparisonFor(guess) {
    if (category === "beverage") {
      return {
        level: guess.level === answer.level ? "exact" : "miss",
        price: guess.price === answer.price ? "exact" : "miss",
        positiveTags: setState(guess.positiveTags, answer.positiveTags),
        dlc: guess.dlc === answer.dlc ? "exact" : "miss"
      };
    }
    return {
      cookware: guess.cookware === answer.cookware ? "exact" : "miss",
      price: guess.price === answer.price ? "exact" : "miss",
      level: guess.level === answer.level ? "exact" : "miss",
      ingredients: setState(guess.ingredients, answer.ingredients),
      time: guess.time === answer.time ? "exact" : "miss",
      positiveTags: setState(guess.positiveTags, answer.positiveTags),
      negativeTags: setState(guess.negativeTags, answer.negativeTags),
      acquisition: acquisitionState(guess.acquisition, answer.acquisition),
      dlc: guess.dlc === answer.dlc ? "exact" : "miss"
    };
  }

  function listLabel(values) { return values?.length ? values.join("、") : "无"; }
  function timeLabel(item) {
    const primary = Number.isInteger(item.time) ? item.time : item.time.toFixed(1);
    const label = `${primary}（${item.time60.toFixed(1)}）`;
    if (item.time === answer.time) return label;
    return `${label} ${answer.time > item.time ? "↑" : "↓"}`;
  }

  function renderRows() {
    els.resultBody.textContent = "";
    guesses.forEach((guess) => {
      const states = comparisonFor(guess);
      const row = document.createElement("tr");
      const values = category === "beverage"
        ? [
            { text: guess.name, className: "" },
            { text: numericLabel(guess.level, answer.level), className: states.level },
            { text: numericLabel(guess.price, answer.price), className: states.price },
            { text: listLabel(guess.positiveTags), className: states.positiveTags, wide: true },
            { text: guess.dlc, className: states.dlc }
          ]
        : [
            { text: guess.name, className: "" },
            { text: guess.cookware, className: states.cookware },
            { text: numericLabel(guess.price, answer.price), className: states.price },
            { text: numericLabel(guess.level, answer.level), className: states.level },
            { text: listLabel(guess.ingredients), className: states.ingredients, wide: true },
            { text: timeLabel(guess), className: states.time },
            { text: listLabel(guess.positiveTags), className: states.positiveTags, wide: true },
            { text: listLabel(guess.negativeTags), className: states.negativeTags, wide: true },
            { text: `${acquisitionType(guess.acquisition)}\n${guess.acquisition}`, className: states.acquisition, wide: true },
            { text: guess.dlc, className: states.dlc }
          ];
      values.forEach((value, index) => {
        const cell = document.createElement("td");
        cell.textContent = value.text;
        if (index > 0) cell.className = `feedback ${value.className}${value.wide ? " detail-cell" : ""}`;
        row.appendChild(cell);
      });
      els.resultBody.appendChild(row);
    });
    els.resultWrap.hidden = guesses.length === 0;
  }

  function renderCategoryView() {
    const config = categoryConfig();
    document.querySelectorAll(".category-button").forEach((button) => {
      const active = button.dataset.category === category;
      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", String(active));
    });
    els.guessLabel.textContent = `输入${config.noun}名称`;
    els.input.placeholder = config.placeholder;
    els.inputHint.textContent = `输入关键词并从候选${config.noun}中选择。`;
    els.resultCaption.textContent = `${config.noun}猜测结果与属性反馈`;
    els.resultTable.classList.toggle("beverage-table", category === "beverage");
    els.resultHead.textContent = "";
    config.headers.forEach((label) => {
      const header = document.createElement("th");
      header.scope = "col";
      header.textContent = label;
      els.resultHead.appendChild(header);
    });
  }

  function render() {
    document.querySelectorAll(".mode-button").forEach((button) => {
      const active = button.dataset.mode === mode;
      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", String(active));
    });
    els.challengeLabel.textContent = mode === "daily" ? "每日挑战" : "无限模式";
    els.roundNumber.textContent = mode === "daily" ? `第 ${beijingDayNumber() + 1} 期` : "随机谜题";
    els.counter.textContent = gameStatus === "playing" ? `剩余 ${guessLimit - guesses.length} 次` : `${guesses.length} / ${guessLimit} 次`;
    els.limitInput.value = guessLimit;
    renderCategoryView();
    renderRows();
    const ended = gameStatus !== "playing";
    const unavailable = !dataSet().length;
    els.input.disabled = ended || unavailable;
    els.submit.disabled = ended || unavailable;
    els.endPanel.hidden = !ended;
    els.newGame.hidden = mode === "daily";
    els.newGame.parentElement.hidden = mode === "daily";
    if (ended) {
      const won = gameStatus === "won";
      els.endKicker.textContent = won ? "挑战完成" : "本局结束";
      els.endTitle.textContent = won ? "猜中了！" : "差一点！";
      els.endCopy.textContent = won ? `你用了 ${guesses.length} 次猜出这${category === "recipe" ? "道" : "款"}${categoryConfig().noun}。` : `答案是「${answer.name}」。`;
    }
    closeSuggestions();
    els.message.textContent = unavailable ? `${categoryConfig().noun}题库为空，请检查数据文件。` : "";
    updateStatsView();
  }

  function renderSuggestions() {
    visibleSuggestions = findMatches(els.input.value).filter((item) => !guesses.some((guess) => guess.id === item.id));
    activeSuggestion = visibleSuggestions.length ? 0 : -1;
    els.suggestions.textContent = "";
    visibleSuggestions.forEach((item, index) => {
      const option = document.createElement("li");
      option.id = `suggestion-${index}`;
      option.setAttribute("role", "option");
      option.setAttribute("aria-selected", String(index === activeSuggestion));
      if (index === activeSuggestion) option.classList.add("active");
      const name = document.createElement("strong");
      name.textContent = item.name;
      const detail = document.createElement("small");
      detail.textContent = category === "beverage"
        ? `${item.dlc} · Lv.${item.level} · ${item.price}`
        : `${item.dlc} · ${item.cookware} · Lv.${item.level}`;
      option.append(name, detail);
      option.addEventListener("pointerdown", (event) => { event.preventDefault(); selectSuggestion(index); });
      els.suggestions.appendChild(option);
    });
    const open = visibleSuggestions.length > 0;
    els.suggestions.hidden = !open;
    els.input.setAttribute("aria-expanded", String(open));
    updateActiveDescendant();
  }
  function updateActiveDescendant() {
    const options = els.suggestions.querySelectorAll("li");
    options.forEach((option, index) => {
      option.classList.toggle("active", index === activeSuggestion);
      option.setAttribute("aria-selected", String(index === activeSuggestion));
    });
    if (activeSuggestion >= 0) els.input.setAttribute("aria-activedescendant", `suggestion-${activeSuggestion}`);
    else els.input.removeAttribute("aria-activedescendant");
  }
  function selectSuggestion(index) {
    const item = visibleSuggestions[index];
    if (!item) return;
    els.input.value = item.name;
    closeSuggestions();
    els.input.focus();
  }
  function closeSuggestions() {
    visibleSuggestions = [];
    activeSuggestion = -1;
    els.suggestions.hidden = true;
    els.suggestions.textContent = "";
    els.input.setAttribute("aria-expanded", "false");
    els.input.removeAttribute("aria-activedescendant");
  }

  function submitGuess(event) {
    event.preventDefault();
    if (gameStatus !== "playing") return;
    const guess = findExact(els.input.value);
    if (!guess) {
      els.message.textContent = `题库中没有这${category === "recipe" ? "道" : "款"}${categoryConfig().noun}，请从候选项中选择。`;
      els.input.focus();
      return;
    }
    if (guesses.some((item) => item.id === guess.id)) {
      els.message.textContent = `这${category === "recipe" ? "道" : "款"}${categoryConfig().noun}已经猜过了，换一${category === "recipe" ? "道" : "款"}试试。`;
      els.input.select();
      return;
    }
    guesses.push(guess);
    els.input.value = "";
    els.message.textContent = "";
    if (guess.id === answer.id) finishGame(true);
    else if (guesses.length >= guessLimit) finishGame(false);
    else saveGame();
    render();
    if (gameStatus === "playing") els.input.focus();
  }
  function finishGame(won) {
    gameStatus = won ? "won" : "lost";
    saveGame();
    saveStats(won);
  }

  function showToast(text) {
    clearTimeout(toastTimer);
    els.toast.textContent = text;
    els.toast.classList.add("show");
    toastTimer = setTimeout(() => els.toast.classList.remove("show"), 2400);
  }

  els.form.addEventListener("submit", submitGuess);
  els.limitForm.addEventListener("submit", applyGuessLimit);
  els.input.addEventListener("input", () => { els.message.textContent = ""; renderSuggestions(); });
  els.input.addEventListener("keydown", (event) => {
    if (els.suggestions.hidden) return;
    if (event.key === "ArrowDown") {
      event.preventDefault();
      activeSuggestion = (activeSuggestion + 1) % visibleSuggestions.length;
      updateActiveDescendant();
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      activeSuggestion = (activeSuggestion - 1 + visibleSuggestions.length) % visibleSuggestions.length;
      updateActiveDescendant();
    } else if (event.key === "Enter" && activeSuggestion >= 0) {
      event.preventDefault();
      selectSuggestion(activeSuggestion);
    } else if (event.key === "Escape") closeSuggestions();
  });
  els.input.addEventListener("blur", () => setTimeout(closeSuggestions, 120));
  document.querySelectorAll(".mode-button").forEach((button) => button.addEventListener("click", () => loadGame(button.dataset.mode, false)));
  document.querySelectorAll(".category-button").forEach((button) => button.addEventListener("click", () => switchCategory(button.dataset.category)));
  els.newGame.addEventListener("click", () => loadGame("infinite", true));
  document.querySelector("#help-button").addEventListener("click", () => els.help.showModal());
  document.querySelector("#stats-button").addEventListener("click", () => { updateStatsView(); els.stats.showModal(); });
  document.querySelectorAll("[data-close]").forEach((button) => button.addEventListener("click", () => button.closest("dialog").close()));
  document.querySelectorAll("dialog").forEach((dialog) => dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  }));
  document.addEventListener("keydown", (event) => {
    if (event.key === "/" && document.activeElement !== els.input && gameStatus === "playing") {
      event.preventDefault();
      els.input.focus();
    }
  });

  const initialConfig = categoryConfig();
  guessLimit = clampGuessLimit(localStorage.getItem(initialConfig.storage.guessLimit) || initialConfig.defaultGuesses);
  loadGame("daily", false);
})();
