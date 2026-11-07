# Security policy

## Supported versions

Security fixes are provided for the latest `0.1.x` release.

## Reporting a vulnerability

Please use GitHub's private vulnerability reporting on this repository:

<https://github.com/XM-Zou/dsh-local-music-player/security/advisories/new>

Do not open a public issue for a vulnerability before a fix is available.

## Data handling

- The plugin reads audio files only after the user selects or drops them.
- Audio blobs and playlist metadata are stored in the browser's IndexedDB.
- The plugin does not upload audio, send telemetry, or make network requests.
- Removing a track deletes its stored blob and removes it from all playlists.
