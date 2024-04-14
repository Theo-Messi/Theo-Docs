---
title: 配置 OpenWrt
head:
  - - meta
    - name: keywords
      content: ESXI 虚拟机 虚拟化 X86 64 PVE
  - - meta
    - name: description
      content: ESXI 虚拟机 虚拟化 X86 64 PVE
---

## 接口 - Lan - 基本设置

**使用自定义的DNS服务器:**`AdGuardHome ip`

![](https://m.theovan.xyz/img/20231230210932.png)

## 接口 - Lan - 高级设置 - DHCP - 高级设置

**DHCP选项:** `6,+ AdGuardHome ip`

![](https://m.theovan.xyz/img/20231230211121.png)

## 接口 - Wan - 高级设置

**使用自定义的DNS服务器:** `AdGuardHome ip`

![](https://m.theovan.xyz/img/20231230211412.png)
