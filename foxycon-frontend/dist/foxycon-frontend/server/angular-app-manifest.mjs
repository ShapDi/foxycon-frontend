
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/channel_search"
  },
  {
    "renderMode": 2,
    "route": "/video_search"
  },
  {
    "renderMode": 2,
    "route": "/channel_inspection"
  },
  {
    "renderMode": 2,
    "route": "/auth"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 755, hash: 'e8ea08ed737105ce89087974c6d89df0619a4d4efec808e5dd74f02b1a1d02bc', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1012, hash: '1b0b72c3fe576beacd65ab71bd44423a19374a8abf39f45cb3669a5c50c17114', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 3557, hash: '0fb99ddf9a829ebc7d1e2a0331c4b92593d4c0a1af7c59a845a8d720acb9f6a2', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'video_search/index.html': {size: 3557, hash: '0fb99ddf9a829ebc7d1e2a0331c4b92593d4c0a1af7c59a845a8d720acb9f6a2', text: () => import('./assets-chunks/video_search_index_html.mjs').then(m => m.default)},
    'channel_search/index.html': {size: 3557, hash: '0fb99ddf9a829ebc7d1e2a0331c4b92593d4c0a1af7c59a845a8d720acb9f6a2', text: () => import('./assets-chunks/channel_search_index_html.mjs').then(m => m.default)},
    'auth/index.html': {size: 3557, hash: '0fb99ddf9a829ebc7d1e2a0331c4b92593d4c0a1af7c59a845a8d720acb9f6a2', text: () => import('./assets-chunks/auth_index_html.mjs').then(m => m.default)},
    'channel_inspection/index.html': {size: 3557, hash: '0fb99ddf9a829ebc7d1e2a0331c4b92593d4c0a1af7c59a845a8d720acb9f6a2', text: () => import('./assets-chunks/channel_inspection_index_html.mjs').then(m => m.default)},
    'styles-ELWS2VTS.css': {size: 131, hash: 'X9sQkW5UFF8', text: () => import('./assets-chunks/styles-ELWS2VTS_css.mjs').then(m => m.default)}
  },
};
