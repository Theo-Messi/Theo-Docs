---
title: ESXI后台配置
---

安装完成后，会进入一个后台配置界面。

按`F2`进入后台配置界面，输入 root 账号密码，挑个网口作为管理口，与 PC 机连接

## 配置 - Configure Management Network

![](https://m.theovan.xyz/img/v2-e4aff21e700228ae0ec283e9847089b1_1440w.webp)

#### 1. 选择`Network Adapters`,配置管理口

![](https://m.theovan.xyz/img/v2-d4053e9e9c9effc2d55f8a9027c9d0b2_1440w.webp)

#### 2. 进入后会发现，其中一个网卡状态为`connected`，就是接入网线的网口

:::danger 注意
**此处只能选择一个网口作为管理口，不要选择多个**
:::

#### 3. 选择 vmnic3 网口，空格为选择或取消，配置完成回车保存，esc 退回上级菜单，有可能会提示你是否保存，选择是即可

## 配置 - IPv4 Configuration

![](https://m.theovan.xyz/img/v2-6000431802b9b7f1ef8c2ecc11f3ff8f_1440w.webp)

#### 1.选择静态 IP，配置为你网络环境中的内网网段 IP 即可

#### 2.一般配置为`孤僻IP`，可随意配置，网关为你路由器的 IP

![](https://m.theovan.xyz/img/v2-42a37dc2ded65a10cadf32f33968deb5_1440w.webp)

#### 3.如果将`Openwrt`做入`ESXI`中的话，就配置为`Openwrt`路由的 IP

比如我的固件`Openwrt`的默认 IP 为`10.10.0.253`，那么此处`Gateway`网关就填入`10.10.0.253`.
最后`esc`退出，会弹出确认提示，Y 即可。
