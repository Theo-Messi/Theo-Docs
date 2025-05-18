---
title: openwrt/istore os 动态DNS设置
head:
  - - meta
    - name: description
      content: openwrt/istore os 动态DNS设置
  - - meta
    - name: keywords
      content: openwrt istore os 动态DNS 腾讯云 阿里云
---

## 腾讯云设置

### 创建子域名

在 <Pill name="腾讯云控制台" link="https://console.dnspod.cn/dns/list" image="https://cloud.tencent.com/favicon.ico" alt="腾讯云图标" />，选择要使用的域名

在其下创建一个新的 `A` 记录，如 `dev`，记录值随便填写一个，后面会被 ddns 插件覆盖为正确的值。

由于是免费套餐，TTL 最小只能设置为 600 （单位秒，也就是十分钟）。

### 创建 API token

由于 ddns 插件是通过 API token 来执行 dns 记录更新，因此需要提前创建 <Pill name="API token" link="https://console.dnspod.cn/account/token/token" icon="oui:token-key" alt="api token icon" />。

> 注意： 使用的 DNSPod Token，不是 腾讯云 API 密钥

### 创建密钥

```sh
ID	:383XXX
Token	:3de14556b8a8bXXXXXXXXXXXXXX
```

## 阿里云设置

### 创建子域名

在其下创建一个新的 `A` 记录，如 `dev`，记录值随便填写一个，后面会被 ddns 插件覆盖为正确的值。

### 创建Access Key

1. 登录阿里云，找到 `AccessKey管理`
2. 你可以使用管理账号的 AccessKey，但为安全起见，本案例使用 `子用户AccessKey`。
3. 创建子用户，填入登录名称和显示名称，访问方式勾选 `Open api调用访问`。
4. 创建完成后，点击 `AccessKey`，复制 `AccessKey ID` 和 `AccessKey Secret`。

### 添加权限

选择 `AliyunDNSFullAccess`，并添加。

## 设置openwrt/istore os

进入 `openwrt/istore os 管理后台` — `服务` — `动态DNS` — `myddns_ipv4` — `编辑`

### 基本设置

- 查询主机名: 设置的子域名 如: `dev.theojs.cn`
- DDNS服务提供商: 腾讯云- `dnspod` / 阿里云- `aliyun.com`
- 域名: 设置的子域名 如: `dev.theojs.cn`
- 用户名: 腾讯云- `ID` / 阿里云- `AccessKey ID`
- 密码: 腾讯云- `Token` / 阿里云- `AccessKey Secret`

### 高级设置

选择接口和WAN口作为更新源，用于获取和更新你本地的公网地址。如果你无法通过接口获得公网地址，也可以使用URL方式，二选一。

## 验证

过10分钟后，应该就可以在域名解析中看到之前的 `1.1.1.1` 已经自动更新为你的公网IP地址。

## 诊断

```
Forbidden
Rejected request from RFC1918 IP to public server address .
```

![DDNS](https://i.theojs.cn/docs/20240419153456.webp 'Forbidden')

### 解决方法

ssh连接到openwrt

```sh
# 编辑文件
vi /etc/config/uhttpd
```

将 `option rfc1918_filter 1` 改为 `option rfc1918_filter 0`

```sh
# 执行重启
/etc/init.d/uhttpd restart
```
