// 导航栏设置

export function nav() {
  return [
    // 文档记录
    { text: "文档记录", link: "/skill/JL-01", activeMatch: "/skill/" },
    // VPS使用指南
    { text: "VPS使用指南", link: "/VPS/01", activeMatch: "/VPS/" },
    // ESXI安装指南
    { text: "ESXI安装指南", link: "/ESXI/ESXI-01", activeMatch: "/ESXI/" },
    // 青龙面板
    {
      text: "青龙面板",
      link: "/Docker/QL-01",
      activeMatch: "/Docker/",
    },
    // 风水玄学
    { text: "风水玄学", link: "/metaphysics/01", activeMatch: "/metaphysics/" },
    // 赞助
    { text: "赞助", link: "https://github.com/sponsors/vanhiupun" },
  ];
}
