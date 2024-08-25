---
title: 开启防火墙端口
head:
  - - meta
    - name: description
      content: 本文介绍如何在VPS上开启防火墙端口
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
# 停止并禁用不必要的服务
sudo systemctl stop oracle-cloud-agent
sudo systemctl disable oracle-cloud-agent
sudo systemctl stop oracle-cloud-agent-updater
sudo systemctl disable oracle-cloud-agent-updater

# 停止并禁用防火墙
sudo systemctl stop firewalld.service
sudo systemctl disable firewalld.service
```

:::
