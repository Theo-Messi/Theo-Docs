---
title: Ubuntu 开机自动挂载 NAS磁盘
head:
  - - meta
    - name: description
      content: Ubuntu 开机自动挂载 NAS磁盘 cifs-utils
---

### 新建目录

首先在Ubuntu 的 /mnt 目录下新建一个 NAS 挂载目录 nas_share：

```sh
mkdir /mnt/nas_share
```

### 安装 cifs-utils

```sh
sudo apt install cifs-utils
```

### 查看用户的 uid 和 gid

```sh
id root
```

![Ubuntu](https://i.theojs.cn/docs/202404290023588.png '查看用户的 uid 和 gid')

在此处要查看的用户，就是你希望使用 `Ubuntu` 上的哪个用户去挂载NAS磁盘，

比如我希望以 `root` 去挂载NAS磁盘，等挂载成功后，磁盘里的文件所有者就是root，这样便对磁盘的内容具有相应的读写和执行权限。

在此记下此用户的 uid 和 gid，分别是 0 和 0 ，在编辑 /etc/fstab 的时候要写进去。

### 编辑启动挂载文件 fstab

```sh
sudo vim /etc/fstab
```

在文件末尾添加以下内容：

```sh
//192.168.2.10/share /mnt/nas_share cifs username=NAS的用户名,password=NAS用户名的密码,uid=0,gid=0,vers=2.0 0 2
```

- `//192.168.2.10/share` 挂载的NAS的文件夹，格式为 `//NAS的ip/要挂载的文件夹名称`；

- `/mnt/nas_share` 挂载到Ubuntu的路径；

- `cifs` 使用cifs协议实现文件共享服务；

- `username` NAS的用户名,

- `password` NAS用户名的密码,

- `uid` 挂载成功后，文件所属的用户。如果未设置uid，则默认uid=0

- `gid` 挂载成功后，文件所属的用户组。如果未设置gid，则默认gid=0

- `vers=2.0` 支持2.0或3.0协议版本；

- `0 2` fstab 的 `<dump>``<pass>` 选项。

### 挂载

```sh
sudo mount -a
```

挂载成功后进入 `/mnt/nas_share` 目录，查看文件权限如下，表明挂载成功，且对文件具有相应的读写和执行权限。

![Ubuntu](https://i.theojs.cn/docs/202404290032107.png '查看文件权限')
