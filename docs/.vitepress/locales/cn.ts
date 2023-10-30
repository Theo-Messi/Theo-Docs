import { nav, sidebar } from '../configs/cn'
import { defineConfig } from 'vitepress'

export default defineConfig({
  // 站点语言
  lang: 'zh-Hans',

  // 站点介绍
  description:
    '网络技术,VPS,ESXI,OpenWrt,青龙面板,风水玄学,picgo,github,图床,梅林固件,华硕,fancyss,科学上网,clasn,独角数卡,homebrew,git,docker,linux,markdown,甲骨文,谷歌云,防火墙,流媒体,京东,阿里云',

  themeConfig: {
    // // logo
    logo: '/avatar.png',

    // 社交链接
    socialLinks: [{ icon: 'github', link: 'https://github.com/Theo-messi' }],

    // false去除网站标题 只显示logo
    // siteTitle: false,

    // GitHub编辑页面
    editLink: {
      pattern:
        'https://github.com/Theo-messi/VitePress/blob/main/docs/src/:path',
      text: '为此页提供修改建议'
    },

    // 目录设置
    outline: 'deep', // 索引级别
    outlineTitle: '本页目录', // 目录文本

    // 上次更新
    lastUpdated: { text: '上次更新' },

    // 文章翻页
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },

    // 移动端 - 外观
    darkModeSwitchLabel: '外观',

    // 移动端 - 返回顶部
    returnToTopLabel: '返回顶部',

    // 移动端 - menu
    sidebarMenuLabel: '文章',

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
