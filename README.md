# TMI Wordle

一个纯原生 HTML、CSS 和 JavaScript 编写的中文料理猜谜游戏，可直接部署到 GitHub Pages。题库目前包含本体及 DLC1–DLC5 共 163 道料理。

## 本地运行

推荐在项目目录启动静态服务器：

```powershell
python -m http.server 8000
```

然后访问 `http://localhost:8000/`。也可以直接双击 `index.html`，但浏览器可能会限制剪贴板分享功能，因此推荐使用静态服务器。

## 修改题库

编辑 `data.js` 中的 `window.TMI_RECIPES` 数组。每条数据必须包含：

```js
{
  id: "recipe-001",       // 唯一且稳定的标识
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

- `id` 不要重复，也不要随意修改，否则已保存的进度可能失效。
- 料理名称必须唯一；价格、等级和时间使用数字。
- 食材、正向 Tag 和反向 Tag 使用数组；没有反向 Tag 时填写空数组 `[]`。
- 制作时间在游戏内显示为 `time（time60）`，例如 `3（1.8）`。
- 游戏逻辑不会依赖任何料理名称，替换或扩充数组即可。

## 部署到 GitHub Pages

1. 把这些文件提交到 GitHub 仓库的默认分支。
2. 打开仓库 **Settings → Pages**。
3. 在 **Build and deployment** 中选择 **Deploy from a branch**。
4. 选择默认分支和 `/(root)`，保存。
5. 等待 GitHub Pages 发布，网站会位于 `https://用户名.github.io/仓库名/`。

项目中的样式、脚本和图标都使用相对路径，能够在仓库子路径中正常加载。`.nojekyll` 会让 GitHub Pages 直接按静态文件提供项目。

## 游戏规则

- 每日挑战以 2026 年 1 月 1 日为第 1 期，按北京时间每天 00:00 切换答案。
- 无限模式可随时开始随机新游戏。
- 每局最多 8 次，按厨具、价格、等级、食材、制作时间、正反 Tag、获得方式和 DLC 给出反馈。
- 多值字段黄色表示部分重合；数字后的箭头表示答案更高或更低。
- 每日进度、无限模式当前局和累计统计保存在浏览器 `localStorage` 中。
