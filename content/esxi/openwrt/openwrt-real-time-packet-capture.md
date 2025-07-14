---
title: openwrt 实时抓包
description: openwrt 实时抓包，使用 tcpdump 命令实时抓取数据包，并通过 Wireshark 进行分析
---

# openwrt 实时抓包

## 软件准备

### 1. Openwrt 安装 Tcpdump

```sh
opkg update
opkg install tcpdump
```

### 2. 安装 Wireshark 和 终端工具

<Links
  :grid="2"
  :items="[
    {
      icon: { icon: 'simple-icons:wireshark', color: '#1679A7' },
      name: 'Wireshark',
      desc: '网络协议分析工具，可以实时捕获和分析网络数据包',
      link: 'https://www.wireshark.org/download.html'
    },
    {
      image: 'https://i.theojs.cn/logo/tabby.svg',
      name: 'Tabby',
      desc: '跨平台的终端模拟器，支持 SSH、Telnet 等协议，适用于连接 Openwrt 进行抓包操作',
      link: 'https://tabby.sh/'
    }
  ]"
/>

## 实时抓包

### 使用终端

::: tip
Windows 实测只能用 `cmd` 而不能用 `Powershell`
:::

```sh
plink.exe -batch -ssh -pw 123456 root@192.168.1.1 "tcpdump -ni br-lan -s 0 -w - not port 22" | "D:\Program Files\Wireshark\Wireshark.exe" -k -i -
```

- `-pw 123456` : Openwrt的ssh密码
- `root@192.168.1.1` : Openwrt的USER@IP
- `-ni br-lan` : Openwrt上要嗅探的网卡
- `"D:\Program Files\Wireshark\Wireshark.exe"` : Windows中Wireshark的路径
