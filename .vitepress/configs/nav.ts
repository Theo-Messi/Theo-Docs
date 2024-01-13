import type { DefaultTheme } from 'vitepress'
// 导航栏设置

export const nav: DefaultTheme.Config['nav'] = [
  { text: '前端导航', link: '/nav', activeMatch: '^/nav' },
  { text: '文档记录', link: '/record/build-picture-bed', activeMatch: '^/record/' },
  { text: '操作指南', items: Nav_Cz(), activeMatch: '^/guide/' },
  { text: '流媒体观影', link: '/streaming/Netflix-introduce', activeMatch: '^/streaming/' },
  { text: '服务推荐', link: 'serve/sharing/Account-sharing-guide', activeMatch: '^/serve/' }
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
