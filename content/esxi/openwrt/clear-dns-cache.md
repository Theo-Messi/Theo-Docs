---
title: openwrt/istore os 刷新 DNS 缓存
head:
  - - meta
    - name: description
      content: openwrt/istore os 刷新 DNS 缓存
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
