# Changelog

All notable changes to this project are documented here.

The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.5.0] - 2026-11-07

### Changed

- Filename parsing now gives `《…》` priority: the text inside the book-title marks becomes the song title, and the remaining text is stored and displayed as song info.
- ID3 artist and album tags are no longer read. Existing tracks that still have an artist field use it as a legacy info fallback.
- The track subtitle, player bar, search, and media-session metadata now use song info instead of artist.

### Added

- A persistent song-info field for imported tracks, shown under the title and in the player bar.

## [0.4.0] - 2026-11-07

### Added

- Playlists can be reordered by dragging them in the sidebar; the order is persisted.
- The track list now shows the playlists a song belongs to instead of its album.

### Changed

- ID3 album tags are no longer read, and the album field is no longer displayed or searched.
- The audio element is hosted in a persistent root overlay so playback continues when the Music panel is closed and another DSH panel is opened.
- The GitHub README now displays Chinese by default; English is available as `README.zh.md`.

## [0.3.0] - 2026-11-06

### Added

- Pinned, non-deletable **Uncategorized** playlist for tracks that are not in any user playlist.
- Playlist deletion dialog with two choices: keep the songs and move them to Uncategorized (default), or delete the songs from the library too.
- Warning when deleting a playlist that shares songs with other playlists.
- Reserved-name validation for the Uncategorized playlist name.

### Changed

- Deleting a track removes it from every playlist and from the Uncategorized view.
- Deleting a playlist no longer removes its songs unless the delete option is explicitly chosen.

## [0.2.0] - 2026-11-06

### Added

- Folder import: choose a local folder and the folder name becomes a new playlist.
- Audio files inside the folder are imported recursively; tracks already in the library are reused instead of duplicated.
- Duplicate playlist names receive a numeric suffix (`Name (2)`, `Name (3)`, …).
- The new playlist is selected automatically after import.

## [0.1.0] - 2026-11-06

### Added

- Left-sidebar Music entry and a dedicated player panel.
- Local audio import through the file picker and drag-and-drop.
- ID3v2 title, artist, album, and cover extraction with filename fallback.
- Playlist creation, rename, deletion, and multi-playlist membership.
- Playback controls: play/pause, previous/next, seek, volume, shuffle, and repeat modes.
- Background playback across DSH panel changes.
- Search, recently-added view, empty states, and responsive layout.
- IndexedDB persistence for audio blobs and playlists.
- English and Simplified Chinese UI.
- Open-source packaging, MIT license, check script, and GitHub Actions CI.
