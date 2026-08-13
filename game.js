(function () {
  "use strict";

  const DATA = Array.isArray(window.TMI_RECIPES) ? window.TMI_RECIPES : [];
  const MAX_GUESSES = 8;
  const START_DATE_UTC = Date.UTC(2026, 0, 1);
  const DAY_MS = 86400000;
  const BEIJING_OFFSET_MS = 8 * 60 * 60 * 1000;
  const STORAGE = {
    dailyPrefix: "tmi-wordle:recipe:v1:daily:",
    infinite: "tmi-wordle:recipe:v1:infinite",
    stats: "tmi-wordle:recipe:v1:stats"
  };

  const els = {
    form: document.querySelector("#guess-form"),
    input: document.querySelector("#guess-input"),
    submit: document.querySelector("#submit-button"),
    suggestions: document.querySelector("#suggestions"),
    message: document.querySelector("#form-message"),
    resultWrap: document.querySelector("#result-wrap"),
    resultBody: document.querySelector("#result-body"),
    counter: document.querySelector("#attempt-counter"),
    roundNumber: document.querySelector("#round-number"),
    challengeLabel: document.querySelector("#challenge-label"),
    endPanel: document.querySelector("#end-panel"),
    endKicker: document.querySelector("#end-kicker"),
    endTitle: document.querySelector("#end-title"),
    endCopy: document.querySelector("#end-copy"),
    share: document.querySelector("#share-button"),
    newGame: document.querySelector("#new-game-button"),
    help: document.querySelector("#help-dialog"),
    stats: document.querySelector("#stats-dialog"),
    toast: document.querySelector("#toast")
  };

  let mode = "daily";
  let answer = null;
  let guesses = [];
  let gameStatus = "playing";
  let activeSuggestion = -1;
  let visibleSuggestions = [];
  let toastTimer;

  function beijingDateKey() {
    return new Date(Date.now() + BEIJING_OFFSET_MS).toISOString().slice(0, 10);
  }

  function beijingDayNumber() {
    const [year, month, day] = beijingDateKey().split("-").map(Number);
    const beijingCalendarDate = Date.UTC(year, month - 1, day);
    return Math.max(0, Math.floor((beijingCalendarDate - START_DATE_UTC) / DAY_MS));
  }

  function dailyKey() { return beijingDateKey(); }
  function dailyAnswer() { return DATA[beijingDayNumber() % DATA.length]; }
  function safeParse(value, fallback) {
    try { return value ? JSON.parse(value) : fallback; } catch (_) { return fallback; }
  }

  function loadStats() {
    return { played: 0, wins: 0, streak: 0, best: 0, ...safeParse(localStorage.getItem(STORAGE.stats), {}) };
  }
  function saveStats(won) {
    const stats = loadStats();
    stats.played += 1;
    if (won) {
      stats.wins += 1;
      stats.streak += 1;
      stats.best = Math.max(stats.best, stats.streak);
    } else {
      stats.streak = 0;
    }
    localStorage.setItem(STORAGE.stats, JSON.stringify(stats));
    updateStatsView();
  }
  function updateStatsView() {
    const stats = loadStats();
    document.querySelector("#stat-played").textContent = stats.played;
    document.querySelector("#stat-win-rate").textContent = stats.played ? `${Math.round((stats.wins / stats.played) * 100)}%` : "0%";
    document.querySelector("#stat-streak").textContent = stats.streak;
    document.querySelector("#stat-best").textContent = stats.best;
  }

  function randomAnswer(previousId) {
    if (DATA.length < 2) return DATA[0];
    let next;
    do { next = DATA[Math.floor(Math.random() * DATA.length)]; } while (next.id === previousId);
    return next;
  }

  function saveGame() {
    const state = { answerId: answer.id, guessIds: guesses.map((item) => item.id), status: gameStatus };
    const key = mode === "daily" ? STORAGE.dailyPrefix + dailyKey() : STORAGE.infinite;
    localStorage.setItem(key, JSON.stringify(state));
  }

  function loadGame(nextMode, forceNew) {
    mode = nextMode;
    const key = mode === "daily" ? STORAGE.dailyPrefix + dailyKey() : STORAGE.infinite;
    const saved = forceNew ? null : safeParse(localStorage.getItem(key), null);
    const fixedAnswer = mode === "daily" ? dailyAnswer() : null;
    answer = fixedAnswer || DATA.find((item) => item.id === saved?.answerId) || randomAnswer();
    guesses = (saved?.guessIds || []).map((id) => DATA.find((item) => item.id === id)).filter(Boolean);
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

  function normalize(value) { return value.trim().toLocaleLowerCase("zh-CN").replace(/\s+/g, ""); }
  function findExact(value) {
    const query = normalize(value);
    return DATA.find((item) => normalize(item.name) === query);
  }
  function findMatches(value) {
    const query = normalize(value);
    if (!query) return [];
    return DATA.filter((item) => normalize(item.name).includes(query)).slice(0, 8);
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
      const values = [
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

  function render() {
    document.querySelectorAll(".mode-button").forEach((button) => {
      const active = button.dataset.mode === mode;
      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", String(active));
    });
    els.challengeLabel.textContent = mode === "daily" ? "每日挑战" : "无限模式";
    els.roundNumber.textContent = mode === "daily" ? `第 ${beijingDayNumber() + 1} 期` : "随机谜题";
    els.counter.textContent = gameStatus === "playing" ? `剩余 ${MAX_GUESSES - guesses.length} 次` : `${guesses.length} / ${MAX_GUESSES} 次`;
    renderRows();
    const ended = gameStatus !== "playing";
    els.input.disabled = ended;
    els.submit.disabled = ended;
    els.endPanel.hidden = !ended;
    els.newGame.hidden = mode === "daily";
    if (ended) {
      const won = gameStatus === "won";
      els.endKicker.textContent = won ? "挑战完成" : "本局结束";
      els.endTitle.textContent = won ? "猜中了！" : "差一点！";
      els.endCopy.textContent = won ? `你用了 ${guesses.length} 次猜出这道料理。` : `答案是「${answer.name}」。`;
    }
    closeSuggestions();
    els.message.textContent = "";
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
      detail.textContent = `${item.dlc} · ${item.cookware} · Lv.${item.level}`;
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
      els.message.textContent = "题库中没有这道料理，请从候选项中选择。";
      els.input.focus();
      return;
    }
    if (guesses.some((item) => item.id === guess.id)) {
      els.message.textContent = "这道料理已经猜过了，换一道试试。";
      els.input.select();
      return;
    }
    guesses.push(guess);
    els.input.value = "";
    els.message.textContent = "";
    if (guess.id === answer.id) finishGame(true);
    else if (guesses.length >= MAX_GUESSES) finishGame(false);
    else saveGame();
    render();
    if (gameStatus === "playing") els.input.focus();
  }
  function finishGame(won) {
    gameStatus = won ? "won" : "lost";
    saveGame();
    saveStats(won);
  }

  function shareText() {
    const title = mode === "daily" ? `TMI Wordle 料理篇 #${beijingDayNumber() + 1}` : "TMI Wordle 料理篇 · 无限模式";
    const score = gameStatus === "won" ? `${guesses.length}/${MAX_GUESSES}` : `X/${MAX_GUESSES}`;
    const keys = ["cookware", "price", "level", "ingredients", "time", "positiveTags", "negativeTags", "acquisition", "dlc"];
    const rows = guesses.map((guess) => {
      const states = comparisonFor(guess);
      return keys.map((key) => states[key] === "exact" ? "🟩" : states[key] === "near" ? "🟨" : "⬛").join("");
    });
    return `${title} ${score}\n\n${rows.join("\n")}\n\n你能猜出这道料理吗？`;
  }
  async function shareResult() {
    const text = shareText();
    try {
      if (navigator.share) await navigator.share({ text });
      else {
        await navigator.clipboard.writeText(text);
        showToast("结果已复制，且不会泄露答案");
      }
    } catch (error) {
      if (error?.name !== "AbortError") {
        const area = document.createElement("textarea");
        area.value = text;
        area.style.position = "fixed";
        area.style.opacity = "0";
        document.body.appendChild(area);
        area.select();
        document.execCommand("copy");
        area.remove();
        showToast("结果已复制，且不会泄露答案");
      }
    }
  }
  function showToast(text) {
    clearTimeout(toastTimer);
    els.toast.textContent = text;
    els.toast.classList.add("show");
    toastTimer = setTimeout(() => els.toast.classList.remove("show"), 2400);
  }

  els.form.addEventListener("submit", submitGuess);
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
  els.newGame.addEventListener("click", () => loadGame("infinite", true));
  els.share.addEventListener("click", shareResult);
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

  if (!DATA.length) {
    els.message.textContent = "题库为空，请先在 data.js 中添加料理数据。";
    els.input.disabled = true;
    els.submit.disabled = true;
  } else {
    loadGame("daily", false);
  }
})();
