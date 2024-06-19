---
title: Docker 镜像相关操作
head:
  - - meta
    - name: keywords
      content: Docker 虚拟化
  - - meta
    - name: description
      content: Docker 虚拟化
---

### 镜像操作

**查看本地镜像**

```bash
docker images
```

**搜索镜像，这里以安装 `tomcat` 为例**

<<< @/code/docker.sh

**找到所有的镜像，拉取镜像**

```bash
docker pull 镜像ID  #最新版本 如： docker pull tomcat
docker pull tomcat:7 # 指定版本
```

**删除镜像**

```bash
docker rmi 容器名称
```

**本地以有镜像，创建容器**

```bash
docker create --name=容器名称 镜像名称
```

```bash
示例:
[root@iZbp18425116ezmjdmbdgeZ ~]# docker create --name=myTomcat tomcat
629104460e3fe485649e5784ec0c34f4dcc2277115937a54be00b968dc646510
```

### 镜像备份

```bash
docker save -o tomcat.tar 镜像名称

# 把tomcat.tar 放到其他电脑，其他人变成镜像
docker load -i tomcat.tar
```

**查看容器**

```bash
docker ps # 查看正在运行的容易
docker ps -a # 查看所有容器
```

**运行容器**

```bash
docker start myTomcat # start 后端可以跟容易id (前2-3位) 或者容器名称
```

**停止容器**

```bash
docker stop myTomcat
```

**删除没有运行的容器**

```bash
docker rm 容器id或者名称
```

**删除正在运行的容器**

```bash
docker -rm -f 容器id或者名称
```

**删除所有容器**

```bash
# 先停止所有的容器
docker stop $(docker ps -a -q)

# 删除
docker rm $(docker ps -a -q)
```
