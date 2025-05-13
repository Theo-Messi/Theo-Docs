---
title: 关闭IPV6
head:
  - - meta
    - name: description
      content: 关闭 IPV6 的设置教程
  - - meta
    - name: keywords
      content: IPV6 IPV4 关闭IPV6 禁用IPV6
---

## WAN 口设置

### 删除 WAN6

- **网络** > **网卡** 中
- 删除名为**WAN6**的接口

![IPV6](https://i.theojs.cn/docs/v6-1.nuexini '删除 WAN6')

### 编辑 IPV6 设置

- **WAN 接口**中点击 **修改/编辑**，
- 点击 **DHCP 服务器 > IPv6 设置**
- RA 服务 & DHCPv6 服务 & NDP 代理 选择 **已禁用**

![IPV6](https://i.theojs.cn/docs/v6-2.nuexini '编辑 IPV6 设置')

### 高级设置

![IPV6](https://i.theojs.cn/docs/v6-3.nuexini '把 **IPv6 分配长度** 选择 **已禁用**')

![IPV6](https://i.theojs.cn/docs/v6-4.nuexini '取消勾选 - **使用内置的 IPv6 管理**')

![IPV6](https://i.theojs.cn/docs/v6-5.nuexini '高级设置')

## LAN 口设置

- 同 **WAN 口设置** ，只是修改对象选择 **LAN 口**
- 修改完毕后，点击 **保存**

## 保存并应用

- 做完 `WAN 口设置` 和 `LAN 口设置` 后
- 还有最后一步，在 `全局网络选项` 中 `IPv6 ULA 前缀` 内容清除
- 点击保存并应用，即可完成操作

![IPV6](https://i.theojs.cn/docs/v6-7.nuexini '保存并应用')

## 防火墙设置

- 在 **网络 > 防火墙** 中，选择 **通信规则**
- 把所有为**入站 IPv6** 或 **转发 IPv6** 或 **出站 IPv6** 的 **启用** 放弃勾选
- 不启用之后，点击**保存并应用**

![IPV6](https://i.theojs.cn/docs/v6-9.nuexini '防火墙设置')

## DHCP/DNS 设置

- 在 **网络 > DHCP/DNS** 中，选择 **高级设置**
- 在大雕的 OpenWrt (lede)中，是有 **禁止解析 IPv6 DNS 记录** 的，但是在原版的 OpenWrt 中，是没有这个选项的

![IPV6](https://i.theojs.cn/docs/v6-11.webp 'DHCP/DNS 设置')

- 下图为原版 **OpenWrt > 网络 > DHCP/DNS > 高级设置**

![IPV6](https://i.theojs.cn/docs/v6-12.nuexini 'DHCP/DNS 设置')

## 下面需要用到 SSH 操作（如何开启 SSH 请自己解决）

- SSH 连接路由器
- 输入第一条命令，按回车执行

```sh
uci set dhcp.@dnsmasq[0].filter_aaaa='1' #1为禁止，0启用

uci commit dhcp

/etc/init.d/odhcpd disable

echo 'net.ipv6.conf.all.disable_ipv6 = 1' >> /etc/sysctl.conf

sysctl -p /etc/sysctl.conf #所有接口禁用ipv6

echo 'net.ipv6.conf.eth0.disable_ipv6 = 1' >> /etc/sysctl.conf

sysctl -p /etc/sysctl.conf #禁用某一个指定接口的IPv6（例如：eh0）
```

## 重启路由器
