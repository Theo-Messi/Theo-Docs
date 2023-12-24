import type { DefaultTheme } from 'vitepress'
// 导航栏设置

export const nav: DefaultTheme.Config['nav'] = [
  { text: '前端导航', link: '/nav', activeMatch: '^/nav' },
  { text: '文档记录', link: '/skill/JL-01', activeMatch: '^/skill/' },
  { text: '前端物语', items: Nav_Fe(), activeMatch: '^/fe/' },
  { text: '操作指南', items: Nav_Cz(), activeMatch: '^/guide/' },
  { text: '观影指南', items: Nav_Streaming(), activeMatch: '^/Streaming/' },
  { text: '账号合租', items: Nav_Sharing(), activeMatch: '^/Sharing/' },
  { text: 'Netflix 机场', items: Nav_Airport(), activeMatch: '^/Airport/' },
  { text: '一键直达', items: Nav_Serve() }
]

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
      text: 'VPS服务器',
      items: [
        { text: '基础设置', link: '/guide/VPS/01' },
        { text: '进阶使用', link: '/guide/VPS/02' },
        { text: '搭建服务', link: '/guide/VPS/06' }
      ]
    },
    {
      text: 'ESXI虚拟机',
      items: [
        { text: 'ESXi 8.0安装', link: '/guide/ESXI/ESXI-01' },
        { text: 'ESXI — OpenWrt', link: '/guide/ESXI/OP-01' }
      ]
    },
    {
      text: '青龙面板',
      items: [
        { text: '安装青龙面板', link: '/guide/QL/QL-01' },
        { text: '获取京东Cookie', link: '/guide/QL/JD-01' },
        { text: '获取阿里云盘Cookie', link: '/guide/QL/AL-01' }
      ]
    },
    {
      text: '华硕路由器固件',
      items: [
        { text: '刷机须知', link: '/guide/asus/ML-01' },
        { text: '科学上网', link: '/guide/asus/ML-02' },
        { text: 'Merlin Clash', link: '/guide/asus/ML-03 ' }
      ]
    },
    {
      text: '入门指南',
      items: [
        { text: 'Homebrew', link: '/guide/RM/RM-01' },
        { text: 'Git', link: '/guide/RM/RM-02' },
        { text: 'Docker', link: '/guide/RM/RM-03' },
        { text: 'Linux', link: '/guide/RM/RM-04' },
        { text: 'Markdown', link: '/guide/RM/RM-05' },
        { text: 'PNPM', link: '/guide/RM/RM-06' }
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
