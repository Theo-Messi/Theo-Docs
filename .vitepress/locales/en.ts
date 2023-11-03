import { nav, sidebar } from '../configs/en'
import { defineConfig } from 'vitepress'

export default defineConfig({
  // 站点语言
  lang: 'en-US',

  // 站点介绍
  description:
    'Network technology, VPS, ESXI, OpenWrt, Qinglong panel, Feng Shui metaphysics, picgo, github, picture bed, Merlin firmware, ASUS, fancyss, scientific Internet, clasn, unicorn card, homebrew, git, docker, linux, markdown, Oracle , Google Cloud, firewall, streaming media, JD.com, Alibaba Cloud',

  themeConfig: {
    // // logo
    logo: '/avatar.png',

    // 社交链接
    socialLinks: [{ icon: 'github', link: 'https://github.com/Theo-messi' }],

    // false去除网站标题 只显示logo
    // siteTitle: false,

    // GitHub编辑页面
    editLink: {
      pattern: 'https://github.com/Theo-messi/VitePress/blob/main/src/:path'
    },

    // 目录设置
    outline: 'deep', // 索引级别
    // outlineTitle: '本页目录', // 目录文本

    // 上次更新
    // lastUpdated: { text: '上次更新' },

    // 文章翻页
    // docFooter: {
    //   prev: '上一篇',
    //   next: '下一篇'
    // },

    // 移动端 - 外观
    // darkModeSwitchLabel: '外观',

    // 移动端 - 返回顶部
    // returnToTopLabel: '返回顶部',

    // 移动端 - menu
    // sidebarMenuLabel: '文章',

    // 导航栏
    nav,

    // 侧边栏
    sidebar,

    // 底部信息
    footer: {
      message: 'Released Under The MIT License.',
      copyright:
        'Copyright © 2019 - 2023 <a href="https://github.com/Theo-messi" target="_blank">Theo</a> . All Rights Reserved.'
    }
  }
})
