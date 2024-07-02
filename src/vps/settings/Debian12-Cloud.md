---
title: Debian12 安装使用 Cloud 内核
head:
  - - meta
    - name: description
      content: Debian12 安装使用 Cloud 内核 cloud-amd64
---

## 什么是 Cloud 内核

Cloud 内核是专为云环境优化的 Linux 内核版本，包含针对虚拟化、文件系统性能、网络性能和系统资源管理的优化，适合在云环境中运行应用。

## 前提条件

- 已经安装了 Debian 12 的系统；
- 拥有 root 权限或者能够使用 sudo 命令的用户。

## 安装步骤

### 更新系统

```sh
sudo apt update
# 检查并列出所有可用更新
```

### 安装 Cloud 内核

```sh
sudo apt install linux-image-cloud-amd64 -y
# 自动下载并安装 linux-image-cloud-amd64 包及其依赖项。
```

## 验证安装

```sh
sudo reboot
```

重启系统后，输入以下命令

```sh
uname -r
```

若显示的内核版本包含 `cloud-amd64`，则说明安装成功。
