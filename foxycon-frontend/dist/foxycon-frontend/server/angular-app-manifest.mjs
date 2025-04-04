
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
    'index.csr.html': {size: 755, hash: '478e9a564f2772a3f1bdad58a2caca8bdd1421b34144a47b6a453feee5b2ac8e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1012, hash: 'be961b5bb35bd1c1fc4c84d251f647e643c8f50800626a8ff6af31876d34b78a', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'channel_search/index.html': {size: 3557, hash: 'f76f27a619f3d1908d431feb1495dd33438ee497f986f824ecd7dc1338e4c371', text: () => import('./assets-chunks/channel_search_index_html.mjs').then(m => m.default)},
    'auth/index.html': {size: 3557, hash: 'f76f27a619f3d1908d431feb1495dd33438ee497f986f824ecd7dc1338e4c371', text: () => import('./assets-chunks/auth_index_html.mjs').then(m => m.default)},
    'video_search/index.html': {size: 3557, hash: 'f76f27a619f3d1908d431feb1495dd33438ee497f986f824ecd7dc1338e4c371', text: () => import('./assets-chunks/video_search_index_html.mjs').then(m => m.default)},
    'index.html': {size: 3557, hash: 'f76f27a619f3d1908d431feb1495dd33438ee497f986f824ecd7dc1338e4c371', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'channel_inspection/index.html': {size: 3557, hash: 'f76f27a619f3d1908d431feb1495dd33438ee497f986f824ecd7dc1338e4c371', text: () => import('./assets-chunks/channel_inspection_index_html.mjs').then(m => m.default)},
    'styles-ELWS2VTS.css': {size: 131, hash: 'X9sQkW5UFF8', text: () => import('./assets-chunks/styles-ELWS2VTS_css.mjs').then(m => m.default)}
  },
};
