---
title: openwrt/istore os 刷新 DNS 缓存
description: openwrt/istore os 刷新 DNS 缓存
---

# openwrt/istore os 刷新 DNS 缓存

```sh
/etc/init.d/dnsmasq stop
rm -f /tmp/dhcp.leases
/etc/init.d/dnsmasq start
```
