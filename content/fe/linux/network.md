---
title: Linux 常用网络操作
head:
  - - meta
    - name: description
      content: Linux 常用网络操作
---

## Linux 常用网络操作

### 主机名操作

- `hostname`：显示主机名
- `hostname XXX`：修改主机名，不推荐，临时生效

永久生效修改主机名需要修改 `/etc/sysconfig/network` 文件

### 查询系统完整信息

```bash
uname -a #显示完整的系统信息
```

### IP 地址操作

```bash
ip addr # 查看 IP 地址
vim /etc/sysconfig/network-scripts/ # 修改 IP 地址
service network restart # 重启网络服务
```

### 域名映射

```bash
vim /etc/hosts
```

### 网络服务管理

```bash
systemctl stauts network # 查看网络服务状态
systemctl start network # 启动网络服务
systemctl stop network # 停止网络服务
systemctl restart network # 重启网络服务
systemctl enable network # 设置开启启动
```

### 防火墙设置

```bash
systemctl status firewalld #查看防火墙状态
systemctl start firewalld #启动防火墙
systemctl stop firewalld #关闭防火墙
systemctl is-enable firewalld #查看防火墙服务是否开机启动
systemctl enable firewalld #开机时启用防火墙服务
systemctl disable firewalld #开机时禁用防火墙服务
systemctl list-unit-files|grep enabled #查询已经启动的服务列表
systemctl --failed #查询启动失败的服务列表
```
