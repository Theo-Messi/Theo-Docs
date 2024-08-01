// src/footerData.ts
export interface Link {
  name: string
  href: string
}

export interface Section {
  title: string
  links: Link[]
  internal?: boolean
}

export const sections: Section[] = [
  {
    title: 'GitHub Source',
    links: [
      {
        name: 'Theo-Docs',
        href: 'https://github.com/Theo-Messi/Theo-Docs'
      },
      {
        name: '玄学宝典',
        href: 'https://github.com/Theo-Messi/xx.theojs.cn'
      },
      {
        name: '阿里云盘资源分享',
        href: 'https://github.com/Theo-Messi/share.theojs.cn'
      },
      {
        name: '常用配置文件',
        href: 'https://github.com/Theo-Messi/dotfiles'
      }
    ]
  },
  {
    title: '合作伙伴',
    links: [
      { name: '银河录像局', href: 'https://nf.video/kaIuE' },
      { name: '奈飞小铺', href: 'https://ihezu.love/UKTer6' },
      {
        name: 'FlyingBird',
        href: 'https://fbinv01.fbaff.cc/auth/register?code=RZP3'
      },
      {
        name: 'Bridge The Wise',
        href: 'https://patriot.ninja/aff.php?aff=1471'
      },
      {
        name: 'SMS-Activate',
        href: 'https://sms-activate.org/?ref=8170513'
      }
    ]
  },
  {
    title: '观影指南',
    internal: true,
    links: [
      { name: 'Netflix', href: '/streaming/Netflix-guide' },
      { name: 'Disney+', href: '/streaming/Disney-introduce' },
      { name: 'Spotify Premium', href: '/streaming/Spotify' },
      { name: 'YouTube Premium', href: '/streaming/YouTube' },
      { name: 'Hulu', href: '/streaming/Hulu' },
      { name: 'HBO Max', href: '/streaming/HBO-Max' }
    ]
  },
  {
    title: '相关链接',
    links: [
      { name: 'Theo-Docs', href: 'https://doc.theojs.cn/' },
      { name: '玄学宝典', href: 'https://xx.theojs.cn/' },
      { name: '阿里云盘资源分享', href: 'https://share.theojs.cn/' },
      { name: 'VitePress', href: 'https://vitepress.dev/' }
    ]
  }
]
