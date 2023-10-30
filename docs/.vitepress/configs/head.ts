import type { HeadConfig } from 'vitepress'

// 判断当前环境是否为开发环境
const isDevelopment = process.env.NODE_ENV === 'development'

export const head: HeadConfig[] = [
  // 设置图标
  ['link', { rel: 'icon', href: 'https://theovan.xyz/avatar.jpg' }],
  // 设置主题颜色
  ['meta', { name: 'theme-color', content: '#5f67ee' }],
  // 设置og类型
  ['meta', { name: 'og:type', content: 'website' }],
  // 设置og语言
  ['meta', { name: 'og:locale', content: 'cn' }],
  // 设置og语言
  ['meta', { name: 'og:locale', content: 'en' }],
  // 设置og站点名称
  ['meta', { name: 'og:site_name', content: 'Theo Notes' }],
  // 设置og图片
  ['meta', { name: 'og:image', content: 'https://theovan.xyz/avatar.png' }],
  // 设置google adsense账号
  [
    'meta',
    { name: 'google-adsense-account', content: 'ca-pub-1897692334666835' }
  ]
]
