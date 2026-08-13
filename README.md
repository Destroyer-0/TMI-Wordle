# 夜雀食堂今天的饭

一款以料理或酒水属性为线索的中文每日猜谜游戏。猜料理和猜酒水默认均有六次机会，也可以自由调整猜测上限。

项目使用原生 HTML、CSS 和 JavaScript 编写，无框架、数据库或后端服务，可直接部署到 GitHub Pages。

项目仓库：[Destroyer-0/TMI-Wordle](https://github.com/Destroyer-0/TMI-Wordle)

## 游戏特色

- 每日挑战：以 2026 年 1 月 1 日为第 1 期，按北京时间每天 00:00 更新。
- 无限模式：随时随机开始新一局。
- 可切换“猜料理”和“猜酒水”，两类题目拥有独立答案、进度与统计。
- 猜测上限可在 1–20 次之间自由设置，料理和酒水默认均为 6 次。
- 输入名称时显示匹配候选，禁止提交题库外内容或重复猜测。
- 候选项和猜测结果会显示对应的料理或酒水图标。
- 比较厨具、价格、等级、食材、制作时间、正反 Tag、获得方式与 DLC。
- 绿色表示完全相同，黄色表示多值属性部分重合，灰色表示不同。
- 价格、等级和制作时间通过 `↑`、`↓` 提示答案更高或更低。
- 自动保存每日进度、无限模式进度和游戏统计，不同猜测次数独立结算。
- 提供玩法说明与游戏统计。
- 支持键盘操作、手机布局和基础无障碍功能。

## 题库

料理题库位于 [`data.js`](./data.js)，目前包含本体及 DLC1–DLC5 共 163 道料理；酒水题库位于 [`beverages.js`](./beverages.js)，包含 46 款酒水。

每条料理记录使用以下结构：

```js
{
  id: "recipe-001",
  name: "料理名称",
  cookware: "煮锅",
  price: 8,
  level: 1,
  ingredients: ["海苔"],
  time: 6,
  time60: 3.6,
  positiveTags: ["素", "家常"],
  negativeTags: ["重油"],
  acquisition: "初始拥有",
  dlc: "本体"
}
```

`id` 和料理名称应保持唯一。食材与 Tag 使用数组；没有反向 Tag 时使用空数组。制作时间会显示为 `time（time60）`，例如 `3（1.8）`。

料理与酒水图标会分别打包到 `foods-atlas.png` 和 `beverages-atlas.png`。更新题库或原始图标后，在项目目录重新运行：

```powershell
.\scripts\build-atlas.ps1
```

## 本地运行

在项目目录启动一个静态文件服务器：

```powershell
python -m http.server 8000
```

然后访问 `http://localhost:8000/`。

也可以直接打开 `index.html` 游玩。

## 项目结构

```text
.
├── index.html   页面结构
├── style.css    视觉样式与响应式布局
├── game.js      游戏逻辑与本地存档
├── data.js      料理题库
├── beverages.js 酒水题库
├── Foods/       料理图标（按料理名称索引）
├── Bev/         酒水图标（按酒水名称索引）
├── foods-atlas.png      料理图标合集
├── beverages-atlas.png  酒水图标合集
├── scripts/build-atlas.ps1  图标合集生成脚本
├── BG.png       页面背景
├── logo.png     网站图标
├── github-mark.svg  GitHub 仓库按钮图标
└── .nojekyll    GitHub Pages 静态发布标记
```

## 数据与版权说明

本项目为非官方粉丝制作项目，仅用于交流与娱乐，不隶属于或代表原作及其权利方。游戏名称、料理资料及相关内容的权利归各自权利方所有。
