---
title: V2Ray搭建详细教程
---

## 准备工作

- VPS
- 获取 VPS 信息: IP 地址，root 用户密码，SSH 端口
- 安装 Xshell
- 安装 V2Ray

## 安装 V2Ray

```sh
wget -qO- -o- https://git.io/v2ray.sh
```

- 脚本特意弄了一个时间显示，给反馈用来检测安装时间的
- 理论上，绝大多数情况下 15 秒内会安装完成
- 为方便你快速使用，脚本在安装完成后会自动创建一个 VMess-TCP 配置。
- 此时你可以复制 URL 到相关软件 (例如 v2rayN) 去测试一下是否正常使用。
- 如果无法正常使用，请尝试使用`v2ray add ss` 添加一个 SS 来再测试一下

## V2Ray 管理面板

现在可以尝试一下输入 `v2ray` 回车，即可管理 V2Ray
提示，如果你不想执行任何功能，直接按 Enter 回车退出即可。

## 关闭防火墙

```sh
systemctl stop firewalld;
systemctl disable firewalld;
ufw disable
```

- 关闭防火墙之后再测试一下端口是否通
- 如果不通，你可能还有外部防火墙没关，必须要能连接上端口才能正常使用。
- 如果 `REACHABILITY` 显示 `Reachable` 那就是能连接上端口，那就继续
- 使用 `v2ray add ss` 添加一个 SS 看看能不能正常使用，如果正常使用，证明运行没有问题。

:::tip
默认安装的 V2Ray 内核为最新版本
:::

## 无法使用

- 无法使用一般都是两种情况，一是无法连接上端口，二是客户端内核支持有问题。
- 如果你的 VPS 有外部防火墙，请确保你已经开放了端口
- 测试端口是否能连接上：
  - 打开：<https://ping.sx/check-port>
  - Target 写你的 VPS IP，
  - Port 写 V2Ray 的端口，
  - 然后点击 `Check`
  - 如果 REACHABILITY 显示 `Timeout`，那是无法连接上端口
- 可能是你客户端的内核太旧,请尝试使用不同的客户端进行测试；比如 `v2rayN` `v2rayNG` 等
- 请尝试设置 `VMessAEAD`，某些客户端会有相关选项
- 某些客户端得把 额外`id(alterid) `填写为 0；比如垃圾苹果那边的东西

### 解决方案一:请尝试将服务器端的内核版本降级

使用`v2ray update core 4.45.2` 降级即可

### 解决方案二，升级客户端内核

:::tip
你可以使用`v2ray ip` 查看 VPS IP

请尽量将客户端内核和服务器端内核保持一致！内核版本低于 5 可能会出现莫名其妙的问题
:::

## 快速入门

### 添加配置：

- `v2ray add` : 添加配置
- `v2ray add ss` :添加一个 Shadowsocks 配置
- `v2ray add tcp` : 添加一个 VMess-TCP 配置
- `v2ray add kcpd` :添加一个 VMess-mKCP-dynamic-port 动态端口配置
  :::tip
  使用`v2ray add` 添加配置的时候，仅 TLS 相关协议配置必须提供域名，其他均可自动化处理
  :::

### 更改配置：

- `v2ray change` :更改配置
- `v2ray change tcp` :更改 TCP 相关配置
- `v2ray change tcp port auto` :更改 TCP 相关配置的端口，端口使用自动创建，
- `v2ray port tcp auto` :同上
- `v2ray change kcp id auto` :更改 mKCP 相关配置的 UUID，UUID 使用自动创建
- `v2ray id tcp auto` :同上

### 查看配置：

- `v2ray info`:查看配置
- `v2ray info tcp`: 查看 TCP 相关配置
- `v2ray info kcp`:查看 kcp 相关配置

### 删除配置：

- `v2ray del`:删除配置
- `v2ray del kcp`:删除 KCP 相关配置
- `v2ray del tcp`:删除 TCP 相关配置

**备注:谨慎使用 del 参数**

### 打开 BBR 优化

```sh
v2ray bbr
```

### mKCP

```sh
v2ray add kcp
```

**备注：由于 UDP 的原因也许会被运营商 Qos，这是无解的。还有就是使用 mKCP 会花费更多流量，请注意！**

### 动态端口

```sh
v2ray add kcpd #或者  v2ray add tcpd
```

### VMess-WS-TLS

实现 VMess-WS-TLS 超级无敌简单，前提是要拥有一个能正常解析的域名 (并且知道怎么解析域名)

```sh
v2ray add ws
```

### VLESS-H2-TLS

实现 VLESS-H2-TLS 超级无敌简单，前提是要拥有一个能正常解析的域名 (并且知道怎么解析域名)

```sh
v2ray add vh2
```

**备注:VLESS-H2-TLS 相比 VMess-WS-TLS，在浏览网页时有一些优势，速度是差不多的啦**

### Trojan-gRPC-TLS

实现 Trojan-gRPC-TLS 超级无敌简单，前提是要拥有一个能正常解析的域名 (并且知道怎么解析域名)

```sh
>v2ray add tgrpc
```
