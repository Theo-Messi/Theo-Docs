import { defineConfig } from "vitepress";
import * as SidebarMjs from "./Sidebar.mjs";
import * as navbarMjs from "./navbar.mjs";

export default defineConfig({
  // description:
  //   "引领您进入五彩斑斓的视听世界，并涵盖了 Netflix 、Disney+ 、Spotify会员 和 YouTube会员 的精彩领域",
  lastUpdated: true,

  // 开启后网址后缀无'html'
  cleanUrls: true,

  //true强制开启深色模式 false强制开启浅色模式
  // appearance: false,

  // 站点地图
  sitemap: {
    hostname: "https://theovan.xyz",
    transformItems(items) {
      return items.filter((item) => !item.url.includes("migration"));
    },
  },

  // markdown
  markdown: {
    // theme: "material-theme-palenight",
    lineNumbers: true,
    math: true,
  },

  // 网站头
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    //强制开启为深色模式
    // ["script", {}, `document.documentElement.classList.add('dark')`],

    // 谷歌分析
    [
      "script",
      {
        async: "",
        src: "https://www.googletagmanager.com/gtag/js?id=G-2H93CC808K",
      },
    ],
    [
      "script",
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-2H93CC808K');`,
    ],
  ],

  locales: {
    root: {
      title: "Theo",
      label: "中文",
      lang: "cn",
    },
  },

  themeConfig: {
    // logo
    logo: { light: "/favicon.ico", dark: "/favicon.ico" },
    // 社交链接
    socialLinks: [{ icon: "github", link: "https://github.com/vanhiupun" }],
    //  siteTitle: false,    false去除网站标题 只显示logo
    // GitHub编辑页面
    editLink: {
      pattern: "https://github.com/vanhiupun/Vite-Blog/blob/master/docs/:path",
    },
    // 导航栏
    nav: [
      { text: "VPS教程", link: "/VPS/01" },
      { text: "京东Cookie教程", link: "/JD/01" },
      { text: "OpenWrt教程", link: "/OpenWrt/01" },
      { text: "网络技术教程", link: "/skill/01" },
      { text: "Markdown", link: "MD/test" },
    ],
    // 侧边栏
    sidebar: {
      "/": { base: "/", items: SidebarMjs.Sidebartelevision() },
      "/VPS/": { base: "/VPS/", items: SidebarMjs.Sidebartelevision() },
      "/OpenWrt/": { base: "/OpenWrt/", items: SidebarMjs.SidebarScientific() },
      "/JD/": { base: "/JD/", items: SidebarMjs.SidebarSharing() },
      "/skill/": { base: "/skill/", items: SidebarMjs.SidebarAirport() },
    },
    // 底部信息
    footer: {
      message: "Released Under The MIT License.",
      copyright:
        'Copyright © 2019 - Present <a href="https://github.com/vanhiupun">Theo</a>',
    },
    // // algolia搜索
    search: {
      provider: "algolia",
      options: {
        appId: "ET4Y1NVDC3",
        apiKey: "094b9789c092705bab9a56f24a0ac0cf",
        indexName: "theovanxyz",
        locales: {
          root: {
            placeholder: "搜索文档",
            translations: {
              button: {
                buttonText: "搜索文档",
                buttonAriaLabel: "搜索文档",
              },
              modal: {
                searchBox: {
                  resetButtonTitle: "清除查询条件",
                  resetButtonAriaLabel: "清除查询条件",
                  cancelButtonText: "取消",
                  cancelButtonAriaLabel: "取消",
                },
                startScreen: {
                  recentSearchesTitle: "搜索历史",
                  noRecentSearchesText: "没有搜索历史",
                  saveRecentSearchButtonTitle: "保存至搜索历史",
                  removeRecentSearchButtonTitle: "从搜索历史中移除",
                  favoriteSearchesTitle: "收藏",
                  removeFavoriteSearchButtonTitle: "从收藏中移除",
                },
                errorScreen: {
                  titleText: "无法获取结果",
                  helpText: "你可能需要检查你的网络连接",
                },
                footer: {
                  selectText: "选择",
                  navigateText: "切换",
                  closeText: "关闭",
                  searchByText: "搜索提供者",
                },
                noResultsScreen: {
                  noResultsText: "无法找到相关结果",
                  suggestedQueryText: "你可以尝试查询",
                  reportMissingResultsText: "你认为该查询应该有结果？",
                  reportMissingResultsLinkText: "点击反馈",
                },
              },
            },
          },
        },
      },
    },
  },
});
