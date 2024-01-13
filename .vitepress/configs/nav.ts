import type { DefaultTheme } from 'vitepress'
// 导航栏设置

export const nav: DefaultTheme.Config['nav'] = [
  { text: '前端导航', link: '/nav', activeMatch: '^/nav' },
  { text: '文档记录', link: '/record/build-picture-bed', activeMatch: '^/record/' },
  { text: '操作指南', items: Nav_Cz(), activeMatch: '^/guide/' },
  { text: '观影指南', items: Nav_streaming(), activeMatch: '^/streaming/' },
  { text: '账号合租', items: Nav_sharing(), activeMatch: '^/sharing/' },
  { text: 'Netflix 机场', items: Nav_airport(), activeMatch: '^/airport/' },
  { text: '一键直达', items: Nav_Serve() }
]

// 操作指南
export function Nav_Cz() {
  return [
    {
      text: 'VPS服务器',
      items: [
        { text: '基础设置', link: '/guide/vps/Oracle-Cloud' },
        { text: '进阶使用', link: '/guide/vps/Simplify-system-reinstallation' },
        { text: '搭建服务', link: '/guide/vps/Install-Nezha-panel' }
      ]
    },
    {
      text: 'ESXI虚拟机',
      items: [
        { text: 'ESXi 8.0 部署指南', link: '/guide/esxi/Installation-guide' },
        { text: 'ESXI 部署 OpenWrt', link: '/guide/esxi/Installation-Openwrt' },
        { text: 'ESXI 部署 AdGuardHome', link: '/guide/esxi/Install-AdGuardHome' }
      ]
    },
    {
      text: '青龙面板',
      items: [
        { text: '安装青龙面板', link: '/guide/ql/Install-Qinglong-panel' },
        { text: '获取京东Cookie', link: '/guide/ql/JD-Cookie-plug-in' },
        { text: '获取阿里云盘Cookie', link: '/guide/ql/Alipan-Get-cookies-automatically' }
      ]
    },
    {
      text: '华硕路由器固件',
      items: [
        { text: '刷机须知', link: '/guide/asus/Flashing-prerequisites' },
        { text: '固件平台介绍', link: '/guide/asus/Firmware-platform-introduction' },
        { text: 'fancyss', link: '/guide/asus/fancyss' },
        { text: 'Merlin Clash', link: '/guide/asus/Merlin-Clash' }
      ]
    },
    {
      text: '入门指南',
      items: [
        { text: 'Homebrew', link: '/guide/Getting-Started-Guide/Homebrew' },
        { text: 'Git', link: '/guide/Getting-Started-Guide/Git' },
        { text: 'Docker', link: '/guide/Getting-Started-Guide/Docker' },
        { text: 'Linux', link: '/guide/Getting-Started-Guide/Linux' },
        { text: 'Markdown', link: '/guide/Getting-Started-Guide/Markdown' },
        { text: 'PNPM', link: '/guide/Getting-Started-Guide/PNPM' },
        { text: 'Vim', link: '/guide/Getting-Started-Guide/Vim' }
      ]
    }
  ]
}

// 流媒体观影指南
export function Nav_streaming() {
  return [
    {
      items: [
        { text: 'Netflix', link: '/streaming/Netflix-introduce' },
        { text: 'Disney+', link: '/streaming/Disney-introduce' },
        { text: 'Spotify会员', link: '/streaming/Spotify' },
        { text: 'YouTube会员', link: '/streaming/YouTube' },
        { text: 'Hulu', link: '/streaming/Hulu' },
        { text: 'HBO Max', link: '/streaming/HBO-Max' }
      ]
    }
  ]
}

// 🔥账号合租平台
export function Nav_sharing() {
  return [
    {
      items: [{ text: '账号合租指南', link: '/sharing/Account-sharing-guide' }]
    },
    {
      items: [
        { text: '银河录像局 - AI服务', link: '/sharing/nf-video' },
        { text: '蜜糖商店 - 流媒体账号', link: '/sharing/metshop' },
        { text: '奈飞小铺 - 流媒体账号', link: '/sharing/ihezu' }
      ]
    }
  ]
}

// 推荐 Netflix 机场
export function Nav_airport() {
  return [
    { items: [{ text: '解锁 4K Netflix 机场指南', link: '/airport/Unlock-Netflix' }] },
    {
      items: [
        { text: 'FlyingBird - 飞鸟机场', link: '/airport/FlyingBird' },
        { text: 'Bridge the Wise', link: '/airport/Bridge-the-Wise' },
        { text: '一元机场', link: '/airport/yiyuan' }
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
        { text: '一元机场', link: 'https://xn--4gq62f52gdss.art/#/register?code=tFcXfJEuu' },
        { text: 'FlyingBird - 飞鸟机场', link: 'https://fbaff01.flyb-aff01.com/auth/register?code=RZP3' },
        { text: 'Bridge the Wise', link: 'https://patriot.ninja/aff.php?aff=1471' }
      ]
    },

    {
      // 分组名称
      text: '账号合租平台',
      // 分组页面
      items: [
        { text: '银河录像局 - AI服务', link: 'https://nf.video/kaIuE' },
        { text: '蜜糖商店 - 流媒体账号', link: 'https://metshop.vip?referrerUserNo=MTU51076' },
        { text: '奈飞小铺 - 流媒体账号', link: 'https://ihezu.love/UKTer6' }
      ]
    },
    {
      // 分组名称
      text: '其他服务',
      // 分组页面
      items: [{ text: 'SMS 海外接码平台', link: 'https://sms-activate.org/?ref=8170513' }]
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
