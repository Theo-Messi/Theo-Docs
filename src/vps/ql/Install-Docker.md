---
title: 安装Docker
head:
  - - meta
    - name: keywords
      content: Docker,安装,教程
  - - meta
    - name: description
      content: 本文介绍如何在CentOS 7.x/Ubuntu 18.04/Debian 10.x上安装Docker。
---

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

::: code-group

```sh [CentOS]
sudo yum remove docker \
                  docker-client \
                  docker-client-latest \
                  docker-common \
                  docker-latest \
                  docker-latest-logrotate \
                  docker-logrotate \
                  docker-engine
```

```sh [Debian/Ubuntu]
sudo apt-get remove docker docker-engine docker.io containerd runc
```

:::
