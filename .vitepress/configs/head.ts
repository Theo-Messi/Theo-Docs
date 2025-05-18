import type { HeadConfig } from 'vitepress'

// 导出head配置
export const head: HeadConfig[] = [
  ['meta', { name: 'theme-color', content: '#ffffff' }],
  ['meta', { name: 'msapplication-TileColor', content: '#da532c' }],
  [
    'link',
    { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5' }
  ],
  [
    'link',
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon-96x96.png',
      sizes: '96x96'
    }
  ],
  ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
  ['link', { rel: 'shortcut icon', href: '/favicon.ico' }],
  [
    'link',
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }
  ],
  ['meta', { name: 'apple-mobile-web-app-title', content: 'Theo-Docs' }],
  ['link', { rel: 'manifest', href: '/site.webmanifest' }],
  ['meta', { name: 'author', content: 'Theo' }],
  ['meta', { name: 'copyright', content: 'Theo' }],
  ['meta', { property: 'og:type', content: 'website' }],
  ['meta', { property: 'og:locale', content: 'zh-Hans' }],
  ['meta', { property: 'og:site_name', content: 'Theo Docs' }],
  ['meta', { property: 'og:title', content: 'Theo Docs' }],
  ['meta', { property: 'og:url', content: 'https://doc.theojs.cn/' }],
  [
    'meta',
    {
      property: 'og:image',
      content: 'https://i.theojs.cn/logo/Theo-Docs-og.webp'
    }
  ],
  [
    'meta',
    {
      property: 'og:description',
      content:
        '流媒体森林是一个全方位的流媒体观影指南，提供国内外主流流媒体平台（Netflix、Disney+、HBO Max、Spotify、YouTube、Premium、奈飞、青云梯、HBO Max、Spotify、奈飞小铺、银河录像局）的解锁、线路、机场、服务、教程等内容，致力于为广大用户提供最全面、最快捷的流媒体解锁服务。'
    }
  ],
  [
    'meta',
    {
      name: 'description',
      content:
        '流媒体森林是一个全方位的流媒体观影指南，提供国内外主流流媒体平台（Netflix、Disney+、HBO Max、Spotify、YouTube、Premium、奈飞、青云梯、HBO Max、Spotify、奈飞小铺、银河录像局）的解锁、线路、机场、服务、教程等内容，致力于为广大用户提供最全面、最快捷的流媒体解锁服务。'
    }
  ],
  ['meta', { name: 'format-detection', content: 'telephone=no' }],
  ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
  ['meta', { name: 'twitter:site', content: '@TheoMessi_' }],
  ['meta', { name: 'twitter:title', content: 'Theo-Docs' }],
  [
    'meta',
    {
      name: 'twitter:description',
      content:
        '流媒体森林是一个全方位的流媒体观影指南，提供国内外主流流媒体平台（Netflix、Disney+、HBO Max、Spotify、YouTube、Premium、奈飞、青云梯、HBO Max、Spotify、奈飞小铺、银河录像局）的解锁、线路、机场、服务、教程等内容，致力于为广大用户提供最全面、最快捷的流媒体解锁服务。'
    }
  ],
  [
    'meta',
    {
      name: 'twitter:image',
      content: 'https://i.theojs.cn/logo/Theo-Docs-og.webp'
    }
  ],
  [
    'meta',
    {
      name: 'keywords',
      content:
        '流媒体, Netflix, Disney+, HBO Max, Spotify, YouTube, 解锁, 流媒体观影, 奈飞, 青云梯, 奈飞小铺, 银河录像局'
    }
  ],

  [
    'meta',
    {
      name: 'google-site-verification',
      content: 'bOXLe1lrqePxxyksBSbMgqbELMkTX9Q_FkyEuVwTobI'
    }
  ]
]
