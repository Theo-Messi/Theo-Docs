---
title: OpenWrt PPPOE拨号设置
description: PPPOE拨号教程，适用于OpenWrt和Lede系统的软路由设置
---

# OpenWrt PPPOE拨号 设置

## 前言

设置前请先确定你的光猫是否支持桥接，是否支持获取带宽账号密码，宽带账号密码可以咨询安装光猫的师傅或者营业厅，本文教程演示支持 OpenWrt 和 Lede，市面上第三方软路由只是界面不同，但是操作步骤是一样的，大家可以参考下面的教程进行 PPPOE 拨号设置。

## 登陆软路由

- 进入 OpenWrt 或 Lede 软路由系统界面，
- 填写用户名和密码进行登录，
- 大部分的登录账号：root，密码：password，个别密码为空。

![PPPOE](https://i.theojs.cn/docs/bh-1.webp '登陆软路由')

## 打开网络 -> 接口

- 进入系统界面后
- 选择打开网络 -> 接口，
- 进入接口总览页面。

![PPPOE](https://i.theojs.cn/docs/bh-2.webp '打开网络 -> 接口')

## 编辑 WAN 接口

- 进入接口总览选项后
- 点击 WAN 接口后面的修改，进行编辑。

![PPPOE](https://i.theojs.cn/docs/bh-3.webp '编辑 WAN 接口')

## 选择 PPPoE 拨号

- 进入 WAN 口编辑后
- 点击 DHCP 客户端
- 选择 PPPoE 拨号

![PPPOE](https://i.theojs.cn/docs/bh-4.webp '选择 PPPoE 拨号')

## 切换 PPPoe 协议

- 选择完成后，
- 点击确定切换 PPPoe 协议，
- 一定要记得点击，如下图：

![PPPOE](https://i.theojs.cn/docs/bh-5.webp '切换 PPPoe 协议')

## 填写账密并保存

- 然后就能看到填写宽带账号密码的地方，
- 填好宽带账号密码，
- 保存应用，等待 1 分钟就会联网。

![PPPOE](https://i.theojs.cn/docs/bh-6.webp '填写账密并保存')
