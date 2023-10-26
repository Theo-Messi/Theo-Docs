import type { DefaultTheme } from 'vitepress'
// 导航栏设置

export const nav: DefaultTheme.Config['nav'] = [
  { text: 'Front-end Nav', link: '/en/nav' },
  { text: 'Documentation', items: Nav_Docs_en(), activeMatch: '/en/skill/' },
  { text: 'Front-end story', items: Nav_Fe_en(), activeMatch: '/en/fe/' },
  { text: 'VPS User Guide', items: Nav_Vps_en(), activeMatch: '/en/VPS/' },
  {
    text: 'ESXI Installation Guide',
    items: Nav_Esxi_en(),
    activeMatch: '/en/ESXI/'
  },
  { text: 'Qinglong panel', items: Nav_Ql_en(), activeMatch: '/en/Docker/' },
  { text: 'my website', items: Nav_Zd_en() }
]

// 文档记录
export function Nav_Docs_en() {
  return [
    {
      items: [
        { text: 'daily records', link: '/en/skill/JL-01' },
        { text: 'Getting Started Guide', link: '/en/skill/RM-01' },
        { text: 'Merlin operation documentation', link: '/en/skill/ML-01' }
      ]
    }
  ]
}

// 前端物语
export function Nav_Fe_en() {
  return [
    {
      items: [
        {
          text: 'JavaScript basic knowledge',
          link: '/en/fe/javascript/types'
        },
        { text: 'HTML / CSS', link: '/en/fe/html/' },
        { text: 'ES6 Common knowledge points', link: '/en/fe/es6/' },
        { text: 'TypeScript', link: '/en/fe/typescript/base' }
      ]
    },
    {
      items: [
        { text: 'Engineering project principles', link: '/en/fe/gc/GC-01' },
        { text: 'Browser knowledge', link: '/en/fe/browser/' },
        { text: 'Concept knowledge points', link: '/en/fe/concept/module' },
        { text: 'Programming questions', link: '/en/fe/coding/' }
      ]
    }
  ]
}

// VPS使用指南
export function Nav_Vps_en() {
  return [
    {
      items: [
        { text: 'Basic Settings', link: '/en/VPS/01' },
        { text: 'Advanced use', link: '/en/VPS/02' },
        { text: 'Build services', link: '/en/VPS/06' }
      ]
    }
  ]
}

// ESXI安装指南
export function Nav_Esxi_en() {
  return [
    {
      items: [
        { text: 'ESXi 8.0 Install', link: '/en/ESXI/ESXI-01' },
        { text: 'ESXI — OpenWrt', link: '/en/ESXI/OP-01' }
      ]
    }
  ]
}

// 青龙面板
export function Nav_Ql_en() {
  return [
    {
      items: [
        { text: 'Install Qinglong panel', link: '/en/Docker/QL-01' },
        { text: 'Get Jingdong Cookie', link: '/en/Docker/JD-01' },
        { text: 'Get Alibaba cloud disk Cookie', link: '/en/Docker/AL-01' }
      ]
    }
  ]
}
// 个人站点
export function Nav_Zd_en() {
  return [
    {
      items: [
        { text: '流媒体森林', link: 'https://theovan.wiki/' },
        { text: '玄学宝典', link: 'https://xx.theovan.xyz/' },
        { text: 'ChatGPT', link: 'https://ai.theovan.xyz/' },
        { text: 'Sponsor', link: 'https://github.com/sponsors/Theo-messi' }
      ]
    }
  ]
}
