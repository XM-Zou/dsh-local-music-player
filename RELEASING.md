# Releasing

This document describes how to publish a new version of DSH Music Player.

npm is optional. A GitHub Release is enough for users to install the plugin and for the DSH market to list it.

## 1. Before you publish

```sh
npm run check
npm pack --dry-run
```

Manual smoke test:

- Install the package in a clean DSH profile.
- Import MP3, FLAC, WAV, M4A, and OGG files.
- Create, rename, and delete playlists.
- Add a song to several playlists and remove it again.
- Play, pause, seek, change volume, shuffle, and cycle repeat modes.
- Reload the page and confirm the library and playlists persist.
- Check the light and dark themes, both locales, and a narrow window.
- Open the browser console and confirm there are no errors.

## 2. Push the repository to GitHub

Create a public repository named `dsh-music-player` under <https://github.com/XM-Zou>. Do not initialize it with a README, license, or `.gitignore`; this repository already contains them.

```sh
git remote add origin https://github.com/XM-Zou/dsh-music-player.git
git push -u origin main
```

Git Credential Manager will ask you to sign in the first time. Do not paste a token into a command or a chat.

## 3. Create a GitHub Release (no npm account required)

The repository includes `.github/workflows/release.yml`. Pushing a version tag builds the tarball and attaches it to a GitHub Release automatically.

```sh
git tag v0.3.0
git push --follow-tags
```

If GitHub Actions is unavailable, create the release manually:

```sh
npm pack
```

Then create a GitHub Release for the tag and attach the generated `.tgz` file. Users can install it with:

```sh
dsh plugin --profile <profile> add https://github.com/XM-Zou/dsh-music-player/releases/download/v0.3.0/xm-zou-dsh-music-player-0.3.0.tgz
```

They can also install from the repository directly:

```sh
dsh plugin --profile <profile> add github:XM-Zou/dsh-music-player
```

## 4. Optional: publish to npm

Only do this if you have an npm account. A GitHub Release is sufficient for distribution.

1. Create an account at <https://www.npmjs.com/signup>.
2. Use the username `xm-zou` if it is available; that matches the package scope `@xm-zou/dsh-music-player`.
3. Verify your email address and enable two-factor authentication.
4. Log in and publish:

```sh
npm login
npm publish
```

`publishConfig.access` is already set to `public`.

Verify:

```sh
npm view @xm-zou/dsh-music-player version
```

If your npm username is not `xm-zou`, rename the package to a scope you own, or use an available unscoped name. Update all three places together:

- `package.json` → `name`
- `client.js` → `window.__ModuleLoader__.load({ id })`
- `cordis.patch.yml` → `name`

## 5. Submit to the DSH market

The market catalog lives in <https://github.com/awesome-dsh-plugin/awesome-dsh-plugin>. Open a pull request **there**, not in the `dsh-market` application repository.

Add **one file** at `data/plugins/XM-Zou__dsh-music-player.yml`:

```yaml
url: https://github.com/XM-Zou/dsh-music-player
name: XM-Zou/dsh-music-player
category: ui
description:
  en: Local-first music player and playlist manager for the DSH Web UI.
  zh: 面向 DSH Web UI 的本地音乐播放器与歌单管理插件。
icon: https://raw.githubusercontent.com/XM-Zou/dsh-music-player/main/assets/icon-180.png
tarball: https://github.com/XM-Zou/dsh-music-player/releases/download/v0.3.0/xm-zou-dsh-music-player-0.3.0.tgz
```

Notes:

- The repository must have the `dsh-plugin` topic.
- The repository must be at least **1 day old**. A submission made earlier is held by the age gate; CI re-runs automatically after the repository ages, so no resubmission is needed.
- The `tarball` URL is pinned to the release tag on purpose. A `latest/download/` URL with a versioned filename would break on the next release.
- The market entry's `icon` must be a GitHub-hosted raster image; `assets/icon-180.png` is included for this purpose.
- The catalog README and `contributing.md` define the exact entry format and review rules. The site and the in-app market pick the entry up automatically after merge, usually within a day.

## 6. After publishing

- Install from the GitHub Release tarball (or npm, if published) in a clean DSH profile and repeat the smoke test.
- Confirm the market card shows the correct title, description, icon, version, and DSH requirement.
- Check that the package tarball does not contain personal files, screenshots with private data, or local paths.
- Keep `DB_NAME` and the `LS_*` storage keys stable across releases unless you add a migration.
