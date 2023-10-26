import type { DefaultTheme } from 'vitepress'

// 侧边栏配置
export const sidebar: DefaultTheme.Config['sidebar'] = {
  // VPS使用指南
  '/en/VPS/': { base: '/en/VPS/', items: Sidebar_Vps_en() },
  // 前端物语
  '/en/fe/': { base: '/en/fe/', items: Sidebar_Fe_en() },
  // ESXI安装指南
  '/en/ESXI/': { base: '/en/ESXI/', items: Sidebar_Esxi_en() },
  // 青龙面板
  '/en/Docker/': { base: '/en/Docker/', items: Sidebar_Docker_en() },
  // 文档记录
  '/en/skill/': { base: '/en/skill/', items: Sidebar_Skill_en() }
}

// 文档记录
export function Sidebar_Skill_en() {
  return [
    {
      // 分组名称
      text: 'daily records',
      // 下拉开关
      // collapsed: true,
      // 分组路径
      base: '/en/skill/',
      // 分组页面
      items: [
        { text: 'Use nvm to manage different versions of node', link: 'JL-11' },
        { text: 'Sign Git Commit using GPG', link: 'JL-10' },
        {
          text: 'VitePress builds a personal front-end navigation website',
          link: 'JL-09'
        },
        { text: 'oh-my-zsh installation & configuration', link: 'JL-08' },
        { text: 'VitePress implements click-to-enlarge images', link: 'JL-07' },
        {
          text: 'NPM uses domestic mirrors and restores default sources',
          link: 'JL-06'
        },
        { text: 'Add Prettier formatting code to your project', link: 'JL-05' },
        { text: 'VS Code usage tips', link: 'JL-04' },
        { text: 'VitePress Add Giscu Comments', link: 'JL-03' },
        { text: 'PicGo + Github to build a picture bed', link: 'JL-01' }
      ]
    },
    {
      // 分组名称
      text: 'Getting Started Guide',
      // 下拉开关
      // collapsed: true,
      // 分组路径
      base: '/en/skill/',
      // 分组页面
      items: [
        { text: 'Homebrew', link: 'RM-01' },
        { text: 'Git', link: 'RM-02' },
        { text: 'Docker', link: 'RM-03' },
        { text: 'Linux', link: 'RM-04' },
        { text: 'Markdown', link: 'RM-05' },
        { text: 'PNPM', link: 'RM-06' }
      ]
    },
    {
      // 分组名称
      text: 'Merlin operation documentation',
      // 下拉开关
      // collapsed: true,
      // 分组路径
      base: '/en/skill/',
      // 分组页面
      items: [
        {
          text: 'What you need to know about flashing your machine',
          link: 'ML-01'
        },
        {
          text: 'Scientific Internet',
          collapsed: true,
          items: [
            { text: 'Scientific Internet - Install', link: 'ML-02' },
            { text: 'Scientific Internet - Configuration', link: 'ML-04' }
          ]
        },
        {
          text: 'Merlin Clash',
          collapsed: true,
          items: [
            { text: 'Merlin Clash - Install', link: 'ML-03' },
            { text: 'Merlin Clash - Configuration', link: 'ML-05' }
          ]
        }
      ]
    }
  ]
}

// 前端物语
export function Sidebar_Fe_en() {
  return [
    {
      // 分组名称
      text: 'JavaScript basic knowledge',
      // 下拉开关
      collapsed: false,
      // 分组路径
      base: '/en/fe/javascript/',
      // 分组页面
      items: [
        { text: 'Data Types', link: 'types' },
        { text: 'copy of reference type', link: 'clone' },
        { text: 'type conversion', link: 'conversions' },
        { text: 'Prototypes and prototype chains', link: 'prototype' },
        { text: 'inherit', link: 'inherit' }
      ]
    },
    {
      // 分组名称
      // text: "ES6 常用知识点",
      // 下拉开关
      // collapsed: false,
      // 分组路径
      base: '/en/fe/es6',
      // 分组页面
      items: [{ text: 'ES6 Common knowledge points', link: '/' }]
    },
    {
      // 分组名称
      text: 'TypeScript',
      // 下拉开关
      collapsed: false,
      // 分组路径
      base: '/en/fe/typescript/',
      // 分组页面
      items: [{ text: 'basic knowledge', link: 'base' }]
    },
    {
      // 分组名称
      text: 'HTML / CSS',
      // 下拉开关
      collapsed: false,
      // 分组路径
      base: '/en/fe/',
      // 分组页面
      items: [
        { text: 'HTML theoretical knowledge points', link: 'html/' },
        { text: 'CSS theoretical knowledge points', link: 'css/' }
      ]
    },
    {
      // 分组名称
      text: 'Engineering project principles',
      // 下拉开关
      collapsed: false,
      // 分组路径
      base: '/en/fe/gc/',
      // 分组页面
      items: [
        { text: 'master package ', link: 'GC-01' },
        { text: 'master tsconfig ', link: 'GC-02' },
        { text: 'JS Modular principle ', link: 'GC-03' }
      ]
    },
    {
      // 分组名称
      text: 'Browser knowledge',
      // 下拉开关
      collapsed: false,
      // 分组路径
      base: '/en/fe/',
      // 分组页面
      items: [
        { text: 'Browser related knowledge points', link: 'browser/' },
        { text: 'TCP', link: 'network/tcp' },
        { text: 'HTTP', link: 'network/http' }
      ]
    },
    {
      // 分组名称
      text: 'Concept knowledge points',
      // 下拉开关
      collapsed: false,
      // 分组路径
      base: '/en/fe/concept/',
      // 分组页面
      items: [
        { text: 'Modular', link: 'module' },
        { text: 'Front-end page rendering method', link: 'page-rendering' }
      ]
    },
    {
      // 分组名称
      // text: "编程题",
      // 下拉开关
      collapsed: false,
      // 分组路径
      base: '/en/fe/',
      // 分组页面
      items: [{ text: 'Programming questions', link: 'coding/' }]
    }
  ]
}

// VPS使用指南
export function Sidebar_Vps_en() {
  return [
    {
      // 分组名称
      text: 'Basic Setting',
      // 下拉开关
      // collapsed: true,
      // 分组路径
      base: '/en/VPS/',
      // 分组页面
      items: [
        { text: 'Oracle Cloud - Firewall Settings', link: '01' },
        { text: 'Google Cloud - Firewall Settings', link: '12' },
        { text: 'Enable Root login', link: '03' },
        { text: 'Open firewall port', link: '11' }
      ]
    },
    {
      // 分组名称
      text: 'Advanced use',
      // 下拉开关
      // collapsed: true,
      // 分组路径
      base: '/en/VPS/',
      // 分组页面
      items: [
        { text: 'Simplify system reinstallation', link: '02' },
        { text: 'One-click script deployment to open ARM machine', link: '04' },
        { text: 'VPS All-purpose toolbox', link: '05' }
      ]
    },
    {
      // 分组名称
      text: 'Build services',
      // 下拉开关
      // collapsed: true,
      // 分组路径
      base: '/en/VPS/',
      // 分组页面
      items: [
        { text: 'Install Nezha panel', link: '06' },
        { text: 'V2Ray Build detailed tutorial', link: '07' },
        { text: 'X-ui Build detailed tutorial', link: '08' },
        {
          text: 'VPS One-click detection and unlocking of streaming media',
          link: '09'
        },
        {
          text: 'One-click detection of airport Netflix unlocking',
          link: '10'
        },
        { text: 'Build a unicorn digital card website', link: '13' }
      ]
    }
  ]
}

// ESXI安装指南
export function Sidebar_Esxi_en() {
  return [
    {
      // 分组名称
      text: 'ESXi 8.0 Install',
      // 下拉开关
      // collapsed: true,
      // 分组路径
      base: '/en/ESXI/',
      // 分组页面
      items: [
        { text: 'Installation guide', link: 'ESXI-01' },
        { text: 'ESXI write disk', link: 'ESXI-02' },
        { text: 'Motherboard BIOS settings', link: 'ESXI-03' },
        { text: 'ESXI installation', link: 'ESXI-04' },
        { text: 'ESXI backend configuration', link: 'ESXI-05' },
        { text: 'ESXI frontend configuration', link: 'ESXI-06' }
      ]
    },
    {
      // 分组名称
      text: 'ESXI — OpenWrt',
      // 下拉开关
      // collapsed: true,
      // 分组路径
      base: '/en/ESXI/',
      // 分组页面
      items: [
        { text: 'ESXI installation Openwrt', link: 'OP-01' },
        { text: 'Turn off IPv6', link: 'OP-02' },
        { text: 'PPPOE dial-up', link: 'OP-03' },
        { text: 'OpenWrt memory expansion', link: 'OP-04' }
      ]
    }
  ]
}

// 青龙面板
export function Sidebar_Docker_en() {
  return [
    {
      // 分组名称
      text: 'Install Qinglong panel',
      // 下拉开关
      // collapsed: true,
      // 分组路径
      base: '/en/Docker/',
      // 分组页面
      items: [
        { text: 'Install Docker', link: 'QL-01' },
        { text: 'Install Qinglong panel', link: 'QL-02' },
        { text: 'Alibaba cloud disk sign-in', link: 'QL-03' },
        { text: 'JingDong sign in', link: 'QL-04' },
        { text: 'BiliBili Sign in', link: 'QL-05' }
      ]
    },
    {
      // 分组名称
      text: 'Get JingDong Cookie',
      // 下拉开关
      // collapsed: true,
      // 分组路径
      base: '/en/Docker/',
      //分组页面
      items: [
        { text: 'Plug-in version', link: 'JD-01' },
        { text: 'Browser version', link: 'JD-02' },
        { text: 'Boxjs', link: 'JD-03' }
      ]
    },
    {
      // 分组名称
      text: 'Get Alibaba cloud disk Cookie',
      // 下拉开关
      // collapsed: true,
      // 分组路径
      base: '/en/Docker/',
      // 分组页面
      items: [
        { text: 'Automatic acquisition - refresh_token', link: 'AL-01' },
        { text: 'Get manually - refresh_token', link: 'AL-02' }
      ]
    }
  ]
}
