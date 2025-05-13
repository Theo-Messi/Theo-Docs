---
title: Docker 搭建 aria2+AriaNg
head:
  - - meta
    - name: description
      content: 本文介绍如何通过 Docker 搭建 aria2 和 AriaNg，实现高效的下载管理和图形化界面控制。
  - - meta
    - name: keywords
      content: Docker aria2 AriaNg 下载管理 图形化界面
---

## Docker安装aria2

### 使用拉取aria2镜像

```sh
docker pull p3terx/aria2-pro
```

### 启动容器

```sh
docker run -d \
--name aria2 \
--restart unless-stopped \
--log-opt max-size=1m \
-e PUID=$UID \
-e PGID=$GID \
-e UMASK_SET=022 \
-e RPC_SECRET=password \
-e RPC_PORT=6800 \
-e LISTEN_PORT=6888 \
-p 16800:6800 \
-p 16888:6888 \
-p 16888:6888/udp \
-v /root/aria2/config:/config \
-v /mnt/nas_share/downloads:/downloads \
p3terx/aria2-pro
```

**用户和组设定**

`PUID=$UID` 、`PGID=$GID` 这2个定义用户和用户组的环境变量，限定了aria2以什么用户和用户组运行，不指定则默认使用 `nobady用户` 和 `nogroup用户组`，但在使用 `FileRun网盘` 时，会因权限问题无法删除或改名aria2下载好的文件，所以 `PUID` 和 `GUID` 要指定为和 `WEB环境的运行用户和用户组` 一致，比如WEB环境运行的用户及对应的用户组都是WWW，对应的uid和gid都是1001，那就要指定PUID=1001、PGID=1001，这样在FileRun网盘中就可以正常的进行删除和修改操作了

**环境变量**

- **`-e UMASK_SET=022`** : 设置umask，默认值022；
- **`-e RPC_SECRET=`** : 设置RPC密钥，用于AriaNg与Aria2的通讯验证使用；
- **`-e RPC_PORT=6800`** : 设置PRC通讯端口（与宿主主机的端口映射一致）；
- **`-e LISTEN_PORT=6888`** : BT 监听端口（TCP）、DHT 监听端口（UDP）设置，即 Aria2 配置中listen-port与dht-listen-port选项定义的端口。如果没有设置，配置文件中的默认值为6888。
- **`-v /root/aria2/config:/config`** : 配置文件挂载到指定的宿主主机目录/root/aria2/config中，宿主主机的目录根据实际情况自行修改；
- **`-v /root/aria2/downloads:/downloads`** : 将/downloads挂载到宿主主机的/root/aria2/downloads:/downloads目录，即FileRun的数据目录中，方便下载完成直接在网盘中查看；

**端口映射**

- **`-p 16800:6800`**，为RPC 通讯端口映射
- **`-p 16888:6888`**，为BT 监听端口（TCP）映射，即 Aria2 配置中listen-port选项定义的端口；
- **`-p 16888:6888/udp`**，为DHT 监听端口（UDP）映射，即 Aria2 配置中dht-listen-port选项定义的端口。

## Docker安装AriaNg

### 拉取AriaNg镜像

```sh
docker pull p3terx/ariang
```

### 启动容器

```sh
docker run -d \
--name ariang \
--log-opt max-size=1m \
--restart unless-stopped \
-p 16880:6880 \
p3terx/ariang
```

### 配置RPC

访问 http://你的服务器ip:16880 访问AriaNg的web管理界面，点击`AriaNg 设置`菜单，再点击`全局`右边的标签

![aria2+AriaNg](https://i.theojs.cn/docs/202404290014327.webp)

![aria2+AriaNg](https://i.theojs.cn/docs/202404290015325.webp '配置RPC')

- RPC别名随意填就好
- RPC地址填写你服务器的域名或IP，后面的端口号就是前面启动的aria2的RPC通讯端口
- RPC协议选默认的HTTP
- RPC Http请求方法使用默认的POST
- RPC密钥填写前面启动的aria2的RPC密钥

配置完刷新一下页面，如果状态显示 `已连接` 就ok了
