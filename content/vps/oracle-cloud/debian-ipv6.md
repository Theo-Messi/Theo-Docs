---
title: 甲骨文云(Oracle Cloud) DD Debian系统自动获取IPv6
head:
  - - meta
    - name: description
      content: 了解如何在甲骨文云(Oracle Cloud)的DD Debian系统中自动获取IPv6地址的配置与操作方法。
  - - meta
    - name: keywords
      content: 甲骨文云 Oracle Cloud DD Debian IPv6 自动获取 网络配置 系统设置
---

甲骨文 DD Debian 系统后，IPv6 就无法使用了。因为 DD 系统后改变了网络配置，导致 Debian 无法获取到控制台中已经为它配置好的 IPv6。只用 IPv4 是没问题的，但甲骨文既然提供 IPv6，不用岂不是很可惜！

Debian 默认由 `ifupdown` 负责网络配置，主要配置文件是 `/etc/network/interfaces`。

但是在 `interfaces` 里添加 `iface eth0 inet6 auto` 和 `iface eth0 inet6 dhcp`，都无法实现自动配置 IPv6。

除了默认的 `ifupdown` 之外，系统自带的 `systemd-networkd` 也可以配置网络。

`Ubuntu 18.04/20.04` 默认使用的网络配置系统 `netplan` 的后端就是 `systemd-networkd`

所以我们这里其实就可以参考 Ubuntu 系统模板的配置，在甲骨文云服务器上直接自动配置 IPv6。

## 查看网口名称

先用 `ip link` 命令看一下网卡名称，

```sh
ip link
```

- ARM机器网卡名称默认为 `enp0s6`
- AMD机器网卡名称默认为 `ens3`

也可以看前面说到的 `interfaces` 配置文件。

## 新建配置 .network 文件

新建文件 `/etc/systemd/network/10-网卡名称.network`，添加配置如下：

```sh
[Match]
Name = 网卡名称

[Network]
DHCP = ipv4
LinkLocalAddressing = ipv6
NTP = 169.254.169.254
```

::: tip
注意：这里一定要把文件名及配置文件中的 `网卡名称` 改成你的网卡名称。
:::

## 禁用默认的 ifupdown 并启用 systemd-networkd

```sh
systemctl stop networking && systemctl stop ifup@网卡名称 && systemctl start systemd-networkd
```

::: tip
上面的命令需要一次过执行，不然网络停掉之后 SSH 也会断线。这里一定也要把命令中的 `网卡名称` 改成你的网卡名称。

**如果命令执行完后 SSH 正常连线，说明新的网络配置成功了**
:::

## 卸载 ifupdown 并设置 systemd-networkd 开机启动

```sh
systemctl enable systemd-networkd
apt purge -y --auto-remove ifupdown isc-dhcp-client
```

好了，现在你就可以正常使用IPv6了。
