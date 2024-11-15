---
title: Docker 简介与安装
head:
  - - meta
    - name: description
      content: Docker 虚拟化
---

## Docker 技术简介

Docker 如日中天，这不是单纯的炒的概念，Docker 的确解决了开发和运费的痛点，比如版本的搬迁，从测试环境搬迁到预发、生产环境，在企业开发与测试中，得到了非常广泛的应用。

- Docker 是一个开放源码的软件项目，基于 GO 语言
- Docker 可以让开发打包他们的应用以及依赖包到一个轻量级、可移植的容器中
- Docker 打包好容器，可以发布到任何流行的 Linux 机器上，也可以实现虚拟化
- 容器是完全使用沙箱机制，互相之间不会有任何接口
- Docker 容器性能开销极低，这个才是关键
- Docker 使用客户端-服务器（C/S）架构模式，使用远程 API 来管理和创建 Docker 容器

## Docker 的应用场景

1.  Web 应用自动化打包和发布
2.  自动化测试和持续集成、发布
3.  在服务器环境中部署和调整数据库或其他的后台应用
4.  使用 Docker 可以实现开发环境、测试环境、生成环境的一致性

Docker 借鉴了标准的集装箱的概念。标准的集装箱将货物运往世界各地，Docker 将这个模型运行到自己的设计中。唯一不同的是: 集装箱是运输货物，Docker 是运输软件。

**Docker 和传统的 VM 的区别**

docker 与传统的 VM 对比:

1.  启动速度：vm 一般几十秒或者几分钟，docker 几秒或者毫秒
2.  大小：vm 一般几 G，docker 只有几兆

## Docker 的组成

Docker 需要分为三部分： `仓库`、 `镜像` `容器`

|                 |                                                                                                                                                          |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Docker 镜像     | Docker 镜像是用于创建 Docker 容器的模板。镜像是基于联合文件系统的一种层式结构，由一系列指令一步一步构建出来。                                            |
| Docker 容器     | 容器是独立运行的一个或多个应用。镜像相当于类，容易相当于类的实例                                                                                         |
| Docker 客户端   | Docker 客户端通过命令行或者其他工具使用 Docker API 与 Docker 的守护进程通信                                                                              |
| Docker 主机     | 一个物理或者虚拟的机器用于执行 Docker 守护进程和容器                                                                                                     |
| Docker 守护进程 | 是 Docker 服务器端进程，负责支撑 Docker 容器的运行以及镜像的管理                                                                                         |
| Docker 仓库     | Docker 仓库用来保存镜像，可以理解为代码控制中的代码仓库。Docker Hub 提供了庞大的镜像集合供使用，用户也可以将自己本地的镜像推送到 Docker 仓库供其他人下载 |

## 一键安装 Docker

```sh
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
```

## 启动 Docker

```sh
sudo systemctl enable docker
sudo systemctl start docker
```

## 卸载 Docker

```sh
sudo apt remove docker docker-engine docker.io containerd runc
```
