
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
    'index.csr.html': {size: 755, hash: '244d1e41eb4a9ca756736b67e648072b1825b9a99fc2769478021a07e2a09e3e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1012, hash: '74009f9b68373f9940304d4f9fa3a078c3f4f8339ac38b697e97bfe6051f781b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'channel_search/index.html': {size: 3557, hash: '7579d7a81dbeb49645598ca0221cd2d1882b3b40b65243eb1aae31ed2ec379f7', text: () => import('./assets-chunks/channel_search_index_html.mjs').then(m => m.default)},
    'auth/index.html': {size: 3557, hash: '7579d7a81dbeb49645598ca0221cd2d1882b3b40b65243eb1aae31ed2ec379f7', text: () => import('./assets-chunks/auth_index_html.mjs').then(m => m.default)},
    'index.html': {size: 3557, hash: '7579d7a81dbeb49645598ca0221cd2d1882b3b40b65243eb1aae31ed2ec379f7', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'video_search/index.html': {size: 3557, hash: '7579d7a81dbeb49645598ca0221cd2d1882b3b40b65243eb1aae31ed2ec379f7', text: () => import('./assets-chunks/video_search_index_html.mjs').then(m => m.default)},
    'channel_inspection/index.html': {size: 3557, hash: '7579d7a81dbeb49645598ca0221cd2d1882b3b40b65243eb1aae31ed2ec379f7', text: () => import('./assets-chunks/channel_inspection_index_html.mjs').then(m => m.default)},
    'styles-ELWS2VTS.css': {size: 131, hash: 'X9sQkW5UFF8', text: () => import('./assets-chunks/styles-ELWS2VTS_css.mjs').then(m => m.default)}
  },
};
