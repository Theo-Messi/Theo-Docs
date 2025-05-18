---
title: Merlin Clash - 安装
head:
  - - meta
    - name: description
      content: Merlin Clash 是一款运行在 KoolCenter 软件中心上的 Clash GUI 插件，支持 SS/SSR/Trojan/V2Ray 等多种协议
  - - meta
    - name: keywords
      content: fancyss 科学上网 插件 388 386 梅林 华硕 官改 固件 clash v2ray trojan
---

# Merlin Clash - 安装

## 简介

Merlin Clash 是一款运行在 <Pill name="KoolCenter" link="https://www.koolcenter.com/" image="https://fw.koolcenter.com/theme/favicon.svg" alt="koolcenter icon" /> 软件中心(Arm 版)上的 Clash GUI 插件。

获取插件需加入 **Telegram 群组** <Pill name="merlinclashcat" link="https://t.me/merlinclashcat" icon="logos:telegram" alt="telegram logo" />

## 插件下载

进入群组下载对应版本：

比如我的路由器是 AX88U 就下载 ARM v8 HND 版本，若是不知道自己该下哪个版本，频道里也提供了说明：

## 安装

打开 `软件中心` - `离线安装` ，上传下载好的 `merlinclash` 的 `tar包` 并安装。

:::tip
要是提示含非法关键词，安装失败的，可查看 [提示检测非法关键词](/asus/illegal-keywords)
:::

## 安装补丁

安装完成后提示如果有补丁更新的话我们需要去频道上下载补丁后通过高级模式界面上传补丁：

## 使用

详细的使用和更多的技巧可参考 [官方 WiKi](https://mcreadme.gitbook.io/mc/)。

---

# Merlin Clash - 配置

:::tip 注意事项
`Merlin Clash` 和 `科学上网` 插件不能同时启用，请确保配置和启动 `Merlin Clash` 插件前彻底关闭或卸载原有的 `科学上网` 插件。
:::
Merlin Clash 是一款运行在 KoolCenter 软件中心上的 Clash GUI 插件，支持 SS/SSR/Trojan/V2Ray 等多种协议。
基于硬件限制，并非所有架构的路由器都能正常运行插件，请前往 Merlin Clash 官方文档中心查看自己路由器的软硬件版本是否支持，并前往其官方插件发布频道按照文档操作安装即可。

## 配置订阅

切换到配置文件页，在 `Clash-Yaml 配置下载` 一栏粘贴 clash 订阅地址。

![Merlin Clash](https://i.theojs.cn/docs/MerlinClash2.webp '配置订阅')

---

在下方 `重命名` 栏输入自定义配置文件名后(以命名为 Clash 为例)，点击 `Clash 订阅` 。如下图所示， Clash-Yaml 配置下载成功，并被命名为 Clash.yaml。

![Merlin Clash](https://i.theojs.cn/docs/MerlinClash3.webp '配置订阅')

## 启动

切换至 `首页功能` 页，打开 `Merlin Clash 开关` 选择配置文件 `Clash` 后 `保存&启动`。

![Merlin Clash](https://i.theojs.cn/docs/MerlinClash4.webp '保存&启动')

---

启动成功后 `插件运行状态` 如下图所示。启动默认不选择节点，且 `连通性检查` 只检测当前浏览器情况，并非设备和插件网络情况。

![Merlin Clash](https://i.theojs.cn/docs/MerlinClash5.webp '连通性检查')

## 代理

Merlin Clash 插件启动后，在 `首页功能` 页下方找到 `Clash 管理面板` 。

通过 `Clash 管理面板` 可以快捷进行 `节点切换` `模式变更` 等常用功能设置。

![Merlin Clash](https://i.theojs.cn/docs/MerlinClash6.webp 'Clash 管理面板')

---

以访问 `YACD-Clash 面板` 为例：

切换至 `代理` 页，点击 `手动选择` 展开节点列表并选择要连接使用的节点即启动代理。

![Merlin Clash](https://i.theojs.cn/docs/MerlinClash7.webp 'YACD-Clash 面板')

---

切换至 `配置` 页，点击 `Mode` 展开列表并选择要使用的代理模式。( 常用 Rule、Global )

![Merlin Clash](https://i.theojs.cn/docs/MerlinClash8.webp '代理模式')

:::tip
在管理面板中的所有设置都立即生效。
:::
