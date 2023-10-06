import type { HeadConfig } from "vitepress";

const isDevelopment = process.env.NODE_ENV === "development";

export const head: HeadConfig[] = [
  // LOGO
  ["link", { rel: "icon", href: "https://theovan.xyz/avatar.jpg" }],
  ["meta", { name: "theme-color", content: "#5f67ee" }],
  ["meta", { name: "og:type", content: "website" }],
  ["meta", { name: "og:locale", content: "cn" }],
  ["meta", { name: "og:site_name", content: "Theo Notes" }],
  ["meta", { name: "og:image", content: "https://theovan.xyz/avatar.png" }],

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
];
