
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
    'index.csr.html': {size: 963, hash: '5569b796add86c7064d1fe7ff55bb4bd09c81ce15545f67f44d5b0b19eb67266', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1012, hash: 'b2cd13964ba0810b4320df63e3d33d44a02c3c2b10c9b1179dabdc347915c503', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 1998, hash: '777b285408809c49c24321293d352e1a325805c68291bd5e09ad10231ba91c7d', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'channel_search/index.html': {size: 1998, hash: '777b285408809c49c24321293d352e1a325805c68291bd5e09ad10231ba91c7d', text: () => import('./assets-chunks/channel_search_index_html.mjs').then(m => m.default)},
    'channel_inspection/index.html': {size: 1998, hash: '777b285408809c49c24321293d352e1a325805c68291bd5e09ad10231ba91c7d', text: () => import('./assets-chunks/channel_inspection_index_html.mjs').then(m => m.default)},
    'video_search/index.html': {size: 1998, hash: '777b285408809c49c24321293d352e1a325805c68291bd5e09ad10231ba91c7d', text: () => import('./assets-chunks/video_search_index_html.mjs').then(m => m.default)},
    'auth/index.html': {size: 1998, hash: '777b285408809c49c24321293d352e1a325805c68291bd5e09ad10231ba91c7d', text: () => import('./assets-chunks/auth_index_html.mjs').then(m => m.default)},
    'styles-ROTJRHBU.css': {size: 808, hash: 'LUVRRGJL/nQ', text: () => import('./assets-chunks/styles-ROTJRHBU_css.mjs').then(m => m.default)}
  },
};
