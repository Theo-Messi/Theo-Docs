import type { DefaultTheme } from 'vitepress'
// 导航栏设置

export const nav: DefaultTheme.Config['nav'] = [
  { text: '导航', link: 'nav' },
  { text: '文档记录', items: Nav_Docs(), activeMatch: '/skill/' },
  { text: '前端物语', items: Nav_Fe(), activeMatch: '/fe/' },
  { text: '操作指南', items: Nav_Cz() },
  { text: '观影指南', items: Nav_Streaming() },
  { text: '账号合租', items: Nav_Sharing() },
  { text: '科学上网', items: Nav_Scientific() },
  { text: 'Netflix 机场', items: Nav_Airport() },
  { text: '一键直达', items: Nav_Serve() }
]

// 文档记录
export function Nav_Docs() {
  return [
    {
      items: [
        { text: '日常记录', link: '/skill/JL-01' },
        { text: '入门指南', link: '/skill/RM-01' },
        { text: '梅林操作文档', link: '/skill/ML-01' }
      ]
    }
  ]
}

// 前端物语
export function Nav_Fe() {
  return [
    {
      items: [
        { text: 'JavaScript 基础知识', link: '/fe/javascript/types' },
        { text: 'HTML / CSS', link: '/fe/html/' },
        { text: 'ES6 常用知识点', link: '/fe/es6/' },
        { text: 'TypeScript', link: '/fe/typescript/base' }
      ]
    },
    {
      items: [
        { text: '工程化项目原理', link: '/fe/gc/GC-01' },
        { text: '浏览器知识', link: '/fe/browser/' },
        { text: '概念知识点', link: '/fe/concept/module' },
        { text: '编程题', link: '/fe/coding/' }
      ]
    }
  ]
}
// 操作指南
export function Nav_Cz() {
  return [
    {
      text: 'VPS操作指南',
      items: [
        { text: '基础设置', link: '/VPS/01' },
        { text: '进阶使用', link: '/VPS/02' },
        { text: '搭建服务', link: '/VPS/06' }
      ]
    },
    {
      text: 'ESXI操作指南',
      items: [
        { text: 'ESXi 8.0安装', link: '/ESXI/ESXI-01' },
        { text: 'ESXI — OpenWrt', link: '/ESXI/OP-01' }
      ]
    },
    {
      text: '青龙面板操作指南',
      items: [
        { text: '安装青龙面板', link: '/Docker/QL-01' },
        { text: '获取京东Cookie', link: '/Docker/JD-01' },
        { text: '获取阿里云盘Cookie', link: '/Docker/AL-01' }
      ]
    }
  ]
}

// 流媒体观影指南
export function Nav_Streaming() {
  return [
    {
      items: [
        { text: 'Netflix', link: '/Streaming/Netflix-01' },
        { text: 'Disney+', link: '/Streaming/Disney-01' },
        { text: 'Spotify会员', link: '/Streaming/Spotify-01' },
        { text: 'YouTube会员', link: '/Streaming/YouTube-01' },
        { text: 'Hulu', link: '/Streaming/Hulu-01' },
        { text: 'HBO Max', link: '/Streaming/HBO-Max-01' }
      ]
    }
  ]
}

// 🔥账号合租平台
export function Nav_Sharing() {
  return [
    {
      items: [{ text: '账号合租指南', link: '/Sharing/01' }]
    },
    {
      items: [
        { text: '银河录像局 - AI服务', link: '/Sharing/02' },
        { text: '蜜糖商店 - 流媒体账号', link: '/Sharing/03' },
        { text: '奈飞小铺 - 流媒体账号', link: '/Sharing/04' }
      ]
    }
  ]
}

// 科学上网指南
export function Nav_Scientific() {
  return [
    {
      items: [
        { text: '路由器与客户端选择', link: '/Scientific/01' },
        { text: '线路的区别与选择', link: '/Scientific/02' },
        { text: '关于机场常用服务器线路的科普', link: '/Scientific/03' }
      ]
    }
  ]
}

// 推荐 Netflix 机场
export function Nav_Airport() {
  return [
    {
      items: [{ text: '解锁 4K Netflix 机场指南', link: '/Airport/01' }]
    },
    {
      items: [
        { text: 'FlyingBird - 飞鸟机场', link: '/Airport/03' },
        { text: 'Bridge the Wise', link: '/Airport/04' },
        { text: '一元机场', link: '/Airport/02' }
      ]
    }
  ]
}

// 购买服务
export function Nav_Serve() {
  return [
    {
      // 分组名称
      text: '推荐机场',
      //分组页面
      items: [
        {
          text: '一元机场',
          link: 'https://一元机场.click/#/register?code=tFcXfJEuu'
        },
        {
          text: 'FlyingBird - 飞鸟机场',
          link: 'https://fbaff01.flyb-aff01.com/auth/register?code=RZP3'
        },
        {
          text: 'Bridge the Wise',
          link: 'https://patriot.ninja/aff.php?aff=1471'
        }
      ]
    },

    {
      // 分组名称
      text: '账号合租平台',
      // 分组页面
      items: [
        {
          text: '银河录像局 - AI服务',
          link: 'https://nf.video/kaIuE'
        },
        {
          text: '蜜糖商店 - 流媒体账号',
          link: 'https://metshop.vip?referrerUserNo=MTU51076'
        },
        { text: '奈飞小铺 - 流媒体账号', link: 'https://ihezu.love/UKTer6' }
      ]
    },
    {
      // 分组名称
      text: '其他服务',
      // 分组页面
      items: [
        {
          text: 'SMS 海外接码平台',
          link: 'https://sms-activate.org/?ref=8170513'
        }
      ]
    },
    {
      // 分组名称
      text: '我的网站',
      // 分组页面
      items: [
        { text: '玄学宝典', link: 'https://xx.theovan.xyz/' },
        { text: 'ChatGPT', link: 'https://ai.theovan.xyz/' },
        { text: '赞助我', link: 'https://github.com/sponsors/Theo-messi' }
      ]
    }
  ]
}
