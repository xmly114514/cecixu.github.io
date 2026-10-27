# 🧩 北京版六年级英语 · 课堂游戏站（2024新课标）

面向北京版（一年级起点）六年级英语老师的课堂互动网页，**零外部依赖、纯静态、离线可用**，部署到 Cloudflare Pages 免费托管。

## 一、包含什么

| 功能 | 说明 | 对应教材 |
|---|---|---|
| 📇 单词闪卡 | 大字卡片 + 音标 + 中文 + 朗读，听写模式可隐藏英文 | 六上 / 六下全部单元 |
| 🖼️ 看图选词 | 看 emoji 图选英文（四选一），计分计连胜 | 全部单元 |
| 🔊 听音选词 | 浏览器语音朗读，选听到的单词 | 全部单元 |
| ✏️ 听音拼写 | 听读音用字母卡拼单词 | 全部单元 |
| 👔 职业工装连线 | 左边服装/装备 ↔ 右边职业，点击连线，SVG 画线 | 六上 U6 Our Clothes |
| 🃏 记忆翻牌 | 英文 ↔ 图片配对记忆 | 全部单元 |
| 🧱 句子拼装 | 按中文提示把单词拼成句子 | 全部单元 |
| 🎯 单词 Bingo | 老师抽词自动朗读，可打印 1–6 份卡片发给学生 | 全部单元 |
| 🎡 幸运转盘 | 转到单词就造句/朗读/抢答，可变速 | 全部单元（U7 生肖最合适） |

所有“道具”均为浏览器原生能力（Web Speech API 语音、SVG、Emoji），**不依赖任何 CDN / 第三方库**。

## 二、文件结构

```
bj-eng6-classroom/
├── index.html      # 页面结构
├── css/style.css   # 样式（大字号、投影友好）
├── js/data.js      # ★ 教材数据（单元、单词、句型、职业工装）——老师可随意增删改
├── js/app.js       # 导航、选书选单元、单词卡、TTS
└── js/games.js     # 全部游戏逻辑
```

## 三、部署到 Cloudflare Pages（二选一）

### 方式 A：直接拖拽上传（最快，不用装任何东西）
1. 打开 <https://dash.cloudflare.com/> 登录 → 左侧菜单「Workers & Pages」→「Create」→「Pages」→「Upload assets」。
2. 把整个 `bj-eng6-classroom` 文件夹（含 index.html、css、js）拖进去，点 Deploy。
3. 几十秒后得到一个 `https://xxxx.pages.dev` 网址，点开即用。以后更新内容：重新拖一次覆盖即可。

### 方式 B：Git 连接 / Wrangler CLI
```bash
# 方式 B-1：git 推送
cd bj-eng6-classroom
git init && git add . && git commit -m "first deploy"
# 在 Cloudflare Pages 里选 Create → Pages → 连接你的 Git 仓库，构建命令留空，输出目录留空(根目录)

# 方式 B-2：wrangler CLI
npm install -g wrangler
wrangler login
wrangler pages deploy . --project-name bj-eng6
```

> 纯静态站无需构建步骤，Cloudflare Pages 会自动托管根目录。

## 四、怎么改教材内容

所有数据都在 `js/data.js`，打开就能看懂：

- **改单词**：找到对应单元 `words` 数组，增删 `{ en:"english", ph:"/音标/", cn:"中文", emoji:"🐤" }`。
- **改句型**：改 `sentences` 数组 `{ en:"...", cn:"..." }`。
- **改职业连线**：改 `PROFESSIONS` 数组。
- **加单元**：复制一个单元对象粘贴即可。
- 保存后在浏览器里刷新（部署后需重新部署一次才生效）。

## 五、课堂使用提示

- **投影**：把窗口最大化，字号已为大号设计；Chrome / Edge 浏览器朗读效果最好（Windows/Mac 自带英语语音）。
- **听写模式**：单词卡勾选「听写模式」隐藏英文，只显示图和中文。
- **Bingo 打印**：点「打印卡片」会进入打印预览，可以选打印份数，一次打印多张发给学生。
- **听音功能无声音**：确认浏览器设置里允许语音、系统装有英语语音包；Chrome 首次需要点一次页面任意位置。
- 所有游戏数据跟随「册别 + 单元」选择器，切换单元自动重置题目。

## 六、本地预览（可选）

```bash
cd bj-eng6-classroom
python3 -m http.server 8080
# 浏览器打开 http://localhost:8080
```
