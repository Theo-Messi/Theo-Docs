import type { HeadConfig } from 'vitepress'

const description =
  '全方位流媒体观影指南，涵盖 Netflix、Disney+、HBO Max、Spotify、YouTube Premium、奈飞、青云梯、Galaxy Cloud - 银河云、FlyingBird - 飞鸟机场、飞兔云、TNT Cloud、Totoro Cloud - 龙猫云、奈飞小铺、银河录像局、蜜糖商店等，畅享全球精彩内容与解锁服务'

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
  ['link', { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5' }],
  ['link', { rel: 'manifest', href: '/site.webmanifest' }],

  // 站点基本信息
  ['meta', { name: 'author', content: 'Theo' }],
  ['meta', { name: 'copyright', content: 'Theo' }],
  ['meta', { name: 'apple-mobile-web-app-title', content: 'Theo-Docs' }],

  // Open Graph (Facebook, LinkedIn 等)
  ['meta', { property: 'og:type', content: 'website' }],
  ['meta', { property: 'og:locale', content: 'zh-Hans' }],
  ['meta', { property: 'og:site_name', content: 'Theo Docs' }],
  ['meta', { property: 'og:title', content: 'Theo Docs' }],
  ['meta', { property: 'og:url', content: 'https://doc.theojs.cn/' }],
  ['meta', { property: 'og:image', content: 'https://i.theojs.cn/logo/Theo-Docs-og.webp' }],
  ['meta', { property: 'og:description', content: description }],

  // Twitter Card
  ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
  ['meta', { name: 'twitter:site', content: '@TheoMessi_' }],
  ['meta', { name: 'twitter:title', content: 'Theo-Docs' }],
  ['meta', { name: 'twitter:image', content: 'https://i.theojs.cn/logo/Theo-Docs-og.webp' }],
  ['meta', { name: 'twitter:description', content: description }],

  // 其他 meta
  ['meta', { name: 'robots', content: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1' }],
  ['meta', { name: 'google-site-verification', content: 'bOXLe1lrqePxxyksBSbMgqbELMkTX9Q_FkyEuVwTobI' }]
]
