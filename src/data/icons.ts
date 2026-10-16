import { IconItem } from '../types/font';

export const ICONS_DATA: IconItem[] = [
  // Actions
  { name: 'search', label: 'Search', category: 'Action', codepoint: 'e880', tags: ['magnifier', 'find', 'explore'] },
  { name: 'home', label: 'Home', category: 'Action', codepoint: 'e88a', tags: ['house', 'main', 'dashboard'] },
  { name: 'settings', label: 'Settings', category: 'Action', codepoint: 'e8b8', tags: ['gear', 'preferences', 'options'] },
  { name: 'favorite', label: 'Favorite', category: 'Action', codepoint: 'e87d', tags: ['heart', 'like', 'love', 'bookmark'] },
  { name: 'delete', label: 'Delete', category: 'Action', codepoint: 'e872', tags: ['trash', 'remove', 'bin'] },
  { name: 'check_circle', label: 'Check Circle', category: 'Action', codepoint: 'e86c', tags: ['ok', 'done', 'approved', 'success'] },
  { name: 'info', label: 'Info', category: 'Action', codepoint: 'e88e', tags: ['information', 'help', 'details'] },
  { name: 'visibility', label: 'Visibility', category: 'Action', codepoint: 'e8f4', tags: ['eye', 'show', 'preview'] },
  { name: 'thumb_up', label: 'Thumb Up', category: 'Action', codepoint: 'e8dc', tags: ['like', 'approve', 'good'] },
  { name: 'download', label: 'Download', category: 'Action', codepoint: 'f090', tags: ['save', 'export', 'arrow'] },
  { name: 'share', label: 'Share', category: 'Action', codepoint: 'e80d', tags: ['send', 'social', 'export'] },
  { name: 'star', label: 'Star', category: 'Action', codepoint: 'e838', tags: ['rate', 'favorite', 'ranking'] },
  { name: 'lock', label: 'Lock', category: 'Action', codepoint: 'e897', tags: ['security', 'password', 'private'] },
  { name: 'refresh', label: 'Refresh', category: 'Action', codepoint: 'e5d5', tags: ['reload', 'update', 'sync'] },
  
  // Navigation
  { name: 'arrow_back', label: 'Arrow Back', category: 'Navigation', codepoint: 'e5c4', tags: ['left', 'previous', 'return'] },
  { name: 'arrow_forward', label: 'Arrow Forward', category: 'Navigation', codepoint: 'e5c8', tags: ['right', 'next', 'continue'] },
  { name: 'menu', label: 'Menu', category: 'Navigation', codepoint: 'e5d2', tags: ['hamburger', 'drawer', 'list'] },
  { name: 'close', label: 'Close', category: 'Navigation', codepoint: 'e5cd', tags: ['cross', 'exit', 'cancel'] },
  { name: 'more_vert', label: 'More Vert', category: 'Navigation', codepoint: 'e5d4', tags: ['options', 'dots', 'overflow'] },
  { name: 'expand_more', label: 'Expand More', category: 'Navigation', codepoint: 'e5cf', tags: ['chevron', 'dropdown', 'down'] },
  { name: 'unfold_more', label: 'Unfold More', category: 'Navigation', codepoint: 'e5d7', tags: ['expand', 'sort', 'arrows'] },

  // Communication & Social
  { name: 'mail', label: 'Mail', category: 'Communication', codepoint: 'e158', tags: ['email', 'letter', 'message'] },
  { name: 'chat', label: 'Chat', category: 'Communication', codepoint: 'e0b7', tags: ['bubble', 'conversation', 'comment'] },
  { name: 'call', label: 'Call', category: 'Communication', codepoint: 'e0b0', tags: ['phone', 'telephone', 'mobile'] },
  { name: 'notifications', label: 'Notifications', category: 'Communication', codepoint: 'e7f4', tags: ['bell', 'alarm', 'alert'] },
  { name: 'person', label: 'Person', category: 'Communication', codepoint: 'e7fd', tags: ['user', 'profile', 'account'] },
  { name: 'group', label: 'Group', category: 'Communication', codepoint: 'e7ef', tags: ['users', 'team', 'community'] },
  { name: 'forum', label: 'Forum', category: 'Communication', codepoint: 'e0bf', tags: ['discussions', 'community', 'replies'] },

  // Content & Media
  { name: 'play_arrow', label: 'Play', category: 'Media', codepoint: 'e037', tags: ['start', 'video', 'music'] },
  { name: 'pause', label: 'Pause', category: 'Media', codepoint: 'e034', tags: ['stop', 'freeze', 'wait'] },
  { name: 'volume_up', label: 'Volume Up', category: 'Media', codepoint: 'e050', tags: ['sound', 'audio', 'speaker'] },
  { name: 'image', label: 'Image', category: 'Media', codepoint: 'e3f4', tags: ['photo', 'picture', 'artwork'] },
  { name: 'videocam', label: 'Videocam', category: 'Media', codepoint: 'e04b', tags: ['camera', 'record', 'film'] },
  { name: 'palette', label: 'Palette', category: 'Media', codepoint: 'e40a', tags: ['colors', 'art', 'theme'] },
  { name: 'movie', label: 'Movie', category: 'Media', codepoint: 'e02c', tags: ['cinema', 'film', 'video'] },

  // Editor & Type
  { name: 'format_bold', label: 'Format Bold', category: 'Editor', codepoint: 'e238', tags: ['type', 'text', 'strong'] },
  { name: 'format_italic', label: 'Format Italic', category: 'Editor', codepoint: 'e23f', tags: ['slant', 'text', 'emphasis'] },
  { name: 'format_size', label: 'Format Size', category: 'Editor', codepoint: 'e245', tags: ['font', 'text', 'typography'] },
  { name: 'text_fields', label: 'Text Fields', category: 'Editor', codepoint: 'e262', tags: ['font', 'input', 'letters'] },
  { name: 'spellcheck', label: 'Spellcheck', category: 'Editor', codepoint: 'e8ce', tags: ['grammar', 'letters', 'abc'] },
  { name: 'translate', label: 'Translate', category: 'Editor', codepoint: 'e8e2', tags: ['language', 'global', 'scripts'] },
  { name: 'code', label: 'Code', category: 'Editor', codepoint: 'e86f', tags: ['programming', 'developer', 'html'] },
  { name: 'terminal', label: 'Terminal', category: 'Editor', codepoint: 'eb8e', tags: ['console', 'shell', 'developer'] },

  // Devices & Tech
  { name: 'smartphone', label: 'Smartphone', category: 'Device', codepoint: 'e32c', tags: ['android', 'mobile', 'phone'] },
  { name: 'laptop', label: 'Laptop', category: 'Device', codepoint: 'e31e', tags: ['computer', 'mac', 'pc'] },
  { name: 'tablet', label: 'Tablet', category: 'Device', codepoint: 'e32f', tags: ['ipad', 'screen', 'device'] },
  { name: 'cloud', label: 'Cloud', category: 'Device', codepoint: 'e2bd', tags: ['storage', 'sync', 'weather'] },
  { name: 'devices', label: 'Devices', category: 'Device', codepoint: 'e1b1', tags: ['multiplatform', 'responsive', 'screens'] },
  { name: 'speed', label: 'Speed', category: 'Device', codepoint: 'e9e4', tags: ['performance', 'gauge', 'fast'] },
  { name: 'bolt', label: 'Bolt', category: 'Device', codepoint: 'ea0b', tags: ['lightning', 'instant', 'power'] }
];
