import type { FooterData } from '@theojs/lumen'

export const Footer_Data: FooterData = {
  beian: {
    icp: '鄂ICP备2024060426号',
    police: '粤公网安备44200102445449号',
    showIcon: true
  },
  author: {
    name: 'Theo-Messi',
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
      icon: 'mdi:account-group',
      links: [
        {
          name: '青云梯',
          icon: 'el:fire',
          color: '#FF5733',
          link: 'https://qytcc01.qingyunti.pro/register?aff=jjgD79Jd'
        },
        {
          name: 'Totoro Cloud - 龙猫云',
          link: 'https://inv03.lmaff01.cc/register?aff=UOk2VSk8'
        },
        {
          name: 'TNT Cloud',
          link: 'https://w05.tntyunb01.cc/#/register?code=lN1ybwM8'
        },
        {
          name: 'FlyingBird',
          link: 'https://fbinv02.fbaff.cc/auth/register?code=RZP3'
        },
        {
          name: '飞兔云',
          link: 'https://feitu.im/index.html?register=2cFF8mg4'
        },
        { name: '银河录像局', link: 'https://nf.video/kaIuE' },
        { name: '奈飞小铺', link: 'https://ihezu.love/UKTer6' },
        {
          name: '蜜糖商店',
          link: 'https://metshop.cn?referrerUserNo=MTU51076'
        },
        {
          name: 'SMS-Activate',
          link: 'https://sms-activate.io/?ref=8170513'
        }
      ]
    },
    {
      title: '观影指南',
      icon: 'mdi:movie',
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
      icon: 'mdi:link',
      links: [
        { name: 'Theo-Docs', link: 'https://doc.theojs.cn/' },
        { name: '玄学宝典', link: 'https://xx.theojs.cn/' },
        { name: 'VitePress', link: 'https://vitepress.dev/' }
      ]
    }
  ]
}
