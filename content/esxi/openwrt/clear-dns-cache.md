---
title: openwrt/istore os 刷新 DNS 缓存
description: openwrt/istore os 刷新 DNS 缓存
head:
  - - meta
    - name: keywords
      content: openwrt istore os DNS
---

# openwrt/istore os 刷新 DNS 缓存

```sh
/etc/init.d/dnsmasq stop
rm -f /tmp/dhcp.leases
/etc/init.d/dnsmasq start
```
