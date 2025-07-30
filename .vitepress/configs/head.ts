import type { HeadConfig } from 'vitepress'

export const head: HeadConfig[] = [
  // 浏览器 UI 配置
  ['meta', { name: 'theme-color', content: '#ffffff' }],
  ['meta', { name: 'msapplication-TileColor', content: '#da532c' }],
  ['meta', { name: 'format-detection', content: 'telephone=no' }],

  // 网站图标
  ['link', { rel: 'icon', type: 'image/png', href: '/favicon-96x96.png', sizes: '96x96' }],
  ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
  ['link', { rel: 'shortcut icon', href: '/favicon.ico' }],
  ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }],
  ['link', { rel: 'manifest', href: '/site.webmanifest' }],

  // 站点基本信息
  ['meta', { name: 'author', content: 'Theo' }],
  ['meta', { name: 'copyright', content: 'Theo' }],
  ['meta', { name: 'apple-mobile-web-app-title', content: 'Theo-Docs' }],

  // Open Graph
  ['meta', { property: 'og:type', content: 'website' }],
  ['meta', { property: 'og:locale', content: 'zh-Hans' }],
  ['meta', { property: 'og:site_name', content: 'Theo Docs' }],

  // Twitter Card
  ['meta', { name: 'twitter:card', content: 'summary' }],

  // 其他 meta
  ['meta', { name: 'robots', content: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1' }],
  ['meta', { name: 'google-site-verification', content: 'bOXLe1lrqePxxyksBSbMgqbELMkTX9Q_FkyEuVwTobI' }]
]
