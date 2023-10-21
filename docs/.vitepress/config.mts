import { defineConfig } from 'vitepress'
import { nav, sidebar, algolia, head } from './configs'
import timeline from 'vitepress-markdown-timeline'

// 导出默认配置
export default defineConfig({
  // 站点名称
  title: 'Theo Notes',

  // 站点语言
  lang: 'cn',

  // 网站头部
  head,

  // 站点介绍
  description:
    '网络技术,VPS,ESXI,OpenWrt,青龙面板,风水玄学,picgo,github,图床,梅林固件,华硕,fancyss,科学上网,clasn,独角数卡,homebrew,git,docker,linux,markdown,甲骨文,谷歌云,防火墙,流媒体,京东,阿里云',

  // 上次更新时间戳
  lastUpdated: true,

  // 开启后网址后缀无'html'
  cleanUrls: true,

  // 源目录
  srcDir: 'src',

  // markdown-it插件配置
  markdown: {
    theme: {
      light: 'github-light',
      dark: 'github-dark-dimmed'
    },
    config: (md) => {
      md.use(timeline)
    },
    container: {
      tipLabel: '提示',
      warningLabel: '警告',
      dangerLabel: '危险',
      infoLabel: '信息',
      detailsLabel: '详细信息'
    }
  },

  //true强制开启深色模式 false强制开启浅色模式
  // appearance: false,

  // 站点地图
  sitemap: {
    hostname: 'https://theovan.xyz',
    transformItems(items) {
      return items.filter((item) => !item.url.includes('migration'))
    }
  },

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

    // algolia搜索
    algolia,

    // 底部信息
    footer: {
      message: 'Released Under The MIT License.',
      copyright:
        'Copyright © 2019 - 2023 <a href="https://github.com/Theo-messi" target="_blank">Theo</a> . All Rights Reserved.'
    }
  }
})
