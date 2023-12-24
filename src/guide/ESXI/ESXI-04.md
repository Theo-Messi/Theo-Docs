---
title: ESXI安装
---

## ESXI 开始引导

:::tip 注意
看到跑码界面，马上按键盘上的 Shift+O,在屏幕下方删除多余命令，手工录入命令
:::

```sh
cdromBoot runweasel autoPartitionOSDataSize=4096
```

注意区分大小写。录入完成后回车继续。

这个命令的意思是安装 ESXI 时，系统占用空间为 4096MB,也就是 4GB，如果不录入该命令，ESXI8.0 默认会让 VMFSL 系统分区占用 100 多个 G，可用的 VMFS 就没多少了。当然如果你的 R1 硬盘足够大，不录入也可以

## ESXI 扫描磁盘

后续安装，ESXI 会扫描磁盘，选择硬盘，之后设置 root 账号的密码，确认安装信息，最后重启设备
