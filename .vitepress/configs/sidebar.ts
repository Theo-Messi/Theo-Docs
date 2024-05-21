import { link } from 'fs'
import type { DefaultTheme } from 'vitepress'

// 侧边栏配置
export const sidebar: DefaultTheme.Config['sidebar'] = {
  // VPS使用指南
  '/vps/': { base: '/vps/', items: Sidebar_vps() },
  // 华硕路由器固件
  '/ASUS-Router/': { base: '/ASUS-Router/', items: Sidebar_Asus() },
  // ESXi安装指南
  '/ESXi/': { base: '/ESXi/', items: Sidebar_ESXi() },
  // 青龙面板
  '/vps/ql/': { base: '/vps/ql/', items: Sidebar_ql() },
  // 入门指南
  '/Getting-Started-Guide/': {
    base: '/Getting-Started-Guide/',
    items: Sidebar_Guide()
  },
  // 文档记录
  '/record/': { base: '/record/', items: Sidebar_record() },
  // 服务推荐
  '/serve/': { base: '/serve/', items: Sidebar_serve() },
  // 流媒体观影指南
  '/streaming/': { base: '/streaming/', items: Sidebar_streaming() }
}

// 文档记录
export function Sidebar_record() {
  return [
    {
      // 分组名称
      text: '文档记录',
      // 下拉开关
      // collapsed: true,
      // 分组路径
      base: '/record/',
      // 分组页面
      items: [
        { text: 'PicGo + Github 搭建图床', link: 'build-picture-bed' },
        { text: 'VS Code 使用技巧', link: 'vscode' },
        { text: '为项目添加 Prettier 格式化代码', link: 'prettier' },
        { text: 'NPM 使用国内镜像及恢复默认源', link: 'npm-mirror' },
        { text: 'oh-my-zsh 安装 & 配置', link: 'oh-my-zsh' },
        { text: '使用 GPG 签名 Git Commit', link: 'gpg' },
        { text: '使用 nvm 管理不同版本的 node', link: 'nvm' },
        { text: '优化 iOS/Android 来电信息界面', link: 'vcards' },
        {
          text: '添加 1Panel 第三方应用商店',
          link: '1Panel-third-party-app-store'
        },
        { text: 'Tabby 配置同步', link: 'tabby-sync' },
        { text: 'Ubuntu 开机自动挂载 NAS磁盘', link: 'ubuntu-mount-nas' },
        {
          text: '添加 群晖DSM7.X 第三方套件源',
          link: 'Synology-third-party-suite'
        }
      ]
    },
    {
      // 分组名称
      text: 'VitePress 搭建记录',
      // 下拉开关
      // collapsed: true,
      // 分组路径
      base: '/record/vitepress/',
      // 分组页面
      items: [
        { text: '添加 Giscu评论', link: 'giscu' },
        { text: '实现单击图片放大', link: 'Picture-enlargement' },
        { text: '宝塔面板部署', link: 'aaPanel-deployment' }
      ]
    }
  ]
}

// 华硕路由器固件
export function Sidebar_Asus() {
  return [
    {
      // 分组名称
      // text: '梅林操作文档',
      // 下拉开关
      // collapsed: true,
      // 分组路径
      base: '/ASUS-Router/',
      // 分组页面
      items: [
        { text: '刷机需知', link: 'Flashing-prerequisites' },
        { text: '固件平台介绍', link: 'Firmware-platform-introduction' },
        { text: 'fancyss', link: 'fancyss' },
        { text: 'Merlin Clash', link: 'Merlin-Clash' },
        { text: '官改/梅林固件 常用命令集合', link: 'common-commands' },
        { text: '提示检测非法关键词', link: 'illegal-keywords' }
      ]
    }
  ]
}

// 入门指南
export function Sidebar_Guide() {
  return [
    {
      // 分组名称
      text: '入门指南',
      // 下拉开关
      // collapsed: true,
      // 分组路径
      base: '/Getting-Started-Guide/',
      // 分组页面
      items: [
        { text: 'Homebrew', link: 'Homebrew' },
        { text: 'Git', link: 'Git' },
        { text: 'Docker', link: 'Docker' },
        { text: 'Linux', link: 'Linux' },
        { text: 'Markdown', link: 'Markdown' },
        { text: 'PNPM', link: 'PNPM' },
        { text: 'Vim', link: 'Vim' }
      ]
    }
  ]
}
// vps使用指南
export function Sidebar_vps() {
  return [
    {
      // 分组名称
      text: '基础设置',
      // 下拉开关
      // collapsed: true,
      // 分组路径
      base: '/vps/',
      // 分组页面
      items: [
        { text: '甲骨文云防火墙设置', link: 'Oracle-Cloud' },
        {
          text: 'Ubuntu 系统安装及设置',
          link: 'Ubuntu-system-installation-and-setup'
        },
        { text: '开启防火墙端口', link: 'firewall-port' }
      ]
    },
    {
      // 分组名称
      text: '进阶使用',
      // 下拉开关
      // collapsed: true,
      // 分组路径
      base: '/vps/',
      // 分组页面
      items: [
        { text: '简化重装系统', link: 'Simplify-system-reinstallation' },
        { text: '一键脚本部署开ARM机器', link: 'One-click-script' },
        { text: 'VPS全能工具箱', link: 'All-purpose-toolbox' }
      ]
    },
    {
      // 分组名称
      text: '搭建服务',
      // 下拉开关
      // collapsed: true,
      // 分组路径
      base: '/vps/',
      // 分组页面
      items: [
        { text: '安装哪吒面板', link: 'Install-Nezha-panel' },
        { text: 'V2Ray搭建详细教程', link: 'V2Ray' },
        { text: 'X-ui搭建详细教程', link: 'X-ui' },
        { text: 'VPS一键检测流媒体解锁', link: 'Streaming-Unlocked' },
        { text: '一键检测机场奈飞解锁', link: 'Netflix-Unlocked' },
        { text: '搭建独角数卡网站', link: 'Unicorn-Number-Card' },
        { text: '安装 1Panel 面板', link: 'Install-1Panel' },
        { text: 'Docker 搭建 aria2+AriaNg', link: 'aria2+AriaNg' },
        { text: '一键安装 小雅Xiaoya全家桶', link: 'xiaoya-alist' }
      ]
    }
  ]
}

// ESXi安装指南
export function Sidebar_ESXi() {
  return [
    {
      // 分组名称
      text: 'ESXi 8.0 部署指南',
      // 下拉开关
      // collapsed: true,
      // 分组路径
      base: '/ESXi/Install/',
      // 分组页面
      items: [
        { text: 'ESXi 安装指南', link: 'guide' },
        { text: '安装 Openwrt', link: 'Openwrt' },
        { text: '安装 AdGuardHome', link: 'AdGuardHome' },
        { text: '安装 Windows 11', link: 'Windows11' }
      ]
    },
    {
      // 分组名称
      text: 'OpenWrt / iStore OS 把玩记录',
      // 下拉开关
      // collapsed: true,
      // 分组路径
      base: '/ESXi/openwrt/',
      // 分组页面
      items: [
        { text: 'iStore 插件包', link: 'iStore-plugin-package' },
        { text: 'PPPOE拨号', link: 'PPPOE-dial-up' },
        { text: '关闭IPV6', link: 'Turn-off-IPv6' },
        { text: '实时抓包', link: 'openwrt-real-time-packet-capture' },
        { text: '动态DNS设置', link: 'ddns-settings' },
        { text: '刷新 DNS 缓存', link: 'clear-dns-cache' },
        { text: 'iStoreOS 文件共享步骤', link: 'iStoreOS-file-sharing-steps' },
        { text: 'H3C NX30Pro 刷 openwrt', link: 'H3C-NX30Pro' },
        {
          text: 'openwrt 安装 clouddrive2',
          link: 'openwrt-install-clouddrive2'
        },
        { text: '旁路由设置', link: 'Bypass' }
      ]
    }
  ]
}

// 青龙面板
export function Sidebar_ql() {
  return [
    {
      // 分组名称
      text: '安装青龙面板',
      // 下拉开关
      // collapsed: true,
      // 分组路径
      base: '/vps/ql/',
      // 分组页面
      items: [
        { text: '安装 Docker', link: 'Install-Docker' },
        { text: '安装 青龙面板', link: 'Install-Qinglong-panel' },
        { text: '阿里云盘签到', link: 'Alipan-sign-in' },
        { text: '京东签到', link: 'JD-sign-in' },
        { text: 'BiliBili 签到', link: 'BiliBili-sign-in' }
      ]
    },
    {
      // 分组名称
      text: '获取京东Cookie',
      // 下拉开关
      // collapsed: true,
      // 分组路径
      base: '/vps/ql/',
      //分组页面
      items: [
        { text: '插件版', link: 'JD-Cookie-plug-in' },
        { text: '浏览器版', link: 'JD-Cookie-Browser' },
        { text: 'Boxjs', link: 'JD-Cookie-Boxjs' }
      ]
    },
    {
      // 分组名称
      text: '获取阿里云盘Cookie',
      // 下拉开关
      // collapsed: true,
      // 分组路径
      base: '/vps/ql/',
      // 分组页面
      items: [
        {
          text: '自动获取 - refresh_token',
          link: 'Alipan-Get-cookies-automatically'
        },
        {
          text: '手动获取 - refresh_token',
          link: 'Alipan-Get-cookies-manually'
        }
      ]
    }
  ]
}
// 流媒体观影指南
export function Sidebar_streaming() {
  return [
    {
      // 分组名称
      text: 'Netflix 观看指南',
      // 下拉菜单
      // collapsed: true,
      // 分组路径
      base: '/streaming/',
      // 分组页面
      items: [
        { text: '介绍', link: 'Netflix-introduce' },
        {
          text: '如何看4K及适配硬件',
          link: 'Netflix-watch-4K-and-adapting-hardware'
        },
        {
          text: '常见使用问题及答案',
          link: 'Netflix-Frequently-asked-questions-and-answers'
        },
        {
          text: '常见错误提示及解决方案',
          link: 'Netflix-Common-error-tips-and-solutions'
        },
        { text: '秘密分类的技巧', link: 'Netflix-secret-classification' },
        {
          text: '全球各国影视剧数量',
          link: 'Netflix-Number-of-movies-and-TV-series'
        },
        { text: '常用浏览器插件汇总', link: 'Netflix-Browser-plug-in-summary' },
        { text: '总结与建议', link: 'Netflix-Summarize' }
      ]
    },
    {
      // 分组名称
      text: 'Disney+ 观看指南',
      // 下拉菜单
      // collapsed: true,
      // 分组路径
      base: '/streaming/',
      // 分组页面
      items: [
        { text: '介绍', link: 'Disney-introduce' },
        { text: '订阅指南', link: 'Disney-Subscription-Guide' },
        { text: '合租介绍', link: 'Disney-Introduction-to-shared-housing' },
        { text: '会员使用指南', link: 'Disney-Member-User-Guide' },
        { text: '总结与建议', link: 'Disney-Summary-and-suggestions' }
      ]
    },
    {
      // 分组名称
      text: 'Spotify Premium 指南',
      // 下拉菜单
      // collapsed: true,
      // 分组路径
      base: '/streaming/',
      // 分组页面
      items: [{ text: 'Spotify Premium 指南', link: 'Spotify' }]
    },
    {
      // 分组名称
      text: 'YouTube Premium 会员权益及订阅指南',
      // 下拉菜单
      // collapsed: true,
      // 分组路径
      base: '/streaming/',
      // 分组页面
      items: [{ text: 'YouTube Premium 会员权益及订阅指南', link: 'YouTube' }]
    },
    {
      // 分组名称
      text: 'Hulu 国内观看指南',
      // 下拉菜单
      // collapsed: true,
      // 分组路径
      base: '/streaming/',
      // 分组页面
      items: [{ text: 'Hulu 国内观看指南', link: 'Hulu' }]
    },
    {
      // 分组名称
      text: 'HBO Max 国内观看指南',
      // 下拉菜单
      // collapsed: true,
      // 分组路径
      base: '/streaming/',
      // 分组页面
      items: [{ text: 'HBO Max 国内观看指南', link: 'HBO-Max' }]
    }
  ]
}

// 账号合租平台
export function Sidebar_serve() {
  return [
    {
      // 分组名称
      text: '账号合租平台',
      // 下拉菜单
      // collapsed: true,
      // 分组路径
      base: '/serve/',
      // 分组页面
      items: [
        { text: '账号合租指南', link: 'sharing/Account-sharing-guide' },
        { text: '银河录像局', link: 'sharing/nf-video' },
        { text: '蜜糖商店', link: 'sharing/metshop' },
        { text: '奈飞小铺', link: 'sharing/ihezu' }
      ]
    },
    {
      // 分组名称
      text: '优质机场',
      // 下拉菜单
      // collapsed: true,
      // 分组路径
      base: '/serve/',
      // 分组页面
      items: [
        { text: 'FlyingBird - 飞鸟机场', link: 'airport/FlyingBird' },
        { text: 'Bridge the Wise', link: 'airport/Bridge-the-Wise' },
        { text: '一元机场', link: 'airport/yiyuan' }
      ]
    },
    {
      // 分组名称
      text: '接码平台',
      // 下拉菜单
      // collapsed: true,
      // 分组路径
      base: '/serve/',
      // 分组页面
      items: [{ text: 'SMS-Activate', link: 'code/SMS-Activate' }]
    }
  ]
}
