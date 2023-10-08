import type { DefaultTheme } from "vitepress";
// 导航栏设置

export const nav: DefaultTheme.Config["nav"] = [
  { text: "导航", link: "nav" },
  { text: "文档记录", items: navdocs(), activeMatch: "/skill/" },
  { text: "前端物语", items: navfe(), activeMatch: "/fe/" },
  { text: "VPS使用指南", items: navvps(), activeMatch: "/VPS/" },
  { text: "ESXI安装指南", items: navesxi(), activeMatch: "/ESXI/" },
  { text: "青龙面板", items: navql(), activeMatch: "/Docker/" },
  { text: "玄学宝典", link: "/metaphysics/简言", activeMatch: "/metaphysics/" },
  { text: "赞助", link: "https://github.com/sponsors/vanhiupun" },
];

// 文档记录
export function navdocs() {
  return [
    {
      items: [
        { text: "日常记录", link: "/skill/JL-01" },
        { text: "入门指南", link: "/skill/RM-01" },
        { text: "梅林操作文档", link: "/skill/ML-01" },
      ],
    },
  ];
}

// 前端物语
export function navfe() {
  return [
    {
      items: [
        { text: "JavaScript 基础知识", link: "/fe/javascript/types" },
        { text: "HTML / CSS", link: "/fe/html/" },
        { text: "ES6 常用知识点", link: "/fe/es6/" },
        { text: "TypeScript", link: "/fe/typescript/base" },
      ],
    },
    {
      items: [
        { text: "工程化项目原理", link: "/fe/gc/GC-01" },
        { text: "浏览器知识", link: "/fe/browser/" },
        { text: "概念知识点", link: "/fe/concept/module" },
        { text: "编程题", link: "/fe/coding/" },
      ],
    },
  ];
}

// VPS使用指南
export function navvps() {
  return [
    {
      items: [
        { text: "基础设置", link: "/VPS/01" },
        { text: "进阶使用", link: "/VPS/02" },
        { text: "搭建服务", link: "/VPS/06" },
      ],
    },
  ];
}

// ESXI安装指南
export function navesxi() {
  return [
    {
      items: [
        { text: "ESXi 8.0安装", link: "/ESXI/ESXI-01" },
        { text: "ESXI — OpenWrt", link: "/ESXI/OP-01" },
      ],
    },
  ];
}

// 青龙面板
export function navql() {
  return [
    {
      items: [
        { text: "安装青龙面板", link: "/Docker/QL-01" },
        { text: "获取京东Cookie", link: "/Docker/JD-01" },
        { text: "获取阿里云盘Cookie", link: "/Docker/AL-01" },
      ],
    },
  ];
}
// 玄学五术
// export function navxx() {
//   return [
//     {
//       items: [
//         { text: "玄学五术-山", link: "/metaphysics/山/简介" },
//         { text: "玄学五术-医", link: "/metaphysics/医/简介" },
//         { text: "玄学五术-命", link: "/metaphysics/命/简介" },
//         { text: "玄学五术-相", link: "/metaphysics/相/简介" },
//         { text: "玄学五术-卜", link: "/metaphysics/卜/简介" },
//         { text: "相关经典", link: "/metaphysics/相关经典/道德经" },
//         { text: "灵宠", link: "/metaphysics/宠物篇" },
//       ],
//     },
//   ];
// }
