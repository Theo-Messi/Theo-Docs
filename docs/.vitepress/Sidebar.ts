// 侧边栏设置

// 文档记录
export function SidebarAirport() {
  return [
    {
      // 分组名称
      text: "日常记录文档",
      // 下拉开关
      // collapsed: true,
      // 分组路径
      base: "/skill/",
      // 分组页面
      items: [
        { text: "PicGo + Github 搭建图床", link: "JL-01" },
        { text: "搭建独角数卡网站", link: "JL-02" },
        { text: "vitepress 主题添加 giscus 评论", link: "JL-03" },
      ],
    },
    {
      // 分组名称
      text: "入门指南",
      // 下拉开关
      // collapsed: true,
      // 分组路径
      base: "/skill/",
      // 分组页面
      items: [
        { text: "Homebrew", link: "RM-01" },
        { text: "Git", link: "RM-02" },
        { text: "Docker", link: "RM-03" },
        { text: "Linux", link: "RM-04" },
        { text: "Markdown", link: "RM-05" },
      ],
    },
    {
      // 分组名称
      text: "梅林操作文档",
      // 下拉开关
      // collapsed: true,
      // 分组路径
      base: "/skill/",
      // 分组页面
      items: [
        { text: "刷机需知", link: "ML-01" },
        { text: "安装 科学上网", link: "ML-02" },
        { text: "安装 Clash", link: "ML-03" },
      ],
    },
    {
      // 分组名称
      text: "工程化文档",
      // 下拉开关
      // collapsed: true,
      // 分组路径
      base: "/skill/",
      // 分组页面
      items: [
        { text: "掌握 package ", link: "GC-01" },
        { text: "掌握 tsconfig ", link: "GC-02" },
        { text: "JS 模块化原理 ", link: "GC-03" },
      ],
    },
  ];
}

// VPS使用指南
export function Sidebartelevision() {
  return [
    {
      // 分组名称
      text: "基础设置",
      // 下拉开关
      // collapsed: true,
      // 分组路径
      base: "/VPS/",
      // 分组页面
      items: [
        { text: "甲骨文云防火墙设置", link: "01" },
        { text: "谷歌云防火墙设置", link: "12" },
        { text: "开启 Root 登陆", link: "03" },
        { text: "开启防火墙端口", link: "11" },
      ],
    },
    {
      // 分组名称
      text: "进阶使用",
      // 下拉开关
      // collapsed: true,
      // 分组路径
      base: "/VPS/",
      // 分组页面
      items: [
        { text: "简化重装系统", link: "02" },
        { text: "一键脚本部署开ARM机器", link: "04" },
        { text: "VPS全能工具箱", link: "05" },
      ],
    },
    {
      // 分组名称
      text: "搭建服务",
      // 下拉开关
      // collapsed: true,
      // 分组路径
      base: "/VPS/",
      // 分组页面
      items: [
        { text: "安装哪吒面板", link: "06" },
        { text: "V2Ray搭建详细教程", link: "07" },
        { text: "X-ui搭建详细教程", link: "08" },
        { text: "VPS一键检测流媒体解锁", link: "09" },
        { text: "一键检测机场奈飞解锁", link: "10" },
      ],
    },
  ];
}

// ESXI安装指南
export function SidebarScientific() {
  return [
    {
      // 分组名称
      text: "ESXi 8.0安装",
      // 下拉开关
      // collapsed: true,
      // 分组路径
      base: "/ESXI/",
      // 分组页面
      items: [
        { text: "安装指南", link: "ESXI-01" },
        { text: "ESXI写盘", link: "ESXI-02" },
        { text: "主板BIOS设置", link: "ESXI-03" },
        { text: "ESXI安装", link: "ESXI-04" },
        { text: "ESXI后台配置", link: "ESXI-05" },
        { text: "ESXI前台配置", link: "ESXI-06" },
      ],
    },
    {
      // 分组名称
      text: "ESXI — OpenWrt",
      // 下拉开关
      // collapsed: true,
      // 分组路径
      base: "/ESXI/",
      // 分组页面
      items: [
        { text: "ESXI安装Openwrt", link: "OP-01" },
        { text: "关闭IPV6", link: "OP-02" },
        { text: "PPPOE拨号", link: "OP-03" },
        { text: "OpenWrt扩容内存", link: "OP-04" },
      ],
    },
  ];
}

// 青龙面板
export function SidebarSharing() {
  return [
    {
      // 分组名称
      text: "安装青龙面板",
      // 下拉开关
      // collapsed: true,
      // 分组路径
      base: "/Docker/",
      // 分组页面
      items: [
        { text: "安装Docker", link: "QL-01" },
        { text: "安装青龙面板", link: "QL-02" },
        { text: "阿里云盘签到", link: "QL-03" },
        { text: "京东签到", link: "QL-04" },
      ],
    },
    {
      // 分组名称
      text: "获取京东Cookie",
      // 下拉开关
      // collapsed: true,
      // 分组路径
      base: "/Docker/",
      //分组页面
      items: [
        { text: "插件版", link: "JD-01" },
        { text: "浏览器版", link: "JD-02" },
        { text: "Boxjs", link: "JD-03" },
      ],
    },
    {
      // 分组名称
      text: "获取阿里云盘Cookie",
      // 下拉开关
      // collapsed: true,
      // 分组路径
      base: "/Docker/",
      // 分组页面
      items: [
        { text: "自动获取 - refresh_token", link: "AL-01" },
        { text: "手动获取 - refresh_token", link: "AL-02" },
      ],
    },
  ];
}

// 风水玄学
export function Sidebarmetaphysics() {
  return [
    {
      // 分组名称
      // text: "风水",
      // 下拉开关
      // collapsed: true,
      // 分组路径
      base: "/metaphysics/",
      // 分组页面
      items: [
        { text: "道德经 - 全篇", link: "03" },
        { text: "周易六十四卦 - 对照表", link: "04" },
        { text: "周易六十四卦 - 上篇", link: "05" },
        { text: "周易六十四卦 - 下篇", link: "06" },
        { text: "灵宠篇", link: "01" },
        { text: "植物篇", link: "02" },
        { text: "流年星宿", link: "07" },
        { text: "小六壬", link: "08" },
      ],
    },
  ];
}
