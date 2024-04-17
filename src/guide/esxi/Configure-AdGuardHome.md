---
title: 配置 AdGuardHome
head:
  - - meta
    - name: keywords
      content: ESXI 虚拟机 虚拟化 X86 64 PVE
  - - meta
    - name: description
      content: ESXI 虚拟机 虚拟化 X86 64 PVE
---

## 端口配置

- 网页管理界面监听端口为 `80`
- DNS服务器监听端口为 `53`

## 设置账号密码

![](https://m.theovan.cn/img/20231230205626.png)

## 常规设置 部分

![](https://m.theovan.cn/img/20231230205838.png)

## DNS 设置

#### 上游 DNS 服务器

```md
tls://dot.360.cn
https://doh.360.cn/dns-query
tls://dns.pub
https://dns.pub/dns-query
tls://dns.alidns.com
https://dns.alidns.com/dns-query
tls://dns.ipv6dns.com
https://dns.ipv6dns.com/dns-query
```

#### BootStrap DNS 服务器地址

```md
1.1.1.1:53
114.114.114.114:53
119.29.29.29
223.5.5.5
180.76.76.76
2400:3200::1
2400:da00::6666
240C::6666
```

## 过滤器设置

```md
halflife
https://raw.githubusercontent.com/o0HalfLife0o/list/master/ad.txt

anti-AD
https://anti-ad.net/easylist.txt

neoHosts
https://cdn.jsdelivr.net/gh/neoFelhz/neohosts@gh-pages/full/hosts.txt

大圣净化 - 针对国内视频网站
https://raw.githubusercontent.com/jdlingyu/ad-wars/master/hosts

adgk手机去广告规则
https://raw.githubusercontent.com/banbendalao/ADgk/master/ADgk.txt

广告终结者
http://sub.adtchrome.com/adt-chinalist-easylist.txt

Adbyby
https://raw.githubusercontent.com/adbyby/xwhyc-rules/master/lazy.txt

EasyList China+EasyList
https://easylist-downloads.adblockplus.org/easylistchina+easylist.txt

EasyPrivacy
https://easylist-downloads.adblockplus.org/easyprivacy.txt
```
