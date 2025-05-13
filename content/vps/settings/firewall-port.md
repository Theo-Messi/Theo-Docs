---
title: 开启防火墙端口
head:
  - - meta
    - name: description
      content: 本文介绍如何在 VPS 上开启防火墙端口，确保必要的服务可正常访问。
  - - meta
    - name: keywords
      content: 防火墙 端口 开启 VPS Linux 系统 网络安全
---

## 对外开放端口

::: code-group

```sh [Ubuntu/Debian]
# 设置默认策略为 ACCEPT 并清空规则
sudo iptables -P INPUT ACCEPT
sudo iptables -P FORWARD ACCEPT
sudo iptables -P OUTPUT ACCEPT
sudo iptables -F
# 保存防火墙规则
sudo netfilter-persistent save
```

```sh [Centos]
# 确保 firewall 服务启用，并开启必要端口
sudo systemctl start firewalld
sudo systemctl enable firewalld
# 开放端口示例 (如 80 和 443)
sudo firewall-cmd --zone=public --add-port=80/tcp --permanent
sudo firewall-cmd --zone=public --add-port=443/tcp --permanent
# 重新加载防火墙规则
sudo firewall-cmd --reload
```

:::
