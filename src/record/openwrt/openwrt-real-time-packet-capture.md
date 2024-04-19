---
title: openwrt 实时抓包
head:
  - - meta
    - name: keywords
      content: openwrt 实时抓包
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

### 2. 安装 Wireshark

> 下载地址: https://www.wireshark.org/download.html

### 3. 安装终端工具

- Mac os / [FinalShell](https://www.hostbuf.com/)
- Windows / [PuTTY](https://www.putty.org/)

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
