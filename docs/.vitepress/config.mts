import { defineConfig } from "vitepress";
import * as Sidebar from "./Sidebar.js";
import * as navbar from "./navbar.js";

export default defineConfig({
  title: "Note library",
  lang: "cn",
  description:
    "网络技术,VPS,ESXI,OpenWrt,青龙面板,风水玄学,picgo,github,图床,梅林固件,华硕,fancyss,科学上网,clasn,独角数卡,homebrew,git,docker,linux,markdown,甲骨文,谷歌云,防火墙,流媒体,京东,阿里云",
  lastUpdated: true,
  cleanUrls: true, // 开启后网址后缀无'html'
  srcDir: "src",
  // appearance: false,   //true强制开启深色模式 false强制开启浅色模式
  vite: {
    ssr: { noExternal: ["@nolebase/vitepress-plugin-enhanced-readabilities"] },
  },

  // 站点地图
  sitemap: {
    hostname: "https://theovan.xyz",
    transformItems(items) {
      return items.filter((item) => !item.url.includes("migration"));
    },
  },

  // markdown
  markdown: {
    theme: {
      light: "github-light",
      dark: "github-dark-dimmed",
    },
    // lineNumbers: true,
  },

  // 网站头
  head: [
    ["link", { rel: "icon", href: "/logo.svg" }],
    // ["script", {}, `document.documentElement.classList.add('dark')`],    //强制开启为深色模式
    [
      // 谷歌分析
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
    logo: "/logo.svg", // logo
    socialLinks: [{ icon: "github", link: "https://github.com/vanhiupun" }], // 社交链接
    // siteTitle: false, // false去除网站标题 只显示logo
    editLink: {
      pattern:
        "https://github.com/vanhiupun/Vite-Blog/blob/master/docs/src/:path",
      text: "为此页提供修改建议",
    }, // GitHub编辑页面
    outline: { label: "本页目录" }, //目录
    lastUpdated: { text: "上次更新" }, //上次更新
    nav: navbar.nav(), // 导航栏

    // 侧边栏
    sidebar: {
      "/": { base: "/", items: Sidebar.Sidebartelevision() },
      "/VPS/": { base: "/VPS/", items: Sidebar.Sidebartelevision() },
      "/ESXI/": { base: "/ESXI/", items: Sidebar.SidebarScientific() },
      "/Docker/": { base: "/Docker/", items: Sidebar.SidebarSharing() },
      "/skill/": { base: "/skill/", items: Sidebar.SidebarAirport() },
      "/metaphysics/": {
        base: "/metaphysics/",
        items: Sidebar.Sidebarmetaphysics(),
      },
    },

    footer: {
      message: "Released Under The MIT License.",
      copyright:
        'Copyright © 2019 - Present <a href="https://github.com/vanhiupun">Theo</a>',
    }, // 底部信息

    search: {
      // algolia搜索
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
