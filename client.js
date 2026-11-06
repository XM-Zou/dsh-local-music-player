window.__ModuleLoader__.load({
  id: '@xm-zou/dsh-music-player',
  factory(require) {
    const React = require('react');
    const h = React.createElement;

    const NS = 'dsh-music-player';
    const PANEL_ID = 'dsh-music-player';
    const DB_NAME = 'dsh-music-player';
    const DB_VERSION = 1;
    const LS_VOLUME = 'dsh-music-player:volume';
    const LS_SHUFFLE = 'dsh-music-player:shuffle';
    const LS_REPEAT = 'dsh-music-player:repeat';
    const LS_VIEW = 'dsh-music-player:view';
    const AUDIO_EXT = /\.(mp3|flac|wav|m4a|aac|ogg|oga|opus|wma|aiff?|alac|webm)$/i;

    const ZH = {
      nav: '音乐',
      title: '音乐',
      subtitle: '导入本地音乐，按歌单分类播放',
      import: '导入音乐',
      importFolder: '导入文件夹',
      importing: '正在导入 {done}/{total}…',
      searchPlaceholder: '搜索歌曲或歌曲信息',
      clear: '清空',
      allTracks: '全部音乐',
      recent: '最近添加',
      playlists: '歌单',
      newPlaylist: '新建歌单',
      dragToReorder: '拖动排序',
      noPlaylists: '还没有自定义歌单',
      noPlaylistsHint: '新建歌单，把喜欢的音乐分类整理。',
      uncategorized: '未分类',
      uncategorizedSub: '{count} 首未加入歌单的歌曲',
      uncategorizedEmpty: '没有未分类音乐',
      uncategorizedEmptyHint: '所有音乐都已加入歌单。',
      pinned: '已置顶，不可删除',
      localNote: '音乐仅保存在此浏览器',
      trackTitle: '标题',
      duration: '时长',
      actions: '操作',
      play: '播放',
      pause: '暂停',
      previous: '上一首',
      next: '下一首',
      shuffle: '随机播放',
      repeatOff: '顺序播放',
      repeatAll: '列表循环',
      repeatOne: '单曲循环',
      volume: '音量',
      seek: '播放进度',
      addToPlaylist: '添加到歌单',
      addTracks: '添加歌曲',
      addTracksHint: '从音乐库中选择歌曲加入这个歌单。',
      removeFromPlaylist: '从歌单移除',
      deleteTrack: '从音乐库删除',
      deleteTrackConfirm: '将从音乐库删除《{title}》，并从所有歌单移除。',
      delete: '删除',
      cancel: '取消',
      confirm: '确定',
      create: '创建',
      rename: '重命名',
      deletePlaylist: '删除歌单',
      deletePlaylistTitle: '删除歌单《{name}》',
      deletePlaylistQuestion: '这个歌单包含 {count} 首歌曲。请选择如何处理这些歌曲。',
      sharedTracksWarning: '其中 {count} 首还在其他歌单中；选择删除会一并移除。',
      keepTracksOption: '保留歌曲，移到「未分类」',
      keepTracksOptionHint: '未在其他歌单中的歌曲会进入未分类；仍在其他歌单中的歌曲会保留。',
      deleteTracksOption: '同时删除这些歌曲',
      deleteTracksOptionHint: '歌曲会从音乐库和所有歌单中删除，无法恢复。',
      moveAndDeletePlaylist: '移动并删除歌单',
      deletePlaylistAndTracks: '删除歌单和歌曲',
      playlistDeletedKeepTracks: '已删除歌单，歌曲已保留',
      playlistAndTracksDeleted: '已删除歌单和其中的歌曲',
      reservedPlaylistName: '“未分类”是保留名称，请换一个。',
      playlistName: '歌单名称',
      playlistNamePlaceholder: '例如：通勤、专注、睡前',
      createPlaylist: '创建歌单',
      trackCount: '{count} 首',
      playAll: '播放全部',
      nothingPlaying: '未在播放',
      nothingPlayingHint: '从音乐库选择一首歌',
      imported: '已导入 {count} 首歌曲',
      importSkipped: '跳过 {count} 个重复文件',
      importFailed: '{count} 个文件导入失败',
      playlistsUpdated: '已更新歌单',
      removedFromPlaylist: '已从歌单移除',
      deletedTrack: '已从音乐库删除',
      playlistCreated: '已创建歌单',
      playlistRenamed: '已重命名歌单',
      storageError: '无法保存到本地存储：{message}',
      loadError: '加载音乐库失败：{message}',
      playlistSub: '{count} 首歌曲',
      recentSub: '最近添加的 {count} 首歌曲',
      librarySub: '{count} 首歌曲 · {playlists} 个歌单',
      noResults: '没有找到匹配的歌曲',
      noResultsHint: '换个关键词试试。',
      emptyPlaylist: '这个歌单还是空的',
      emptyPlaylistHint: '从音乐库添加歌曲，或导入新的音乐。',
      noTracks: '还没有音乐',
      noTracksHint: '点击“导入音乐”，或把音频文件拖到这里。',
      loading: '正在加载音乐库…',
      close: '关闭',
      nameRequired: '请输入歌单名称',
      playlistExists: '已存在同名歌单',
      createAndAdd: '新建歌单并添加',
      noPlaylistToAdd: '还没有歌单，先创建一个吧。',
      allTracksAdded: '这个歌单已经包含全部歌曲',
      allTracksAddedHint: '导入新音乐后再来添加。',
      selectedCount: '已选择 {count} 首',
      confirmDelete: '确认删除',
      importEmpty: '没有可导入的音频文件',
      folderEmpty: '这个文件夹里没有音频文件',
      folderImportFailed: '文件夹里的音乐导入失败',
      folderPlaylistFallback: '文件夹歌单',
      folderPlaylistCreated: '已创建歌单《{name}》，包含 {count} 首歌曲',
      playError: '无法播放这首歌曲',
      dropTitle: '松开即可导入音乐',
      dropHint: '支持 MP3、FLAC、WAV、M4A、OGG 等格式',
      searchTracksPlaceholder: '搜索音乐库',
      addedCount: '已添加 {count} 首到歌单',
    };

    const EN = {
      nav: 'Music',
      title: 'Music',
      subtitle: 'Import local audio and organize it into playlists.',
      import: 'Import music',
      importFolder: 'Import folder',
      importing: 'Importing {done}/{total}…',
      searchPlaceholder: 'Search songs or info',
      clear: 'Clear',
      allTracks: 'All music',
      recent: 'Recently added',
      playlists: 'Playlists',
      newPlaylist: 'New playlist',
      dragToReorder: 'Drag to reorder',
      noPlaylists: 'No custom playlists yet',
      noPlaylistsHint: 'Create a playlist to group the music you like.',
      uncategorized: 'Uncategorized',
      uncategorizedSub: '{count} songs not in any playlist',
      uncategorizedEmpty: 'No uncategorized music',
      uncategorizedEmptyHint: 'Every song is in a playlist.',
      pinned: 'Pinned and cannot be deleted',
      localNote: 'Music is stored only in this browser',
      trackTitle: 'Title',
      duration: 'Time',
      actions: 'Actions',
      play: 'Play',
      pause: 'Pause',
      previous: 'Previous',
      next: 'Next',
      shuffle: 'Shuffle',
      repeatOff: 'Repeat off',
      repeatAll: 'Repeat all',
      repeatOne: 'Repeat one',
      volume: 'Volume',
      seek: 'Playback position',
      addToPlaylist: 'Add to playlist',
      addTracks: 'Add songs',
      addTracksHint: 'Choose songs from the library to add to this playlist.',
      removeFromPlaylist: 'Remove from playlist',
      deleteTrack: 'Delete from library',
      deleteTrackConfirm: 'Delete “{title}” from the library and remove it from every playlist.',
      delete: 'Delete',
      cancel: 'Cancel',
      confirm: 'Confirm',
      create: 'Create',
      rename: 'Rename',
      deletePlaylist: 'Delete playlist',
      deletePlaylistTitle: 'Delete playlist “{name}”',
      deletePlaylistQuestion: 'This playlist contains {count} songs. Choose what to do with them.',
      sharedTracksWarning: '{count} of them are also in other playlists; deleting will remove them there too.',
      keepTracksOption: 'Keep the songs and move them to Uncategorized',
      keepTracksOptionHint: 'Songs not in another playlist go to Uncategorized; songs still in another playlist stay there.',
      deleteTracksOption: 'Delete these songs too',
      deleteTracksOptionHint: 'Songs are removed from the library and every playlist. This cannot be undone.',
      moveAndDeletePlaylist: 'Move and delete playlist',
      deletePlaylistAndTracks: 'Delete playlist and songs',
      playlistDeletedKeepTracks: 'Playlist deleted; songs kept',
      playlistAndTracksDeleted: 'Playlist and its songs deleted',
      reservedPlaylistName: '“Uncategorized” is a reserved name. Choose another.',
      playlistName: 'Playlist name',
      playlistNamePlaceholder: 'For example: Commute, Focus, Bedtime',
      createPlaylist: 'Create playlist',
      trackCount: '{count} songs',
      playAll: 'Play all',
      nothingPlaying: 'Nothing playing',
      nothingPlayingHint: 'Choose a song from the library',
      imported: 'Imported {count} songs',
      importSkipped: 'Skipped {count} duplicate files',
      importFailed: '{count} files failed to import',
      playlistsUpdated: 'Playlists updated',
      removedFromPlaylist: 'Removed from playlist',
      deletedTrack: 'Deleted from library',
      playlistCreated: 'Playlist created',
      playlistRenamed: 'Playlist renamed',
      storageError: 'Could not save locally: {message}',
      loadError: 'Could not load the music library: {message}',
      playlistSub: '{count} songs',
      recentSub: '{count} recently added songs',
      librarySub: '{count} songs · {playlists} playlists',
      noResults: 'No matching songs',
      noResultsHint: 'Try a different keyword.',
      emptyPlaylist: 'This playlist is empty',
      emptyPlaylistHint: 'Add songs from the library or import new music.',
      noTracks: 'No music yet',
      noTracksHint: 'Choose “Import music”, or drop audio files here.',
      loading: 'Loading the music library…',
      close: 'Close',
      nameRequired: 'Enter a playlist name',
      playlistExists: 'A playlist with that name already exists',
      createAndAdd: 'Create a playlist and add',
      noPlaylistToAdd: 'No playlists yet. Create one first.',
      allTracksAdded: 'Every song is already in this playlist',
      allTracksAddedHint: 'Import new music and come back.',
      selectedCount: '{count} selected',
      confirmDelete: 'Confirm deletion',
      importEmpty: 'No audio files to import',
      folderEmpty: 'No audio files in this folder',
      folderImportFailed: 'Could not import the music in this folder',
      folderPlaylistFallback: 'Folder playlist',
      folderPlaylistCreated: 'Created playlist “{name}” with {count} songs',
      playError: 'This song cannot be played',
      dropTitle: 'Drop to import music',
      dropHint: 'Supports MP3, FLAC, WAV, M4A, OGG, and more',
      searchTracksPlaceholder: 'Search the library',
      addedCount: 'Added {count} songs to the playlist',
    };

    const TContext = React.createContext((key) => key);

    function useT() {
      return React.useContext(TContext);
    }

    function tr(t, key, vars) {
      let text;
      try {
        text = t(key);
      } catch {
        text = key;
      }
      if (text === undefined || text === null) text = key;
      if (vars) {
        for (const name of Object.keys(vars)) {
          text = String(text).split('{' + name + '}').join(String(vars[name]));
        }
      }
      return String(text);
    }

    function errorMessage(error) {
      if (error === undefined || error === null) return 'Unknown error';
      if (typeof error === 'string') return error;
      if (error.message) return String(error.message);
      return String(error);
    }

    function formatTime(value) {
      const total = Number.isFinite(value) && value > 0 ? Math.floor(value) : 0;
      const hours = Math.floor(total / 3600);
      const minutes = Math.floor((total % 3600) / 60);
      const seconds = total % 60;
      if (hours > 0) {
        return hours + ':' + String(minutes).padStart(2, '0') + ':' + String(seconds).padStart(2, '0');
      }
      return minutes + ':' + String(seconds).padStart(2, '0');
    }

    function hashString(value) {
      let hash = 0;
      const text = String(value || '');
      for (let i = 0; i < text.length; i += 1) {
        hash = ((hash * 31) + text.charCodeAt(i)) >>> 0;
      }
      return hash;
    }

    function playlistTint(name) {
      const hue = hashString(name) % 360;
      return 'linear-gradient(135deg, hsl(' + hue + ' 72% 58%), hsl(' + ((hue + 52) % 360) + ' 72% 46%))';
    }

    function parseTrackName(fileName, metadata) {
      let base = String(fileName || '').replace(/\.[^.]+$/, '').replace(/_/g, ' ').trim();
      base = base.replace(/^\d{1,2}[.\-]\s*/, '');
      const match = base.match(/《([^》]+)》/);
      if (match) {
        const title = match[1].trim();
        let info = (base.slice(0, match.index) + ' ' + base.slice(match.index + match[0].length)).trim();
        info = info
          .replace(/\s+/g, ' ')
          .replace(/^[\s\-–—|/]+/, '')
          .replace(/[\s\-–—|/]+$/, '')
          .trim();
        return { title: title || base, info };
      }
      const metadataTitle = String((metadata && metadata.title) || '').trim();
      return { title: metadataTitle || base, info: '' };
    }

    function folderNameFromFiles(files) {
      for (const file of files || []) {
        const relative = String(file.webkitRelativePath || '');
        const first = relative.split('/')[0];
        if (first) return first;
      }
      return '';
    }

    function makeUniquePlaylistName(base, playlists) {
      const root = String(base || '').trim().slice(0, 80);
      const names = new Set((playlists || []).map((playlist) => String(playlist.name || '').toLowerCase()));
      if (root && !names.has(root.toLowerCase())) return root;
      const stem = root || 'Playlist';
      for (let index = 2; index < 1000; index += 1) {
        const suffix = ' (' + index + ')';
        const candidate = stem.slice(0, Math.max(1, 80 - suffix.length)) + suffix;
        if (!names.has(candidate.toLowerCase())) return candidate;
      }
      return (stem.slice(0, 60) + ' ' + Date.now()).trim();
    }

    function isReservedPlaylistName(name, t) {
      const value = String(name || '').trim().toLowerCase();
      return value === tr(t, 'uncategorized').toLowerCase()
        || value === 'uncategorized'
        || value === '未分类';
    }

    function nextPlaylistOrder(playlists) {
      let max = -1;
      for (const playlist of playlists || []) {
        if (Number.isFinite(playlist.order)) max = Math.max(max, playlist.order);
      }
      return max + 1;
    }

    function fileKey(file) {
      return String(file.name || '') + '::' + String(file.size || 0) + '::' + String(file.lastModified || 0);
    }

    function isAudioFile(file) {
      if (!file) return false;
      if (typeof file.type === 'string' && file.type.indexOf('audio/') === 0) return true;
      return AUDIO_EXT.test(String(file.name || ''));
    }

    function makeId() {
      try {
        if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
          return crypto.randomUUID();
        }
      } catch {}
      return 'mp-' + Date.now().toString(36) + '-' + Math.random().toString(36).slice(2, 10);
    }

    function readPref(key, fallback) {
      try {
        const raw = window.localStorage.getItem(key);
        return raw === null ? fallback : JSON.parse(raw);
      } catch {
        return fallback;
      }
    }

    function writePref(key, value) {
      try {
        window.localStorage.setItem(key, JSON.stringify(value));
      } catch {}
    }

    function findNextIndex(queue, currentId, shuffle, repeat) {
      if (!queue || queue.length === 0) return null;
      const index = queue.indexOf(currentId);
      if (shuffle && queue.length > 1) {
        let next = index;
        while (next === index) next = Math.floor(Math.random() * queue.length);
        return next;
      }
      if (index < 0) return 0;
      if (index + 1 < queue.length) return index + 1;
      if (repeat === 'all') return 0;
      return null;
    }

    function readBytes(file, start, end) {
      return file.slice(start, end).arrayBuffer().then((buffer) => new Uint8Array(buffer));
    }

    function syncSafe(bytes, offset) {
      return ((bytes[offset] & 0x7f) << 21)
        | ((bytes[offset + 1] & 0x7f) << 14)
        | ((bytes[offset + 2] & 0x7f) << 7)
        | (bytes[offset + 3] & 0x7f);
    }

    function decodeTextFrame(data) {
      if (!data || data.length < 2) return '';
      const encoding = data[0];
      const body = data.subarray(1);
      let text = '';
      try {
        if (encoding === 0) {
          text = new TextDecoder('latin1').decode(body);
        } else if (encoding === 1) {
          if (body.length >= 2 && body[0] === 0xff && body[1] === 0xfe) {
            text = new TextDecoder('utf-16le').decode(body.subarray(2));
          } else if (body.length >= 2 && body[0] === 0xfe && body[1] === 0xff) {
            text = new TextDecoder('utf-16be').decode(body.subarray(2));
          } else {
            text = new TextDecoder('utf-16le').decode(body);
          }
        } else if (encoding === 2) {
          text = new TextDecoder('utf-16be').decode(body);
        } else {
          text = new TextDecoder('utf-8').decode(body);
        }
      } catch {
        text = '';
      }
      return text.replace(/\0+$/g, '').replace(/^\uFEFF/, '').trim();
    }

    function decodeApic(data) {
      if (!data || data.length < 5) return null;
      const encoding = data[0];
      let offset = 1;
      let mimeEnd = offset;
      while (mimeEnd < data.length && data[mimeEnd] !== 0) mimeEnd += 1;
      const mime = new TextDecoder('latin1').decode(data.subarray(offset, mimeEnd)) || 'image/jpeg';
      offset = mimeEnd + 1;
      offset += 1;
      if (encoding === 1 || encoding === 2) {
        while (offset + 1 < data.length && !(data[offset] === 0 && data[offset + 1] === 0)) offset += 2;
        offset += 2;
      } else {
        while (offset < data.length && data[offset] !== 0) offset += 1;
        offset += 1;
      }
      if (offset >= data.length) return null;
      const image = data.subarray(offset);
      if (image.length === 0) return null;
      const type = mime.indexOf('image/') === 0 ? mime : 'image/jpeg';
      return new Blob([image], { type });
    }

    async function readId3(file) {
      try {
        const head = await readBytes(file, 0, 10);
        if (head.length < 10 || head[0] !== 0x49 || head[1] !== 0x44 || head[2] !== 0x33) return {};
        const major = head[3];
        const tagSize = syncSafe(head, 6);
        if (!tagSize) return {};
        const bytes = await readBytes(file, 0, Math.min(tagSize + 10, 4 * 1024 * 1024));
        const result = {};
        let offset = 10;
        while (offset + 10 <= bytes.length) {
          const id = String.fromCharCode(bytes[offset], bytes[offset + 1], bytes[offset + 2], bytes[offset + 3]);
          if (!/^[A-Z0-9]{4}$/.test(id)) break;
          const size = major === 4
            ? syncSafe(bytes, offset + 4)
            : (((bytes[offset + 4] << 24) | (bytes[offset + 5] << 16) | (bytes[offset + 6] << 8) | bytes[offset + 7]) >>> 0);
          if (size <= 0 || offset + 10 + size > bytes.length) break;
          const data = bytes.subarray(offset + 10, offset + 10 + size);
          if (id === 'TIT2') result.title = decodeTextFrame(data);
          else if (id === 'APIC' && !result.cover) result.cover = decodeApic(data);
          offset += 10 + size;
        }
        return result;
      } catch {
        return {};
      }
    }

    function readAudioDuration(file) {
      return new Promise((resolve) => {
        const url = URL.createObjectURL(file);
        const audio = document.createElement('audio');
        let settled = false;
        let timer = 0;
        const finish = (value) => {
          if (settled) return;
          settled = true;
          window.clearTimeout(timer);
          audio.removeAttribute('src');
          try {
            audio.load();
          } catch {}
          URL.revokeObjectURL(url);
          resolve(value);
        };
        timer = window.setTimeout(() => finish(0), 7000);
        audio.preload = 'metadata';
        audio.onloadedmetadata = () => finish(Number.isFinite(audio.duration) ? audio.duration : 0);
        audio.onerror = () => finish(0);
        audio.src = url;
      });
    }

    let databasePromise = null;

    function openDatabase() {
      if (databasePromise) return databasePromise;
      databasePromise = new Promise((resolve, reject) => {
        if (typeof indexedDB === 'undefined') {
          reject(new Error('IndexedDB is unavailable'));
          return;
        }
        const request = indexedDB.open(DB_NAME, DB_VERSION);
        request.onupgradeneeded = () => {
          const db = request.result;
          if (!db.objectStoreNames.contains('tracks')) db.createObjectStore('tracks', { keyPath: 'id' });
          if (!db.objectStoreNames.contains('playlists')) db.createObjectStore('playlists', { keyPath: 'id' });
        };
        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(request.error || new Error('IndexedDB could not be opened'));
        request.onblocked = () => reject(new Error('IndexedDB is blocked by another tab'));
      });
      return databasePromise;
    }

    function requestResult(request) {
      return new Promise((resolve, reject) => {
        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(request.error || new Error('IndexedDB request failed'));
      });
    }

    function transactionDone(transaction) {
      return new Promise((resolve, reject) => {
        transaction.oncomplete = () => resolve();
        transaction.onerror = () => reject(transaction.error || new Error('IndexedDB transaction failed'));
        transaction.onabort = () => reject(transaction.error || new Error('IndexedDB transaction aborted'));
      });
    }

    async function loadTracks() {
      const db = await openDatabase();
      const transaction = db.transaction('tracks', 'readonly');
      return requestResult(transaction.objectStore('tracks').getAll());
    }

    async function loadPlaylists() {
      const db = await openDatabase();
      const transaction = db.transaction('playlists', 'readonly');
      return requestResult(transaction.objectStore('playlists').getAll());
    }

    async function putTrackRecord(track) {
      const db = await openDatabase();
      const transaction = db.transaction('tracks', 'readwrite');
      transaction.objectStore('tracks').put(track);
      await transactionDone(transaction);
    }

    async function putPlaylistRecord(playlist) {
      const db = await openDatabase();
      const transaction = db.transaction('playlists', 'readwrite');
      transaction.objectStore('playlists').put(playlist);
      await transactionDone(transaction);
    }

    async function putPlaylistRecords(playlists) {
      const db = await openDatabase();
      const transaction = db.transaction('playlists', 'readwrite');
      const store = transaction.objectStore('playlists');
      for (const playlist of playlists) store.put(playlist);
      await transactionDone(transaction);
    }

    async function deletePlaylistRecord(id) {
      const db = await openDatabase();
      const transaction = db.transaction('playlists', 'readwrite');
      transaction.objectStore('playlists').delete(id);
      await transactionDone(transaction);
    }

    async function deleteTrackRecord(trackId, playlists) {
      const db = await openDatabase();
      const transaction = db.transaction(['tracks', 'playlists'], 'readwrite');
      transaction.objectStore('tracks').delete(trackId);
      const store = transaction.objectStore('playlists');
      for (const playlist of playlists || []) {
        if (playlist.trackIds.indexOf(trackId) >= 0) {
          store.put({ ...playlist, trackIds: playlist.trackIds.filter((id) => id !== trackId) });
        }
      }
      await transactionDone(transaction);
    }

    async function deletePlaylistAndTracksRecord(playlistId, trackIds, playlists) {
      const db = await openDatabase();
      const transaction = db.transaction(['tracks', 'playlists'], 'readwrite');
      const trackStore = transaction.objectStore('tracks');
      const playlistStore = transaction.objectStore('playlists');
      const removing = new Set(trackIds || []);

      for (const id of removing) trackStore.delete(id);
      for (const playlist of playlists || []) {
        if (playlist.id === playlistId) continue;
        if (playlist.trackIds.some((id) => removing.has(id))) {
          playlistStore.put({ ...playlist, trackIds: playlist.trackIds.filter((id) => !removing.has(id)) });
        }
      }
      playlistStore.delete(playlistId);
      await transactionDone(transaction);
    }

    function Glyph({ size = 16, viewBox = '0 0 16 16', children, ...rest }) {
      return h('svg', {
        viewBox,
        width: size,
        height: size,
        fill: 'none',
        stroke: 'currentColor',
        strokeWidth: 1.6,
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        'aria-hidden': 'true',
        focusable: 'false',
        ...rest,
      }, children);
    }

    function MusicNoteIcon({ size = 16, active, ...rest }) {
      return h('svg', {
        viewBox: '0 0 16 16',
        width: size,
        height: size,
        fill: 'currentColor',
        'aria-hidden': 'true',
        focusable: 'false',
        ...rest,
      }, h('path', { d: 'M13 2.1a.8.8 0 0 0-1-.6L5.3 3.2a.8.8 0 0 0-.6.8v6.2a2.6 2.6 0 1 0 1.5 2.4V5.2l5.5-1.3v3.4a2.6 2.6 0 1 0 1.5 2.4V2.1Z' }));
    }

    function PlayIcon({ size = 16, ...rest }) {
      return h(Glyph, { size, ...rest }, h('path', { d: 'M4.5 2.7a.8.8 0 0 1 1.2-.7l7 5.3a.8.8 0 0 1 0 1.4l-7 5.3a.8.8 0 0 1-1.2-.7V2.7Z', fill: 'currentColor', stroke: 'none' }));
    }

    function PauseIcon({ size = 16, ...rest }) {
      return h(Glyph, { size, ...rest },
        h('rect', { x: 4, y: 3, width: 3, height: 10, rx: 1, fill: 'currentColor', stroke: 'none' }),
        h('rect', { x: 9, y: 3, width: 3, height: 10, rx: 1, fill: 'currentColor', stroke: 'none' }));
    }

    function PrevIcon({ size = 16, ...rest }) {
      return h(Glyph, { size, ...rest },
        h('path', { d: 'M3.5 3.2v9.6' }),
        h('path', { d: 'M13 3.6 6 8l7 4.4V3.6Z', fill: 'currentColor', stroke: 'none' }));
    }

    function NextIcon({ size = 16, ...rest }) {
      return h(Glyph, { size, ...rest },
        h('path', { d: 'M12.5 3.2v9.6' }),
        h('path', { d: 'M3 3.6 10 8l-7 4.4V3.6Z', fill: 'currentColor', stroke: 'none' }));
    }

    function ShuffleIcon({ size = 16, ...rest }) {
      return h(Glyph, { size, ...rest },
        h('path', { d: 'M2 4h2.3c1.2 0 2.3.6 3 1.6l2.8 4.3c.7 1 1.8 1.6 3 1.6H15' }),
        h('path', { d: 'M2 12h2.3c1.2 0 2.3-.6 3-1.6l2.8-4.3c.7-1 1.8-1.6 3-1.6H15' }),
        h('path', { d: 'm13 2 2 2-2 2M13 10l2 2-2 2' }));
    }

    function RepeatIcon({ size = 16, ...rest }) {
      return h(Glyph, { size, ...rest },
        h('path', { d: 'M3 7V6a3 3 0 0 1 3-3h6' }),
        h('path', { d: 'M13 9v1a3 3 0 0 1-3 3H4' }),
        h('path', { d: 'm10 1 2 2-2 2M6 13l-2-2 2-2' }));
    }

    function PlusIcon({ size = 16, ...rest }) {
      return h(Glyph, { size, ...rest }, h('path', { d: 'M8 3v10M3 8h10' }));
    }

    function SearchIcon({ size = 16, ...rest }) {
      return h(Glyph, { size, ...rest },
        h('circle', { cx: 7, cy: 7, r: 4.2 }),
        h('path', { d: 'm10.2 10.2 3 3' }));
    }

    function TrashIcon({ size = 16, ...rest }) {
      return h(Glyph, { size, ...rest },
        h('path', { d: 'M3 4.5h10M6.5 4.5V3h3v1.5M4.5 4.5l.7 9h5.6l.7-9' }),
        h('path', { d: 'M6.5 7v4M9.5 7v4' }));
    }

    function CloseIcon({ size = 16, ...rest }) {
      return h(Glyph, { size, ...rest }, h('path', { d: 'm4 4 8 8M12 4l-8 8' }));
    }

    function VolumeIcon({ size = 16, ...rest }) {
      return h(Glyph, { size, ...rest },
        h('path', { d: 'M3 6.5h2L8.5 3v10L5 9.5H3v-3Z', fill: 'currentColor', stroke: 'none' }),
        h('path', { d: 'M11 5.5a3.5 3.5 0 0 1 0 5M12.8 3.7a6 6 0 0 1 0 8.6' }));
    }

    function CheckIcon({ size = 16, ...rest }) {
      return h(Glyph, { size, ...rest }, h('path', { d: 'm3.5 8.5 3 3 6-7' }));
    }

    function LibraryIcon({ size = 16, ...rest }) {
      return h(Glyph, { size, ...rest },
        h('rect', { x: 3, y: 3, width: 3.6, height: 10, rx: 1 }),
        h('rect', { x: 9.4, y: 3, width: 3.6, height: 10, rx: 1 }));
    }

    function ClockIcon({ size = 16, ...rest }) {
      return h(Glyph, { size, ...rest },
        h('circle', { cx: 8, cy: 8, r: 5.4 }),
        h('path', { d: 'M8 5v3.3l2.2 1.3' }));
    }

    function FolderIcon({ size = 16, ...rest }) {
      return h(Glyph, { size, ...rest }, h('path', { d: 'M2.5 4.5A1.5 1.5 0 0 1 4 3h2.2c.4 0 .8.2 1 .5l.8.9H12a1.5 1.5 0 0 1 1.5 1.5v6A1.5 1.5 0 0 1 12 13.5H4A1.5 1.5 0 0 1 2.5 12V4.5Z' }));
    }

    function ImportIcon({ size = 16, ...rest }) {
      return h(Glyph, { size, ...rest },
        h('path', { d: 'M8 2v7' }),
        h('path', { d: 'm5 6.5 3 3 3-3' }),
        h('path', { d: 'M3 11.5v1A1.5 1.5 0 0 0 4.5 14h7a1.5 1.5 0 0 0 1.5-1.5v-1' }));
    }

    function InboxIcon({ size = 16, ...rest }) {
      return h(Glyph, { size, ...rest },
        h('path', { d: 'M2.5 9.5h3l1 2h3l1-2h3' }),
        h('path', { d: 'M3.2 3.5h9.6l1.2 6v3A1.5 1.5 0 0 1 12.5 14h-9A1.5 1.5 0 0 1 2 12.5v-3l1.2-6Z' }));
    }

    function PinIcon({ size = 16, ...rest }) {
      return h(Glyph, { size, ...rest }, h('path', { d: 'M6 2h4l-.6 4 2.1 2.1V9H8.6v5h-1V9H4.5V8.1L6.6 6 6 2Z' }));
    }

    function GripIcon({ size = 16, ...rest }) {
      return h('svg', {
        viewBox: '0 0 16 16',
        width: size,
        height: size,
        fill: 'currentColor',
        'aria-hidden': 'true',
        focusable: 'false',
        ...rest,
      },
        h('circle', { cx: 6, cy: 4, r: 1.1 }),
        h('circle', { cx: 10, cy: 4, r: 1.1 }),
        h('circle', { cx: 6, cy: 8, r: 1.1 }),
        h('circle', { cx: 10, cy: 8, r: 1.1 }),
        h('circle', { cx: 6, cy: 12, r: 1.1 }),
        h('circle', { cx: 10, cy: 12, r: 1.1 })
      );
    }

    function Equalizer() {
      return h('span', { className: 'mp-eq', 'aria-hidden': 'true' }, h('i'), h('i'), h('i'));
    }

    const CSS = `
.mp-page {
  position: relative;
  box-sizing: border-box;
  height: 100%;
  min-height: 0;
  display: flex;
  flex-direction: column;
  padding: calc(22px + var(--dsh-frame-top-clearance, 0px)) clamp(16px, 3vw, 32px) 14px;
  color: var(--dsw-alias-label-primary, #1f2328);
  background: var(--dsw-alias-bg-base, #ffffff);
  font-family: inherit;
  overflow: hidden;
}

.mp-header {
  flex: none;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
  padding-bottom: 14px;
}

.mp-title-row { display: flex; align-items: center; gap: 12px; min-width: 0; }

.mp-logo {
  width: 44px;
  height: 44px;
  border-radius: 14px;
  display: grid;
  place-items: center;
  color: #ffffff;
  background: linear-gradient(135deg, #7c5cff, #b44dff 55%, #ff6b9d);
  box-shadow: 0 8px 20px rgb(124 92 255 / 28%);
  flex: none;
}

.mp-title { margin: 0; font-size: 20px; line-height: 26px; font-weight: 650; letter-spacing: -0.01em; }
.mp-subtitle { margin: 3px 0 0; font-size: 12.5px; line-height: 18px; color: var(--dsw-alias-label-tertiary, #8b93a1); }
.mp-header-actions { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; }

.mp-search { position: relative; display: flex; align-items: center; }
.mp-search > svg { position: absolute; left: 10px; color: var(--dsw-alias-label-tertiary, #8b93a1); pointer-events: none; }
.mp-search input {
  width: 220px;
  max-width: 42vw;
  height: 34px;
  padding: 0 30px 0 32px;
  border-radius: 10px;
  border: 1px solid var(--dsw-alias-border-l1, #e5e7eb);
  background: var(--dsw-alias-bg-layer-1, #ffffff);
  color: var(--dsw-alias-label-primary, #1f2328);
  font: inherit;
  font-size: 13px;
  outline: none;
}
.mp-search input::placeholder { color: var(--dsw-alias-label-tertiary, #8b93a1); }
.mp-search input:focus { border-color: var(--dsw-alias-brand-primary, #4f6ef7); outline: 2px solid var(--dsw-alias-brand-primary, #4f6ef7); outline-offset: 0; }
.mp-search-clear {
  position: absolute;
  right: 6px;
  width: 22px;
  height: 22px;
  border: none;
  border-radius: 6px;
  background: transparent;
  color: var(--dsw-alias-label-tertiary, #8b93a1);
  display: grid;
  place-items: center;
  cursor: pointer;
}
.mp-search-clear:hover { background: var(--dsw-alias-interactive-bg-hover, #2631480f); color: var(--dsw-alias-label-primary, #1f2328); }

.mp-btn {
  height: 34px;
  padding: 0 14px;
  border-radius: 10px;
  border: 1px solid var(--dsw-alias-border-l1, #e5e7eb);
  background: var(--dsw-alias-bg-layer-1, #ffffff);
  color: var(--dsw-alias-label-primary, #1f2328);
  font: inherit;
  font-size: 13px;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  gap: 7px;
  cursor: pointer;
  white-space: nowrap;
  transition: background-color .12s, border-color .12s, transform .12s;
}
.mp-btn:hover { background: var(--dsw-alias-interactive-bg-hover, #2631480f); }
.mp-btn:active { transform: translateY(1px); }
.mp-btn:disabled { opacity: .45; cursor: not-allowed; transform: none; }
.mp-btn-primary { background: var(--dsw-alias-brand-primary, #4f6ef7); border-color: transparent; color: var(--dsw-alias-brand-text, #ffffff); }
.mp-btn-primary:hover { background: var(--dsw-alias-brand-primary, #4f6ef7); filter: brightness(1.08); }
.mp-btn-danger { color: var(--dsw-alias-state-error-primary, #d14343); }
.mp-btn-danger-fill { background: var(--dsw-alias-state-error-primary, #d14343); border-color: transparent; color: #ffffff; }
.mp-btn-danger-fill:hover { background: var(--dsw-alias-state-error-primary, #d14343); filter: brightness(1.08); }
.mp-btn-small { height: 30px; padding: 0 10px; font-size: 12px; }

.mp-body { flex: 1; min-height: 0; display: flex; gap: 16px; padding-top: 2px; }

.mp-sidebar {
  width: 210px;
  flex: none;
  display: flex;
  flex-direction: column;
  min-height: 0;
  border: 1px solid var(--dsw-alias-border-l1, #e5e7eb);
  border-radius: 14px;
  background: var(--dsw-alias-bg-layer-1, #ffffff);
  overflow: hidden;
}

.mp-nav { padding: 10px; display: flex; flex-direction: column; gap: 2px; flex: none; }

.mp-nav-item {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  height: 36px;
  padding: 0 10px;
  border-radius: 9px;
  border: none;
  background: transparent;
  color: var(--dsw-alias-label-secondary, #5c6570);
  font: inherit;
  font-size: 13px;
  cursor: pointer;
  text-align: left;
}
.mp-nav-item:hover { background: var(--dsw-alias-interactive-bg-hover, #2631480f); color: var(--dsw-alias-label-primary, #1f2328); }
.mp-nav-item.mp-on { background: var(--dsw-alias-interactive-bg-active, #2631481a); color: var(--dsw-alias-label-primary, #1f2328); font-weight: 600; }
.mp-nav-count { margin-left: auto; font-size: 11.5px; color: var(--dsw-alias-label-tertiary, #8b93a1); font-variant-numeric: tabular-nums; }

.mp-section-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 12px 6px;
  color: var(--dsw-alias-label-tertiary, #8b93a1);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: .06em;
  text-transform: uppercase;
  flex: none;
}

.mp-mini-btn {
  width: 24px;
  height: 24px;
  border: none;
  border-radius: 7px;
  background: transparent;
  color: var(--dsw-alias-label-secondary, #5c6570);
  display: grid;
  place-items: center;
  cursor: pointer;
}
.mp-mini-btn:hover { background: var(--dsw-alias-interactive-bg-hover, #2631480f); color: var(--dsw-alias-label-primary, #1f2328); }

.mp-playlists { flex: 1; overflow: auto; padding: 0 8px 10px; display: flex; flex-direction: column; gap: 2px; min-height: 0; }

.mp-playlist {
  display: flex;
  align-items: center;
  gap: 9px;
  min-height: 36px;
  padding: 0 8px;
  border-radius: 9px;
  border: none;
  background: transparent;
  color: var(--dsw-alias-label-secondary, #5c6570);
  font: inherit;
  font-size: 13px;
  cursor: pointer;
  text-align: left;
  flex: none;
}
.mp-playlist:hover { background: var(--dsw-alias-interactive-bg-hover, #2631480f); color: var(--dsw-alias-label-primary, #1f2328); }
.mp-playlist.mp-on { background: var(--dsw-alias-interactive-bg-active, #2631481a); color: var(--dsw-alias-label-primary, #1f2328); font-weight: 600; }
.mp-playlist-dot {
  width: 24px;
  height: 24px;
  border-radius: 7px;
  display: grid;
  place-items: center;
  color: #ffffff;
  flex: none;
}
.mp-playlist-name { min-width: 0; flex: 1; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.mp-playlist-count { font-size: 11px; color: var(--dsw-alias-label-tertiary, #8b93a1); font-variant-numeric: tabular-nums; flex: none; }
.mp-playlist.mp-pinned {
  margin-bottom: 4px;
  border: 1px solid var(--dsw-alias-border-l1, #e5e7eb);
  background: var(--dsw-alias-bg-layer-2, #f3f4f6);
}
.mp-playlist.mp-pinned.mp-on {
  border-color: var(--dsw-alias-brand-primary, #4f6ef7);
  background: var(--dsw-alias-interactive-bg-active, #2631481a);
}
.mp-pinned-dot {
  background: var(--dsw-alias-bg-layer-1, #ffffff);
  color: var(--dsw-alias-brand-primary, #4f6ef7);
  border: 1px solid var(--dsw-alias-border-l1, #e5e7eb);
}
.mp-playlist-pin { display: inline-flex; align-items: center; color: var(--dsw-alias-brand-primary, #4f6ef7); flex: none; }
.mp-playlist.mp-draggable { cursor: grab; }
.mp-playlist.mp-draggable:active { cursor: grabbing; }
.mp-playlist.mp-drop-target { outline: 2px solid var(--dsw-alias-brand-primary, #4f6ef7); outline-offset: -2px; }
.mp-playlist-grip { display: inline-flex; align-items: center; color: var(--dsw-alias-label-tertiary, #8b93a1); opacity: 0; flex: none; transition: opacity .12s; }
.mp-playlist:hover .mp-playlist-grip { opacity: 1; }

.mp-side-empty { padding: 8px 10px 12px; color: var(--dsw-alias-label-tertiary, #8b93a1); font-size: 12px; line-height: 18px; }
.mp-side-empty p { margin: 0 0 3px; }
.mp-side-empty p:first-child { color: var(--dsw-alias-label-secondary, #5c6570); font-weight: 500; }
.mp-side-foot { flex: none; padding: 10px 12px; border-top: 1px solid var(--dsw-alias-border-l1, #e5e7eb); color: var(--dsw-alias-label-tertiary, #8b93a1); font-size: 11px; line-height: 16px; }

.mp-content {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  border: 1px solid var(--dsw-alias-border-l1, #e5e7eb);
  border-radius: 14px;
  background: var(--dsw-alias-bg-layer-1, #ffffff);
  overflow: hidden;
}

.mp-content-head {
  flex: none;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  padding: 16px 18px 12px;
  border-bottom: 1px solid var(--dsw-alias-border-l1, #e5e7eb);
}
.mp-content-title { margin: 0; font-size: 16px; line-height: 22px; font-weight: 650; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.mp-content-sub { margin: 4px 0 0; font-size: 12px; line-height: 17px; color: var(--dsw-alias-label-tertiary, #8b93a1); }
.mp-content-actions { display: flex; gap: 6px; flex-wrap: wrap; justify-content: flex-end; flex: none; }

.mp-track-scroll { flex: 1; overflow: auto; min-height: 0; }
.mp-track-head,
.mp-track-row {
  display: grid;
  grid-template-columns: 34px minmax(0, 1.7fr) minmax(0, 1fr) 64px 76px;
  align-items: center;
  gap: 10px;
  padding: 0 16px;
}
.mp-track-head {
  position: sticky;
  top: 0;
  z-index: 1;
  height: 34px;
  font-size: 11px;
  color: var(--dsw-alias-label-tertiary, #8b93a1);
  border-bottom: 1px solid var(--dsw-alias-border-l1, #e5e7eb);
  background: var(--dsw-alias-bg-layer-1, #ffffff);
}
.mp-track-row {
  min-height: 56px;
  border-bottom: 1px solid var(--dsw-alias-border-l1, #e5e7eb);
  cursor: pointer;
}
.mp-track-row:hover { background: var(--dsw-alias-interactive-bg-hover, #2631480f); }
.mp-track-row.mp-current { background: var(--dsw-alias-interactive-bg-active, #2631481a); }

.mp-track-index { position: relative; display: flex; align-items: center; justify-content: center; color: var(--dsw-alias-label-tertiary, #8b93a1); font-size: 12px; font-variant-numeric: tabular-nums; }
.mp-row-num { transition: opacity .12s; }
.mp-row-play {
  position: absolute;
  inset: 0;
  margin: auto;
  width: 26px;
  height: 26px;
  border: none;
  border-radius: 50%;
  background: transparent;
  color: var(--dsw-alias-label-primary, #1f2328);
  display: grid;
  place-items: center;
  cursor: pointer;
  opacity: 0;
  transition: opacity .12s, background-color .12s;
}
.mp-row-play:hover { background: var(--dsw-alias-interactive-bg-hover, #2631480f); }
.mp-track-row:hover .mp-row-num,
.mp-track-row.mp-current .mp-row-num { opacity: 0; }
.mp-track-row:hover .mp-row-play,
.mp-track-row.mp-current .mp-row-play { opacity: 1; }

.mp-track-main { display: flex; align-items: center; gap: 11px; min-width: 0; }
.mp-cover { width: 38px; height: 38px; border-radius: 8px; flex: none; overflow: hidden; display: grid; place-items: center; color: #ffffff; }
.mp-cover img { width: 100%; height: 100%; object-fit: cover; display: block; }
.mp-cover-empty { background: var(--dsw-alias-bg-layer-2, #f3f4f6); color: var(--dsw-alias-label-tertiary, #8b93a1); }
.mp-track-text { min-width: 0; }
.mp-track-title { font-size: 13px; line-height: 18px; font-weight: 500; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.mp-track-sub { margin-top: 2px; font-size: 11.5px; line-height: 16px; color: var(--dsw-alias-label-tertiary, #8b93a1); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.mp-track-playlists { font-size: 12px; color: var(--dsw-alias-label-secondary, #5c6570); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.mp-track-duration { font-size: 12px; color: var(--dsw-alias-label-tertiary, #8b93a1); font-variant-numeric: tabular-nums; }
.mp-track-actions { display: flex; align-items: center; justify-content: flex-end; gap: 2px; opacity: 0; transition: opacity .12s; }
.mp-track-row:hover .mp-track-actions,
.mp-track-row.mp-current .mp-track-actions { opacity: 1; }

.mp-icon-btn {
  width: 30px;
  height: 30px;
  border: none;
  border-radius: 8px;
  background: transparent;
  color: var(--dsw-alias-label-secondary, #5c6570);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
  flex: none;
}
.mp-icon-btn:hover { background: var(--dsw-alias-interactive-bg-hover, #2631480f); color: var(--dsw-alias-label-primary, #1f2328); }
.mp-icon-btn.mp-on { color: var(--dsw-alias-brand-primary, #4f6ef7); }
.mp-icon-btn:disabled { opacity: .35; cursor: not-allowed; }

.mp-eq { display: inline-flex; align-items: flex-end; gap: 2px; height: 14px; }
.mp-eq i { width: 3px; border-radius: 1px; background: var(--dsw-alias-brand-primary, #4f6ef7); animation: mp-eq .9s ease-in-out infinite; }
.mp-eq i:nth-child(1) { height: 7px; animation-delay: -.2s; }
.mp-eq i:nth-child(2) { height: 13px; animation-delay: -.5s; }
.mp-eq i:nth-child(3) { height: 9px; animation-delay: -.1s; }
@keyframes mp-eq { 0%, 100% { transform: scaleY(.45); } 50% { transform: scaleY(1); } }

.mp-empty { flex: 1; min-height: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 10px; padding: 40px 24px; text-align: center; color: var(--dsw-alias-label-tertiary, #8b93a1); }
.mp-empty-icon { width: 56px; height: 56px; border-radius: 18px; background: var(--dsw-alias-bg-layer-2, #f3f4f6); display: grid; place-items: center; color: var(--dsw-alias-label-tertiary, #8b93a1); }
.mp-empty-title { font-size: 14px; line-height: 20px; font-weight: 600; color: var(--dsw-alias-label-primary, #1f2328); }
.mp-empty-hint { font-size: 12.5px; line-height: 19px; max-width: 340px; }
.mp-empty .mp-btn { margin-top: 4px; }
.mp-empty-actions { display: flex; flex-wrap: wrap; justify-content: center; gap: 8px; margin-top: 4px; }
.mp-empty-actions .mp-btn { margin-top: 0; }

.mp-spinner { width: 26px; height: 26px; border-radius: 50%; border: 2px solid var(--dsw-alias-border-l2, #d1d5db); border-top-color: var(--dsw-alias-brand-primary, #4f6ef7); animation: mp-spin .8s linear infinite; }
@keyframes mp-spin { to { transform: rotate(360deg); } }

.mp-player {
  flex: none;
  margin-top: 12px;
  display: flex;
  align-items: center;
  gap: 18px;
  padding: 10px 16px;
  border: 1px solid var(--dsw-alias-border-l1, #e5e7eb);
  border-radius: 14px;
  background: var(--dsw-alias-bg-layer-1, #ffffff);
}
.mp-now { display: flex; align-items: center; gap: 10px; width: 220px; min-width: 0; flex: none; }
.mp-now-meta { min-width: 0; }
.mp-now-title { font-size: 13px; line-height: 18px; font-weight: 600; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.mp-now-sub { margin-top: 2px; font-size: 11.5px; line-height: 16px; color: var(--dsw-alias-label-tertiary, #8b93a1); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.mp-player-center { flex: 1; min-width: 0; display: flex; flex-direction: column; align-items: center; gap: 4px; }
.mp-controls { display: flex; align-items: center; gap: 4px; }
.mp-play-btn {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  border: none;
  background: var(--dsw-alias-brand-primary, #4f6ef7);
  color: var(--dsw-alias-brand-text, #ffffff);
  display: grid;
  place-items: center;
  cursor: pointer;
  margin: 0 4px;
  flex: none;
}
.mp-play-btn:hover { filter: brightness(1.08); }
.mp-play-btn:disabled { opacity: .45; cursor: not-allowed; }
.mp-seek { display: flex; align-items: center; gap: 8px; width: 100%; max-width: 540px; }
.mp-seek input[type="range"] { flex: 1; accent-color: var(--dsw-alias-brand-primary, #4f6ef7); height: 16px; cursor: pointer; }
.mp-seek input[type="range"]:disabled { cursor: default; opacity: .5; }
.mp-time { font-size: 11px; color: var(--dsw-alias-label-tertiary, #8b93a1); font-variant-numeric: tabular-nums; width: 38px; text-align: center; flex: none; }
.mp-volume { display: flex; align-items: center; gap: 6px; width: 130px; flex: none; color: var(--dsw-alias-label-tertiary, #8b93a1); }
.mp-volume input { width: 80px; accent-color: var(--dsw-alias-brand-primary, #4f6ef7); cursor: pointer; }
.mp-repeat-one { position: absolute; right: 1px; bottom: 1px; font-size: 8px; line-height: 1; font-weight: 700; color: var(--dsw-alias-brand-primary, #4f6ef7); }

.mp-modal-backdrop {
  position: fixed;
  inset: 0;
  z-index: 1000;
  background: rgb(0 0 0 / 42%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  backdrop-filter: blur(3px);
}
.mp-modal {
  width: min(440px, 100%);
  max-height: min(640px, 86vh);
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  border: 1px solid var(--dsw-alias-border-l2, #d1d5db);
  background: var(--dsw-alias-bg-overlay, #ffffff);
  color: var(--dsw-alias-label-primary, #1f2328);
  box-shadow: 0 24px 60px rgb(0 0 0 / 28%);
  overflow: hidden;
}
.mp-modal-head { display: flex; align-items: center; justify-content: space-between; gap: 12px; padding: 16px 18px 10px; }
.mp-modal-title { margin: 0; font-size: 15px; line-height: 21px; font-weight: 650; }
.mp-modal-body { padding: 4px 18px 16px; overflow: auto; min-height: 0; }
.mp-modal-foot { display: flex; justify-content: flex-end; gap: 8px; padding: 12px 18px 16px; border-top: 1px solid var(--dsw-alias-border-l1, #e5e7eb); flex: none; }
.mp-field { display: flex; flex-direction: column; gap: 6px; margin-top: 8px; }
.mp-field label { font-size: 12px; color: var(--dsw-alias-label-secondary, #5c6570); }
.mp-input {
  height: 36px;
  border-radius: 9px;
  border: 1px solid var(--dsw-alias-border-l1, #e5e7eb);
  background: var(--dsw-alias-bg-layer-1, #ffffff);
  color: var(--dsw-alias-label-primary, #1f2328);
  padding: 0 10px;
  font: inherit;
  font-size: 13px;
  outline: none;
  width: 100%;
  box-sizing: border-box;
}
.mp-input:focus { border-color: var(--dsw-alias-brand-primary, #4f6ef7); outline: 2px solid var(--dsw-alias-brand-primary, #4f6ef7); outline-offset: 0; }
.mp-modal-note { margin: 0 0 8px; font-size: 12px; line-height: 18px; color: var(--dsw-alias-label-tertiary, #8b93a1); }
.mp-modal-list { display: flex; flex-direction: column; gap: 2px; margin-top: 8px; max-height: 300px; overflow: auto; }
.mp-modal-empty { padding: 18px 4px 8px; text-align: center; color: var(--dsw-alias-label-tertiary, #8b93a1); font-size: 12.5px; line-height: 19px; }
.mp-modal-empty .mp-btn { margin-top: 10px; }
.mp-check-row { display: flex; align-items: center; gap: 10px; min-height: 42px; padding: 0 8px; border-radius: 9px; cursor: pointer; }
.mp-check-row:hover { background: var(--dsw-alias-interactive-bg-hover, #2631480f); }
.mp-check-row input { accent-color: var(--dsw-alias-brand-primary, #4f6ef7); width: 15px; height: 15px; flex: none; }
.mp-check-row-main { min-width: 0; flex: 1; }
.mp-check-row-title { font-size: 13px; line-height: 18px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.mp-check-row-sub { font-size: 11.5px; line-height: 16px; color: var(--dsw-alias-label-tertiary, #8b93a1); margin-top: 1px; }
.mp-modal-error { margin: 6px 0 0; font-size: 12px; line-height: 18px; color: var(--dsw-alias-state-error-primary, #d14343); }
.mp-choice-list { display: flex; flex-direction: column; gap: 8px; margin-top: 12px; }
.mp-choice {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 10px 12px;
  border: 1px solid var(--dsw-alias-border-l1, #e5e7eb);
  border-radius: 10px;
  cursor: pointer;
  background: var(--dsw-alias-bg-layer-1, #ffffff);
}
.mp-choice:hover { background: var(--dsw-alias-interactive-bg-hover, #2631480f); }
.mp-choice.mp-choice-on {
  border-color: var(--dsw-alias-brand-primary, #4f6ef7);
  background: var(--dsw-alias-interactive-bg-active, #2631481a);
}
.mp-choice input { margin-top: 3px; accent-color: var(--dsw-alias-brand-primary, #4f6ef7); flex: none; }
.mp-choice-main { display: flex; flex-direction: column; gap: 2px; min-width: 0; }
.mp-choice-title { font-size: 13px; font-weight: 600; line-height: 18px; }
.mp-choice-hint { font-size: 12px; line-height: 17px; color: var(--dsw-alias-label-tertiary, #8b93a1); }
.mp-choice-danger .mp-choice-title { color: var(--dsw-alias-state-error-primary, #d14343); }
.mp-choice-warning { margin: 8px 0 0; font-size: 12px; line-height: 18px; color: var(--dsw-alias-state-warn-primary, #b7791f); }

.mp-toast {
  position: fixed;
  left: 50%;
  bottom: 110px;
  transform: translateX(-50%);
  z-index: 1100;
  padding: 9px 14px;
  border-radius: 10px;
  background: var(--dsw-alias-toast-bg, var(--dsw-alias-bg-overlay, #ffffff));
  color: var(--dsw-alias-label-primary, #1f2328);
  border: 1px solid var(--dsw-alias-border-l2, #d1d5db);
  font-size: 12.5px;
  line-height: 18px;
  box-shadow: 0 10px 30px rgb(0 0 0 / 18%);
  max-width: min(420px, calc(100vw - 48px));
}
.mp-toast.mp-error { border-color: var(--dsw-alias-state-error-primary, #d14343); color: var(--dsw-alias-state-error-primary, #d14343); }

.mp-drop {
  position: absolute;
  inset: 8px;
  z-index: 20;
  border: 2px dashed var(--dsw-alias-brand-primary, #4f6ef7);
  border-radius: 16px;
  background: var(--dsw-alias-interactive-bg-active, #2631481a);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  color: var(--dsw-alias-brand-primary, #4f6ef7);
  pointer-events: none;
}
.mp-drop-icon { width: 54px; height: 54px; border-radius: 16px; background: var(--dsw-alias-bg-layer-1, #ffffff); display: grid; place-items: center; }
.mp-drop-title { font-size: 15px; font-weight: 600; }
.mp-drop-hint { font-size: 12.5px; color: var(--dsw-alias-label-secondary, #5c6570); }

.mp-btn:focus-visible,
.mp-icon-btn:focus-visible,
.mp-nav-item:focus-visible,
.mp-playlist:focus-visible,
.mp-play-btn:focus-visible,
.mp-mini-btn:focus-visible,
.mp-search-clear:focus-visible,
.mp-row-play:focus-visible {
  outline: 2px solid var(--dsw-alias-brand-primary, #4f6ef7);
  outline-offset: 2px;
}

@media (max-width: 980px) {
  .mp-volume { display: none; }
  .mp-now { width: 170px; }
}

@media (max-width: 820px) {
  .mp-body { flex-direction: column; }
  .mp-sidebar { width: 100%; max-height: 220px; }
  .mp-side-foot { display: none; }
  .mp-playlists { flex-direction: row; overflow-x: auto; overflow-y: hidden; padding-bottom: 8px; }
  .mp-playlist { flex: none; max-width: 180px; }
  .mp-track-head,
  .mp-track-row { grid-template-columns: 30px minmax(0, 1fr) 56px 64px; }
  .mp-track-playlists { display: none; }
  .mp-now { display: none; }
  .mp-player { gap: 10px; }
}

@media (max-width: 620px) {
  .mp-page { padding-left: 10px; padding-right: 10px; }
  .mp-header-actions { width: 100%; }
  .mp-search { flex: 1; }
  .mp-search input { width: 100%; max-width: none; }
  .mp-content-head { padding: 12px; }
  .mp-track-head,
  .mp-track-row { grid-template-columns: 28px minmax(0, 1fr) 50px 58px; padding: 0 10px; gap: 8px; }
  .mp-track-actions { opacity: 1; }
  .mp-modal-backdrop { padding: 12px; }
}

@media (hover: none) {
  .mp-track-actions { opacity: 1; }
  .mp-track-row .mp-row-play { opacity: 1; }
  .mp-track-row .mp-row-num { opacity: 0; }
}

@media (prefers-reduced-motion: reduce) {
  .mp-eq i { animation: none; }
  .mp-spinner { animation-duration: 2s; }
}
`;

    function useLocaleTick(locale) {
      const [revision, setRevision] = React.useState(() => {
        if (locale && typeof locale.getSnapshot === 'function') {
          const snapshot = locale.getSnapshot();
          if (snapshot && typeof snapshot.revision === 'number') return snapshot.revision;
        }
        return 0;
      });

      React.useEffect(() => {
        if (!locale || typeof locale.subscribe !== 'function') return undefined;
        const sync = () => {
          if (typeof locale.getSnapshot === 'function') {
            const snapshot = locale.getSnapshot();
            if (snapshot && typeof snapshot.revision === 'number') {
              setRevision(snapshot.revision);
              return;
            }
          }
          setRevision((value) => value + 1);
        };
        const unsubscribe = locale.subscribe(sync);
        sync();
        return unsubscribe;
      }, [locale]);

      return revision;
    }

    function TrackCover({ track, size = 38 }) {
      const [coverUrl, setCoverUrl] = React.useState(null);

      React.useEffect(() => {
        if (!track || !track.cover) {
          setCoverUrl(null);
          return undefined;
        }
        let url;
        try {
          url = URL.createObjectURL(track.cover);
        } catch {
          setCoverUrl(null);
          return undefined;
        }
        setCoverUrl(url);
        return () => URL.revokeObjectURL(url);
      }, [track && track.id, track && track.cover]);

      if (!track) {
        return h('div', {
          className: 'mp-cover mp-cover-empty',
          style: { width: size, height: size },
        }, h(MusicNoteIcon, { size: Math.round(size * 0.46) }));
      }

      const hue = hashString(track.title || track.fileName || '') % 360;
      return h('div', {
        className: 'mp-cover',
        style: {
          width: size,
          height: size,
          background: coverUrl
            ? 'transparent'
            : 'linear-gradient(135deg, hsl(' + hue + ' 72% 58%), hsl(' + ((hue + 46) % 360) + ' 72% 48%))',
        },
      }, coverUrl
        ? h('img', { src: coverUrl, alt: '' })
        : h(MusicNoteIcon, { size: Math.round(size * 0.46) }));
    }

    function EmptyState({ icon: Icon = MusicNoteIcon, title, hint, action, loading }) {
      return h('div', { className: 'mp-empty' },
        loading
          ? h('span', { className: 'mp-spinner' })
          : h('div', { className: 'mp-empty-icon' }, h(Icon, { size: 26 })),
        h('div', { className: 'mp-empty-title' }, title),
        hint ? h('div', { className: 'mp-empty-hint' }, hint) : null,
        action || null
      );
    }

    function Modal({ title, onClose, children, footer, width }) {
      const t = useT();

      React.useEffect(() => {
        const onKeyDown = (event) => {
          if (event.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', onKeyDown);
        return () => window.removeEventListener('keydown', onKeyDown);
      }, [onClose]);

      return h('div', {
        className: 'mp-modal-backdrop',
        onMouseDown: (event) => {
          if (event.target === event.currentTarget) onClose();
        },
      }, h('div', {
        className: 'mp-modal',
        role: 'dialog',
        'aria-modal': 'true',
        'aria-label': title,
        style: width ? { width } : undefined,
      },
        h('div', { className: 'mp-modal-head' },
          h('h2', { className: 'mp-modal-title' }, title),
          h('button', {
            className: 'mp-icon-btn',
            onClick: onClose,
            'aria-label': t('close'),
            title: t('close'),
          }, h(CloseIcon, { size: 15 }))
        ),
        h('div', { className: 'mp-modal-body' }, children),
        footer ? h('div', { className: 'mp-modal-foot' }, footer) : null
      ));
    }

    function Header({ query, onQuery, onImport, onImportFolder, importing, loading }) {
      const t = useT();

      return h('header', { className: 'mp-header' },
        h('div', { className: 'mp-title-row' },
          h('div', { className: 'mp-logo' }, h(MusicNoteIcon, { size: 24 })),
          h('div', null,
            h('h1', { className: 'mp-title' }, t('title')),
            h('p', { className: 'mp-subtitle' }, t('subtitle'))
          )
        ),
        h('div', { className: 'mp-header-actions' },
          h('div', { className: 'mp-search' },
            h(SearchIcon, { size: 15 }),
            h('input', {
              value: query,
              onChange: (event) => onQuery(event.target.value),
              placeholder: t('searchPlaceholder'),
              'aria-label': t('searchPlaceholder'),
              spellCheck: false,
            }),
            query
              ? h('button', {
                className: 'mp-search-clear',
                onClick: () => onQuery(''),
                'aria-label': t('clear'),
                title: t('clear'),
              }, h(CloseIcon, { size: 13 }))
              : null
          ),
          h('button', {
            className: 'mp-btn',
            onClick: onImportFolder,
            disabled: !!importing || loading,
            title: t('importFolder'),
          }, h(FolderIcon, { size: 15 }), t('importFolder')),
          h('button', {
            className: 'mp-btn mp-btn-primary',
            onClick: onImport,
            disabled: !!importing || loading,
          }, h(ImportIcon, { size: 15 }), importing
            ? t('importing', { done: importing.done, total: importing.total })
            : t('import'))
        )
      );
    }

    function PlaylistSidebar({ tracksCount, uncategorizedCount, playlists, selected, onSelect, onNew, validCount, onReorder }) {
      const t = useT();
      const [dragId, setDragId] = React.useState(null);
      const [dropId, setDropId] = React.useState(null);

      return h('aside', { className: 'mp-sidebar' },
        h('div', { className: 'mp-nav' },
          h('button', {
            className: 'mp-nav-item' + (selected.kind === 'all' ? ' mp-on' : ''),
            onClick: () => onSelect({ kind: 'all' }),
          },
            h(LibraryIcon, { size: 15 }),
            h('span', null, t('allTracks')),
            h('span', { className: 'mp-nav-count' }, tracksCount)
          ),
          h('button', {
            className: 'mp-nav-item' + (selected.kind === 'recent' ? ' mp-on' : ''),
            onClick: () => onSelect({ kind: 'recent' }),
          },
            h(ClockIcon, { size: 15 }),
            h('span', null, t('recent'))
          )
        ),
        h('div', { className: 'mp-section-head' },
          h('span', null, t('playlists')),
          h('button', {
            className: 'mp-mini-btn',
            onClick: onNew,
            title: t('newPlaylist'),
            'aria-label': t('newPlaylist'),
          }, h(PlusIcon, { size: 14 }))
        ),
        h('div', { className: 'mp-playlists' },
          h('button', {
            className: 'mp-playlist mp-pinned' + (selected.kind === 'uncategorized' ? ' mp-on' : ''),
            onClick: () => onSelect({ kind: 'uncategorized' }),
            title: t('pinned'),
          },
            h('span', { className: 'mp-playlist-dot mp-pinned-dot' }, h(InboxIcon, { size: 13 })),
            h('span', { className: 'mp-playlist-name' }, t('uncategorized')),
            h('span', { className: 'mp-playlist-pin', 'aria-hidden': 'true' }, h(PinIcon, { size: 12 })),
            h('span', { className: 'mp-playlist-count' }, uncategorizedCount)
          ),
          playlists.length === 0
            ? h('div', { className: 'mp-side-empty' },
              h('p', null, t('noPlaylists')),
              h('p', null, t('noPlaylistsHint'))
            )
            : playlists.map((playlist) => h('button', {
              key: playlist.id,
              draggable: true,
              className: 'mp-playlist mp-draggable'
                + (selected.kind === 'playlist' && selected.id === playlist.id ? ' mp-on' : '')
                + (dropId === playlist.id && dragId !== playlist.id ? ' mp-drop-target' : ''),
              onClick: () => onSelect({ kind: 'playlist', id: playlist.id }),
              onDragStart: (event) => {
                setDragId(playlist.id);
                if (event.dataTransfer) {
                  event.dataTransfer.effectAllowed = 'move';
                  event.dataTransfer.setData('text/plain', playlist.id);
                }
              },
              onDragOver: (event) => {
                event.preventDefault();
                if (event.dataTransfer) event.dataTransfer.dropEffect = 'move';
                if (dropId !== playlist.id) setDropId(playlist.id);
              },
              onDragLeave: (event) => {
                if (event.currentTarget.contains(event.relatedTarget)) return;
                if (dropId === playlist.id) setDropId(null);
              },
              onDrop: (event) => {
                event.preventDefault();
                const sourceId = (event.dataTransfer && event.dataTransfer.getData('text/plain')) || dragId;
                setDragId(null);
                setDropId(null);
                if (sourceId && sourceId !== playlist.id) onReorder(sourceId, playlist.id);
              },
              onDragEnd: () => {
                setDragId(null);
                setDropId(null);
              },
              title: playlist.name,
            },
              h('span', {
                className: 'mp-playlist-dot',
                style: { background: playlistTint(playlist.name) },
              }, h(FolderIcon, { size: 13 })),
              h('span', { className: 'mp-playlist-name' }, playlist.name),
              h('span', {
                className: 'mp-playlist-grip',
                title: t('dragToReorder'),
                'aria-hidden': 'true',
              }, h(GripIcon, { size: 12 })),
              h('span', { className: 'mp-playlist-count' }, validCount(playlist))
            ))
        ),
        h('div', { className: 'mp-side-foot' }, h('span', null, t('localNote')))
      );
    }

    function TrackRow({ track, index, current, playing, inPlaylist, playlistNames = [], onPlay, onAdd, onRemove, onDelete }) {
      const t = useT();
      const names = playlistNames.length > 0 ? playlistNames : [t('uncategorized')];
      const info = track.info || track.artist || '';

      return h('div', {
        className: 'mp-track-row' + (current ? ' mp-current' : ''),
        onClick: () => onPlay(track),
      },
        h('div', { className: 'mp-track-index' },
          current && playing ? h(Equalizer) : h('span', { className: 'mp-row-num' }, index + 1),
          h('button', {
            className: 'mp-row-play',
            onClick: (event) => {
              event.stopPropagation();
              onPlay(track);
            },
            title: current && playing ? t('pause') : t('play'),
            'aria-label': current && playing ? t('pause') : t('play'),
          }, current && playing ? h(PauseIcon, { size: 13 }) : h(PlayIcon, { size: 13 }))
        ),
        h('div', { className: 'mp-track-main' },
          h(TrackCover, { track, size: 38 }),
          h('div', { className: 'mp-track-text' },
            h('div', { className: 'mp-track-title' }, track.title),
            info ? h('div', { className: 'mp-track-sub' }, info) : null
          )
        ),
        h('div', { className: 'mp-track-playlists', title: names.join(', ') }, names.join(' · ')),
        h('div', { className: 'mp-track-duration' }, formatTime(track.duration)),
        h('div', { className: 'mp-track-actions' },
          h('button', {
            className: 'mp-icon-btn',
            onClick: (event) => {
              event.stopPropagation();
              onAdd(track);
            },
            title: t('addToPlaylist'),
            'aria-label': t('addToPlaylist'),
          }, h(PlusIcon, { size: 15 })),
          inPlaylist
            ? h('button', {
              className: 'mp-icon-btn',
              onClick: (event) => {
                event.stopPropagation();
                onRemove(track);
              },
              title: t('removeFromPlaylist'),
              'aria-label': t('removeFromPlaylist'),
            }, h(CloseIcon, { size: 15 }))
            : h('button', {
              className: 'mp-icon-btn',
              onClick: (event) => {
                event.stopPropagation();
                onDelete(track);
              },
              title: t('deleteTrack'),
              'aria-label': t('deleteTrack'),
            }, h(TrashIcon, { size: 15 }))
        )
      );
    }

    function TrackPane({
      loading,
      importing,
      visibleTracks,
      query,
      onQuery,
      selectedKind,
      libraryCount,
      viewTitle,
      viewSubtitle,
      currentId,
      playing,
      onPlay,
      onAddToPlaylist,
      onRemoveFromPlaylist,
      onDeleteTrack,
      onPlayAll,
      onAddTracks,
      onRenamePlaylist,
      onDeletePlaylist,
      onImport,
      onImportFolder,
      playlistNamesByTrack,
    }) {
      const t = useT();
      let body;

      if (loading) {
        body = h(EmptyState, { loading: true, title: t('loading') });
      } else if (visibleTracks.length === 0) {
        if (query.trim()) {
          body = h(EmptyState, {
            icon: SearchIcon,
            title: t('noResults'),
            hint: t('noResultsHint'),
            action: h('button', {
              className: 'mp-btn',
              onClick: () => onQuery(''),
            }, t('clear')),
          });
        } else if (selectedKind === 'uncategorized' && libraryCount > 0) {
          body = h(EmptyState, {
            icon: InboxIcon,
            title: t('uncategorizedEmpty'),
            hint: t('uncategorizedEmptyHint'),
          });
        } else if (selectedKind === 'playlist' && libraryCount > 0) {
          body = h(EmptyState, {
            icon: FolderIcon,
            title: t('emptyPlaylist'),
            hint: t('emptyPlaylistHint'),
            action: h('button', {
              className: 'mp-btn mp-btn-primary',
              onClick: onAddTracks,
            }, h(PlusIcon, { size: 14 }), t('addTracks')),
          });
        } else {
          body = h(EmptyState, {
            icon: MusicNoteIcon,
            title: t('noTracks'),
            hint: t('noTracksHint'),
            action: h('div', { className: 'mp-empty-actions' },
              h('button', {
                className: 'mp-btn mp-btn-primary',
                onClick: onImport,
              }, h(ImportIcon, { size: 14 }), t('import')),
              h('button', {
                className: 'mp-btn',
                onClick: onImportFolder,
              }, h(FolderIcon, { size: 14 }), t('importFolder'))
            ),
          });
        }
      } else {
        body = h('div', { className: 'mp-track-scroll' },
          h('div', { className: 'mp-track-head' },
            h('span', null, '#'),
            h('span', null, t('trackTitle')),
            h('span', null, t('playlists')),
            h('span', null, t('duration')),
            h('span', { style: { textAlign: 'right' } }, t('actions'))
          ),
          visibleTracks.map((track, index) => h(TrackRow, {
            key: track.id,
            track,
            index,
            current: currentId === track.id,
            playing,
            inPlaylist: selectedKind === 'playlist',
            playlistNames: playlistNamesByTrack.get(track.id) || [],
            onPlay,
            onAdd: onAddToPlaylist,
            onRemove: onRemoveFromPlaylist,
            onDelete: onDeleteTrack,
          }))
        );
      }

      return h('main', { className: 'mp-content' },
        h('div', { className: 'mp-content-head' },
          h('div', { style: { minWidth: 0 } },
            h('h2', { className: 'mp-content-title' }, viewTitle),
            h('p', { className: 'mp-content-sub' }, viewSubtitle)
          ),
          h('div', { className: 'mp-content-actions' },
            h('button', {
              className: 'mp-btn mp-btn-small',
              onClick: onPlayAll,
              disabled: visibleTracks.length === 0,
            }, h(PlayIcon, { size: 12 }), t('playAll')),
            selectedKind === 'playlist'
              ? h('button', {
                className: 'mp-btn mp-btn-small',
                onClick: onAddTracks,
                disabled: libraryCount === 0,
              }, h(PlusIcon, { size: 12 }), t('addTracks'))
              : null,
            selectedKind === 'playlist'
              ? h('button', {
                className: 'mp-btn mp-btn-small',
                onClick: onRenamePlaylist,
              }, t('rename'))
              : null,
            selectedKind === 'playlist'
              ? h('button', {
                className: 'mp-btn mp-btn-small mp-btn-danger',
                onClick: onDeletePlaylist,
              }, h(TrashIcon, { size: 12 }), t('deletePlaylist'))
              : null
          )
        ),
        body
      );
    }

    function PlayerBar({
      track,
      playing,
      progress,
      duration,
      volume,
      shuffle,
      repeat,
      onToggle,
      onPrev,
      onNext,
      onSeek,
      onVolume,
      onShuffle,
      onRepeat,
    }) {
      const t = useT();
      const repeatTitle = repeat === 'one'
        ? t('repeatOne')
        : repeat === 'all'
          ? t('repeatAll')
          : t('repeatOff');
      const nowInfo = track ? (track.info || track.artist || '') : t('nothingPlayingHint');

      return h('footer', { className: 'mp-player' },
        h('div', { className: 'mp-now' },
          track
            ? h(TrackCover, { track, size: 44 })
            : h('div', { className: 'mp-cover mp-cover-empty', style: { width: 44, height: 44 } }, h(MusicNoteIcon, { size: 20 })),
          h('div', { className: 'mp-now-meta' },
            h('div', { className: 'mp-now-title' }, track ? track.title : t('nothingPlaying')),
            nowInfo ? h('div', { className: 'mp-now-sub' }, nowInfo) : null
          )
        ),
        h('div', { className: 'mp-player-center' },
          h('div', { className: 'mp-controls' },
            h('button', {
              className: 'mp-icon-btn' + (shuffle ? ' mp-on' : ''),
              onClick: onShuffle,
              title: t('shuffle'),
              'aria-label': t('shuffle'),
              'aria-pressed': shuffle,
            }, h(ShuffleIcon, { size: 16 })),
            h('button', {
              className: 'mp-icon-btn',
              onClick: onPrev,
              title: t('previous'),
              'aria-label': t('previous'),
              disabled: !track,
            }, h(PrevIcon, { size: 16 })),
            h('button', {
              className: 'mp-play-btn',
              onClick: onToggle,
              title: playing ? t('pause') : t('play'),
              'aria-label': playing ? t('pause') : t('play'),
              disabled: !track,
            }, playing ? h(PauseIcon, { size: 18 }) : h(PlayIcon, { size: 18 })),
            h('button', {
              className: 'mp-icon-btn',
              onClick: onNext,
              title: t('next'),
              'aria-label': t('next'),
              disabled: !track,
            }, h(NextIcon, { size: 16 })),
            h('button', {
              className: 'mp-icon-btn' + (repeat !== 'off' ? ' mp-on' : ''),
              onClick: onRepeat,
              title: repeatTitle,
              'aria-label': repeatTitle,
              'aria-pressed': repeat !== 'off',
            },
              h(RepeatIcon, { size: 16 }),
              repeat === 'one' ? h('span', { className: 'mp-repeat-one' }, '1') : null
            )
          ),
          h('div', { className: 'mp-seek' },
            h('span', { className: 'mp-time' }, formatTime(progress)),
            h('input', {
              type: 'range',
              min: 0,
              max: Math.max(duration, 0.1),
              step: 0.1,
              value: Math.min(progress, duration || 0),
              onChange: (event) => onSeek(Number(event.target.value)),
              disabled: !track,
              'aria-label': t('seek'),
            }),
            h('span', { className: 'mp-time' }, formatTime(duration))
          )
        ),
        h('div', { className: 'mp-volume' },
          h(VolumeIcon, { size: 16 }),
          h('input', {
            type: 'range',
            min: 0,
            max: 1,
            step: 0.01,
            value: volume,
            onChange: (event) => onVolume(Number(event.target.value)),
            'aria-label': t('volume'),
          })
        )
      );
    }

    function PlaylistPickerModal({ track, playlists, onClose, onApply, onCreate }) {
      const t = useT();
      const [selectedIds, setSelectedIds] = React.useState(() => new Set(
        playlists.filter((playlist) => playlist.trackIds.indexOf(track.id) >= 0).map((playlist) => playlist.id)
      ));
      const [saving, setSaving] = React.useState(false);

      const toggle = (id) => {
        setSelectedIds((previous) => {
          const next = new Set(previous);
          if (next.has(id)) next.delete(id);
          else next.add(id);
          return next;
        });
      };

      const submit = async () => {
        setSaving(true);
        const ok = await onApply(track, selectedIds);
        setSaving(false);
        if (ok) onClose();
      };

      return h(Modal, {
        title: t('addToPlaylist'),
        onClose,
        footer: [
          h('button', {
            key: 'cancel',
            className: 'mp-btn',
            onClick: onClose,
            disabled: saving,
          }, t('cancel')),
          h('button', {
            key: 'confirm',
            className: 'mp-btn mp-btn-primary',
            onClick: submit,
            disabled: saving || playlists.length === 0,
          }, t('confirm')),
        ],
      },
        h('p', { className: 'mp-modal-note' }, track.title),
        playlists.length === 0
          ? h('div', { className: 'mp-modal-empty' },
            h('p', null, t('noPlaylistToAdd')),
            h('button', {
              className: 'mp-btn',
              onClick: () => onCreate(track),
            }, h(PlusIcon, { size: 13 }), t('createAndAdd'))
          )
          : h('div', { className: 'mp-modal-list' },
            playlists.map((playlist) => h('label', {
              key: playlist.id,
              className: 'mp-check-row',
            },
              h('input', {
                type: 'checkbox',
                checked: selectedIds.has(playlist.id),
                onChange: () => toggle(playlist.id),
              }),
              h('span', {
                className: 'mp-playlist-dot',
                style: { background: playlistTint(playlist.name) },
              }, h(FolderIcon, { size: 12 })),
              h('span', { className: 'mp-check-row-main' },
                h('span', { className: 'mp-check-row-title' }, playlist.name),
                h('span', { className: 'mp-check-row-sub' }, t('trackCount', { count: playlist.trackIds.length }))
              )
            ))
          )
      );
    }

    function TrackPickerModal({ playlist, tracks, onClose, onApply }) {
      const t = useT();
      const [query, setQuery] = React.useState('');
      const [selectedIds, setSelectedIds] = React.useState(() => new Set());
      const [saving, setSaving] = React.useState(false);

      const candidates = React.useMemo(
        () => tracks.filter((track) => playlist.trackIds.indexOf(track.id) < 0),
        [tracks, playlist]
      );
      const filtered = React.useMemo(() => {
        const needle = query.trim().toLowerCase();
        if (!needle) return candidates;
        return candidates.filter((track) => (
          (track.title + ' ' + (track.info || track.artist || '') + ' ' + track.fileName).toLowerCase().indexOf(needle) >= 0
        ));
      }, [candidates, query]);

      const toggle = (id) => {
        setSelectedIds((previous) => {
          const next = new Set(previous);
          if (next.has(id)) next.delete(id);
          else next.add(id);
          return next;
        });
      };

      const submit = async () => {
        setSaving(true);
        const ok = await onApply(playlist, selectedIds);
        setSaving(false);
        if (ok) onClose();
      };

      let body;
      if (tracks.length === 0) {
        body = h('div', { className: 'mp-modal-empty' },
          h('p', null, t('noTracks')),
          h('p', null, t('noTracksHint'))
        );
      } else if (candidates.length === 0) {
        body = h('div', { className: 'mp-modal-empty' },
          h('p', null, t('allTracksAdded')),
          h('p', null, t('allTracksAddedHint'))
        );
      } else {
        body = h(React.Fragment, null,
          h('input', {
            className: 'mp-input',
            value: query,
            onChange: (event) => setQuery(event.target.value),
            placeholder: t('searchTracksPlaceholder'),
            'aria-label': t('searchTracksPlaceholder'),
          }),
          h('div', { className: 'mp-modal-list' },
            filtered.length === 0
              ? h('div', { className: 'mp-modal-empty' }, h('p', null, t('noResults')))
              : filtered.map((track) => h('label', {
                key: track.id,
                className: 'mp-check-row',
              },
                h('input', {
                  type: 'checkbox',
                  checked: selectedIds.has(track.id),
                  onChange: () => toggle(track.id),
                }),
                h(TrackCover, { track, size: 30 }),
                h('span', { className: 'mp-check-row-main' },
                  h('span', { className: 'mp-check-row-title' }, track.title),
                  (track.info || track.artist || '')
                    ? h('span', { className: 'mp-check-row-sub' }, track.info || track.artist)
                    : null
                )
              ))
          )
        );
      }

      return h(Modal, {
        title: t('addTracks'),
        onClose,
        footer: [
          h('span', {
            key: 'count',
            style: {
              marginRight: 'auto',
              alignSelf: 'center',
              fontSize: '12px',
              color: 'var(--dsw-alias-label-tertiary)',
            },
          }, t('selectedCount', { count: selectedIds.size })),
          h('button', {
            key: 'cancel',
            className: 'mp-btn',
            onClick: onClose,
            disabled: saving,
          }, t('cancel')),
          h('button', {
            key: 'confirm',
            className: 'mp-btn mp-btn-primary',
            onClick: submit,
            disabled: saving || selectedIds.size === 0,
          }, t('confirm')),
        ],
      },
        h('p', { className: 'mp-modal-note' }, t('addTracksHint')),
        body
      );
    }

    function PlaylistNameModal({ mode, initialName, onClose, onSubmit }) {
      const t = useT();
      const [name, setName] = React.useState(initialName || '');
      const [error, setError] = React.useState('');
      const [saving, setSaving] = React.useState(false);
      const inputRef = React.useRef(null);

      React.useEffect(() => {
        if (inputRef.current) inputRef.current.focus();
      }, []);

      const submit = async () => {
        const trimmed = name.trim();
        if (!trimmed) {
          setError(t('nameRequired'));
          return;
        }
        setSaving(true);
        setError('');
        const failure = await onSubmit(trimmed);
        setSaving(false);
        if (failure) setError(failure);
        else onClose();
      };

      return h(Modal, {
        title: mode === 'create' ? t('createPlaylist') : t('rename'),
        onClose,
        footer: [
          h('button', {
            key: 'cancel',
            className: 'mp-btn',
            onClick: onClose,
            disabled: saving,
          }, t('cancel')),
          h('button', {
            key: 'submit',
            className: 'mp-btn mp-btn-primary',
            onClick: submit,
            disabled: saving,
          }, mode === 'create' ? t('create') : t('rename')),
        ],
      },
        h('div', { className: 'mp-field' },
          h('label', { htmlFor: 'mp-playlist-name' }, t('playlistName')),
          h('input', {
            id: 'mp-playlist-name',
            ref: inputRef,
            className: 'mp-input',
            value: name,
            onChange: (event) => setName(event.target.value),
            onKeyDown: (event) => {
              if (event.key === 'Enter') submit();
            },
            placeholder: t('playlistNamePlaceholder'),
            maxLength: 80,
          }),
          error ? h('p', { className: 'mp-modal-error' }, error) : null
        )
      );
    }

    function ConfirmModal({ title, message, confirmLabel, danger, onClose, onConfirm }) {
      const t = useT();
      const [busy, setBusy] = React.useState(false);

      const submit = async () => {
        setBusy(true);
        try {
          await onConfirm();
          onClose();
        } finally {
          setBusy(false);
        }
      };

      return h(Modal, {
        title,
        onClose,
        footer: [
          h('button', {
            key: 'cancel',
            className: 'mp-btn',
            onClick: onClose,
            disabled: busy,
          }, t('cancel')),
          h('button', {
            key: 'confirm',
            className: 'mp-btn ' + (danger ? 'mp-btn-danger' : 'mp-btn-primary'),
            onClick: submit,
            disabled: busy,
          }, confirmLabel || t('confirm')),
        ],
      }, h('p', { className: 'mp-modal-note' }, message));
    }

    function PlaylistDeleteModal({ playlist, trackCount, sharedCount, onClose, onMove, onDelete }) {
      const t = useT();
      const [choice, setChoice] = React.useState('move');
      const [busy, setBusy] = React.useState(false);

      const close = () => {
        if (!busy) onClose();
      };

      const submit = async () => {
        setBusy(true);
        try {
          if (choice === 'move') await onMove();
          else await onDelete();
          onClose();
        } finally {
          setBusy(false);
        }
      };

      const option = (value, title, hint, danger) => h('label', {
        className: 'mp-choice'
          + (choice === value ? ' mp-choice-on' : '')
          + (danger ? ' mp-choice-danger' : ''),
      },
        h('input', {
          type: 'radio',
          name: 'mp-delete-playlist-choice',
          value,
          checked: choice === value,
          onChange: () => setChoice(value),
        }),
        h('span', { className: 'mp-choice-main' },
          h('span', { className: 'mp-choice-title' }, title),
          h('span', { className: 'mp-choice-hint' }, hint)
        )
      );

      return h(Modal, {
        title: t('deletePlaylistTitle', { name: playlist.name }),
        onClose: close,
        footer: [
          h('button', {
            key: 'cancel',
            className: 'mp-btn',
            onClick: close,
            disabled: busy,
          }, t('cancel')),
          h('button', {
            key: 'confirm',
            className: 'mp-btn ' + (choice === 'delete' ? 'mp-btn-danger-fill' : 'mp-btn-primary'),
            onClick: submit,
            disabled: busy,
          }, choice === 'delete' ? t('deletePlaylistAndTracks') : t('moveAndDeletePlaylist')),
        ],
      },
        h('p', { className: 'mp-modal-note' }, t('deletePlaylistQuestion', { count: trackCount })),
        sharedCount > 0
          ? h('p', { className: 'mp-choice-warning' }, t('sharedTracksWarning', { count: sharedCount }))
          : null,
        h('div', { className: 'mp-choice-list' },
          option('move', t('keepTracksOption'), t('keepTracksOptionHint'), false),
          option('delete', t('deleteTracksOption'), t('deleteTracksOptionHint'), true)
        )
      );
    }

    const MemoHeader = React.memo(Header);
    const MemoPlaylistSidebar = React.memo(PlaylistSidebar);
    const MemoTrackPane = React.memo(TrackPane);

    const audioElement = document.createElement('audio');
    audioElement.preload = 'metadata';

    const playback = {
      currentTrack: null,
      currentTrackId: null,
      audioUrl: null,
      queue: [],
      playing: false,
      volume: 0.8,
      shuffle: false,
      repeat: 'all',
      progress: 0,
      duration: 0,
    };

    function stopPlaybackAudio() {
      try {
        audioElement.pause();
      } catch {}
      audioElement.removeAttribute('src');
      try {
        audioElement.load();
      } catch {}
      if (playback.audioUrl) {
        URL.revokeObjectURL(playback.audioUrl);
        playback.audioUrl = null;
      }
      playback.currentTrack = null;
      playback.currentTrackId = null;
      playback.queue = [];
      playback.playing = false;
    }

    /**
     * Keeps the shared audio element attached to a persistent hidden host.
     * The music panel is unmounted when the user opens another main panel, so
     * the element must live in the root overlay instead of the panel tree.
     */
    function MusicAudioHost() {
      const hostRef = React.useRef(null);

      React.useEffect(() => {
        const host = hostRef.current;
        if (!host) return undefined;
        if (audioElement.parentNode && audioElement.parentNode !== host) {
          audioElement.parentNode.removeChild(audioElement);
        }
        host.appendChild(audioElement);
        return () => {
          if (audioElement.parentNode === host) host.removeChild(audioElement);
        };
      }, []);

      return h('div', {
        ref: hostRef,
        style: { display: 'none' },
        'aria-hidden': 'true',
      });
    }

    function MusicPanel({ t, locale }) {
      const localeRevision = useLocaleTick(locale);
      const tt = React.useCallback((key, vars) => tr(t, key, vars), [t]);

      const [tracks, setTracks] = React.useState([]);
      const [playlists, setPlaylists] = React.useState([]);
      const [loading, setLoading] = React.useState(true);
      const [query, setQuery] = React.useState('');
      const [selected, setSelected] = React.useState(() => {
        const value = readPref(LS_VIEW, { kind: 'all' });
        if (value && value.kind === 'recent') return { kind: 'recent' };
        if (value && value.kind === 'uncategorized') return { kind: 'uncategorized' };
        if (value && value.kind === 'playlist' && typeof value.id === 'string') return { kind: 'playlist', id: value.id };
        return { kind: 'all' };
      });
      const [currentId, setCurrentId] = React.useState(() => (playback.currentTrack ? playback.currentTrack.id : null));
      const [queue, setQueue] = React.useState(() => playback.queue.slice());
      const [playing, setPlaying] = React.useState(() => !audioElement.paused);
      const [progress, setProgress] = React.useState(() => audioElement.currentTime || 0);
      const [duration, setDuration] = React.useState(() => (
        Number.isFinite(audioElement.duration) ? audioElement.duration : 0
      ));
      const [volume, setVolume] = React.useState(() => {
        const value = readPref(LS_VOLUME, 0.8);
        return typeof value === 'number' && value >= 0 && value <= 1 ? value : 0.8;
      });
      const [shuffle, setShuffle] = React.useState(() => readPref(LS_SHUFFLE, false) === true);
      const [repeat, setRepeat] = React.useState(() => {
        const value = readPref(LS_REPEAT, 'all');
        return value === 'off' || value === 'one' || value === 'all' ? value : 'all';
      });
      const [importing, setImporting] = React.useState(null);
      const [dragOver, setDragOver] = React.useState(false);
      const [toast, setToast] = React.useState(null);
      const [modal, setModal] = React.useState(null);

      const fileInputRef = React.useRef(null);
      const folderInputRef = React.useRef(null);
      const dragDepth = React.useRef(0);
      const importingRef = React.useRef(false);
      const tracksRef = React.useRef(tracks);
      const playlistsRef = React.useRef(playlists);

      React.useEffect(() => {
        tracksRef.current = tracks;
      }, [tracks]);

      React.useEffect(() => {
        playlistsRef.current = playlists;
      }, [playlists]);

      React.useEffect(() => {
        const input = folderInputRef.current;
        if (!input) return;
        input.setAttribute('webkitdirectory', '');
        input.setAttribute('directory', '');
      }, []);

      const pushToast = React.useCallback((text, tone) => {
        setToast({ id: Date.now() + Math.random(), text, tone: tone || 'default' });
      }, []);

      React.useEffect(() => {
        if (!toast) return undefined;
        const timer = window.setTimeout(() => setToast(null), 2800);
        return () => window.clearTimeout(timer);
      }, [toast]);

      const trackById = React.useMemo(() => {
        const map = new Map();
        for (const track of tracks) map.set(track.id, track);
        return map;
      }, [tracks]);

      const validCount = React.useCallback((playlist) => (
        playlist.trackIds.reduce((count, id) => count + (trackById.has(id) ? 1 : 0), 0)
      ), [trackById]);

      const categorizedIds = React.useMemo(() => {
        const ids = new Set();
        for (const playlist of playlists) {
          for (const id of playlist.trackIds) ids.add(id);
        }
        return ids;
      }, [playlists]);

      const uncategorizedTracks = React.useMemo(
        () => tracks.filter((track) => !categorizedIds.has(track.id)),
        [tracks, categorizedIds]
      );

      const playlistNamesByTrack = React.useMemo(() => {
        const map = new Map();
        for (const playlist of playlists) {
          for (const id of playlist.trackIds) {
            if (!map.has(id)) map.set(id, []);
            map.get(id).push(playlist.name);
          }
        }
        return map;
      }, [playlists]);

      const currentTrack = React.useMemo(() => {
        const found = trackById.get(currentId);
        if (found) return found;
        if (playback.currentTrack && playback.currentTrack.id === currentId) return playback.currentTrack;
        return null;
      }, [trackById, currentId]);

      const visibleTracks = React.useMemo(() => {
        let list = tracks;
        if (selected.kind === 'playlist') {
          const playlist = playlists.find((item) => item.id === selected.id);
          list = playlist
            ? playlist.trackIds.map((id) => trackById.get(id)).filter(Boolean)
            : [];
        } else if (selected.kind === 'recent') {
          list = tracks.slice(0, 50);
        } else if (selected.kind === 'uncategorized') {
          list = uncategorizedTracks;
        }
        const needle = query.trim().toLowerCase();
        if (needle) {
          list = list.filter((track) => (
            (track.title + ' ' + (track.info || track.artist || '') + ' ' + track.fileName).toLowerCase().indexOf(needle) >= 0
          ));
        }
        return list;
      }, [tracks, playlists, selected, query, trackById, uncategorizedTracks]);

      const activePlaylist = selected.kind === 'playlist'
        ? playlists.find((playlist) => playlist.id === selected.id) || null
        : null;

      const viewTitle = selected.kind === 'uncategorized'
        ? tt('uncategorized')
        : selected.kind === 'playlist'
          ? (activePlaylist ? activePlaylist.name : tt('playlists'))
          : selected.kind === 'recent'
            ? tt('recent')
            : tt('allTracks');

      const viewSubtitle = selected.kind === 'uncategorized'
        ? tt('uncategorizedSub', { count: uncategorizedTracks.length })
        : selected.kind === 'playlist'
          ? (activePlaylist ? tt('playlistSub', { count: validCount(activePlaylist) }) : '')
          : selected.kind === 'recent'
            ? tt('recentSub', { count: visibleTracks.length })
            : tt('librarySub', { count: tracks.length, playlists: playlists.length });

      React.useEffect(() => {
        let cancelled = false;
        (async () => {
          try {
            const [loadedTracks, loadedPlaylists] = await Promise.all([loadTracks(), loadPlaylists()]);
            if (cancelled) return;
            const hasOrder = loadedPlaylists.every((playlist) => Number.isFinite(playlist.order));
            const orderedPlaylists = loadedPlaylists
              .slice()
              .sort((a, b) => (
                hasOrder ? a.order - b.order : (a.createdAt || 0) - (b.createdAt || 0)
              ))
              .map((playlist, index) => ({ ...playlist, order: index }));
            setTracks(loadedTracks.sort((a, b) => (b.addedAt || 0) - (a.addedAt || 0)));
            setPlaylists(orderedPlaylists);
          } catch (error) {
            if (!cancelled) pushToast(tr(t, 'loadError', { message: errorMessage(error) }), 'error');
          } finally {
            if (!cancelled) setLoading(false);
          }
        })();
        return () => {
          cancelled = true;
        };
      }, [t, pushToast]);

      React.useEffect(() => {
        writePref(LS_VOLUME, volume);
      }, [volume]);

      React.useEffect(() => {
        writePref(LS_SHUFFLE, shuffle);
      }, [shuffle]);

      React.useEffect(() => {
        writePref(LS_REPEAT, repeat);
      }, [repeat]);

      React.useEffect(() => {
        writePref(LS_VIEW, selected);
      }, [selected]);

      React.useEffect(() => {
        if (loading) return;
        if (selected.kind === 'playlist' && !playlists.some((playlist) => playlist.id === selected.id)) {
          setSelected({ kind: 'all' });
        }
      }, [loading, playlists, selected]);

      React.useEffect(() => {
        if (currentId && !trackById.has(currentId)) {
          setCurrentId(null);
          setPlaying(false);
          setQueue([]);
          setProgress(0);
          setDuration(0);
        }
      }, [currentId, trackById]);

      React.useEffect(() => {
        if (!currentTrack) {
          if (playback.audioUrl) {
            URL.revokeObjectURL(playback.audioUrl);
            playback.audioUrl = null;
          }
          playback.currentTrack = null;
          playback.currentTrackId = null;
          audioElement.removeAttribute('src');
          try {
            audioElement.load();
          } catch {}
          setProgress(0);
          setDuration(0);
          return;
        }

        playback.currentTrack = currentTrack;
        if (playback.currentTrackId === currentTrack.id && playback.audioUrl) {
          setProgress(audioElement.currentTime || 0);
          setDuration(Number.isFinite(audioElement.duration) ? audioElement.duration : (currentTrack.duration || 0));
          return;
        }

        if (playback.audioUrl) URL.revokeObjectURL(playback.audioUrl);
        let url;
        try {
          url = URL.createObjectURL(currentTrack.blob);
        } catch (error) {
          console.error('[dsh-music-player] could not create an audio URL', error);
          pushToast(tr(t, 'playError'), 'error');
          return;
        }
        playback.audioUrl = url;
        playback.currentTrackId = currentTrack.id;
        audioElement.src = url;
        audioElement.load();
        setProgress(0);
        setDuration(Number.isFinite(currentTrack.duration) ? currentTrack.duration : 0);
      }, [currentTrack && currentTrack.id, pushToast, t]);

      React.useEffect(() => {
        if (playing && currentTrack) {
          if (audioElement.paused) {
            const promise = audioElement.play();
            if (promise && typeof promise.catch === 'function') {
              promise.catch((error) => {
                if (error && error.name === 'AbortError') return;
                setPlaying(false);
                pushToast(tr(t, 'playError'), 'error');
              });
            }
          }
        } else if (!playing && !audioElement.paused) {
          audioElement.pause();
        }
      }, [playing, currentTrack && currentTrack.id, t, pushToast]);

      React.useEffect(() => {
        audioElement.volume = volume;
      }, [volume]);

      React.useEffect(() => {
        if (!audioElement.paused) setPlaying(true);
        else if (audioElement.ended) setPlaying(false);
        setProgress(audioElement.currentTime || 0);
        if (Number.isFinite(audioElement.duration)) setDuration(audioElement.duration);
      }, []);

      const goNext = React.useCallback(() => {
        const next = findNextIndex(queue, currentId, shuffle, repeat === 'one' ? 'off' : repeat);
        if (next === null) {
          setPlaying(false);
          return;
        }
        setCurrentId(queue[next]);
        setPlaying(true);
      }, [queue, currentId, shuffle, repeat]);

      const goPrev = React.useCallback(() => {
        if (audioElement.currentTime > 3) {
          audioElement.currentTime = 0;
          setProgress(0);
          return;
        }
        if (queue.length === 0) return;
        const index = queue.indexOf(currentId);
        let previous;
        if (shuffle && queue.length > 1) {
          previous = index;
          while (previous === index) previous = Math.floor(Math.random() * queue.length);
        } else if (index > 0) {
          previous = index - 1;
        } else {
          previous = repeat === 'all' ? queue.length - 1 : 0;
        }
        setCurrentId(queue[previous]);
        setPlaying(true);
      }, [queue, currentId, shuffle, repeat]);

      const handleEnded = React.useCallback(() => {
        if (repeat === 'one' && currentTrack) {
          audioElement.currentTime = 0;
          const promise = audioElement.play();
          if (promise && typeof promise.catch === 'function') promise.catch(() => setPlaying(false));
          setPlaying(true);
          return;
        }
        const next = findNextIndex(queue, currentId, shuffle, repeat);
        if (next === null) {
          setPlaying(false);
          return;
        }
        setCurrentId(queue[next]);
        setPlaying(true);
      }, [repeat, currentTrack, queue, currentId, shuffle]);

      React.useEffect(() => {
        const onTimeUpdate = () => setProgress(audioElement.currentTime || 0);
        const onDurationChange = () => {
          if (Number.isFinite(audioElement.duration)) setDuration(audioElement.duration);
        };
        const onPlay = () => setPlaying(true);
        const onPause = () => setPlaying(false);
        const onEnded = () => handleEnded();
        const onError = () => {
          if (audioElement.error) console.warn('[dsh-music-player] audio error', audioElement.error);
        };
        audioElement.addEventListener('timeupdate', onTimeUpdate);
        audioElement.addEventListener('durationchange', onDurationChange);
        audioElement.addEventListener('loadedmetadata', onDurationChange);
        audioElement.addEventListener('play', onPlay);
        audioElement.addEventListener('pause', onPause);
        audioElement.addEventListener('ended', onEnded);
        audioElement.addEventListener('error', onError);
        return () => {
          audioElement.removeEventListener('timeupdate', onTimeUpdate);
          audioElement.removeEventListener('durationchange', onDurationChange);
          audioElement.removeEventListener('loadedmetadata', onDurationChange);
          audioElement.removeEventListener('play', onPlay);
          audioElement.removeEventListener('pause', onPause);
          audioElement.removeEventListener('ended', onEnded);
          audioElement.removeEventListener('error', onError);
        };
      }, [handleEnded]);

      React.useEffect(() => {
        playback.currentTrack = currentTrack;
        playback.queue = queue;
        playback.playing = playing;
        playback.volume = volume;
        playback.shuffle = shuffle;
        playback.repeat = repeat;
      }, [currentTrack, queue, playing, volume, shuffle, repeat]);

      React.useEffect(() => {
        playback.progress = progress;
        playback.duration = duration;
      }, [progress, duration]);

      React.useEffect(() => {
        if (typeof navigator === 'undefined' || !('mediaSession' in navigator)) return undefined;
        if (!currentTrack) {
          try {
            navigator.mediaSession.metadata = null;
          } catch {}
          return undefined;
        }

        let coverUrl = null;
        try {
          const artwork = [];
          if (currentTrack.cover) {
            coverUrl = URL.createObjectURL(currentTrack.cover);
            artwork.push({ src: coverUrl, sizes: '512x512', type: currentTrack.cover.type || 'image/jpeg' });
          }
          if (typeof MediaMetadata !== 'undefined') {
            navigator.mediaSession.metadata = new MediaMetadata({
              title: currentTrack.title,
              artist: currentTrack.info || currentTrack.artist || '',
              artwork,
            });
          }
          navigator.mediaSession.setActionHandler('play', () => setPlaying(true));
          navigator.mediaSession.setActionHandler('pause', () => setPlaying(false));
          navigator.mediaSession.setActionHandler('previoustrack', () => goPrev());
          navigator.mediaSession.setActionHandler('nexttrack', () => goNext());
        } catch {}

        return () => {
          try {
            navigator.mediaSession.metadata = null;
            navigator.mediaSession.setActionHandler('play', null);
            navigator.mediaSession.setActionHandler('pause', null);
            navigator.mediaSession.setActionHandler('previoustrack', null);
            navigator.mediaSession.setActionHandler('nexttrack', null);
          } catch {}
          if (coverUrl) URL.revokeObjectURL(coverUrl);
        };
      }, [currentTrack, goPrev, goNext, t]);

      const playTrack = React.useCallback((track) => {
        if (!track) return;
        const ids = visibleTracks.map((item) => item.id);
        if (currentId === track.id) {
          setQueue(ids);
          setPlaying((value) => !value);
          return;
        }
        setQueue(ids);
        setCurrentId(track.id);
        setPlaying(true);
      }, [currentId, visibleTracks]);

      const playAll = React.useCallback(() => {
        if (visibleTracks.length === 0) return;
        setQueue(visibleTracks.map((track) => track.id));
        setCurrentId(visibleTracks[0].id);
        setPlaying(true);
      }, [visibleTracks]);

      const togglePlay = React.useCallback(() => {
        if (!currentTrack) {
          if (visibleTracks.length > 0) {
            setQueue(visibleTracks.map((track) => track.id));
            setCurrentId(visibleTracks[0].id);
            setPlaying(true);
          }
          return;
        }
        setPlaying((value) => !value);
      }, [currentTrack, visibleTracks]);

      const seek = React.useCallback((value) => {
        if (!Number.isFinite(audioElement.duration)) return;
        const next = Math.min(Math.max(value, 0), audioElement.duration);
        audioElement.currentTime = next;
        setProgress(next);
      }, []);

      const cycleRepeat = React.useCallback(() => {
        setRepeat((value) => (value === 'all' ? 'one' : value === 'one' ? 'off' : 'all'));
      }, []);

      const toggleShuffle = React.useCallback(() => {
        setShuffle((value) => !value);
      }, []);

      const importAudioFiles = React.useCallback(async (fileList) => {
        if (loading) {
          return { busy: true, files: 0, added: [], trackIds: [], skipped: 0, failed: 0 };
        }
        const files = Array.from(fileList || []).filter(isAudioFile);
        if (files.length === 0) {
          return { busy: false, files: 0, added: [], trackIds: [], skipped: 0, failed: 0 };
        }
        if (importingRef.current) {
          return { busy: true, files: files.length, added: [], trackIds: [], skipped: 0, failed: 0 };
        }

        importingRef.current = true;
        setImporting({ done: 0, total: files.length });

        const existingByKey = new Map();
        for (const track of tracksRef.current) {
          if (track.fileKey) existingByKey.set(track.fileKey, track);
        }
        const added = [];
        const trackIds = [];
        const seenIds = new Set();
        let skipped = 0;
        let failed = 0;

        try {
          for (let index = 0; index < files.length; index += 1) {
            const file = files[index];
            try {
              const key = fileKey(file);
              const existing = existingByKey.get(key);
              if (existing) {
                skipped += 1;
                if (!seenIds.has(existing.id)) {
                  seenIds.add(existing.id);
                  trackIds.push(existing.id);
                }
              } else {
                const metadata = await readId3(file);
                const audioDuration = await readAudioDuration(file);
                const parsed = parseTrackName(file.name, metadata);
                const track = {
                  id: makeId(),
                  fileKey: key,
                  title: (parsed.title || file.name).trim(),
                  info: parsed.info || '',
                  duration: audioDuration || 0,
                  mime: file.type || 'audio/mpeg',
                  fileName: file.name,
                  size: file.size,
                  addedAt: Date.now(),
                  blob: file,
                  cover: metadata.cover || null,
                };
                await putTrackRecord(track);
                added.push(track);
                existingByKey.set(key, track);
                if (!seenIds.has(track.id)) {
                  seenIds.add(track.id);
                  trackIds.push(track.id);
                }
              }
            } catch (error) {
              failed += 1;
              console.error('[dsh-music-player] import failed', file.name, error);
            }
            setImporting({ done: index + 1, total: files.length });
          }

          if (added.length > 0) {
            setTracks((previous) => [...added, ...previous].sort((a, b) => (b.addedAt || 0) - (a.addedAt || 0)));
          }

          return { busy: false, files: files.length, added, trackIds, skipped, failed };
        } finally {
          setImporting(null);
          importingRef.current = false;
        }
      }, [loading]);

      const importFiles = React.useCallback(async (fileList) => {
        const result = await importAudioFiles(fileList);
        if (result.busy) return;
        if (result.files === 0) {
          pushToast(tr(t, 'importEmpty'), 'error');
          return;
        }
        const parts = [];
        if (result.added.length > 0) parts.push(tr(t, 'imported', { count: result.added.length }));
        if (result.skipped > 0) parts.push(tr(t, 'importSkipped', { count: result.skipped }));
        if (result.failed > 0) parts.push(tr(t, 'importFailed', { count: result.failed }));
        pushToast(parts.join(' · ') || tr(t, 'importEmpty'), result.failed > 0 && result.added.length === 0 ? 'error' : 'default');
      }, [importAudioFiles, t, pushToast]);

      const importFolder = React.useCallback(async (fileList) => {
        const files = Array.from(fileList || []);
        const audioFiles = files.filter(isAudioFile);
        if (audioFiles.length === 0) {
          pushToast(tr(t, 'folderEmpty'), 'error');
          return;
        }

        const folderName = folderNameFromFiles(files) || tr(t, 'folderPlaylistFallback');
        const result = await importAudioFiles(audioFiles);
        if (result.busy) return;
        if (result.trackIds.length === 0) {
          pushToast(result.failed > 0 ? tr(t, 'folderImportFailed') : tr(t, 'folderEmpty'), 'error');
          return;
        }

        const baseName = isReservedPlaylistName(folderName, t) ? folderName + ' (2)' : folderName;
        const playlist = {
          id: makeId(),
          name: makeUniquePlaylistName(baseName, playlistsRef.current),
          trackIds: result.trackIds,
          order: nextPlaylistOrder(playlistsRef.current),
          createdAt: Date.now(),
        };

        try {
          await putPlaylistRecord(playlist);
          setPlaylists((previous) => [...previous, playlist]);
          setSelected({ kind: 'playlist', id: playlist.id });
          const parts = [tr(t, 'folderPlaylistCreated', { name: playlist.name, count: playlist.trackIds.length })];
          if (result.failed > 0) parts.push(tr(t, 'importFailed', { count: result.failed }));
          pushToast(parts.join(' · '), 'default');
        } catch (error) {
          pushToast(tr(t, 'storageError', { message: errorMessage(error) }), 'error');
        }
      }, [importAudioFiles, t, pushToast]);

      const openFilePicker = React.useCallback(() => {
        if (loading || importingRef.current) return;
        if (fileInputRef.current) fileInputRef.current.click();
      }, [loading]);

      const openFolderPicker = React.useCallback(() => {
        if (loading || importingRef.current) return;
        if (folderInputRef.current) folderInputRef.current.click();
      }, [loading]);

      const hasFiles = (event) => {
        const types = event.dataTransfer && event.dataTransfer.types;
        return !!types && Array.prototype.indexOf.call(types, 'Files') >= 0;
      };

      const onDragEnter = (event) => {
        if (!hasFiles(event)) return;
        event.preventDefault();
        dragDepth.current += 1;
        setDragOver(true);
      };

      const onDragOver = (event) => {
        if (!hasFiles(event)) return;
        event.preventDefault();
        if (event.dataTransfer) event.dataTransfer.dropEffect = 'copy';
      };

      const onDragLeave = () => {
        dragDepth.current = Math.max(0, dragDepth.current - 1);
        if (dragDepth.current === 0) setDragOver(false);
      };

      const onDrop = (event) => {
        if (!hasFiles(event)) return;
        event.preventDefault();
        dragDepth.current = 0;
        setDragOver(false);
        if (event.dataTransfer) importFiles(event.dataTransfer.files);
      };

      const createPlaylist = React.useCallback(async (name, addTrackIds) => {
        const trimmed = name.trim();
        if (!trimmed) return tr(t, 'nameRequired');
        if (isReservedPlaylistName(trimmed, t)) return tr(t, 'reservedPlaylistName');
        const exists = playlistsRef.current.some((playlist) => playlist.name.toLowerCase() === trimmed.toLowerCase());
        if (exists) return tr(t, 'playlistExists');
        const playlist = {
          id: makeId(),
          name: trimmed,
          trackIds: Array.from(new Set(addTrackIds || [])),
          order: nextPlaylistOrder(playlistsRef.current),
          createdAt: Date.now(),
        };
        try {
          await putPlaylistRecord(playlist);
          setPlaylists((previous) => [...previous, playlist]);
          setSelected({ kind: 'playlist', id: playlist.id });
          pushToast(tr(t, 'playlistCreated'));
          return null;
        } catch (error) {
          return tr(t, 'storageError', { message: errorMessage(error) });
        }
      }, [t, pushToast]);

      const renamePlaylist = React.useCallback(async (playlist, name) => {
        const trimmed = name.trim();
        if (!trimmed) return tr(t, 'nameRequired');
        if (isReservedPlaylistName(trimmed, t)) return tr(t, 'reservedPlaylistName');
        const exists = playlistsRef.current.some((item) => (
          item.id !== playlist.id && item.name.toLowerCase() === trimmed.toLowerCase()
        ));
        if (exists) return tr(t, 'playlistExists');
        const next = { ...playlist, name: trimmed };
        try {
          await putPlaylistRecord(next);
          setPlaylists((previous) => previous.map((item) => (item.id === next.id ? next : item)));
          pushToast(tr(t, 'playlistRenamed'));
          return null;
        } catch (error) {
          return tr(t, 'storageError', { message: errorMessage(error) });
        }
      }, [t, pushToast]);

      const deletePlaylistKeepTracks = React.useCallback(async (playlist) => {
        try {
          await deletePlaylistRecord(playlist.id);
          setPlaylists((previous) => previous.filter((item) => item.id !== playlist.id));
          setSelected((previous) => (
            previous.kind === 'playlist' && previous.id === playlist.id ? { kind: 'uncategorized' } : previous
          ));
          pushToast(tr(t, 'playlistDeletedKeepTracks'));
        } catch (error) {
          pushToast(tr(t, 'storageError', { message: errorMessage(error) }), 'error');
        }
      }, [t, pushToast]);

      const deletePlaylistAndTracks = React.useCallback(async (playlist) => {
        const ids = playlist.trackIds.filter((id) => trackById.has(id));
        const removing = new Set(ids);
        try {
          await deletePlaylistAndTracksRecord(playlist.id, ids, playlistsRef.current);
          setTracks((previous) => previous.filter((track) => !removing.has(track.id)));
          setPlaylists((previous) => previous
            .filter((item) => item.id !== playlist.id)
            .map((item) => (
              item.trackIds.some((id) => removing.has(id))
                ? { ...item, trackIds: item.trackIds.filter((id) => !removing.has(id)) }
                : item
            )));
          setQueue((previous) => previous.filter((id) => !removing.has(id)));
          if (currentId && removing.has(currentId)) {
            setCurrentId(null);
            setPlaying(false);
          }
          setSelected({ kind: 'all' });
          pushToast(tr(t, 'playlistAndTracksDeleted'));
        } catch (error) {
          pushToast(tr(t, 'storageError', { message: errorMessage(error) }), 'error');
        }
      }, [trackById, currentId, t, pushToast]);

      const reorderPlaylists = React.useCallback(async (draggedId, targetId) => {
        const current = playlistsRef.current;
        const from = current.findIndex((playlist) => playlist.id === draggedId);
        const to = current.findIndex((playlist) => playlist.id === targetId);
        if (from < 0 || to < 0 || from === to) return;

        const next = current.slice();
        const [moved] = next.splice(from, 1);
        next.splice(to, 0, moved);
        const ordered = next.map((playlist, index) => ({ ...playlist, order: index }));

        try {
          await putPlaylistRecords(ordered);
          playlistsRef.current = ordered;
          setPlaylists(ordered);
        } catch (error) {
          pushToast(tr(t, 'storageError', { message: errorMessage(error) }), 'error');
        }
      }, [t, pushToast]);

      const deleteTrack = React.useCallback(async (track) => {
        try {
          await deleteTrackRecord(track.id, playlistsRef.current);
          setTracks((previous) => previous.filter((item) => item.id !== track.id));
          setPlaylists((previous) => previous.map((playlist) => (
            playlist.trackIds.indexOf(track.id) >= 0
              ? { ...playlist, trackIds: playlist.trackIds.filter((id) => id !== track.id) }
              : playlist
          )));
          setQueue((previous) => previous.filter((id) => id !== track.id));
          if (currentId === track.id) {
            setCurrentId(null);
            setPlaying(false);
          }
          pushToast(tr(t, 'deletedTrack'));
        } catch (error) {
          pushToast(tr(t, 'storageError', { message: errorMessage(error) }), 'error');
        }
      }, [currentId, t, pushToast]);

      const applyPlaylistSelection = React.useCallback(async (track, selectedIds) => {
        const changed = [];
        for (const playlist of playlistsRef.current) {
          const has = playlist.trackIds.indexOf(track.id) >= 0;
          const want = selectedIds.has(playlist.id);
          if (has !== want) {
            changed.push({
              ...playlist,
              trackIds: want
                ? [...playlist.trackIds, track.id]
                : playlist.trackIds.filter((id) => id !== track.id),
            });
          }
        }
        if (changed.length === 0) return true;
        try {
          await Promise.all(changed.map(putPlaylistRecord));
          setPlaylists((previous) => previous.map((playlist) => (
            changed.find((item) => item.id === playlist.id) || playlist
          )));
          pushToast(tr(t, 'playlistsUpdated'));
          return true;
        } catch (error) {
          pushToast(tr(t, 'storageError', { message: errorMessage(error) }), 'error');
          return false;
        }
      }, [t, pushToast]);

      const addTracksToPlaylist = React.useCallback(async (playlist, trackIds) => {
        const ids = Array.from(new Set(trackIds)).filter((id) => playlist.trackIds.indexOf(id) < 0);
        if (ids.length === 0) return true;
        const next = { ...playlist, trackIds: [...playlist.trackIds, ...ids] };
        try {
          await putPlaylistRecord(next);
          setPlaylists((previous) => previous.map((item) => (item.id === next.id ? next : item)));
          pushToast(tr(t, 'addedCount', { count: ids.length }));
          return true;
        } catch (error) {
          pushToast(tr(t, 'storageError', { message: errorMessage(error) }), 'error');
          return false;
        }
      }, [t, pushToast]);

      const removeFromPlaylist = React.useCallback(async (playlist, track) => {
        const next = { ...playlist, trackIds: playlist.trackIds.filter((id) => id !== track.id) };
        try {
          await putPlaylistRecord(next);
          setPlaylists((previous) => previous.map((item) => (item.id === next.id ? next : item)));
          pushToast(tr(t, 'removedFromPlaylist'));
        } catch (error) {
          pushToast(tr(t, 'storageError', { message: errorMessage(error) }), 'error');
        }
      }, [t, pushToast]);

      const handleRemoveFromPlaylist = React.useCallback((track) => {
        if (!activePlaylist) return;
        removeFromPlaylist(activePlaylist, track);
      }, [activePlaylist, removeFromPlaylist]);

      const closeModal = React.useCallback(() => setModal(null), []);

      const openAddToPlaylist = React.useCallback((track) => {
        setModal({ type: 'playlist-picker', trackId: track.id });
      }, []);

      const openAddTracks = React.useCallback(() => {
        if (!activePlaylist) return;
        setModal({ type: 'track-picker', playlistId: activePlaylist.id });
      }, [activePlaylist]);

      const openCreatePlaylist = React.useCallback((addTrackIds) => {
        setModal({ type: 'playlist-name', mode: 'create', addTrackIds: addTrackIds || [] });
      }, []);

      const openCreatePlaylistEmpty = React.useCallback(() => {
        openCreatePlaylist([]);
      }, [openCreatePlaylist]);

      const openRenamePlaylist = React.useCallback(() => {
        if (!activePlaylist) return;
        setModal({
          type: 'playlist-name',
          mode: 'rename',
          playlistId: activePlaylist.id,
          initialName: activePlaylist.name,
        });
      }, [activePlaylist]);

      const openDeletePlaylist = React.useCallback(() => {
        if (!activePlaylist) return;
        setModal({ type: 'delete-playlist', playlistId: activePlaylist.id });
      }, [activePlaylist]);

      const openDeleteTrack = React.useCallback((track) => {
        setModal({ type: 'confirm', kind: 'delete-track', trackId: track.id });
      }, []);

      let modalNode = null;
      if (modal) {
        if (modal.type === 'playlist-picker') {
          const track = trackById.get(modal.trackId);
          if (track) {
            modalNode = h(PlaylistPickerModal, {
              track,
              playlists,
              onClose: closeModal,
              onApply: applyPlaylistSelection,
              onCreate: (selectedTrack) => openCreatePlaylist([selectedTrack.id]),
            });
          }
        } else if (modal.type === 'track-picker') {
          const playlist = playlists.find((item) => item.id === modal.playlistId);
          if (playlist) {
            modalNode = h(TrackPickerModal, {
              playlist,
              tracks,
              onClose: closeModal,
              onApply: addTracksToPlaylist,
            });
          }
        } else if (modal.type === 'playlist-name') {
          const playlist = modal.playlistId
            ? playlists.find((item) => item.id === modal.playlistId)
            : null;
          modalNode = h(PlaylistNameModal, {
            mode: modal.mode,
            initialName: modal.initialName || '',
            onClose: closeModal,
            onSubmit: (name) => {
              if (modal.mode === 'create') return createPlaylist(name, modal.addTrackIds);
              return playlist ? renamePlaylist(playlist, name) : Promise.resolve(null);
            },
          });
        } else if (modal.type === 'delete-playlist') {
          const playlist = playlists.find((item) => item.id === modal.playlistId);
          if (playlist) {
            const ids = playlist.trackIds.filter((id) => trackById.has(id));
            const sharedCount = ids.filter((id) => (
              playlists.some((item) => item.id !== playlist.id && item.trackIds.indexOf(id) >= 0)
            )).length;
            modalNode = h(PlaylistDeleteModal, {
              playlist,
              trackCount: ids.length,
              sharedCount,
              onClose: closeModal,
              onMove: () => deletePlaylistKeepTracks(playlist),
              onDelete: () => deletePlaylistAndTracks(playlist),
            });
          }
        } else if (modal.type === 'confirm') {
          if (modal.kind === 'delete-track') {
            const track = trackById.get(modal.trackId);
            if (track) {
              modalNode = h(ConfirmModal, {
                title: tt('confirmDelete'),
                message: tt('deleteTrackConfirm', { title: track.title }),
                confirmLabel: tt('delete'),
                danger: true,
                onClose: closeModal,
                onConfirm: () => deleteTrack(track),
              });
            }
          }
        }
      }

      return h(TContext.Provider, { value: tt },
        h('div', {
          className: 'mp-page',
          onDragEnter,
          onDragOver,
          onDragLeave,
          onDrop,
        },
          h(MemoHeader, {
            query,
            onQuery: setQuery,
            onImport: openFilePicker,
            onImportFolder: openFolderPicker,
            importing,
            loading,
            localeRevision,
          }),
          h('div', { className: 'mp-body' },
            h(MemoPlaylistSidebar, {
              tracksCount: tracks.length,
              uncategorizedCount: uncategorizedTracks.length,
              playlists,
              selected,
              onSelect: setSelected,
              onNew: openCreatePlaylistEmpty,
              validCount,
              onReorder: reorderPlaylists,
              localeRevision,
            }),
            h(MemoTrackPane, {
              loading,
              importing,
              visibleTracks,
              query,
              onQuery: setQuery,
              selectedKind: selected.kind,
              libraryCount: tracks.length,
              viewTitle,
              viewSubtitle,
              currentId,
              playing,
              onPlay: playTrack,
              onAddToPlaylist: openAddToPlaylist,
              onRemoveFromPlaylist: handleRemoveFromPlaylist,
              onDeleteTrack: openDeleteTrack,
              onPlayAll: playAll,
              onAddTracks: openAddTracks,
              onRenamePlaylist: openRenamePlaylist,
              onDeletePlaylist: openDeletePlaylist,
              onImport: openFilePicker,
              onImportFolder: openFolderPicker,
              playlistNamesByTrack,
              localeRevision,
            })
          ),
          h(PlayerBar, {
            track: currentTrack,
            playing,
            progress,
            duration,
            volume,
            shuffle,
            repeat,
            onToggle: togglePlay,
            onPrev: goPrev,
            onNext: goNext,
            onSeek: seek,
            onVolume: setVolume,
            onShuffle: toggleShuffle,
            onRepeat: cycleRepeat,
          }),
          modalNode,
          toast ? h('div', {
            className: 'mp-toast' + (toast.tone === 'error' ? ' mp-error' : ''),
          }, toast.text) : null,
          dragOver ? h('div', { className: 'mp-drop' },
            h('div', { className: 'mp-drop-icon' }, h(ImportIcon, { size: 26 })),
            h('div', { className: 'mp-drop-title' }, tt('dropTitle')),
            h('div', { className: 'mp-drop-hint' }, tt('dropHint'))
          ) : null,
          h('input', {
            ref: fileInputRef,
            type: 'file',
            accept: 'audio/*,.mp3,.flac,.wav,.m4a,.aac,.ogg,.oga,.opus,.wma,.aiff,.alac,.webm',
            multiple: true,
            style: { display: 'none' },
            onChange: (event) => {
              const files = Array.from(event.target.files || []);
              event.target.value = '';
              if (files.length > 0) importFiles(files);
            },
          }),
          h('input', {
            ref: folderInputRef,
            type: 'file',
            multiple: true,
            style: { display: 'none' },
            onChange: (event) => {
              const files = Array.from(event.target.files || []);
              event.target.value = '';
              if (files.length > 0) importFolder(files);
            },
          })
        )
      );
    }

    return {
      inject: ['slots', 'locale'],
      apply(ctx) {
        ctx.effect(() => ctx.locale.register(NS, { zh: ZH, en: EN }), 'music-player dictionaries');

        ctx.effect(() => {
          const tag = document.createElement('style');
          tag.dataset.plugin = NS;
          tag.textContent = CSS;
          (document.head || document.documentElement).appendChild(tag);
          return () => tag.remove();
        }, 'music-player styles');

        ctx.effect(() => () => stopPlaybackAudio(), 'music-player audio');

        const t = ctx.locale.bind(NS);

        ctx.slots.inject('sidebar.panellist', () => ctx.slots.register({
          name: 'sidebar.panellist',
          id: PANEL_ID,
          order: 20,
          label: () => t('nav'),
        }, (owner = {}) => h(MusicNoteIcon, { size: owner.size || 16, active: owner.active === true })));

        ctx.slots.inject('shell.overlay', () => ctx.slots.register({
          name: 'shell.overlay',
          id: 'dsh-music-player-audio',
        }, MusicAudioHost));

        ctx.slots.inject('main', () => ctx.slots.register({
          name: 'main',
          key: PANEL_ID,
        }, (owner = {}) => h(MusicPanel, { ...owner, t, locale: ctx.locale })));
      },
    };
  },
});
