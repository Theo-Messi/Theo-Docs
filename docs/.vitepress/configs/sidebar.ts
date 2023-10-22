import type { DefaultTheme } from 'vitepress'

// 侧边栏配置
export const sidebar: DefaultTheme.Config['sidebar'] = {
  // VPS使用指南
  '/VPS/': { base: '/VPS/', items: Sidebar_Vps() },
  // 前端物语
  '/fe/': { base: '/fe/', items: Sidebar_Fe() },
  // ESXI安装指南
  '/ESXI/': { base: '/ESXI/', items: Sidebar_Esxi() },
  // 青龙面板
  '/Docker/': { base: '/Docker/', items: Sidebar_Docker() },
  // 文档记录
  '/skill/': { base: '/skill/', items: Sidebar_Skill() }
}

// 文档记录
export function Sidebar_Skill() {
  return [
    {
      // 分组名称
      text: '日常记录',
      // 下拉开关
      // collapsed: true,
      // 分组路径
      base: '/skill/',
      // 分组页面
      items: [
        { text: '使用 nvm 管理不同版本的 node', link: 'JL-11' },
        { text: '使用 GPG 签名 Git Commit', link: 'JL-10' },
        { text: 'VitePress 打造个人前端导航网站', link: 'JL-09' },
        { text: 'oh-my-zsh 安装 & 配置', link: 'JL-08' },
        { text: 'VitePress实现单击图片放大', link: 'JL-07' },
        { text: 'NPM 使用国内镜像及恢复默认源', link: 'JL-06' },
        { text: '为项目添加 Prettier 格式化代码', link: 'JL-05' },
        { text: 'VS Code 使用技巧', link: 'JL-04' },
        { text: 'VitePress 添加 Giscu评论', link: 'JL-03' },
        { text: 'PicGo + Github 搭建图床', link: 'JL-01' }
      ]
    },
    {
      // 分组名称
      text: '入门指南',
      // 下拉开关
      // collapsed: true,
      // 分组路径
      base: '/skill/',
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
      text: '梅林操作文档',
      // 下拉开关
      // collapsed: true,
      // 分组路径
      base: '/skill/',
      // 分组页面
      items: [
        { text: '刷机需知', link: 'ML-01' },
        {
          text: '科学上网',
          collapsed: true,
          items: [
            { text: '科学上网 - 安装', link: 'ML-02' },
            { text: '科学上网 - 配置', link: 'ML-04' }
          ]
        },
        {
          text: 'Merlin Clash',
          collapsed: true,
          items: [
            { text: 'Merlin Clash - 安装', link: 'ML-03' },
            { text: 'Merlin Clash - 配置', link: 'ML-05' }
          ]
        }
      ]
    }
  ]
}

// 前端物语
export function Sidebar_Fe() {
  return [
    {
      // 分组名称
      text: 'JavaScript 基础知识',
      // 下拉开关
      collapsed: false,
      // 分组路径
      base: '/fe/javascript/',
      // 分组页面
      items: [
        { text: '数据类型', link: 'types' },
        { text: '引用类型的拷贝', link: 'clone' },
        { text: '类型转换', link: 'conversions' },
        { text: '原型和原型链', link: 'prototype' },
        { text: '继承', link: 'inherit' }
      ]
    },
    {
      // 分组名称
      // text: "ES6 常用知识点",
      // 下拉开关
      // collapsed: false,
      // 分组路径
      base: '/fe/es6',
      // 分组页面
      items: [{ text: 'ES6 常用知识点', link: '/' }]
    },
    {
      // 分组名称
      text: 'TypeScript',
      // 下拉开关
      collapsed: false,
      // 分组路径
      base: '/fe/typescript/',
      // 分组页面
      items: [{ text: '基础知识', link: 'base' }]
    },
    {
      // 分组名称
      text: 'HTML / CSS',
      // 下拉开关
      collapsed: false,
      // 分组路径
      base: '/fe/',
      // 分组页面
      items: [
        { text: 'HTML 理论知识点', link: 'html/' },
        { text: 'CSS 理论知识点', link: 'css/' }
      ]
    },
    {
      // 分组名称
      text: '工程化项目原理',
      // 下拉开关
      collapsed: false,
      // 分组路径
      base: '/fe/gc/',
      // 分组页面
      items: [
        { text: '掌握 package ', link: 'GC-01' },
        { text: '掌握 tsconfig ', link: 'GC-02' },
        { text: 'JS 模块化原理 ', link: 'GC-03' }
      ]
    },
    {
      // 分组名称
      text: '浏览器知识',
      // 下拉开关
      collapsed: false,
      // 分组路径
      base: '/fe/',
      // 分组页面
      items: [
        { text: '浏览器相关知识点', link: 'browser/' },
        { text: 'TCP', link: 'network/tcp' },
        { text: 'HTTP', link: 'network/http' }
      ]
    },
    {
      // 分组名称
      text: '概念知识点',
      // 下拉开关
      collapsed: false,
      // 分组路径
      base: '/fe/concept/',
      // 分组页面
      items: [
        { text: '模块化', link: 'module' },
        { text: '前端页面渲染方式', link: 'page-rendering' }
      ]
    },
    {
      // 分组名称
      // text: "编程题",
      // 下拉开关
      collapsed: false,
      // 分组路径
      base: '/fe/',
      // 分组页面
      items: [{ text: '编程题', link: 'coding/' }]
    }
  ]
}

// VPS使用指南
export function Sidebar_Vps() {
  return [
    {
      // 分组名称
      text: '基础设置',
      // 下拉开关
      // collapsed: true,
      // 分组路径
      base: '/VPS/',
      // 分组页面
      items: [
        { text: '甲骨文云防火墙设置', link: '01' },
        { text: '谷歌云防火墙设置', link: '12' },
        { text: '开启 Root 登陆', link: '03' },
        { text: '开启防火墙端口', link: '11' }
      ]
    },
    {
      // 分组名称
      text: '进阶使用',
      // 下拉开关
      // collapsed: true,
      // 分组路径
      base: '/VPS/',
      // 分组页面
      items: [
        { text: '简化重装系统', link: '02' },
        { text: '一键脚本部署开ARM机器', link: '04' },
        { text: 'VPS全能工具箱', link: '05' }
      ]
    },
    {
      // 分组名称
      text: '搭建服务',
      // 下拉开关
      // collapsed: true,
      // 分组路径
      base: '/VPS/',
      // 分组页面
      items: [
        { text: '安装哪吒面板', link: '06' },
        { text: 'V2Ray搭建详细教程', link: '07' },
        { text: 'X-ui搭建详细教程', link: '08' },
        { text: 'VPS一键检测流媒体解锁', link: '09' },
        { text: '一键检测机场奈飞解锁', link: '10' },
        { text: '搭建独角数卡网站', link: '13' }
      ]
    }
  ]
}

// ESXI安装指南
export function Sidebar_Esxi() {
  return [
    {
      // 分组名称
      text: 'ESXi 8.0安装',
      // 下拉开关
      // collapsed: true,
      // 分组路径
      base: '/ESXI/',
      // 分组页面
      items: [
        { text: '安装指南', link: 'ESXI-01' },
        { text: 'ESXI写盘', link: 'ESXI-02' },
        { text: '主板BIOS设置', link: 'ESXI-03' },
        { text: 'ESXI安装', link: 'ESXI-04' },
        { text: 'ESXI后台配置', link: 'ESXI-05' },
        { text: 'ESXI前台配置', link: 'ESXI-06' }
      ]
    },
    {
      // 分组名称
      text: 'ESXI — OpenWrt',
      // 下拉开关
      // collapsed: true,
      // 分组路径
      base: '/ESXI/',
      // 分组页面
      items: [
        { text: 'ESXI安装Openwrt', link: 'OP-01' },
        { text: '关闭IPV6', link: 'OP-02' },
        { text: 'PPPOE拨号', link: 'OP-03' },
        { text: 'OpenWrt扩容内存', link: 'OP-04' }
      ]
    }
  ]
}

// 青龙面板
export function Sidebar_Docker() {
  return [
    {
      // 分组名称
      text: '安装青龙面板',
      // 下拉开关
      // collapsed: true,
      // 分组路径
      base: '/Docker/',
      // 分组页面
      items: [
        { text: '安装Docker', link: 'QL-01' },
        { text: '安装青龙面板', link: 'QL-02' },
        { text: '阿里云盘签到', link: 'QL-03' },
        { text: '京东签到', link: 'QL-04' }
      ]
    },
    {
      // 分组名称
      text: '获取京东Cookie',
      // 下拉开关
      // collapsed: true,
      // 分组路径
      base: '/Docker/',
      //分组页面
      items: [
        { text: '插件版', link: 'JD-01' },
        { text: '浏览器版', link: 'JD-02' },
        { text: 'Boxjs', link: 'JD-03' }
      ]
    },
    {
      // 分组名称
      text: '获取阿里云盘Cookie',
      // 下拉开关
      // collapsed: true,
      // 分组路径
      base: '/Docker/',
      // 分组页面
      items: [
        { text: '自动获取 - refresh_token', link: 'AL-01' },
        { text: '手动获取 - refresh_token', link: 'AL-02' }
      ]
    }
  ]
}
