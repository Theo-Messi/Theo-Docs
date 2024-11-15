---
title: openwrt 实时抓包
head:
  - - meta
    - name: description
      content: openwrt 实时抓包
---

## 软件准备

### 1. Openwrt 安装 Tcpdump

```sh
opkg update
opkg install tcpdump
```

### 2. 安装 Wireshark 和 终端工具

<Box
  :items="[
    {
      name: 'Wireshark',
      tag: '官网下载',
      link: 'https://www.wireshark.org/download.html',
      image: 'https://i.theojs.cn/logo/wireshark.svg'
    },
    {
      name: 'Tabby',
      tag: '官网下载',
      link: 'https://tabby.sh/',
      image: 'https://i.theojs.cn/logo/tabby.svg'
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
