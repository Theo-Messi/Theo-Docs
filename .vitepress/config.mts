import { defineConfig, PageData } from 'vitepress'
import { algolia, head, nav, sidebar } from './configs'
import { transposeTables } from './transpose-tables'

// 导出默认配置
export default defineConfig({
  // 站点名称
  title: 'Theo Docs',
  // 站点语言
  lang: 'zh-CN',
  // 站点介绍
  description:
    '网络技术,VPS,ESXi,OpenWrt,青龙面板,风水玄学,picgo,github,图床,梅林固件,华硕,fancyss,科学上网,clash,独角数卡,homebrew,git,docker,linux,markdown,甲骨文,谷歌云,防火墙,流媒体,京东,阿里云,YouTube,Premium,机场,流媒体,解锁,线路,科学上网,梯子,特殊服务,出国服务,奈飞,Netflix,迪士尼,YouTube,油管,hulu,一元机场,FlyingBird,Bridge the Wise,HBO Max,Spotify,奈飞小铺,蜜糖商店,银河录像局',
  // 网站头部
  head,
  //'force-dark'强制开启深色模式 false强制开启浅色模式
  // appearance: 'force-dark',

  // 站点地图
  sitemap: {
    hostname: 'https://theovan.cn'
  },
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
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Theo-messi' },
      {
        icon: {
          svg: '<svg t="1714023334003" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8813" width="200" height="200"><path d="M512 0.6656C229.6064 0.6656 0.6656 229.6064 0.6656 512S229.6064 1023.3344 512 1023.3344 1023.3344 794.3936 1023.3344 512 794.3936 0.6656 512 0.6656z m263.9872 665.344c0 28.2112-23.7568 51.328-52.7872 51.328h-422.4c-29.0304 0-52.7872-23.1168-52.7872-51.328l0.256-253.5936 257.408 136.5248a13.568 13.568 0 0 0 12.6464 0l257.664-136.6528v253.696zM512.128 500.736L248.2688 357.5296c0.256-28.0064 23.6544-50.8672 52.5312-50.8672h422.4c28.8256 0 52.4544 22.784 52.7872 50.7392L512.128 500.736z"  p-id="8814"></path></svg>'
        },
        link: 'mailto:fanxiaobin422@gmail.com'
      },
      {
        icon: {
          svg: '<svg t="1714023226648" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4867" id="mx_n_1714023226648" width="200" height="200"><path d="M512 0C229.184 0 0 229.184 0 512s229.184 512 512 512 512-229.216 512-512S794.784 0 512 0z m251.616 351.008l-84 395.808c-5.792 28.192-22.784 34.784-46.4 21.792l-128-94.592-61.408 59.808c-7.2 7.008-12.8 12.8-25.6 12.8-16.608 0-13.792-6.208-19.392-22.016L355.2 581.408l-126.592-39.392c-27.392-8.384-27.584-27.2 6.208-40.608l493.184-190.4c22.4-10.208 44.192 5.408 35.616 40z" p-id="4868"></path></svg>'
        },
        link: 'https://t.me/Theo_Messi'
      }
    ],

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
  }
})
