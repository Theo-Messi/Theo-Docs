---
title: Ubuntu 系统安装及设置
head:
  - - meta
    - name: keywords
      content:
  - - meta
    - name: description
      content:
---

## Ubuntu系统下载

[访问Ubuntu官网下载](https://cn.ubuntu.com/download/desktop)

## 更新软件源为国内源

### 编辑文件

```sh
vi /etc/apt/sources.list
```

### 更新缓存

编辑文件完成后，执行如下命令进行更新缓存

```sh
sudo apt update
sudo apt upgrade
```

### 镜像源地址

::: code-group

```sh [阿里云镜像源]
deb http://mirrors.aliyun.com/ubuntu/ focal main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ focal main restricted universe multiverse
deb http://mirrors.aliyun.com/ubuntu/ focal-security main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ focal-security main restricted universe multiverse
deb http://mirrors.aliyun.com/ubuntu/ focal-updates main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ focal-updates main restricted universe multiverse
deb http://mirrors.aliyun.com/ubuntu/ focal-proposed main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ focal-proposed main restricted universe multiverse
deb http://mirrors.aliyun.com/ubuntu/ focal-backports main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ focal-backports main restricted universe multiverse
```

```sh [清华大学镜像源]
deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal main restricted universe multiverse
# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal main restricted universe multiverse
deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal-updates main restricted universe multiverse
# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal-updates main restricted universe multiverse
deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal-backports main restricted universe multiverse
# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal-backports main restricted universe multiverse
deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal-security main restricted universe multiverse
# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal-security main restricted universe multiverse

# deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal-proposed main restricted universe multiverse
# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal-proposed main restricted universe multiverse
```

```sh [网易镜像源]
deb http://mirrors.163.com/ubuntu/ focal main restricted universe multiverse
deb http://mirrors.163.com/ubuntu/ focal-security main restricted universe multiverse
deb http://mirrors.163.com/ubuntu/ focal-updates main restricted universe multiverse
deb http://mirrors.163.com/ubuntu/ focal-proposed main restricted universe multiverse
deb http://mirrors.163.com/ubuntu/ focal-backports main restricted universe multiverse
deb-src http://mirrors.163.com/ubuntu/ focal main restricted universe multiverse
deb-src http://mirrors.163.com/ubuntu/ focal-security main restricted universe multiverse
deb-src http://mirrors.163.com/ubuntu/ focal-updates main restricted universe multiverse
deb-src http://mirrors.163.com/ubuntu/ focal-proposed main restricted universe multiverse
deb-src http://mirrors.163.com/ubuntu/ focal-backports main restricted universe multiverse
```

```sh [中科大镜像源]
deb https://mirrors.ustc.edu.cn/ubuntu/ focal main restricted universe multiverse
deb-src https://mirrors.ustc.edu.cn/ubuntu/ focal main restricted universe multiverse
deb https://mirrors.ustc.edu.cn/ubuntu/ focal-updates main restricted universe multiverse
deb-src https://mirrors.ustc.edu.cn/ubuntu/ focal-updates main restricted universe multiverse
deb https://mirrors.ustc.edu.cn/ubuntu/ focal-backports main restricted universe multiverse
deb-src https://mirrors.ustc.edu.cn/ubuntu/ focal-backports main restricted universe multiverse
deb https://mirrors.ustc.edu.cn/ubuntu/ focal-security main restricted universe multiverse
deb-src https://mirrors.ustc.edu.cn/ubuntu/ focal-security main restricted universe multiverse
deb https://mirrors.ustc.edu.cn/ubuntu/ focal-proposed main restricted universe multiverse
deb-src https://mirrors.ustc.edu.cn/ubuntu/ focal-proposed main restricted universe multiverse
```

:::

## 删除系统自带软件

```sh
sudo apt-get --purge remove thunderbird totem rhythmbox empathy brasero simple-scan gnome-mahjongg aisleriot gnome-mines cheese transmission-common gnome-orca gnome-sudoku remmina
```

根据个人习惯自行决定是否删除

- remmina 远程桌面
- libreoffice 办公软件
- thunderbird 邮件客户端
- totem 视频播放
- rhythmbox 音乐播放器
- \*empathy 即时通讯软件
- \*brasero 光盘刻录软件
- simple-scan 文档扫描仪
- gnome-mahjongg 对对碰游戏
- aisleriot 接龙游戏
- gnome-mines 扫雷
- cheese 茄子(拍照)
- transmission-common bt下载
- \*gnome-orca 屏幕阅读器
- gnome-sudoku 数独

## 安装vim

```sh
sudo apt-get install vim
```

## 自动卸载不需要的依赖

```sh
sudo apt-get --purge autoremove
sudo apt-get upgrade	#更新软件仓库
```

## 开启SSH服务远程登录

#### 安装net-tools和openssh-server

```sh
sudo apt-get install net-tools
sudo apt-get install openssh-server
```

#### 查看是否开启ssh服务

```sh
dpkg -l | grep ssh

```

如果看到`sshd`那说明`ssh-server`已经启动了 如果没有则可以这样启动：

```sh
sudo /etc/init.d/ssh start
# 或
sudo service ssh start
```

## 卸载桌面环境

```sh
# 卸载 gnome-shell
sudo apt-get remove gnome-shell

# 卸载 gnome-shell
sudo apt-get remove gnome-shell

# 卸载 gnome
sudo apt-get remove gnome

# 卸载不需要的依赖关系
sudo apt-get autoremove

# 彻底卸载删除gnome的相关配置文件
sudo apt-get purge gnome

# 清理安装gnome时候留下的缓存程序软件包
sudo apt-get autoclean
sudo apt-get clean
```

## 同步时间

#### 安装 `ntpdate`

```sh
sudo apt-get install ntpdate
```

#### 设置系统时间与网络时间同步

```sh
sudo ntpdate cn.pool.ntp.org
```

#### 将时间更新到硬件

```sh
sudo hwclock --systohc
```
