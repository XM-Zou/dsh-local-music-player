<p align="center">
  <img src="icon.svg" width="88" height="88" alt="DSH 音乐播放器图标">
</p>

<h1 align="center">DSH 音乐播放器</h1>

<p align="center">
  面向 DSH Web UI 的本地优先音乐播放器与歌单管理插件。
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@xm-zou/dsh-music-player"><img alt="npm" src="https://img.shields.io/npm/v/%40xm-zou%2Fdsh-music-player"></a>
  <a href="LICENSE"><img alt="license" src="https://img.shields.io/badge/license-MIT-blue"></a>
  <a href="https://github.com/XM-Zou/dsh-music-player/stargazers"><img alt="GitHub stars" src="https://img.shields.io/github/stars/XM-Zou/dsh-music-player?style=social"></a>
</p>

[English](README.md) | 中文

## 功能

- **左侧栏入口**：点击全局左侧栏的「音乐」图标进入播放器页面。
- **导入本地音乐**：点击「导入音乐」选择文件，或直接把音频拖到页面。
- **读取标签**：优先读取 ID3v2 的标题、歌手、专辑和封面；没有标签时用文件名回退。
- **歌单分类**：新建、重命名、删除歌单；一首歌可以加入多个歌单。
- **完整播放控制**：播放/暂停、上一首/下一首、进度、音量、随机播放、顺序/列表循环/单曲循环。
- **后台播放**：音频元素位于面板之上，切换到 DSH 其他页面时音乐继续播放。
- **搜索与最近添加**：按标题、歌手、专辑或文件名过滤；最近导入的歌曲优先显示。
- **本地优先存储**：音频 Blob 和歌单保存在浏览器 IndexedDB，不上传。
- **贴合宿主外观**：使用 DSH 主题 token，支持亮/暗主题，并适配窄窗口。
- **中英双语界面**。

## 安装

### DSH 插件市场

插件上架后，打开 **插件 → 发现（Discover）**，搜索 **Music player** 安装。

### npm

```sh
dsh plugin --profile <profile> add @xm-zou/dsh-music-player
```

### 从 GitHub 安装

```sh
dsh plugin --profile <profile> add github:XM-Zou/dsh-music-player
```

### DSH Desktop

打开 **设置 → 插件**，把 `@xm-zou/dsh-music-player` 作为包来源添加并启用。如果左侧栏没有立即出现入口，刷新页面或重启应用。

## 使用

1. 点击左侧栏的「音乐」图标。
2. 点击「导入音乐」，或把音频文件拖到页面。
3. 新建歌单，然后点歌曲行上的 **+**，把歌曲加入一个或多个歌单。
4. 点击歌曲播放；底部播放器支持进度、音量、随机和循环。

## 数据与隐私

- 导入的音频和歌单数据保存在 DSH 浏览器源下的 **IndexedDB**。
- 插件不发起网络请求，也没有遥测。
- 清除站点数据、DSH 端口/origin 变化、或换浏览器配置，都可能让插件里看不到原来的音乐库。
- 能否播放某种格式取决于宿主的 Chromium/Electron 解码能力；常见支持 MP3、FLAC、WAV、M4A/AAC、OGG、Opus。

## 兼容性

- DSH `>= 0.2.1`（通过 `engines.dsh` 声明）。
- 已在 DSH `0.2.2-rc.1` 的 Web UI 上测试。
- 无构建步骤、无运行时依赖；Client 半是纯 JavaScript。

## 开发

```sh
npm run check        # 校验清单、locale、图标、id/patch 一致性和翻译 key
npm pack --dry-run   # 查看 npm 包内容
```

本地开发时，可以通过 DSH 插件管理器安装这个目录，或：

```sh
dsh plugin --profile <profile> add <本目录绝对路径>
```

修改包名时，三处必须一起改：

- `package.json` → `name`
- `client.js` → `window.__ModuleLoader__.load({ id })`
- `cordis.patch.yml` → `name`

请保持 `DB_NAME` 和 `LS_*` 存储键不变，这样升级后已有的音乐库和设置不会丢。

## 已知限制

- 暂不支持音乐库导出/导入或云同步。
- 受浏览器存储配额限制，特别大的音乐库可能导入失败。
- 暂不支持拖拽调整歌单顺序。
- 音乐库只存在于当前浏览器 origin，不跨设备共享。

## 贡献

欢迎提 issue 和 PR。提交 PR 前请先运行 `npm run check`；除非提供迁移，否则不要改存储键。

## 许可证

[MIT](LICENSE) © 2026 XM-Zou
