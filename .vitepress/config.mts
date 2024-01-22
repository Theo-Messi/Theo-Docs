import { defineConfig, PageData } from 'vitepress'
import { algolia, head, nav, sidebar } from './configs'
import { SitemapStream } from 'sitemap'
import { createWriteStream } from 'node:fs'
import { resolve } from 'node:path'
import { transposeTables } from './transpose-tables'

const links: { url: string; lastmod: PageData['lastUpdated'] }[] = []

// 导出默认配置
export default defineConfig({
  // 站点名称
  title: 'Theo Docs',
  // 站点语言
  lang: 'zh-Hans',
  // 站点介绍
  description:
    '网络技术,VPS,ESXI,OpenWrt,青龙面板,风水玄学,picgo,github,图床,梅林固件,华硕,fancyss,科学上网,clash,独角数卡,homebrew,git,docker,linux,markdown,甲骨文,谷歌云,防火墙,流媒体,京东,阿里云,YouTube,Premium,机场,流媒体,解锁,线路,科学上网,梯子,特殊服务,出国服务,奈飞,Netflix,迪士尼,YouTube,油管,hulu,一元机场,FlyingBird,Bridge the Wise,HBO Max,Spotify,奈飞小铺,蜜糖商店,银河录像局',
  // 网站头部
  head,
  //'force-dark'强制开启深色模式 false强制开启浅色模式
  // appearance: 'force-dark',

  // markdown-it插件配置
  markdown: {
    theme: {
      light: 'min-light',
      dark: 'min-dark'
    },
    container: {
      infoLabel: '信息',
      noteLabel: '信息',
      tipLabel: '提示',
      importantLabel: '重要',
      warningLabel: '警告',
      cautionLabel: '警告',
      dangerLabel: '危险',
      detailsLabel: '详细信息'
    },
    config(md) {
      transposeTables(md)
    }
  },

  // 源目录
  srcDir: 'src',

  // 上次更新时间戳
  lastUpdated: true,

  // 开启后网址后缀无'html'
  cleanUrls: true,

  themeConfig: {
    // // logo
    logo: { src: '/avatar.png', width: 24, height: 24 },

    // 社交链接
    socialLinks: [{ icon: 'github', link: 'https://github.com/Theo-messi' }],

    // false去除网站标题 只显示logo
    // siteTitle: false,

    // GitHub编辑页面
    editLink: {
      pattern: 'https://github.com/Theo-messi/Theo-Docs/blob/main/src/:path',
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
    search: {
      provider: 'algolia',
      options: algolia
    },

    // 底部信息
    footer: {
      message: `Released Under The <a href="https://github.com/Theo-messi/Theo-Docs/blob/main/license" target="_blank">MIT License</a>.`,
      copyright: `Copyright © 2019 - ${new Date().getFullYear()} <a href="https://github.com/Theo-messi" target="_blank">Theo</a> . All Rights Reserved.`
    }
  },

  // 站点地图
  transformHtml: (_, id, { pageData }) => {
    if (!/[\\/]404\.html$/.test(id))
      links.push({
        // you might need to change this if not using clean urls mode
        url: pageData.relativePath.replace(/((^|\/)index)?\.md$/, '$2'),
        lastmod: pageData.lastUpdated
      })
  },
  buildEnd: async ({ outDir }) => {
    const sitemap = new SitemapStream({
      hostname: 'https://theovan.wiki/'
    })
    const writeStream = createWriteStream(resolve(outDir, 'sitemap.xml'))
    sitemap.pipe(writeStream)
    links.forEach((link) => sitemap.write(link))
    sitemap.end()
    await new Promise((r) => writeStream.on('finish', r))
  }
})
