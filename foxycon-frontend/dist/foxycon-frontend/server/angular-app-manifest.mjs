
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
    'index.csr.html': {size: 755, hash: 'e1c7dd04a579b7fe719aaf0dd78046a0bece9ed1f86e905b7e3ef47744310650', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1012, hash: '3a4050832dcff1a0b79ff40a0f3933fdb8df0c4b63a9323986d875a0e4fe955f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'channel_search/index.html': {size: 3557, hash: 'bc8de1611401df14e40370be2b6e2188444c55bc1e95abf11d41cccd58e6c24e', text: () => import('./assets-chunks/channel_search_index_html.mjs').then(m => m.default)},
    'auth/index.html': {size: 3557, hash: 'bc8de1611401df14e40370be2b6e2188444c55bc1e95abf11d41cccd58e6c24e', text: () => import('./assets-chunks/auth_index_html.mjs').then(m => m.default)},
    'video_search/index.html': {size: 3557, hash: 'bc8de1611401df14e40370be2b6e2188444c55bc1e95abf11d41cccd58e6c24e', text: () => import('./assets-chunks/video_search_index_html.mjs').then(m => m.default)},
    'channel_inspection/index.html': {size: 3557, hash: 'bc8de1611401df14e40370be2b6e2188444c55bc1e95abf11d41cccd58e6c24e', text: () => import('./assets-chunks/channel_inspection_index_html.mjs').then(m => m.default)},
    'index.html': {size: 3557, hash: 'bc8de1611401df14e40370be2b6e2188444c55bc1e95abf11d41cccd58e6c24e', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-ELWS2VTS.css': {size: 131, hash: 'X9sQkW5UFF8', text: () => import('./assets-chunks/styles-ELWS2VTS_css.mjs').then(m => m.default)}
  },
};
