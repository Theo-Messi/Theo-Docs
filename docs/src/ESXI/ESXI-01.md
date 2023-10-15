---
title: 安装指南
---

## ESXI 介绍

ESXi，是 VMWare vSphere Hypervisor 套件之下重要组件。是一款一款优秀的服务器级别的虚拟机。前身是 ESX，依赖 Linux 源码，后来抛弃 Linux 源码做成了 ESXi。整个产品商用气息浓重，界面清晰易用，但硬件兼容性较差（主要面向服务器），没什么扩展性，ESXi 不依赖于任何操作系统，直接安装在裸机上，它本身就可以看作一个操作系统，然后可以在它上面安装其他系统。

## 准备工作

- ESXI 8 安装文件
- 写盘工具
- Openwrt 固件
- StarWind V2V Converter 程序

## ESXI 8 安装文件

注意，你需要注册一个`VMWare`的`customer connect账号`

注册登录完毕后，就可以下载 60 天试用版的 ESXI8.0

可直接下载 ISO 镜像即可，如果你需要封装驱动，那就下载`Offline Bundle离线捆绑包`

[官网下载](https://customerconnect.vmware.com/evalcenter?p=vsphere-eval-8)

## 写盘工具

[Ventoy 官网下载](https://github.com/ventoy/Ventoy/releases)

[Balenaetcher 官网下载](https://etcher.balena.io/)

## Openwrt 固件

这个不用多说了。要么你自己编译，要么用别人编译好的都可以，只要 X86 就行，比如 ESir 的高大全版

## StarWind V2V Converter 程序

该程序用于将 OP 固件 VMDK 文件转换为 ESXI 8.0 的存储格式

如果直接用 VMDK，ESXI 8.0 将无法挂载镜像。

下载需要填写邮箱，下载地址会发送到你的邮箱里。

[官网下载](https://www.starwindsoftware.com/starwind-v2v-converter)
