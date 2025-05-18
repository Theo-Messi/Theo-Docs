import type { DefaultTheme } from 'vitepress'

type SidebarItem = DefaultTheme.SidebarItem

// 侧边栏配置
export const sidebar: DefaultTheme.SidebarMulti = {
  '/vps/': { base: '/vps/', items: Sidebar_vps() },
  '/asus/': { base: '/asus/', items: Sidebar_Asus() },
  '/esxi/': { base: '/esxi/', items: Sidebar_ESXi() },
  '/fe/': { base: '/fe/', items: Sidebar_FE() },
  '/notes/': { base: '/notes/', items: Sidebar_notes() },
  '/serve/': { base: '/serve/', items: Sidebar_serve() },
  '/streaming/': { base: '/streaming/', items: Sidebar_streaming() }
}

export function Sidebar_notes(): SidebarItem[] {
  return [
    {
      text: '文档记录',
      // collapsed: true,
      base: '/notes/',
      items: [
        { text: 'PicGo + Github 搭建图床', link: 'build-picture-bed' },
        { text: 'GitHub Actions 工作流程', link: 'github-actions' },
        { text: 'VS Code 使用技巧', link: 'vscode' },
        { text: '为项目添加 Prettier 及规范提交信息工具', link: 'prettier' },
        { text: '使用 GPG 签名 Git Commit', link: 'gpg' },
        { text: '使用 nvm 管理不同版本的 node', link: 'nvm' },
        { text: '优化 iOS/Android 来电信息界面', link: 'vcards' },
        {
          text: '添加 1Panel 第三方应用商店',
          link: '1panel-third-party-app-store'
        },
        { text: 'Tabby 配置同步', link: 'tabby-sync' },
        {
          text: '添加 群晖DSM7.X 第三方套件源',
          link: 'synology-third-party-suite'
        }
      ]
    },
    {
      text: 'VitePress 搭建记录',
      // collapsed: true,
      base: '/notes/vitepress/',
      items: [
        { text: '添加 Giscu评论', link: 'giscu' },
        { text: '实现单击图片放大', link: 'picture-enlargement' },
        { text: '宝塔面板部署', link: 'aapanel-deployment' }
      ]
    }
  ]
}

export function Sidebar_Asus(): SidebarItem[] {
  return [
    {
      // text: '梅林操作文档',
      // collapsed: true,
      base: '/asus/',
      items: [
        { text: '刷机需知', link: 'flashing-prerequisites' },
        { text: '固件平台介绍', link: 'firmware-platform-introduction' },
        { text: 'fancyss', link: 'fancyss' },
        { text: 'Merlin Clash', link: 'merlin-clash' },
        { text: '官改/梅林固件 常用命令集合', link: 'common-commands' },
        { text: '提示检测非法关键词', link: 'illegal-keywords' },
        { text: '关闭降级检查', link: 'disable-downgrade-check' }
      ]
    }
  ]
}

export function Sidebar_FE(): SidebarItem[] {
  return [
    {
      text: 'Linux 文档',
      collapsed: false,
      base: '/fe/linux/',
      items: [
        { text: 'Linux 目录结构', link: 'directory' },
        { text: 'Linux 文件操作', link: 'file' },
        { text: 'Linux 文件权限', link: 'file-permission' },
        { text: 'Linux 常用网络操作', link: 'network' },
        { text: 'Linux 进程管理', link: 'process' },
        { text: 'Linux 管道命令', link: 'pipe' },
        { text: 'Linux 打包与拆包', link: 'tar' },
        { text: 'Linux VIM 编辑器', link: 'vim' },
        { text: 'Linux nano 编辑器', link: 'nano' }
      ]
    },
    {
      text: 'Docker 文档',
      collapsed: false,
      base: '/fe/docker/',
      items: [
        { text: 'Docker 简介与安装', link: 'install' },
        { text: 'Docker 进程相关操作', link: 'process' },
        { text: 'Docker 国内镜像加速', link: 'mirror-source' },
        { text: 'Docker 镜像相关操作', link: 'mirror' },
        { text: 'Docker 容器相关操作', link: 'container' }
      ]
    },
    {
      text: 'Git 文档',
      collapsed: false,
      base: '/fe/git/',
      items: [
        { text: 'Git 简介与安装', link: 'install' },
        { text: 'Git 设置用户信息', link: 'user' },
        { text: 'Git 常用命令', link: 'command' },
        { text: 'Git 版本回退', link: 'reset' },
        { text: 'Git 合并commit', link: 'commit' },
        { text: 'Git 缩减仓库', link: 'clean-up' },
        { text: 'Git 重置提交记录', link: 'reset-commit' }
      ]
    },
    {
      text: 'HomeBrew 文档',
      collapsed: false,
      base: '/fe/homebrew/',
      items: [
        { text: 'HomeBrew 简介与安装', link: 'install' },
        { text: 'HomeBrew 安装软件', link: 'software' },
        { text: 'HomeBrew tap使用', link: 'tap' },
        { text: 'HomeBrew 切换镜像源', link: 'mirror-source' }
      ]
    },
    {
      text: 'pnpm 文档',
      collapsed: false,
      base: '/fe/pnpm/',
      items: [
        { text: 'pnpm 安装', link: 'install' },
        { text: 'pnpm 切换镜像及恢复默认源', link: 'mirror' },
        { text: 'pnpm 管理依赖项', link: 'package' }
      ]
    }
  ]
}

export function Sidebar_vps(): SidebarItem[] {
  return [
    {
      text: 'Debian/Ubuntu',
      collapsed: false,
      base: '/vps/settings/',
      items: [
        { text: '系统优化设置', link: 'ubuntu' },
        { text: '更改中文语言', link: 'chinese' },
        { text: '开启防火墙端口', link: 'firewall-port' },
        { text: 'Debian12 安装使用 Cloud 内核', link: 'debian12-cloud' },
        { text: 'oh-my-zsh 安装 & 配置', link: 'oh-my-zsh' },
        { text: '开机自动挂载 NAS磁盘', link: 'ubuntu-mount-nas' }
      ]
    },
    {
      text: '系统工具',
      collapsed: false,
      base: '/vps/tools/',
      items: [
        { text: '全能工具箱', link: 'all-purpose-toolbox' },
        { text: 'dd.sh 重装系统', link: 'dd.sh' },
        { text: 'R 探长开机脚本', link: 'r-bot' },
        { text: 'IP 质量体检脚本', link: 'ipquality' },
        { text: '一键检测流媒体解锁', link: 'streaming-unlocked' },
        { text: '一键检测机场奈飞解锁', link: 'netflix-unlocked' }
      ]
    },
    {
      text: '搭建服务',
      collapsed: false,
      base: '/vps/serve/',
      items: [
        { text: '哪吒面板', link: 'install-nezha-panel' },
        { text: '1Panel 面板', link: 'install-1panel' },
        { text: 'Docker 搭建 aria2+AriaNg', link: 'aria2+ariang' },
        { text: '一键安装 小雅Xiaoya全家桶', link: 'xiaoya-alist' }
      ]
    },
    {
      text: 'Oracle Cloud 甲骨文云',
      collapsed: false,
      base: '/vps/oracle-cloud/',
      items: [
        { text: '甲骨文云服务器 开启IPv6', link: 'ipv6' },
        { text: 'Debian系统自动获取IPv6', link: 'debian-ipv6' }
      ]
    }
  ]
}

// ESXi安装指南
export function Sidebar_ESXi(): SidebarItem[] {
  return [
    {
      text: 'ESXi 8.0 部署指南',
      // collapsed: true,
      base: '/esxi/install/',
      items: [
        { text: 'ESXi 安装指南', link: 'guide' },
        { text: '安装 Openwrt', link: 'openwrt' },
        { text: '安装 AdGuardHome', link: 'adguardhome' },
        { text: '安装 Windows 11', link: 'windows11' }
      ]
    },
    {
      text: 'OpenWrt/iStoreOS',
      // collapsed: true,
      base: '/esxi/openwrt/',
      items: [
        { text: 'iStore 插件包', link: 'istore-plugin-package' },
        { text: 'PPPOE拨号', link: 'pppoe-dial-up' },
        { text: '关闭IPV6', link: 'turn-off-ipv6' },
        { text: '实时抓包', link: 'openwrt-real-time-packet-capture' },
        { text: '动态DNS设置', link: 'ddns-settings' },
        { text: '刷新 DNS 缓存', link: 'clear-dns-cache' },
        { text: 'iStoreOS 文件共享步骤', link: 'istoreos-file-sharing-steps' },
        { text: 'H3C NX30Pro 刷 openwrt', link: 'h3c-nx30pro' },
        {
          text: 'openwrt 安装 clouddrive2',
          link: 'openwrt-install-clouddrive2'
        },
        { text: '旁路由设置', link: 'bypass' }
      ]
    }
  ]
}

// 流媒体观影指南
export function Sidebar_streaming(): SidebarItem[] {
  return [
    {
      // text: 'Netflix 观看指南',
      // collapsed: true,
      base: '/streaming/',
      items: [
        {
          text: 'Netflix 观看指南',
          link: 'netflix-guide',
          items: [
            { text: '秘密分类的技巧', link: 'netflix-secret-classification' },
            {
              text: '全球各国影视剧数量',
              link: 'netflix-number-of-movies-and-tv-series'
            },
            {
              text: '常用浏览器插件汇总',
              link: 'netflix-browser-plug-in-summary'
            }
          ]
        },
        { text: 'Disney+ 观看指南', link: 'disney-introduce' },
        { text: 'Spotify Premium 指南', link: 'spotify' },
        { text: 'YouTube Premium 会员权益及订阅指南', link: 'youtube' },
        { text: 'Hulu 国内观看指南', link: 'hulu' },
        { text: 'HBO Max 国内观看指南', link: 'hbo-max' }
      ]
    }
  ]
}

// 账号合租平台
export function Sidebar_serve(): SidebarItem[] {
  return [
    {
      text: '账号合租平台',
      link: 'sharing/account-sharing-guide',
      // collapsed: true,
      base: '/serve/',
      items: [
        { text: '银河录像局', link: 'sharing/nf-video' },
        { text: '奈飞小铺', link: 'sharing/ihezu' },
        { text: '蜜糖商店', link: 'sharing/metshop' }
      ]
    },
    {
      text: '优质机场',
      base: '/serve/',
      items: [
        { text: 'FlyingBird - 飞鸟机场', link: 'airport/flyingbird' },
        { text: '青云梯', link: 'airport/qingyunti' },
        { text: '飞兔云', link: 'airport/feitucloud' },
        { text: 'TNT Cloud', link: 'airport/tnt' },
        { text: 'Totoro Cloud - 龙猫云', link: 'airport/totoro' }
      ]
    },
    {
      text: '接码平台',
      // collapsed: true,
      base: '/serve/',
      items: [{ text: 'SMS-Activate', link: 'code/sms-activate' }]
    }
  ]
}
