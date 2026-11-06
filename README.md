# DSH Music Player

A local-first music player for the DSH Web UI.

- A **Music** entry in the global left sidebar opens the player page.
- Import audio files with the picker or by dropping them onto the page.
- Read title, artist, album, and cover art from ID3v2 tags when present.
- Create playlists to categorize the library; a track can belong to several playlists.
- Play, pause, seek, change volume, shuffle, and cycle repeat modes.
- Audio blobs and playlist data are stored in the browser's IndexedDB. Nothing is uploaded.

Supported containers depend on the browser; MP3, FLAC, WAV, M4A/AAC, OGG, and Opus are typical.
