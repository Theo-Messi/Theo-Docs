import { defineConfig } from "vitepress";
import * as Sidebar from "./Sidebar.js";
import * as navbar from "./navbar.js";

export default defineConfig({
  // 站点名称
  title: "Note library",

  // 站点语言
  lang: "cn",

  // 站点介绍
  description:
    "网络技术,VPS,ESXI,OpenWrt,青龙面板,风水玄学,picgo,github,图床,梅林固件,华硕,fancyss,科学上网,clasn,独角数卡,homebrew,git,docker,linux,markdown,甲骨文,谷歌云,防火墙,流媒体,京东,阿里云",

  // 上次更新时间戳
  lastUpdated: true,

  // 开启后网址后缀无'html'
  cleanUrls: true,

  // 源目录
  srcDir: "src",

  // markdown-it插件配置
  markdown: {
    theme: {
      light: "github-light",
      dark: "github-dark-dimmed",
    },
  },

  //true强制开启深色模式 false强制开启浅色模式
  // appearance: false,

  // 站点地图
  sitemap: {
    hostname: "https://theovan.xyz",
    transformItems(items) {
      return items.filter((item) => !item.url.includes("migration"));
    },
  },

  // 网站头
  head: [
    // LOGO
    ["link", { rel: "icon", href: "https://theovan.xyz/logo.svg" }],

    // 强制开启为深色模式
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

  themeConfig: {
    // // logo
    logo: "/logo.svg",

    // 社交链接
    socialLinks: [{ icon: "github", link: "https://github.com/vanhiupun" }],

    // false去除网站标题 只显示logo
    // siteTitle: false,

    // GitHub编辑页面
    editLink: {
      pattern:
        "https://github.com/vanhiupun/Vite-Blog/blob/master/docs/src/:path",
      text: "为此页提供修改建议",
    },

    // 目录设置
    outline: "deep", // 索引级别
    outlineTitle: "目录", // 目录文本

    // 上次更新
    lastUpdated: { text: "上次更新" },

    // 导航栏
    nav: navbar.nav(),

    // 侧边栏
    sidebar: {
      // VPS使用指南
      "/VPS/": { base: "/VPS/", items: Sidebar.Sidebartelevision() },
      // ESXI安装指南
      "/ESXI/": { base: "/ESXI/", items: Sidebar.SidebarScientific() },
      // 青龙面板
      "/Docker/": { base: "/Docker/", items: Sidebar.SidebarSharing() },
      // 网络技术
      "/skill/": { base: "/skill/", items: Sidebar.SidebarAirport() },
      // 风水玄学
      "/metaphysics/": {
        base: "/metaphysics/",
        items: Sidebar.Sidebarmetaphysics(),
      },
    },

    // 底部信息
    footer: {
      message: "Released Under The MIT License.",
      copyright:
        'Copyright © 2019 - 2023 <a href="https://github.com/vanhiupun" target="_blank">Theo</a> . All Rights Reserved.',
    },

    // algolia搜索
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
                buttonText: "搜索",
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
                  saveRecentSearchButtonTitle: "保存到搜索历史",
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
                  searchByText: "搜索供应商",
                },
                noResultsScreen: {
                  noResultsText: "无法找到相关结果",
                  suggestedQueryText: "你可以尝试查询",
                  reportMissingResultsText: "你认为这个查询应该有结果？",
                  reportMissingResultsLinkText: "向我们反馈",
                },
              },
            },
          },
        },
      },
    },
  },
});
