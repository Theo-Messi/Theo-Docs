---
title: OpenWrt安装CloudDrive2
head:
  - - meta
    - name: description
      content: OpenWrt安装CloudDrive2
  - - meta
    - name: keywords
      content: OpenWrt CloudDrive2 Docker 扩容 安装
---

## 扩容 docker 空间

openwrt一般只要不是自己DIY编译的很少有把docker分区编译够用的，只能通过挂载分区的方式来实现扩容。够用的直接跳过，进入到下个标题直接配置

## 创建分区或者添加新分区

一般添加的新的磁盘默认是看不到的，需要执行一下命令 `创建分区` 或者 `格式化成ext4` 才能在挂载点看到该分区。

查看当前系统所有硬盘及分区情况：`fdisk -l`

在指定的硬盘（例：/dev/sdb）上创建分区：`fdisk /dev/sdb` ， 根据提示进行下一步操作

> 如：查看帮助（h），新建分区（n），删除分区（d），查看分区情况（p）

分区成功后，写分区表并退出（w）

对新建分区（例：/dev/sda1）进行格式化：` mkfs.ext4 /dev/sdb1`

由于我自己的是虚拟机的环境，就直接添加一个分区，格式化后直接挂载了，如果是单个物理盘，而且已经安装了openwrt，请根据命令创建新分区，格式化ext4后挂载即可"

![clouddrive2](https://i.theojs.cn/docs/20240420164209.webp '创建分区或者添加新分区')

![clouddrive2](https://i.theojs.cn/docs/20240420164237.webp '创建分区或者添加新分区')

选择好分区和挂载目录，勾选上 启用此挂载点

![clouddrive2](https://i.theojs.cn/docs/20240420164352.webp '启用此挂载点')

**在高级选项里选择 `ext4` ，点击 保存&应用**

然后重启openwrt，一定要重启，不然不生效，生效后如下

![clouddrive2](https://i.theojs.cn/docs/20240420164746.webp '重启生效')

把分区挂载到opt目录后，也就是docker的目录达到了扩容的目的

**处理完扩容问题后，接下来进入安装阶段**

## 部署过程

::: tip
运行前请先确保系统已安装fuse3，确定fusermount3命令可以正常运行
:::

- 通过ssh连接openwrt
- 开启MountFlags

```sh
mkdir -p /etc/systemd/system/docker.service.d/
```

```sh
cat <<EOF > /etc/systemd/system/docker.service.d/clear_mount_propagation_flags.conf
[Service]
MountFlags=shared
EOF
```

### 查找挂载点目录

```sh
df -h
```

![clouddrive2](https://i.theojs.cn/docs/20240420182231.webp '查找挂载点目录')

### 选择一个目录挂载

```sh
mount --make-shared /opt
```

### 拉取docker镜像

```sh
docker pull cloudnas/clouddrive2-unstable
```

### 启动docker容器

```sh
docker run -d \
      --name clouddrive2 \
      --restart unless-stopped \
      --env CLOUDDRIVE_HOME=/Config \
      -v /opt/clouddrive/shared:/CloudNAS:shared \
      -v /opt/clouddrive/Config:/Config \
      -v /opt/clouddrive/media/shared:/media:shared \
      -p:19798:19798 \
     --privileged \
     --device /dev/fuse:/dev/fuse \
     cloudnas/clouddrive2-unstable
```

::: tip
需要映射其他路径请参考官方docker说明
:::

## 注意事项

![clouddrive2](https://i.theojs.cn/docs/20240420165750.webp '重启路由docker启动失败解决')

找到 `系统` - `启动项` - `本地启动脚本`（拉到最底部）
按照上图，把下面参数填到指定位置，保存应用，重启即可！

```sh
mount --make-shared /opt
```
