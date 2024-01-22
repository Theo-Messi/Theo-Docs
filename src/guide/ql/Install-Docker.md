---
title: 安装Docker
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
