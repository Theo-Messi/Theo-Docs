import type { DefaultTheme } from 'vitepress'
// 导航栏设置

export const nav: DefaultTheme.Config['nav'] = [
  {
    text: '文档记录',
    link: '/record/build-picture-bed',
    activeMatch: '^/record/'
  },
  {
    text: '入门指南',
    link: '/Getting-Started-Guide/Vercel-CLI',
    activeMatch: '^/Getting-Started-Guide/'
  },
  { text: 'VMware ESXi', items: Nav_ESXi(), activeMatch: '^/ESXi/' },
  { text: '把玩服务器', items: Nav_Vps(), activeMatch: '^/vps/' },
  {
    text: 'ASUS Router',
    link: '/ASUS-Router/Flashing-prerequisites',
    activeMatch: '^/ASUS-Router/'
  },
  {
    text: '流媒体观影',
    link: '/streaming/Netflix-guide',
    activeMatch: '^/streaming/'
  },
  {
    text: '服务推荐',
    link: '/serve/sharing/Account-sharing-guide',
    activeMatch: '^/serve/'
  },
  { text: '阿里云盘分享', link: 'https://share.theovan.cn/' }
]

// 操作指南
export function Nav_ESXi() {
  return [
    {
      // text: 'ESXi虚拟机',
      items: [
        { text: 'ESXi 8.0 部署指南', link: '/ESXi/Install/guide' },
        {
          text: 'OpenWrt/iStoreOS',
          link: '/ESXi/openwrt/openwrt-real-time-packet-capture'
        }
      ]
    }
  ]
}
// 操作指南
export function Nav_Vps() {
  return [
    {
      items: [
        { text: 'Debian/Ubuntu', link: '/vps/Ubuntu' },
        { text: '系统工具', link: '/vps/dd.sh' },
        { text: '搭建服务', link: '/vps/Install-Nezha-panel' },
        { text: '青龙面板', link: '/vps/ql/Install-Qinglong-panel' }
      ]
    }
  ]
}
