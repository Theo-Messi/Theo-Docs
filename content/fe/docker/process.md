---
title: Docker 进程相关操作 容器进程管理 监控 优化
description: 学习如何在 Docker 中管理容器进程，进行进程监控与优化，提高 Docker 容器的性能与效率。
---

# Docker 进程相关操作 容器进程管理 监控 优化

## 查看 docker 版本

```bash
docker -v
```

## 查看 docker 命令

```bash
docker --help
```

## 查看 docker 服务端与客户端版本详情

```bash
docker version
```

## 启动 docker

```bash
systemctl start docker
```

## 关闭 docker

```bash
systemctl stop docker
```

## 重启 docker

```bash
systemctl restart docker
```

## 查看 docker 运行状态

```bash
systemctl status docker
```

## 关闭防火墙

```bash
systemctl stop firewalld
```
