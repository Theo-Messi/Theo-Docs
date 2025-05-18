---
title: VPS一键检测流媒体解锁
head:
  - - meta
    - name: description
      content: 使用VPS一键脚本检测流媒体服务（如Netflix等）是否成功解锁。
  - - meta
    - name: keywords
      content: VPS 一键检测 流媒体 解锁 Netflix 机场 科学上网
---

## 支持 OS/Platform

- CentOS 6+
- Ubuntu 14.04+
- Debian 8+
- MacOS
- Android with Termux

::: tip 注意事项
Netflix CDN 分流测试依赖 DNS 解析。而如果您使用的本地设备开了 VPN 代理进行测试，将无法得到正确的 CDN 分流信息。
:::

<Links
  :items="[
    {
      name: 'GitHub 项目地址',
      icon: { light: 'skill-icons:github-dark', dark: 'skill-icons:github-light', },
      link: 'https://github.com/lmc999/RegionRestrictionCheck',
      alt: 'github 图标'
    }
  ]"
/>

## 使用脚本前请确认 curl 已安装

```sh
bash <(curl -L -s check.unlock.media)
```

## 使用方法

::: code-group

```sh [只检测IPv4结果]
bash <(curl -L -s check.unlock.media) -M 4
```

```sh [只检测IPv6结果]
bash <(curl -L -s check.unlock.media) -M 6
```

```sh [指定检测的网卡名称]
bash <(curl -L -s check.unlock.media) -I eth0
```

```sh [选择脚本语言为英文]
bash <(curl -L -s check.unlock.media) -E en
```

```sh [直接测试指定的区域编号]
bash <(curl -L -s check.unlock.media) -R 0
```

:::

## Docker 安装 (兼容 ARM 架构)

```sh
docker run --rm -ti --net=host lmc999/regioncheck && docker rmi lmc999/regioncheck > /dev/null 2>&1
```

## 安装依赖

::: code-group

```sh [Ubuntu/Debian]
sudo apt install curl openssl ca-certificates -yq
# 可选依赖
sudo apt install uuid-runtime dnsutils -yq
```

```sh [RHEL]
sudo dnf install curl openssl
# 可选依赖
sudo dnf install bind-utils
```

```sh [Android Termux]
pkg up -yq
pkg install curl openssl openssl-tool ca-certificates -yq
# 可选依赖
pkg install uuid-utils dnsutils -yq
```

```sh [iOS iSH / Alpine Linux]
apk add curl bash grep openssl ca-certificates uuidgen
```

```sh [macOS]
brew install curl openssl md5sha1sum coreutils
```

```sh [Windows]
# 可以使用 Cygwin 或者 Git Windows 最新版本。 如果使用 Git Windows，请确认安装 powershell 用于生成 uuid。请确认使用最新版本的 curl (>=8.8.0) 以避免遇到段错误。
```

```sh [OpenWRT]
opkg update
opkg install grep
```

:::
