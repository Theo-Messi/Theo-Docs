import type { FooterData } from '@theojs/lumen'

export const Footer_Data: FooterData = {
  beian: {
    icp: { number: '鄂ICP备2024060426号' },
    police: { number: '粤公网安备44200102445449号' },
    showIcon: true
  },
  author: { name: 'Theo', link: 'https://github.com/Theo-Messi' },
  group: [
    {
      title: 'GitHub Source',
      icon: 'mdi:github',
      links: [
        { name: 'Theo-Docs', link: 'https://github.com/Theo-Messi/Theo-Docs' },
        { name: '玄学宝典', link: 'https://github.com/Theo-Messi/xx.theojs.cn' },
        { name: '常用配置文件', link: 'https://github.com/Theo-Messi/dotfiles' },
        { name: 'Lumen', link: 'https://github.com/Theo-Messi/lumen' }
      ]
    },
    {
      title: '优质线路',
      icon: 'heroicons:globe-alt-solid',
      links: [
        { name: 'FlyingBird - 飞鸟机场', link: 'https://itheo.top/flyingbird', rel: 'sponsored noreferrer' },
        { name: 'Totoro - 龙猫云', link: 'https://itheo.top/totoro', rel: 'sponsored noreferrer' },
        { name: '青云梯', link: 'https://itheo.top/qyt', rel: 'sponsored noreferrer' },
        { name: 'Galaxy - 银河云', link: 'https://itheo.top/yhy', rel: 'sponsored noreferrer' },
        { name: 'TNT Cloud', link: 'https://itheo.top/tnt', rel: 'sponsored noreferrer' },
        { name: '小蜜蜂', link: 'https://itheo.top/bee', rel: 'sponsored noreferrer' },
        { name: '飞兔云', link: 'https://itheo.top/feitu', rel: 'sponsored noreferrer' }
      ]
    },
    {
      title: '流媒体合租',
      icon: 'heroicons:tv-solid',
      links: [
        { name: '银河录像局', link: 'https://itheo.top/yh', rel: 'sponsored noreferrer' },
        { name: '奈飞小铺', link: 'https://itheo.top/ihezu', rel: 'sponsored noreferrer' },
        { name: '蜜糖商店', link: 'https://itheo.top/metshop', rel: 'sponsored noreferrer' },
        { name: 'SMS-Activate', link: 'https://itheo.top/sms', rel: 'sponsored noreferrer' }
      ]
    },
    {
      title: '相关链接',
      icon: 'heroicons:link-16-solid',
      links: [
        { name: '玄学宝典', link: 'https://xx.theojs.cn/' },
        { name: 'VitePress', link: 'https://vitepress.dev/' },
        { name: 'Lumen', link: 'https://lumen.theojs.cn/' }
      ]
    }
  ]
}
