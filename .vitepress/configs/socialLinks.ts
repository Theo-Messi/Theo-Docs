import type { DefaultTheme } from 'vitepress'

// 社交链接设置

export const socialLinks: DefaultTheme.SocialLink[] = [
  {
    icon: 'github',
    link: 'https://github.com/Theo-Messi/Theo-Docs',
    ariaLabel: 'Github'
  },
  {
    icon: 'gmail',
    link: 'mailto:fanxiaobin422@gmail.com',
    ariaLabel: 'Gmail'
  },
  {
    icon: 'telegram',
    link: 'https://t.me/Theo_Messi',
    ariaLabel: 'Telegram'
  },
  {
    icon: {
      svg: '<iconify-icon icon="twemoji:red-heart" style="margin-right: 0.125em; margin-bottom: 0.125rem; font-size:1.2em" alt="Github Sponsors"></iconify-icon>'
    },
    link: 'https://github.com/sponsors/Theo-Messi',
    ariaLabel: 'Github Sponsors'
  }
]
