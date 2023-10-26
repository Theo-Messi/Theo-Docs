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
        { text: '日常记录', link: '/en/skill/JL-01' },
        { text: '入门指南', link: '/en/skill/RM-01' },
        { text: '梅林操作文档', link: '/en/skill/ML-01' }
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
          text: 'JavaScript 基础知识',
          link: '/en/fe/javascript/types'
        },
        { text: 'HTML / CSS', link: '/en/fe/html/' },
        { text: 'ES6 常用知识点', link: '/en/fe/es6/' },
        { text: 'TypeScript', link: '/en/fe/typescript/base' }
      ]
    },
    {
      items: [
        { text: '工程化项目原理', link: '/en/fe/gc/GC-01' },
        { text: '浏览器知识', link: '/en/fe/browser/' },
        { text: '概念知识点', link: '/en/fe/concept/module' },
        { text: '编程题', link: '/en/fe/coding/' }
      ]
    }
  ]
}

// VPS使用指南
export function Nav_Vps_en() {
  return [
    {
      items: [
        { text: '基础设置', link: '/en/VPS/01' },
        { text: '进阶使用', link: '/en/VPS/02' },
        { text: '搭建服务', link: '/en/VPS/06' }
      ]
    }
  ]
}

// ESXI安装指南
export function Nav_Esxi_en() {
  return [
    {
      items: [
        { text: 'ESXi 8.0安装', link: '/en/ESXI/ESXI-01' },
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
        { text: '安装青龙面板', link: '/en/Docker/QL-01' },
        { text: '获取京东Cookie', link: '/en/Docker/JD-01' },
        { text: '获取阿里云盘Cookie', link: '/en/Docker/AL-01' }
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
        { text: '赞助我', link: 'https://github.com/sponsors/Theo-messi' }
      ]
    }
  ]
}
