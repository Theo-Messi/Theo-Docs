---
title: iStore/OpenWRT插件包合集，PassWall, OpenClash 等
description: iStore 插件包为 OpenWRT 用户提供了丰富的插件选择，包括科学工具、DNS 拦截、内网穿透等功能插件，帮助优化网络使用体验。
---

# iStore/OpenWRT插件包合集，PassWall, OpenClash 等

## iStore插件包列表

|                                                常用代理软件包                                                |                                                      其他软件包                                                       |
| :----------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------: |
|    <Pill name="适用于 22.03 版本" link="https://github.com/bcseputetto/Are-u-ok/releases/tag/iStoreOS" />    |    <Pill name="适用于 22.03 版本" link="https://github.com/bcseputetto/Are-u-ok/blob/master/packages/README.md" />    |
| <Pill name="适用于 24.10 版本" link="https://github.com/bcseputetto/Are-u-ok/releases/tag/iStoreOS_24.10" /> | <Pill name="适用于 24.10 版本" link="https://github.com/bcseputetto/Are-u-ok/blob/master/packages_24.10/README.md" /> |

## 常用代理软件包

|    插件名     |               功能说明               |
| :-----------: | :----------------------------------: |
|   PassWall    |    科学上网（主流代理客户端之一）    |
|   PassWall2   |  科学上网（PassWall 分支或增强版）   |
|   SSR-Plus    |   科学上网（支持 SSR/SS 等多协议）   |
|   OpenClash   |     科学上网（支持 Clash 核心）      |
|   homeproxy   |     科学上网（轻量级代理客户端）     |
| OpenWrt-nikki |  精简型科学上网整合包（适配多架构）  |
|      dae      | 新一代代理后端（需 iStoreOS 新版本） |
|     daed      |          dae 的守护进程组件          |

- passwall、passwall2、ssr-plus均使用 22.03.X sdk编译，依旧使用libopenssl1.1，无需libopenssl3依赖，安装后在服务里。
- 安装后passwall日志里提示一些依赖未安装属于正常现象，不影响使用，这些依赖固件里应该都自带的。可以到【系统】-【软件包】-【已安装】里确认。
- 如果你在安装此包前通过第三方软件源安装，可能导致意外的错误，例如本不需要libopenssl3，变得需要，此情况可能需要重置你的路由器。
- 自带clash核心的openclash，版本为0.46.001。如果安装完出现路由器断网，重启一次路由器。
- 注意，上述软件包安装，部分依赖依然要通过opkg软件源在线安装。如果安装失败，检查路由器自身的网络情况，特别是旁路由模式下最容易出现网络问题。
  ::: tip
  **再三注意需要路由器自身联网正常**
  :::

## 其它软件包

|       插件名        |         功能说明         |
| :-----------------: | :----------------------: |
| unblockneteasemusic |      网易云音乐解锁      |
|       mosdns        |         DNS 分流         |
|     AdGuardHome     |      DNS + 广告过滤      |
|      taskplan       |         定时任务         |
|      eqosplus       |         定时限速         |
|      wrtbwmon       |       实时流量监控       |
|       NekoBox       |        梯子客户端        |
|       ByPass        | （已停止维护）梯子客户端 |

::: tip
AdGuardHome如果想自己配置，而不是使用默认配置，请删除 `/etc/AdGuardHome.yaml` 配置文件后，自己进行用户名，密码，web以及dns相关配置
:::

## 如何安装

![iStore](https://i.theojs.cn/docs/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f41554b393532372f4172652d752d6f6b406d61737465722f617070732f696e7374616c6c2e706e67 '下载后，来到iStore应用商店页面，点击手动安装，点击选择上传或者直接拖放文件')

### 没有iStore应用商店的OpenWrt

将 `.run` 文件上传到路由器上，然后在终端环境执行

```sh
sh 包名.run
# 例如
# sh PassWall_4.75-8_x86_64_all_sdk_22.03.6.run
```

如果文件不在当前路径记得填写路径，下例

```sh
sh /tmp/upload/PassWall_4.75-8_x86_64_all_sdk_22.03.6.run
```
