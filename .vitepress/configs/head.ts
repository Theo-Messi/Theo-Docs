import type { HeadConfig } from 'vitepress'

// 判断当前环境是否为开发环境
const isDevelopment = process.env.NODE_ENV === 'development'

// 导出head配置
export const head: HeadConfig[] = [
  ['meta', { name: 'theme-color', content: '#ffffff' }],
  ['meta', { name: 'msapplication-TileColor', content: '#da532c' }],
  ['meta', { name: 'msapplication-TileImage', content: '/ms-icon-144x144.png' }],
  ['meta', { name: 'manifest', href: '/manifest.json' }],
  ['link', { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5' }],
  ['link', { rel: 'manifest', href: '/site.webmanifest' }],
  ['link', { rel: 'apple-touch-icon', sizes: '57x57', href: '/apple-icon-57x57.png' }],
  ['link', { rel: 'apple-touch-icon', sizes: '60x60', href: '/apple-icon-60x60.png' }],
  ['link', { rel: 'apple-touch-icon', sizes: '72x72', href: '/apple-icon-72x72.png' }],
  ['link', { rel: 'apple-touch-icon', sizes: '76x76', href: '/apple-icon-76x76.png' }],
  ['link', { rel: 'apple-touch-icon', sizes: '114x114', href: '/apple-icon-114x114.png' }],
  ['link', { rel: 'apple-touch-icon', sizes: '120x120', href: '/apple-icon-120x120.png' }],
  ['link', { rel: 'apple-touch-icon', sizes: '144x144', href: '/apple-icon-144x144.png' }],
  ['link', { rel: 'apple-touch-icon', sizes: '152x152', href: '/apple-icon-152x152.png' }],
  ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-icon-180x180.png' }],
  ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }],
  ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' }],
  ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' }],
  ['link', { rel: 'icon', type: 'image/png', sizes: '36x36', href: '/android-icon-36x36.png' }],
  ['link', { rel: 'icon', type: 'image/png', sizes: '48x48', href: '/android-icon-48x48.png' }],
  ['link', { rel: 'icon', type: 'image/png', sizes: '72x72', href: '/android-icon-72x72.png' }],
  ['link', { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/android-icon-96x96.png' }],
  ['link', { rel: 'icon', type: 'image/png', sizes: '144x144', href: '/android-icon-144x144.png' }],
  ['link', { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/android-icon-192x192.png' }],
  ['meta', { name: 'author', content: 'Theo-messi' }],
  ['meta', { name: 'copyright', content: 'Theo-messi' }],
  ['meta', { name: 'og:type', content: 'website' }],
  ['meta', { name: 'og:locale', content: 'zh-CN' }],
  ['meta', { name: 'og:site_name', content: 'Theo Docs' }],
  ['meta', { name: 'og:image', content: 'https://doc.theovan.cn/avatar.png' }],
  ['meta', { name: 'robots', content: 'index, follow' }],
  ['meta', { name: 'evisit-after', content: '1 day' }],
  [
    'meta',
    {
      name: 'description',
      content:
        '流媒体森林是一个全方位的流媒体观影指南，提供国内外主流流媒体平台（Netflix、Disney+、HBO Max、Spotify、YouTube、Premium、奈飞、Bridge the Wise、HBO Max、Spotify、奈飞小铺、银河录像局）的解锁、线路、机场、服务、教程等内容，致力于为广大用户提供最全面、最快捷的流媒体解锁服务。'
    }
  ],
  ['meta', { name: 'baidu-site-verification', content: 'codeva-SMUPLYe8bP' }],
  ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1' }],
  ['meta', { name: 'format-detection', content: 'telephone=no' }],
  ['meta', { name: 'google-site-verification', content: '16826854815998093032' }],
  [
    'meta',
    {
      name: 'og:description',
      content:
        '流媒体森林是一个全方位的流媒体观影指南，提供国内外主流流媒体平台（Netflix、Disney+、HBO Max、Spotify、YouTube、Premium、奈飞、Bridge the Wise、HBO Max、Spotify、奈飞小铺、银河录像局）的解锁、线路、机场、服务、教程等内容，致力于为广大用户提供最全面、最快捷的流媒体解锁服务。'
    }
  ]
]
