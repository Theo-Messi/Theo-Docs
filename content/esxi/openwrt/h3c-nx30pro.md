---
title: H3C NX30Pro 刷 OpenWRT 固件教程 Uboot 刷写与恢复操作指南
description: 完整的 H3C NX30Pro 刷 OpenWRT 固件教程，包括 Uboot 刷写、固件备份与恢复操作步骤，适用于刷机前后常见问题解决。
---

# H3C NX30Pro 刷 OpenWRT 固件教程 Uboot 刷写与恢复操作指南

## 准备工作

<Links
  :grid="2"
  :items="[
    {
      icon: { icon: 'simple-icons:openwrt', color: '#00B5E2' },
      name: '固件/UBOOT',
      desc: 'H3C NX30Pro OpenWRT 固件和 UBOOT 下载链接',
      link: 'https://github.com/s-theo/H3C-NX30Pro'
    },
    {
      icon: { icon: 'simple-icons:termius', color: '#000' },
      name: 'termius',
      desc: '跨平台的 SSH 客户端，支持 Telnet 和 SSH 协议，适用于连接路由器进行刷机操作',
      link: 'https://termius.com/download/'
    },
    {
      image: 'https://i.theojs.cn/logo/winscp.webp',
      name: 'winscp',
      desc: 'Windows 下的 SCP/SFTP 客户端，用于文件传输和管理，适合刷机过程中备份和恢复系统',
      link: 'https://winscp.net/eng/download.php'
    },
    {
      image: 'https://i.theojs.cn/logo/FinalShell.webp',
      name: 'FinalShell',
      desc: '跨平台的终端工具，支持 SSH、Telnet 等协议，适用于连接路由器进行刷机操作',
      link: 'https://www.hostbuf.com/'
    }
  ]"
/>

- H3C NX30 Pro 路由器
- 有网口的电脑（主要用 telnet、ssh）

## 开启 SSH

这一步请确保路由器能正常联网。NX30 Pro 默认开启了 `telnet`，默认的地址是 `192.168.124.1`，用户名是 `H3C`（全大写），密码就你设置的路由器后台密码，端口是 `99`。

打开 `termius` 选择 `New Host` 添加，`Address` 填写 `192.168.124.1`，取消勾选 `SSH`，勾选 `Telnet`，Port 端口填写上 `99`。

![H3C NX30Pro](https://i.theojs.cn/docs/20240420014737.webp '开启 SSH')

然后输入用户名和密码，输入密码不会显示，回车即可连上 Telnet。

![H3C NX30Pro](https://i.theojs.cn/docs/20240420014804.webp '开启 SSH')

然后复制下面的代码到终端里执行即可开启 SSH：

```sh
curl -o /tmp/dropbear.ipk https://downloads.openwrt.org/releases/packages-19.07/aarch64_cortex-a53/base/dropbear_2019.78-2_aarch64_cortex-a53.ipk
opkg install /tmp/dropbear.ipk
/etc/init.d/dropbear enable
/etc/init.d/dropbear start
```

![H3C NX30Pro](https://i.theojs.cn/docs/20240420014842.webp '开启 SSH')

## 备份系统

在终端里执行这命令，将系统备份到 `tmp` 路径下，备份的过程比较慢，需要 1-2 分钟。

```sh
dd if=/dev/mtd5 of=/tmp/backup.img
```

![H3C NX30Pro](https://i.theojs.cn/docs/20240420014931.webp '备份系统')

然后打开 `WinSCP`，文件协议选择 `SCP`，主机名 `192.168.124.1`，端口号 `22`，用户名 `H3C`，然后登录输入密码就能连上。

![H3C NX30Pro](https://i.theojs.cn/docs/20240420015012.webp '备份系统')

登录后，将右侧 NX30Pro `tmp` 路径下的 `backup.img` 文件拖到左边电脑上保存，刷回官方固件需要用到。

![H3C NX30Pro](https://i.theojs.cn/docs/20240420015101.webp '备份系统')

## 刷写 uboot

两种方式二选其一即可，更推荐方法一，因为有可能 curl 因为网络问题无法正常下载 uboot。

### 方法一（更推荐）

![H3C NX30Pro](https://i.theojs.cn/docs/20240420015157.webp '刷写 uboot')

将下载好的 `uboot.bin` 文件从左边电脑拖进右侧路由器 `tmp` 路径下。

然后执行命令，如图所示完成了写入 uboot。

```sh
cd /tmp
md5sum uboot.bin
mtd write /tmp/uboot.bin FIP
```

::: tip
**请确保MD5 校验结果和图中相同，再敲回车执行，否则会变砖**
:::

![H3C NX30Pro](https://i.theojs.cn/docs/20240420015418.webp '刷写 uboot')

### 方法二

在终端直接复制执行，就能完成 uboot 的写入。

```sh
cd /tmp
curl -L https://share.qust.me/d/%E8%B7%AF%E7%94%B1%E5%99%A8/NX30Pro/uboot.bin -o uboot.bin
md5sum uboot.bin
mtd write /tmp/uboot.bin FIP
```

![H3C NX30Pro](https://i.theojs.cn/docs/20240420015546.webp '刷写 uboot')

## 刷写 openwrt

路由器断电后，先按住背后 `Reset` 恢复按钮不放，再插电，等待 10s 左右松开背后 `Reset`，路由器就进入了 uboot

电脑用网线连接路由器 `LAN1`，并设置好 `静态 IP：192.168.1.2`，`子网掩码 255.255.255.0`，`网关 192.168.1.1`，`DNS 192.168.1.1`。

![H3C NX30Pro](https://i.theojs.cn/docs/20240420015709.webp '刷写 openwrt')

现在浏览器打开 `192.168.1.1` 就能打开 uboot 后台。

![H3C NX30Pro](https://i.theojs.cn/docs/20240420015743.webp '刷写 openwrt')

选择下载好的 `NX30pro` 的固件，`upload` 上传后，`update` 更新，写入即可。

![H3C NX30Pro](https://i.theojs.cn/docs/20240420015831.webp '刷写 openwrt')

更新完成后系统会重启进入 openwrt 的系统

- 默认的 WiFi 是 MTK 开头没有密码
- 后台地址 `192.168.6.1`，用户名 `root`，密码 `password`。

## 刷回官方

刷回官方非常简单，进入 `uboot` 后选择之前备份的 `backup.img` 文件更新即可，系统就会重启进入官方的系统。

![H3C NX30Pro](https://i.theojs.cn/docs/20240420015951.webp '刷回官方')
