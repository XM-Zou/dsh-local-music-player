<p align="center">
  <img src="icon.svg" width="88" height="88" alt="DSH Music Player icon">
</p>

<h1 align="center">DSH Music Player</h1>

<p align="center">
  A local-first music player and playlist manager for the DSH Web UI.
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@xm-zou/dsh-music-player"><img alt="npm" src="https://img.shields.io/npm/v/%40xm-zou%2Fdsh-music-player"></a>
  <a href="LICENSE"><img alt="license" src="https://img.shields.io/badge/license-MIT-blue"></a>
  <a href="https://github.com/XM-Zou/dsh-music-player/stargazers"><img alt="GitHub stars" src="https://img.shields.io/github/stars/XM-Zou/dsh-music-player?style=social"></a>
</p>

[中文](README.md) | English

## Features

- **Sidebar entry** — a Music button in the global left sidebar opens the player page.
- **Import local audio** — choose files with the picker or drop them onto the page.
- **Folder import** — choose a folder; its name becomes a new playlist and every audio file inside is imported into it. Existing library tracks are reused instead of duplicated.
- **Tag and title parsing** — reads ID3v2 title and cover art; artist and album are not read. When the filename contains `《…》`, the text inside the book-title marks becomes the song title and the remaining text is stored and displayed as song info. Without `《…》`, the ID3 title or filename is used.
- **Reparse song info** — tracks imported by older versions can be updated with the **Reparse song info** button at the top of the player, without re-importing them.
- **Playlists as categories** — create, rename, and delete playlists. A song can belong to several playlists, and playlists can be reordered by dragging them in the sidebar.
- **Playlist column** — the track list shows the playlists a song belongs to instead of its album; songs with no playlist show **Uncategorized**. The subtitle shows the song info.
- **Pinned Uncategorized playlist** — songs that are not in any playlist appear automatically in a pinned, non-deletable **Uncategorized** playlist.
- **Safe playlist deletion** — when you delete a playlist, keep its songs and move them to Uncategorized (the default), or delete the songs from the library too. Shared songs are flagged before deletion.
- **Full playback controls** — play/pause, previous/next, seek, volume, shuffle, and repeat off/all/one.
- **Background playback** — music keeps playing while you use other parts of DSH; it stops only when you pause it or exit DSH.
- **Search and recent view** — filter by title, song info, or filename; see the latest imports first.
- **Local-first storage** — audio blobs and playlists are stored in the browser's IndexedDB. Nothing is uploaded.
- **Backup & restore** — the backup button exports all audio, covers, and playlists as a ZIP, and can merge a ZIP back into the library. Existing songs are reused and same-name playlists are merged.
- **Host-native look** — uses DSH theme tokens, supports light and dark themes, and adapts to narrow windows.
- **Bilingual UI** — English and Simplified Chinese.

## Install

> npm is optional. You can install directly from GitHub or from a GitHub Release tarball.

### DSH plugin market

Once the plugin is listed, open **Plugins → Discover**, search for **Music player**, and install it.

### npm

```sh
dsh plugin --profile <profile> add @xm-zou/dsh-music-player
```

### From GitHub

```sh
dsh plugin --profile <profile> add github:XM-Zou/dsh-music-player
```

### GitHub Release (no npm account needed)

Download or reference the release tarball:

```sh
dsh plugin --profile <profile> add https://github.com/XM-Zou/dsh-music-player/releases/download/v0.6.0/xm-zou-dsh-music-player-0.6.0.tgz
```

Replace `v0.6.0` with the release you want to install.

### DSH Desktop

Open **Settings → Plugins**, add `@xm-zou/dsh-music-player` or `github:XM-Zou/dsh-music-player` as the package source, and enable it. Restart or refresh the page if the sidebar entry does not appear immediately.

## Usage

1. Click the **Music** icon in the left sidebar.
2. Click **Import music**, or drag audio files onto the page.
3. Or click **Import folder** to create a playlist from a folder in one step.
4. Create a playlist, then use the **+** button on a track to add it to one or more playlists.
5. Click a track to play it. Use the player bar for seeking, volume, shuffle, and repeat.

Songs that are not in any playlist appear in the pinned **Uncategorized** playlist. When you delete a playlist, the dialog keeps its songs by default; choose the delete option to remove them from the library and every playlist.

To back up, click the backup icon at the top right and choose **Export library**. To restore, choose **Import library**; the backup is merged into the current library.

## Data and privacy

- Imported audio and playlist data are stored in **IndexedDB** in the DSH browser origin.
- The plugin makes no network requests and has no telemetry.
- Clearing site data, changing the DSH port/origin, or using a different browser profile can make the library disappear from the plugin.
- Playback support for a format depends on the host's Chromium/Electron build. MP3, FLAC, WAV, M4A/AAC, OGG, and Opus are typical.

## Compatibility

- DSH `>= 0.2.1` (declared through `engines.dsh`).
- Tested on DSH `0.2.2-rc.1` with the Web UI.
- No build step and no runtime dependencies; the Client half is plain JavaScript.

## Development

```sh
npm run check        # manifest, locale, icon, id/patch consistency, translation keys
npm pack --dry-run   # inspect the npm tarball
```

Install the directory locally through the DSH plugin manager, or:

```sh
dsh plugin --profile <profile> add <absolute-path-to-this-directory>
```

When changing the package name, update all three places together:

- `package.json` → `name`
- `client.js` → `window.__ModuleLoader__.load({ id })`
- `cordis.patch.yml` → `name`

Keep `DB_NAME` and the `LS_*` storage keys stable so existing libraries and settings survive upgrades.

## Known limitations

- There is no cloud sync yet.
- ZIP backups do not support ZIP64; a single backup larger than 4 GB cannot be exported.
- Browser storage quota applies; very large libraries may fail to import.
- Playlist reordering is not implemented yet.
- The plugin is local to one browser origin; it does not share a library across devices.

## Contributing

Issues and pull requests are welcome. Please run `npm run check` before opening a PR, and keep the storage keys stable unless you provide a migration.

## License

[MIT](LICENSE) © 2026 XM-Zou
