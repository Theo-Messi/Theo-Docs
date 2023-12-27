import type { DefaultTheme } from 'vitepress'

// 侧边栏配置
export const sidebar: DefaultTheme.Config['sidebar'] = {
  // VPS使用指南
  '/guide/VPS/': { base: '/guide/VPS/', items: Sidebar_Vps() },
  // 前端物语
  '/fe/': { base: '/fe/', items: Sidebar_Fe() },
  // 华硕路由器固件
  '/guide/asus/': { base: '/guide/asus/', items: Sidebar_Asus() },
  // 入门指南
  '/guide/RM/': { base: '/guide/RM/', items: Sidebar_Rm() },
  // ESXI安装指南
  '/guide/ESXI/': { base: '/guide/ESXI/', items: Sidebar_Esxi() },
  // 青龙面板
  '/guide/QL/': { base: '/guide/QL/', items: Sidebar_QL() },
  // 文档记录
  '/skill/': { base: '/skill/', items: Sidebar_Skill() },
  // 账号合租平台
  '/Sharing/': { base: '/Sharing/', items: Sidebar_Sharing() },
  // 推荐 Netflix 机场
  '/Airport/': { base: '/Airport/', items: Sidebar_Airport() },
  // 流媒体观影指南
  '/Streaming/': { base: '/Streaming/', items: Sidebar_Streaming() }
}

// 文档记录
export function Sidebar_Skill() {
  return [
    {
      // 分组名称
      text: '文档记录',
      // 下拉开关
      // collapsed: true,
      // 分组路径
      base: '/skill/',
      // 分组页面
      items: [
        { text: 'PicGo + Github 搭建图床', link: 'JL-01' },
        { text: 'VitePress 添加 Giscu评论', link: 'JL-03' },
        { text: 'VS Code 使用技巧', link: 'JL-04' },
        { text: '为项目添加 Prettier 格式化代码', link: 'JL-05' },
        { text: 'NPM 使用国内镜像及恢复默认源', link: 'JL-06' },
        { text: 'VitePress实现单击图片放大', link: 'JL-07' },
        { text: 'oh-my-zsh 安装 & 配置', link: 'JL-08' },
        { text: 'VitePress 打造个人前端导航网站', link: 'JL-09' },
        { text: '使用 GPG 签名 Git Commit', link: 'JL-10' },
        { text: '使用 nvm 管理不同版本的 node', link: 'JL-11' },
        { text: '优化 iOS/Android 来电、信息界面体验', link: 'JL-12' }
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
// 华硕路由器固件
export function Sidebar_Asus() {
  return [
    {
      // 分组名称
      text: '梅林操作文档',
      // 下拉开关
      // collapsed: true,
      // 分组路径
      base: '/guide/asus/',
      // 分组页面
      items: [
        { text: '刷机需知', link: 'ML-01' },
        { text: '固件平台介绍', link: 'ML-04' },
        { text: 'fancyss', link: 'ML-02' },
        { text: 'Merlin Clash', link: 'ML-03' }
      ]
    }
  ]
}

// 入门指南
export function Sidebar_Rm() {
  return [
    {
      // 分组名称
      text: '入门指南',
      // 下拉开关
      // collapsed: true,
      // 分组路径
      base: '/guide/RM/',
      // 分组页面
      items: [
        { text: 'Homebrew', link: 'RM-01' },
        { text: 'Git', link: 'RM-02' },
        { text: 'Docker', link: 'RM-03' },
        { text: 'Linux', link: 'RM-04' },
        { text: 'Markdown', link: 'RM-05' },
        { text: 'PNPM', link: 'RM-06' }
      ]
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
      base: '/guide/VPS/',
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
      base: '/guide/VPS/',
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
      base: '/guide/VPS/',
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
      base: '/guide/ESXI/',
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
      base: '/guide/ESXI/',
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
export function Sidebar_QL() {
  return [
    {
      // 分组名称
      text: '安装青龙面板',
      // 下拉开关
      // collapsed: true,
      // 分组路径
      base: '/guide/QL/',
      // 分组页面
      items: [
        { text: '安装Docker', link: 'QL-01' },
        { text: '安装青龙面板', link: 'QL-02' },
        { text: '阿里云盘签到', link: 'QL-03' },
        { text: '京东签到', link: 'QL-04' },
        { text: 'BiliBili 签到', link: 'QL-05' }
      ]
    },
    {
      // 分组名称
      text: '获取京东Cookie',
      // 下拉开关
      // collapsed: true,
      // 分组路径
      base: '/guide/QL/',
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
      base: '/guide/QL/',
      // 分组页面
      items: [
        { text: '自动获取 - refresh_token', link: 'AL-01' },
        { text: '手动获取 - refresh_token', link: 'AL-02' }
      ]
    }
  ]
}
// 流媒体观影指南
export function Sidebar_Streaming() {
  return [
    {
      // 分组名称
      text: 'Netflix 观看指南',
      // 下拉菜单
      // collapsed: true,
      // 分组路径
      base: '/Streaming/',
      // 分组页面
      items: [
        { text: 'Netflix 介绍', link: 'Netflix-01' },
        { text: 'Netflix 如何看4K及适配硬件', link: 'Netflix-02' },
        { text: 'Netflix 常见使用问题及答案', link: 'Netflix-03' },
        { text: 'Netflix 常见错误提示及解决方案', link: 'Netflix-04' },
        { text: 'Netflix 秘密分类的技巧', link: 'Netflix-05' },
        { text: 'Netflix 全球各国影视剧数量', link: 'Netflix-06' },
        { text: 'Netflix 常用浏览器插件汇总', link: 'Netflix-07' },
        { text: 'Netflix 总结', link: 'Netflix-08' }
      ]
    },
    {
      // 分组名称
      text: 'Disney+ 观看指南',
      // 下拉菜单
      // collapsed: true,
      // 分组路径
      base: '/Streaming/',
      // 分组页面
      items: [
        { text: 'Disney+ 介绍', link: 'Disney-01' },
        { text: 'Disney+ 订阅指南', link: 'Disney-02' },
        { text: 'Disney+ 合租介绍', link: 'Disney-03' },
        { text: 'Disney+ 会员使用指南', link: 'Disney-04' },
        { text: 'Disney+ 总结与建议', link: 'Disney-05' }
      ]
    },
    {
      // 分组名称
      text: 'Spotify Premium 指南',
      // 下拉菜单
      // collapsed: true,
      // 分组路径
      base: '/Streaming/',
      // 分组页面
      items: [{ text: 'Spotify Premium 指南', link: 'Spotify-01' }]
    },
    {
      // 分组名称
      text: 'YouTube Premium 会员权益及订阅指南',
      // 下拉菜单
      // collapsed: true,
      // 分组路径
      base: '/Streaming/',
      // 分组页面
      items: [
        { text: 'YouTube Premium 会员权益及订阅指南', link: 'YouTube-01' }
      ]
    },
    {
      // 分组名称
      text: 'Hulu 国内观看指南',
      // 下拉菜单
      // collapsed: true,
      // 分组路径
      base: '/Streaming/',
      // 分组页面
      items: [{ text: 'Hulu 国内观看指南', link: 'Hulu-01' }]
    },
    {
      // 分组名称
      text: 'HBO Max 国内观看指南',
      // 下拉菜单
      // collapsed: true,
      // 分组路径
      base: '/Streaming/',
      // 分组页面
      items: [{ text: 'HBO Max 国内观看指南', link: 'HBO-Max-01' }]
    }
  ]
}

// 账号合租平台
export function Sidebar_Sharing() {
  return [
    {
      // 分组名称
      // text: "账号合租平台",
      // 下拉菜单
      // collapsed: true,
      // 分组路径
      base: '/Sharing/',
      // 分组页面
      items: [
        { text: '账号合租指南', link: '01' },
        { text: '银河录像局 - AI服务', link: '02' },
        { text: '蜜糖商店 - 流媒体账号', link: '03' },
        { text: '奈飞小铺 - 流媒体账号', link: '04' }
      ]
    }
  ]
}

// 推荐 Netflix 机场
export function Sidebar_Airport() {
  return [
    {
      // 分组名称
      // text: "推荐机场",
      // 下拉菜单
      // collapsed: true,
      // 分组路径
      base: '/Airport/',
      // 分组页面
      items: [
        { text: '解锁 4K Netflix 机场指南', link: '01' },
        { text: 'FlyingBird - 飞鸟机场', link: '03' },
        { text: 'Bridge the Wise', link: '04' },
        { text: '一元机场', link: '02' }
      ]
    }
  ]
}
