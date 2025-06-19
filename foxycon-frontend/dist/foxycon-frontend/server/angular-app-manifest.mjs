
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
    "redirectTo": "/video_search",
    "route": "/youtube"
  },
  {
    "renderMode": 2,
    "route": "/auth"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 963, hash: '312f8f204521b2f4e397fb8e679788b6de12995c95e7f798f59be4bf1bb8ec62', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1012, hash: '115f91467f857cc7cf6c6b988c5ccc3d5cea6bdc2fa98f2590b259d3b6f1db3f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 2005, hash: '35c3c4952e264a2bf62b021110a67f6f7a269be44ca2ca84ce6b1843b6e8ab35', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'channel_search/index.html': {size: 2005, hash: '35c3c4952e264a2bf62b021110a67f6f7a269be44ca2ca84ce6b1843b6e8ab35', text: () => import('./assets-chunks/channel_search_index_html.mjs').then(m => m.default)},
    'auth/index.html': {size: 2005, hash: '35c3c4952e264a2bf62b021110a67f6f7a269be44ca2ca84ce6b1843b6e8ab35', text: () => import('./assets-chunks/auth_index_html.mjs').then(m => m.default)},
    'video_search/index.html': {size: 2005, hash: '35c3c4952e264a2bf62b021110a67f6f7a269be44ca2ca84ce6b1843b6e8ab35', text: () => import('./assets-chunks/video_search_index_html.mjs').then(m => m.default)},
    'channel_inspection/index.html': {size: 2005, hash: '35c3c4952e264a2bf62b021110a67f6f7a269be44ca2ca84ce6b1843b6e8ab35', text: () => import('./assets-chunks/channel_inspection_index_html.mjs').then(m => m.default)},
    'styles-ROTJRHBU.css': {size: 808, hash: 'LUVRRGJL/nQ', text: () => import('./assets-chunks/styles-ROTJRHBU_css.mjs').then(m => m.default)}
  },
};
