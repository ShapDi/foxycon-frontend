
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
    'index.csr.html': {size: 963, hash: '132181779d78fe133f97e4038ea061d16ecdf756b3a1d956f712c018ee7edca4', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1012, hash: 'd071b5e41155bdcd860067d2f33b4864005a5e1a8e14055814dcf292c2fdd802', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 2005, hash: '6d72cfe468627370f0da3c359bab87bc8ce6bb9f301446ba0039ab188168bb3a', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'auth/index.html': {size: 2005, hash: '6d72cfe468627370f0da3c359bab87bc8ce6bb9f301446ba0039ab188168bb3a', text: () => import('./assets-chunks/auth_index_html.mjs').then(m => m.default)},
    'channel_search/index.html': {size: 2005, hash: '6d72cfe468627370f0da3c359bab87bc8ce6bb9f301446ba0039ab188168bb3a', text: () => import('./assets-chunks/channel_search_index_html.mjs').then(m => m.default)},
    'video_search/index.html': {size: 2005, hash: '6d72cfe468627370f0da3c359bab87bc8ce6bb9f301446ba0039ab188168bb3a', text: () => import('./assets-chunks/video_search_index_html.mjs').then(m => m.default)},
    'channel_inspection/index.html': {size: 2005, hash: '6d72cfe468627370f0da3c359bab87bc8ce6bb9f301446ba0039ab188168bb3a', text: () => import('./assets-chunks/channel_inspection_index_html.mjs').then(m => m.default)},
    'styles-ROTJRHBU.css': {size: 808, hash: 'LUVRRGJL/nQ', text: () => import('./assets-chunks/styles-ROTJRHBU_css.mjs').then(m => m.default)}
  },
};
