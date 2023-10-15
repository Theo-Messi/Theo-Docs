---
title: VPS一键检测流媒体解锁
---

## 支持 OS/Platform

- CentOS 6+
- Ubuntu 14.04+
- Debian 8+
- MacOS
- Android with Termux

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
bash <(curl -L -s check.unlock.media) -E
```

:::

## Docker 安装 (兼容 ARM 架构)

```sh
docker run --rm -ti --net=host lmc999/regioncheck && docker rmi lmc999/regioncheck
```

## 项目地址

https://github.com/lmc999/RegionRestrictionCheck
