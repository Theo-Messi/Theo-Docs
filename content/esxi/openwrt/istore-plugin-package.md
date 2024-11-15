---
title: iStore 插件包
head:
  - - meta
    - name: description
      content: iStore openwrt 插件包
---

## iStore插件包

<Box :items="[
{ name: 'iStore插件包',link: 'https://github.com/AUK9527/Are-u-ok/tree/main/apps', image: 'https://i.theojs.cn/logo/istoreos.png',  tag:  'ARM 平台' },
{ name: 'iStore插件包',link: 'https://github.com/AUK9527/Are-u-ok/tree/main/x86', image: 'https://i.theojs.cn/logo/istoreos.png',  tag:  'x86_64平台' }
]"/>

## 常用代理软件包

| 插件名    | 功能     |
| --------- | -------- |
| PassWall  | 科学工具 |
| PassWall2 | 科学工具 |
| SSR-Plus  | 科学工具 |
| OpenClash | 科学工具 |

- passwall、passwall2、ssr-plus均使用 22.03.X sdk编译，依旧使用libopenssl1.1，无需libopenssl3依赖，安装后在服务里。
- 安装后passwall日志里提示一些依赖未安装属于正常现象，不影响使用，这些依赖固件里应该都自带的。可以到【系统】-【软件包】-【已安装】里确认。
- 如果你在安装此包前通过第三方软件源安装，可能导致意外的错误，例如本不需要libopenssl3，变得需要，此情况可能需要重置你的路由器。
- 自带clash核心的openclash，版本为0.46.001。如果安装完出现路由器断网，重启一次路由器。
- 注意，上述软件包安装，部分依赖依然要通过opkg软件源在线安装。如果安装失败，检查路由器自身的网络情况，特别是旁路由模式下最容易出现网络问题。
  ::: tip
  **再三注意需要路由器自身联网正常**
  :::

## 其它软件包

| 插件名              | 功能                                     |
| ------------------- | ---------------------------------------- |
| AdGuardHome         | DNS/拦截                                 |
| MosDNS              | DNS 转发/分流器                          |
| UnblockNeteaseMusic | 解锁网易云灰色歌曲                       |
| VSSR                | HelloWorld 科学工具                      |
| ByPass              | ByPass 科学工具                          |
| ikoolproxy          | koolproxy去广告(不适合高于5.4内核的固件) |
| adblock             | adblock去广告                            |
| adbyby              | adbyby去广告                             |
| KMS                 | KMS服务器                                |
| OpenVPN             | OpenVPN客户端                            |
| OpenVPN-Server      | OpenVPN服务端                            |
| NPS                 | Nps内网穿透                              |

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
