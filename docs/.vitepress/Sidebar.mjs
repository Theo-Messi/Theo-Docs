export function Sidebartelevision() {
  return [
    {
      text: "VPS教程",
      collapsed: true,
      base: "/VPS/",
      items: [
        { text: "甲骨文云与谷歌云防火墙设置", link: "01" },
        { text: "简化重装系统", link: "02" },
        { text: "开启防火墙端口与root登陆", link: "03" },
        { text: "一键脚本部署开ARM机器", link: "04" },
        { text: "VPS全能工具箱", link: "05" },
        { text: "安装哪吒面板", link: "06" },
        { text: "V2Ray搭建详细教程", link: "07" },
        { text: "X-ui搭建详细教程", link: "08" },
        { text: "VPS一键检测流媒体解锁", link: "09" },
        { text: "一键检测机场奈飞解锁", link: "10" },
      ],
    },
  ];
}

export function SidebarScientific() {
  return [
    {
      text: "OpenWrt教程",
      collapsed: true,
      base: "/OpenWrt/",
      items: [
        { text: "关闭IPV6", link: "01" },
        { text: "PPPOE拨号", link: "02" },
        { text: "ESXI里的OpenWrt扩容", link: "03" },
      ],
    },
  ];
}

export function SidebarSharing() {
  return [
    {
      text: "安装青龙面板",
      collapsed: true,
      base: "/docker/",
      items: [
        { text: "安装Docker", link: "01" },
        { text: "安装青龙面板", link: "02" },
        { text: "阿里云盘签到", link: "06" },
        { text: "京东签到", link: "07" },
      ],
    },
    {
      text: "获取京东Cookie",
      collapsed: true,
      base: "/docker/",
      items: [
        { text: "插件版", link: "03" },
        { text: "浏览器版", link: "04" },
        { text: "Boxjs", link: "05" },
      ],
    },
  ];
}

export function SidebarAirport() {
  return [
    {
      text: "网络技术教程",
      collapsed: true,
      base: "/skill/",
      items: [
        { text: "PicGo + Github 搭建图床", link: "01" },
        // { text: "一元机场", link: "02" },
        // { text: "薯条机场", link: "03" },
        // { text: "Bridge the Wise", link: "04" },
      ],
    },
  ];
}
