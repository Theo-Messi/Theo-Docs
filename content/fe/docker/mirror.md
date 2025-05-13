---
title: Docker 镜像相关操作
head:
  - - meta
    - name: description
      content: 介绍 Docker 镜像的基本操作，包括拉取镜像、构建自定义镜像、镜像优化等常用操作，帮助提升 Docker 使用效率。
  - - meta
    - name: keywords
      content: Docker 镜像管理 拉取镜像 构建镜像 镜像优化 虚拟化
---

### 镜像操作

**查看本地镜像**

```bash
docker images
```

**搜索镜像，这里以安装 `tomcat` 为例**

```sh
[root@iZbp18425116ezmjdmbdgeZ ~]# docker search tomcat
NAME                          DESCRIPTION                                     STARS     OFFICIAL   AUTOMATED
tomcat                        Apache Tomcat is an open source implementati…   3193      [OK]
tomee                         Apache TomEE is an all-Apache Java EE certif…   94        [OK]
dordoka/tomcat                Ubuntu 14.04, Oracle JDK 8 and Tomcat 8 base…   58                   [OK]
kubeguide/tomcat-app          Tomcat image for Chapter 1                      31
consol/tomcat-7.0             Tomcat 7.0.57, 8080, "admin/admin"              18                   [OK]
cloudesire/tomcat             Tomcat server, 6/7/8                            15                   [OK]
aallam/tomcat-mysql           Debian, Oracle JDK, Tomcat & MySQL              13                   [OK]
arm32v7/tomcat                Apache Tomcat is an open source implementati…   11
rightctrl/tomcat              CentOS , Oracle Java, tomcat application ssl…   7                    [OK]
maluuba/tomcat7-java8         Tomcat7 with java8.                             6
arm64v8/tomcat                Apache Tomcat is an open source implementati…   6
unidata/tomcat-docker         Security-hardened Tomcat Docker container.      5                    [OK]
jelastic/tomcat               An image of the Tomcat Java application serv…   3
amd64/tomcat                  Apache Tomcat is an open source implementati…   3
cfje/tomcat-resource          Tomcat Concourse Resource                       2
fabric8/tomcat-8              Fabric8 Tomcat 8 Image                          2                    [OK]
oobsri/tomcat8                Testing CI Jobs with different names.           2
camptocamp/tomcat-logback     Docker image for tomcat with logback integra…   1                    [OK]
picoded/tomcat7               tomcat7 with jre8 and MANAGER_USER / MANAGER…   1                    [OK]
99taxis/tomcat7               Tomcat7                                         1                    [OK]
chenyufeng/tomcat-centos      tomcat基于centos6的镜像                              1                    [OK]
ppc64le/tomcat                Apache Tomcat is an open source implementati…   1
softwareplant/tomcat          Tomcat images for jira-cloud testing            0                    [OK]
secoresearch/tomcat-varnish   Tomcat and Varnish 5.0                          0                    [OK]
s390x/tomcat                  Apache Tomcat is an open source implementati…   0
[root@iZbp18425116ezmjdmbdgeZ ~]#
```

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
