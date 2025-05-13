---
title: IP质量体检脚本
head:
  - - meta
    - name: description
      content: 提供中英文双语言支持的IP质量体检脚本，帮助快速检查IP质量与稳定性。
  - - meta
    - name: keywords
      content: IP质量 体检脚本 IPQuality 一键脚本 网络测试 脚本工具
---

- 中英文双语言支持
- 支持IPv4/IPv6双栈查询
- 精美排版，直观显示，多终端单屏优化展示，便于截图分享
- 基础信息、IP类型、风险评分、风险因子、流媒体解锁、邮局检测六大模块
- 基础数据源自*Maxmind*数据库
- 风险信息 `IPinfo` `ipregistry` `ipapi` `AbuseIPDB` `IP2LOCATION` `IPQS` `DB-IP` `SCAMALYTICS` `IPWHOIS` 多数据库整合
- 流媒体及AI多个服务商 `TikTok` `Disney+` `Netflix` `Youtube` `AmazonPrimeVideo` `Spotify` `ChatGPT` 解锁及解锁类型检测
- 多邮局服务商 `Gmail` `Outlook` `Yahoo` `Apple` `QQ` `Mail.ru` `AOL` `GMX` `Mail.com` `163` `Sohu` `Sina` 连通性检测
- IP地址黑名单400+数据库检测

## 使用方法

::: code-group

```bash [默认双栈检测]
bash <(curl -Ls IP.Check.Place)
```

```bash [只检测IPv4结果]
bash <(curl -Ls IP.Check.Place) -4
```

```bash [只检测IPv6结果]
bash <(curl -Ls IP.Check.Place) -6
```

```bash [指定检测网卡]
bash <(curl -Ls IP.Check.Place) -i eth0
```

```bash [指定代理服务器]
bash <(curl -Ls IP.Check.Place) -x http://username:password@proxyserver:port
bash <(curl -Ls IP.Check.Place) -x https://username:password@proxyserver:port
bash <(curl -Ls IP.Check.Place) -x socks5://username:password@socksproxy:port
```

```bash [选择脚本语言为英文]
bash <(curl -Ls IP.Check.Place) -l en
```

```bash [基础信息多语言支持]
bash <(curl -Ls IP.Check.Place) -l jp|es|de|fr|ru|pt
```

:::
