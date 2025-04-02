
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
    'index.csr.html': {size: 755, hash: '36a549b6637062f9ba5815248f37d02ee3b55e16591e0d702d0b2dd573b6d579', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1012, hash: '06a254dcd9787b28b0e465603232dc6fff02e112afb91e2e0e191ee6f2b8879e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'channel_search/index.html': {size: 3557, hash: '69d3a8a214fae82315a4e9629c4adf5ac92b2a01cc78c44a793ab49ab4c606bf', text: () => import('./assets-chunks/channel_search_index_html.mjs').then(m => m.default)},
    'auth/index.html': {size: 3557, hash: '69d3a8a214fae82315a4e9629c4adf5ac92b2a01cc78c44a793ab49ab4c606bf', text: () => import('./assets-chunks/auth_index_html.mjs').then(m => m.default)},
    'video_search/index.html': {size: 3557, hash: '69d3a8a214fae82315a4e9629c4adf5ac92b2a01cc78c44a793ab49ab4c606bf', text: () => import('./assets-chunks/video_search_index_html.mjs').then(m => m.default)},
    'channel_inspection/index.html': {size: 3557, hash: '69d3a8a214fae82315a4e9629c4adf5ac92b2a01cc78c44a793ab49ab4c606bf', text: () => import('./assets-chunks/channel_inspection_index_html.mjs').then(m => m.default)},
    'index.html': {size: 3557, hash: '69d3a8a214fae82315a4e9629c4adf5ac92b2a01cc78c44a793ab49ab4c606bf', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-ELWS2VTS.css': {size: 131, hash: 'X9sQkW5UFF8', text: () => import('./assets-chunks/styles-ELWS2VTS_css.mjs').then(m => m.default)}
  },
};
