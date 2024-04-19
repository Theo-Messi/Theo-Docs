---
title: openwrt/istore os 刷新 DNS 缓存
head:
  - - meta
    - name: keywords
      content: openwrt istore os DNS
  - - meta
    - name: description
      content: openwrt istore os DNS
---

## 清空dnsmasq缓存

```sh
/etc/init.d/dnsmasq stop
rm -f /tmp/dhcp.leases
/etc/init.d/dnsmasq start
```
