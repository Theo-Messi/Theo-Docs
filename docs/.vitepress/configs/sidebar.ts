import type { DefaultTheme } from "vitepress";

// 侧边栏配置
export const sidebar: DefaultTheme.Config["sidebar"] = {
  // VPS使用指南
  "/VPS/": { base: "/VPS/", items: SideVPS() },
  // 前端物语
  "/fe/": { base: "/fe/", items: Sidefe() },
  // ESXI安装指南
  "/ESXI/": { base: "/ESXI/", items: SideESXI() },
  // 青龙面板
  "/Docker/": { base: "/Docker/", items: SideDocker() },
  // 文档记录
  "/skill/": { base: "/skill/", items: Sideskill() },
  // 风水玄学
  "/metaphysics/": {
    base: "/metaphysics/",
    items: SideFS(),
  },
};

// 文档记录
export function Sideskill() {
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
  ];
}

// 前端物语
export function Sidefe() {
  return [
    {
      // 分组名称
      text: "JavaScript 基础知识",
      // 下拉开关
      collapsed: false,
      // 分组路径
      base: "/fe/javascript/",
      // 分组页面
      items: [
        { text: "数据类型", link: "types" },
        { text: "引用类型的拷贝", link: "clone" },
        { text: "类型转换", link: "conversions" },
        { text: "原型和原型链", link: "prototype" },
        { text: "继承", link: "inherit" },
      ],
    },
    {
      // 分组名称
      // text: "ES6 常用知识点",
      // 下拉开关
      // collapsed: false,
      // 分组路径
      base: "/fe/es6",
      // 分组页面
      items: [{ text: "ES6 常用知识点", link: "/" }],
    },
    {
      // 分组名称
      text: "TypeScript",
      // 下拉开关
      collapsed: false,
      // 分组路径
      base: "/fe/typescript/",
      // 分组页面
      items: [{ text: "基础知识", link: "base" }],
    },
    {
      // 分组名称
      text: "HTML / CSS",
      // 下拉开关
      collapsed: false,
      // 分组路径
      base: "/fe/",
      // 分组页面
      items: [
        { text: "HTML 理论知识点", link: "html/" },
        { text: "CSS 理论知识点", link: "css/" },
      ],
    },
    {
      // 分组名称
      text: "工程化项目原理",
      // 下拉开关
      collapsed: false,
      // 分组路径
      base: "/fe/gc/",
      // 分组页面
      items: [
        { text: "掌握 package ", link: "GC-01" },
        { text: "掌握 tsconfig ", link: "GC-02" },
        { text: "JS 模块化原理 ", link: "GC-03" },
      ],
    },
    {
      // 分组名称
      text: "浏览器知识",
      // 下拉开关
      collapsed: false,
      // 分组路径
      base: "/fe/",
      // 分组页面
      items: [
        { text: "浏览器相关知识点", link: "browser/" },
        { text: "TCP", link: "network/tcp" },
        { text: "HTTP", link: "network/http" },
      ],
    },
    {
      // 分组名称
      text: "概念知识点",
      // 下拉开关
      collapsed: false,
      // 分组路径
      base: "/fe/concept/",
      // 分组页面
      items: [
        { text: "模块化", link: "module" },
        { text: "前端页面渲染方式", link: "page-rendering" },
      ],
    },
    {
      // 分组名称
      // text: "编程题",
      // 下拉开关
      collapsed: false,
      // 分组路径
      base: "/fe/",
      // 分组页面
      items: [{ text: "编程题", link: "coding/" }],
    },
  ];
}

// VPS使用指南
export function SideVPS() {
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
export function SideESXI() {
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
export function SideDocker() {
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
export function SideFS() {
  return [
    { text: "简言", base: "/metaphysics/", link: "简言" },
    { text: "纠错递新", base: "/metaphysics/", link: "纠错递新" },
    {
      // 分组名称
      text: "山篇",
      // 下拉开关
      collapsed: true,
      // 分组路径
      base: "/metaphysics/山/",
      // 分组页面
      items: [],
    },
    {
      // 分组名称
      text: "医篇",
      // 下拉开关
      collapsed: true,
      // 分组路径
      base: "/metaphysics/医/",
      // 分组页面
      items: [
        { text: "伤寒杂病论(共十六卷)", link: "伤寒杂病论" },
        { text: "金匮要略(药方)", link: "金匮要略" },
      ],
    },
    {
      // 分组名称
      text: "命篇",
      // 下拉开关
      collapsed: true,
      // 分组路径
      base: "/metaphysics/命/",
      // 分组页面
      items: [
        { text: "生辰八字", link: "生辰八字" },
        { text: "流年星宿", link: "流年星宿" },
        { text: "八字基础知识", link: "八字基础知识" },
        { text: "八字案例分析", link: "八字案例分析" },
        { text: "八字理论进阶版", link: "八字理论进阶版" },
        { text: "八字如何看健康与疾病", link: "八字如何看健康与疾病" },
        { text: "滴天髓­", link: "滴天髓­" },
        { text: "斗数发微轮", link: "斗数发微轮" },
        { text: "斗数骨髓赋", link: "斗数骨髓赋" },
        { text: "女命骨髓赋", link: "女命骨髓赋" },
        { text: "观命经验谈", link: "观命经验谈" },
        { text: "滴天髓阐微(六亲论)", link: "滴天髓阐微(六亲论)" },
        { text: "滴天髓阐微(通神论)", link: "滴天髓阐微(通神论)" },
        { text: "命理约言", link: "命理约言" },
        { text: "十喻歌", link: "十喻歌" },
        { text: "星学大成-杂诗", link: "星学大成-杂诗" },
        { text: "玄微论", link: "玄微论" },
        { text: "造化元钥(评注)", link: "造化元钥(评注)" },
        { text: "增补太微赋", link: "增补太微赋" },
        { text: "重补斗数彀率", link: "重补斗数彀率" },
        { text: "格局章", link: "格局章" },
        { text: "鬼谷遗文", link: "鬼谷遗文" },
        { text: "李虚中命书", link: "李虚中命书" },
        { text: "命理探源", link: "命理探源" },
        { text: "千里命稿", link: "千里命稿" },
        { text: "情色命理", link: "情色命理" },
        { text: "穷通宝鉴", link: "穷通宝鉴" },
        { text: "三命通会(卷一)", link: "三命通会(卷一)" },
        { text: "三命通会(卷二)", link: "三命通会(卷二)" },
        { text: "三命通会(卷三)", link: "三命通会(卷三)" },
        { text: "三命通会(卷四)", link: "三命通会(卷四)" },
        { text: "三命通会(卷五)", link: "三命通会(卷五)" },
        { text: "三命通会(卷六)", link: "三命通会(卷六)" },
        { text: "三命通会(卷七)", link: "三命通会(卷七)" },
        { text: "邵子全书·皇极经世", link: "邵子全书·皇极经世" },
        { text: "子平管见", link: "子平管见" },
        { text: "子平真诠(研究)", link: "子平真诠(研究)" },
        { text: "御定子平", link: "御定子平" },
        { text: "渊海子平(赋论)", link: "渊海子平(赋论)" },
        { text: "渊海子平(格局篇)", link: "渊海子平(格局篇)" },
        { text: "渊海子平(基础篇)", link: "渊海子平(基础篇)" },
        { text: "渊海子平(六亲篇)", link: "渊海子平(六亲篇)" },
        { text: "渊海子平(女命篇)", link: "渊海子平(女命篇)" },
        { text: "渊海子平(神煞篇)", link: "渊海子平(神煞篇)" },
        { text: "渊海子平(十神篇)", link: "渊海子平(十神篇)" },
      ],
    },
    {
      // 分组名称
      text: "相篇",
      // 下拉开关
      collapsed: true,
      // 分组路径
      base: "/metaphysics/相/",
      // 分组页面
      items: [
        { text: "冰鉴", link: "冰鉴" },
        { text: "公笃相法", link: "公笃相法" },
        { text: "柳庄神相", link: "柳庄神相" },
        { text: "观人于微", link: "观人于微" },
        { text: "麻衣神相", link: "麻衣神相" },
        { text: "神相金较剪", link: "神相金较剪" },
        { text: "神相全编", link: "神相全编" },
        { text: "神相铁关刀", link: "神相铁关刀" },
        { text: "太清神鉴", link: "太清神鉴" },
      ],
    },
    {
      text: "卜篇",
      // 下拉开关
      collapsed: true,
      // 分组路径
      base: "/metaphysics/卜/",
      // 分组页面
      items: [{ text: "小六壬", link: "小六壬" }],
    },
    {
      // 分组名称
      text: "相关经典",
      // 下拉开关
      collapsed: true,
      // 分组路径
      base: "/metaphysics/相关经典/",
      // 分组页面
      items: [
        { text: "道德经", link: "道德经" },
        { text: "周易六十四卦", link: "周易六十四卦" },
        { text: "三字经", link: "三字经" },
        { text: "太上清静经", link: "太上清静经" },
        { text: "道教八大神咒", link: "道教八大神咒" },
        { text: "淮南子", link: "淮南子" },
        { text: "黄庭内景经", link: "黄庭内景经" },
        { text: "黄庭外景经", link: "黄庭外景经" },
        { text: "太上皇庭中景经", link: "太上皇庭中景经" },
        { text: "下清宫", link: "下清宫" },
      ],
    },
    {
      // 分组名称
      text: "灵宠",
      // 下拉开关
      collapsed: true,
      // 分组路径
      base: "/metaphysics/",
      // 分组页面
      items: [
        { text: "宠物篇", link: "宠物篇" },
        { text: "植物篇", link: "植物篇" },
      ],
    },
  ];
}
