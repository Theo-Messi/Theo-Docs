import type { DefaultTheme } from 'vitepress'

// 导航栏设置
export const nav: DefaultTheme.NavItem[] = [
  {
    text: '文档记录',
    link: '/notes/build-picture-bed',
    activeMatch: '^/notes/'
  },
  {
    text: '前端文档',
    link: '/fe/linux/directory',
    activeMatch: '^/fe/'
  },
  {
    text: 'VMware ESXi',
    link: '/esxi/install/guide',
    activeMatch: '^/esxi/'
  },
  {
    text: '把玩服务器',
    link: '/vps/settings/ubuntu',
    activeMatch: '^/vps/'
  },
  {
    text: 'ASUS',
    link: '/asus/flashing-prerequisites',
    activeMatch: '^/asus/'
  },
  {
    text: '流媒体观影',
    link: '/streaming/netflix-guide',
    activeMatch: '^/streaming/'
  },
  {
    text: '服务推荐',
    link: '/serve/sharing/account-sharing-guide',
    activeMatch: '^/serve/'
  }
]
