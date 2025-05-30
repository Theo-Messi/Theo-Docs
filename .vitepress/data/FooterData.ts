import type { FooterData } from '@theojs/lumen'

export const Footer_Data: FooterData = {
  beian: {
    icp: { number: '鄂ICP备2024060426号', alt: 'ICP备案' },
    police: { number: '粤公网安备44200102445449号', alt: '公安备案' },
    showIcon: true
  },
  author: { name: 'Theo', link: 'https://github.com/Theo-Messi', alt: '版权' },
  group: [
    {
      title: 'GitHub Source',
      icon: 'mdi:github',
      alt: 'github icon',
      links: [
        {
          name: 'Theo-Docs',
          link: 'https://github.com/Theo-Messi/Theo-Docs'
        },
        {
          name: '玄学宝典',
          link: 'https://github.com/Theo-Messi/xx.theojs.cn'
        },
        {
          name: '常用配置文件',
          link: 'https://github.com/Theo-Messi/dotfiles'
        },
        {
          name: 'Lumen',
          link: 'https://github.com/Theo-Messi/lumen'
        }
      ]
    },
    {
      title: '优质线路',
      icon: 'heroicons:globe-alt-solid',
      alt: '优质线路 icon',
      links: [
        { name: '青云梯', link: 'https://itheo.top/qyt', rel: 'sponsored' },
        {
          name: 'Totoro Cloud',
          link: 'https://itheo.top/totoro',
          rel: 'sponsored'
        },
        { name: 'TNT Cloud', link: 'https://itheo.top/tnt', rel: 'sponsored' },
        {
          name: 'FlyingBird',
          link: 'https://itheo.top/flyingbird',
          rel: 'sponsored'
        },
        { name: '飞兔云', link: 'https://itheo.top/feitu', rel: 'sponsored' }
      ]
    },
    {
      title: '流媒体合租',
      icon: 'heroicons:tv-solid',
      alt: '流媒体合租 icon',
      links: [
        { name: '银河录像局', link: 'https://itheo.top/yh', rel: 'sponsored' },
        { name: '奈飞小铺', link: 'https://itheo.top/ihezu', rel: 'sponsored' },
        {
          name: '蜜糖商店',
          link: 'https://itheo.top/metshop',
          rel: 'sponsored'
        },
        {
          name: 'SMS-Activate',
          link: 'https://itheo.top/sms',
          rel: 'sponsored'
        }
      ]
    },
    {
      title: '相关链接',
      icon: 'heroicons:link-16-solid',
      alt: '链接 icon',
      links: [
        { name: '玄学宝典', link: 'https://xx.theojs.cn/' },
        { name: 'VitePress', link: 'https://vitepress.dev/' },
        { name: 'Lumen', link: 'https://lumen.theojs.cn/' }
      ]
    }
  ]
}
