<p align="center">
  <img src="icon.svg" width="88" height="88" alt="DSH 音乐播放器图标">
</p>

<h1 align="center">DSH 音乐播放器</h1>

<p align="center">
  面向 DSH Web UI 的本地优先音乐播放器与歌单管理插件。
</p>

<p align="center">
  <a href="LICENSE"><img alt="license" src="https://img.shields.io/badge/license-MIT-blue"></a>
  <a href="https://github.com/XM-Zou/dsh-music-player/stargazers"><img alt="GitHub stars" src="https://img.shields.io/github/stars/XM-Zou/dsh-music-player?style=social"></a>
</p>

中文 | [English](README.zh.md)

## 功能

- **左侧栏入口**：点击全局左侧栏的「音乐」图标进入播放器页面。
- **导入本地音乐**：点击「导入音乐」选择文件，或直接把音频拖到页面。
- **导入文件夹**：选择一个文件夹，文件夹名会自动变成新歌单名，里面的音频会一起导入；音乐库已有的歌曲会直接复用，不会重复导入。
- **读取标签与歌名**：读取 ID3v2 标题和封面；不识别歌手和专辑。文件名中有《》时，优先用书名号里的文字作为歌名，书名号外的文字作为歌曲信息；没有《》时用 ID3 标题或文件名。
- **重新解析歌曲信息**：旧版本导入的歌曲可以点顶部的「重新解析歌曲信息」，按新规则更新歌名和歌曲信息，不需要重新导入。
- **歌单分类**：新建、重命名、删除歌单；一首歌可以加入多个歌单；侧栏歌单可以拖动排序。
- **列表显示所在歌单**：歌曲列表不再显示专辑，而是显示这首歌所属的歌单；没有歌单时显示「未分类」。歌曲副标题显示歌曲信息。
- **置顶的「未分类」歌单**：没有加入任何歌单的歌曲会自动出现在这个置顶、不可删除的歌单里。
- **安全的歌单删除**：删除歌单时，默认保留歌曲并移到「未分类」，也可以选择同时从音乐库删除歌曲；与其他歌单共享的歌曲会在删除前提示。
- **完整播放控制**：播放/暂停、上一首/下一首、进度、音量、随机播放、顺序/列表循环/单曲循环。
- **后台播放**：切换到 DSH 其他界面时音乐继续播放；只有点击暂停或退出 DSH 才会停止。
- **搜索与最近添加**：按歌名、歌曲信息或文件名过滤；最近导入的歌曲优先显示。
- **本地优先存储**：音频 Blob 和歌单保存在浏览器 IndexedDB，不上传。
- **备份与恢复**：顶部备份按钮可以把所有音乐、封面和歌单导出为 ZIP，也可以从 ZIP 合并恢复；已存在的歌曲会复用，同名歌单会合并。
- **贴合宿主外观**：使用 DSH 主题 token，支持亮/暗主题，并适配窄窗口。
- **中英双语界面**。

## 安装

> npm 不是必须的。可以直接从 GitHub 或 GitHub Release 的 tarball 安装。

### DSH 插件市场

插件上架后，打开 **插件 → 发现（Discover）**，搜索 **Music player** 安装。

### npm

> npm 包发布后可用；未发布时请用下面的 GitHub Release 或 GitHub 源码安装。

```sh
dsh plugin --profile <profile> add dsh-local-music-player
```

### 从 GitHub 安装

```sh
dsh plugin --profile <profile> add github:XM-Zou/dsh-music-player
```

### GitHub Release（不需要 npm 账号）

下载或直接引用 Release 里的 tarball：

```sh
dsh plugin --profile <profile> add https://github.com/XM-Zou/dsh-music-player/releases/download/v0.7.0/dsh-local-music-player-0.7.0.tgz
```

把 `v0.7.0` 换成你想安装的版本即可。

### DSH Desktop

打开 **设置 → 插件**，把 `dsh-local-music-player` 或 `github:XM-Zou/dsh-music-player` 作为包来源添加并启用。如果左侧栏没有立即出现入口，刷新页面或重启应用。

## 使用

1. 点击左侧栏的「音乐」图标。
2. 点击「导入音乐」，或把音频文件拖到页面。
3. 也可以点「导入文件夹」，一步把整个文件夹变成新歌单。
4. 新建歌单，然后点歌曲行上的 **+**，把歌曲加入一个或多个歌单。
5. 点击歌曲播放；底部播放器支持进度、音量、随机和循环。

没有加入任何歌单的歌曲会自动出现在置顶的「未分类」歌单里。删除歌单时，默认保留歌曲；也可以选择同时从音乐库和所有歌单中删除。

需要备份时，点顶部右侧的备份图标，选择「导出音乐库」；恢复时选择「导入音乐库」，会合并到现有音乐库。

## 数据与隐私

- 导入的音频和歌单数据保存在 DSH 浏览器源下的 **IndexedDB**。
- 插件不发起网络请求，也没有遥测。
- 清除站点数据、DSH 端口/origin 变化、或换浏览器配置，都可能让插件里看不到原来的音乐库。
- 能否播放某种格式取决于宿主的 Chromium/Electron 解码能力；常见支持 MP3、FLAC、WAV、M4A/AAC、OGG、Opus。

### 备份格式

ZIP 内包含 `audio/`、`covers/` 和 `playlists.json`。音频按歌单分文件夹：

```text
audio/
  华语/
    《下个路口见》-李宇春-【Hi-Res无损】.mp3
  日语/
    ...
  未分类/
    ...
```

- 一首歌属于多个歌单时，会复制到每个歌单文件夹里，保证每个文件夹完整；ZIP 体积会相应变大。
- 没有歌单的歌曲放在 `未分类/`（英文界面为 `Uncategorized/`）。
- 空歌单也会生成空文件夹。
- `playlists.json` 是 UTF-8 JSON（带 BOM），每条歌曲只保留必要字段：
  - `id`：歌单引用用的内部 ID
  - `title` / `info`：歌名 / 歌曲信息
  - `duration`：时长（秒）
  - `fileName`：导入时的原始文件名
  - `audio`：ZIP 内的音频路径（共享歌曲指向第一个歌单文件夹）
  - `cover`：可选的封面路径

歌单只保留 `name` 和 `trackIds`。导入兼容旧版 v1 备份。

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

- 暂不支持云同步。
- ZIP 备份不支持 ZIP64，单个备份超过 4 GB 时无法导出。
- 受浏览器存储配额限制，特别大的音乐库可能导入失败。
- 暂不支持拖拽调整歌单顺序。
- 音乐库只存在于当前浏览器 origin，不跨设备共享。

## 贡献

欢迎提 issue 和 PR。提交 PR 前请先运行 `npm run check`；除非提供迁移，否则不要改存储键。

## 许可证

[MIT](LICENSE) © 2026 XM-Zou
