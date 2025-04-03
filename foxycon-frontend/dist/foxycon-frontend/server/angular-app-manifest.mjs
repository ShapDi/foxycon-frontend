
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
    'index.csr.html': {size: 755, hash: '9fe7110629f68eb700fa7c7864605a844fdc6cc2962997ad7ff109b56ee2e98f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1012, hash: '963dd12a5f624547e2a79ed9b4eaf7714cf348e4933c71a75a0fe689e47ce243', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'channel_search/index.html': {size: 3557, hash: '4cd897dcf91a4017ebf47a7acb7ee0a619fb5ad000fccef53932b9e3f90c439e', text: () => import('./assets-chunks/channel_search_index_html.mjs').then(m => m.default)},
    'auth/index.html': {size: 3557, hash: '4cd897dcf91a4017ebf47a7acb7ee0a619fb5ad000fccef53932b9e3f90c439e', text: () => import('./assets-chunks/auth_index_html.mjs').then(m => m.default)},
    'video_search/index.html': {size: 3557, hash: '4cd897dcf91a4017ebf47a7acb7ee0a619fb5ad000fccef53932b9e3f90c439e', text: () => import('./assets-chunks/video_search_index_html.mjs').then(m => m.default)},
    'index.html': {size: 3557, hash: '4cd897dcf91a4017ebf47a7acb7ee0a619fb5ad000fccef53932b9e3f90c439e', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'channel_inspection/index.html': {size: 3557, hash: '4cd897dcf91a4017ebf47a7acb7ee0a619fb5ad000fccef53932b9e3f90c439e', text: () => import('./assets-chunks/channel_inspection_index_html.mjs').then(m => m.default)},
    'styles-ELWS2VTS.css': {size: 131, hash: 'X9sQkW5UFF8', text: () => import('./assets-chunks/styles-ELWS2VTS_css.mjs').then(m => m.default)}
  },
};
