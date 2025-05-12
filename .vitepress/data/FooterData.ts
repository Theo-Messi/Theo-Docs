import type { FooterData } from '@theojs/lumen'

export const Footer_Data: FooterData = {
  beian: {
    icp: '鄂ICP备2024060426号',
    police: '粤公网安备44200102445449号',
    showIcon: true
  },
  author: {
    name: 'Theo',
    link: 'https://github.com/Theo-Messi'
  },
  group: [
    {
      title: 'GitHub Source',
      icon: 'mdi:github',
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
      title: '合作伙伴',
      icon: 'heroicons:user-group-solid',
      links: [
        {
          name: '青云梯',
          icon: 'el:fire',
          color: '#FF5733',
          link: 'https://s.theojs.cn/qyt'
        },
        { name: 'Totoro Cloud - 龙猫云', link: 'https://s.theojs.cn/totoro' },
        { name: 'TNT Cloud', link: 'https://s.theojs.cn/tnt' },
        { name: 'FlyingBird', link: 'https://s.theojs.cn/flyingbird' },
        { name: '飞兔云', link: 'https://s.theojs.cn/feitu' },
        { name: '银河录像局', link: 'https://s.theojs.cn/yh' },
        { name: '奈飞小铺', link: 'https://s.theojs.cn/ihezu' },
        { name: '蜜糖商店', link: 'https://s.theojs.cn/metshop' },
        { name: 'SMS-Activate', link: 'https://s.theojs.cn/sms' }
      ]
    },
    {
      title: '观影指南',
      icon: 'heroicons:film-16-solid',
      links: [
        { name: 'Netflix', link: '/streaming/netflix-guide' },
        { name: 'Disney+', link: '/streaming/disney-introduce' },
        { name: 'Spotify Premium', link: '/streaming/spotify' },
        { name: 'YouTube Premium', link: '/streaming/youtube' },
        { name: 'Hulu', link: '/streaming/hulu' },
        { name: 'HBO Max', link: '/streaming/hbo-max' }
      ]
    },
    {
      title: '相关链接',
      icon: 'heroicons:link-16-solid',
      links: [
        { name: 'Theo-Docs', link: 'https://doc.theojs.cn/' },
        { name: '玄学宝典', link: 'https://xx.theojs.cn/' },
        { name: 'VitePress', link: 'https://vitepress.dev/' },
        { name: 'Lumen', link: 'https://lumen.theojs.cn/' }
      ]
    }
  ]
}
