# Releasing

This document describes how to publish a new version of DSH Music Player.

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

## 3. Publish to npm

The package is scoped as `@xm-zou/dsh-music-player`. The npm account must own the `xm-zou` scope (the npm username `xm-zou` can publish `@xm-zou/*` packages).

```sh
npm login
npm publish
```

`publishConfig.access` is already set to `public`, so `--access public` is not required, but it is harmless.

Verify:

```sh
npm view @xm-zou/dsh-music-player version
```

## 4. Create a GitHub Release

```sh
npm version patch
git push --follow-tags
```

Create a release for the new tag on GitHub and attach the tarball produced by `npm pack`. Add a short changelog entry from `CHANGELOG.md`.

## 5. Submit to the DSH market

The market catalog lives in <https://github.com/awesome-dsh-plugin/awesome-dsh-plugin>. Open a pull request **there**, not in the `dsh-market` application repository.

Suggested entry information:

- **Name:** DSH Music Player
- **Package:** `@xm-zou/dsh-music-player`
- **Repository:** <https://github.com/XM-Zou/dsh-music-player>
- **Description:** Local-first music player and playlist manager for the DSH Web UI.
- **DSH requirement:** `>=0.2.1`
- **Category:** Media / Music
- **Highlights:** local import, ID3 metadata, playlists, background playback, IndexedDB storage, zh/en UI.

The catalog README defines the exact entry format. The site and the in-app market pick the entry up automatically, usually within a day.

## 6. After publishing

- Install the npm package in a clean DSH profile and repeat the smoke test.
- Confirm the market card shows the correct title, description, icon, version, and DSH requirement.
- Check that the package tarball does not contain personal files, screenshots with private data, or local paths.
- Keep `DB_NAME` and the `LS_*` storage keys stable across releases unless you add a migration.
