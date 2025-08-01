import { defineConfig } from 'vitepress'
import { groupIconVitePlugin } from 'vitepress-plugin-group-icons'
import llmstxt from 'vitepress-plugin-llms'
import { head, markdown, nav, search, sidebar, socialLinks, transformPageData } from './configs'

export default defineConfig({
  // 站点名称
  title: 'Theo Docs',

  // 站点语言
  lang: 'zh-Hans',

  // 站点介绍
  description:
    '全方位流媒体观影指南，涵盖 Netflix、Disney+、HBO Max、Spotify、YouTube Premium、奈飞、青云梯、Galaxy Cloud - 银河云、FlyingBird - 飞鸟机场、TNT Cloud、Totoro Cloud - 龙猫云、奈飞小铺、银河录像局、蜜糖商店等，畅享全球精彩内容与解锁服务',
  // 网站头部
  head,

  //'force-dark'强制开启深色模式 false强制开启浅色模式
  // appearance: 'force-dark',

  // 是否将 meta 信息提取为单独的 chunk
  metaChunk: true,

  // 站点地图
  sitemap: { hostname: 'https://doc.theojs.cn' },

  // markdown-it插件配置
  markdown,

  // 动态生成 meta 标签和 JSON-LD 数据
  transformPageData,

  // 源目录
  srcDir: 'content',

  // 上次更新时间戳
  lastUpdated: true,

  // 开启后网址后缀无'html'
  cleanUrls: true,

  // vue 配置
  vue: {
    template: {
      compilerOptions: { isCustomElement: (tag) => tag === 'iconify-icon' }
    }
  },

  // vite 配置
  vite: {
    plugins: [
      // @ts-ignore: 使用 rolldown-vite 时类型不兼容 vite，但运行正常
      groupIconVitePlugin({
        customIcon: {
          debian: 'vscode-icons:file-type-debian',
          bun: 'logos:ubuntu',
          centos: 'logos:centos-icon',
          windows: 'logos:microsoft-windows-icon',
          homebrew: 'logos:homebrew',
          mac: 'logos:apple',
          linux: 'logos:linux-tux',
          rhel: 'logos:redhat-icon',
          android: 'logos:android-icon'
        }
      }), // @ts-ignore
      llmstxt({})
    ]
  },

  themeConfig: {
    // logo
    logo: {
      src: 'https://i.theojs.cn/logo/avatar-mini.webp',
      width: 24,
      height: 24,
      alt: 'avatar',
      fetchpriority: 'high'
    },

    // 社交链接
    socialLinks,

    // false去除网站标题 只显示logo
    // siteTitle: false,

    // GitHub编辑页面
    editLink: {
      pattern: 'https://github.com/s-theo/Theo-Docs/edit/main/content/:path',
      text: '为此页提供修改建议'
    },

    // 目录设置
    outline: 'deep', // 索引级别
    outlineTitle: '本页目录', // 目录文本

    // 上次更新
    lastUpdated: {
      text: '最后更新于'
    },

    // 文章翻页
    docFooter: { prev: '上一篇', next: '下一篇' },

    // 移动端 - 返回顶部
    returnToTopLabel: '返回顶部',

    // 移动端 - menu
    sidebarMenuLabel: '文章',

    // 主题模式切换
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    darkModeSwitchLabel: '主题模式',
    skipToContentLabel: '跳转到内容',

    // markdown 外部链接图标
    externalLinkIcon: true,

    // 语言切换
    langMenuLabel: '切换语言',

    // 导航栏
    nav,

    // 侧边栏
    sidebar,

    // 搜索配置
    search: { provider: 'algolia', options: search },

    // 404 配置
    notFound: {
      title: '找不到页面',
      quote: '页面不见了，也许它去找寻新的冒险了！',
      linkLabel: '返回首页重新探索',
      linkText: '返回首页',
      code: '404'
    }
  }
})
