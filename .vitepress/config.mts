import { defineConfig } from 'vitepress'
import { fileURLToPath, URL } from 'node:url'
import { algolia, head, nav, sidebar, markdown, socialLinks } from './configs'
import { GitChangelog, GitChangelogMarkdownSection } from '@nolebase/vitepress-plugin-git-changelog/vite'

// 导出默认配置
export default defineConfig({
  // 站点名称
  title: 'Theo Docs',
  // 站点语言
  lang: 'zh-CN',
  // 站点介绍
  description:
    '网络技术,VPS,ESXi,OpenWrt,青龙面板,风水玄学,picgo,github,图床,梅林固件,华硕,fancyss,科学上网,clash,独角数卡,homebrew,git,docker,linux,markdown,甲骨文,谷歌云,防火墙,流媒体,京东,阿里云,YouTube,Premium,机场,流媒体,解锁,线路,科学上网,梯子,特殊服务,出国服务,奈飞,Netflix,迪士尼,YouTube,油管,hulu,FlyingBird,Bridge the Wise,HBO Max,Spotify,奈飞小铺,银河录像局',
  // 网站头部
  head,
  //'force-dark'强制开启深色模式 false强制开启浅色模式
  // appearance: 'force-dark',

  // 站点地图
  sitemap: {
    hostname: 'https://doc.theovan.cn'
  },

  // markdown-it插件配置
  markdown,

  // 插件配置
  vite: {
    resolve: {
      alias: [
        {
          find: /^.*\/VPFooter\.vue$/,
          replacement: fileURLToPath(new URL('./theme/components/Footer.vue', import.meta.url))
        }
      ]
    },
    plugins: [
      GitChangelog({
        // 填写在此处填写您的仓库链接
        repoURL: () => 'https://github.com/Theo-Messi/Theo-Docs'
      }),
      GitChangelogMarkdownSection()
    ]
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
    socialLinks,

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
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'full',
        hourCycle: 'h24'
      }
    },

    // 文章翻页
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },

    // 移动端 - 返回顶部
    returnToTopLabel: '返回顶部',

    // 移动端 - menu
    sidebarMenuLabel: '文章',

    // 主题模式切换
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    darkModeSwitchLabel: '主题模式',

    // markdown 外部链接图标
    // externalLinkIcon: true,
    // 语言切换
    langMenuLabel: '切换语言',

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
      message: `<font size="2">Released under the <a href="https://github.com/Theo-messi/Theo-Docs/blob/main/license" target="_blank">MIT License</a>.</font size="2">`,
      copyright: `<font size="2">Copyright © 2019 - ${new Date().getFullYear()} <a href="https://github.com/Theo-messi" target="_blank">Theo-Messi</a></br>
      <a href="" target="_blank">ICP备</a>｜<a href="" target="_blank">公网安备</a></font size="2">`
    }
  }
})
