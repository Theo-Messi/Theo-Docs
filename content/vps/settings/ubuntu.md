---
title: Debian/Ubuntu 系统优化设置
head:
  - - meta
    - name: description
      content: 本文介绍如何在 Debian 和 Ubuntu 系统上进行性能优化，包括内核调优、网络优化和服务管理等。
  - - meta
    - name: keywords
      content: Debian Ubuntu 系统优化 性能优化 内核调优 网络优化 服务管理
---

## 系统下载

<Pill name="Ubuntu" link="https://cn.ubuntu.com/download/desktop" :icon="{ light: 'skill-icons:ubuntu-light', dark: 'skill-icons:ubuntu-dark' }" alt="ubuntu图标" />
<Pill name="Debian" link="https://www.debian.org/" :icon="{ light: 'skill-icons:debian-light', dark: 'skill-icons:debian-dark' }" alt="debian图标"/>

## 开启 SSH 服务远程登录

#### 安装 net-tools 和 openssh-server

```sh
sudo apt install net-tools openssh-server
```

#### 查看是否开启 ssh 服务

```sh
dpkg -l | grep ssh
```

如果看到 `sshd`，说明 `ssh-server` 已经启动。如果没有可执行以下命令启动：

```sh
sudo /etc/init.d/ssh start
# 或
sudo service ssh start
```

## 安装 vim 和 htop

```sh
sudo apt install vim htop
```

## 更新软件源为国内源

### 编辑文件

::: code-group

```sh [Ubuntu]
sudo vim /etc/apt/sources.list.d/ubuntu.sources
```

```sh [Debian]
sudo vim /etc/apt/sources.list
```

:::

### 镜像源地址

::: code-group

```sh [Ubuntu]
deb https://mirrors.aliyun.com/ubuntu/ noble main restricted universe multiverse
deb-src https://mirrors.aliyun.com/ubuntu/ noble main restricted universe multiverse

deb https://mirrors.aliyun.com/ubuntu/ noble-security main restricted universe multiverse
deb-src https://mirrors.aliyun.com/ubuntu/ noble-security main restricted universe multiverse

deb https://mirrors.aliyun.com/ubuntu/ noble-updates main restricted universe multiverse
deb-src https://mirrors.aliyun.com/ubuntu/ noble-updates main restricted universe multiverse

# deb https://mirrors.aliyun.com/ubuntu/ noble-proposed main restricted universe multiverse
# deb-src https://mirrors.aliyun.com/ubuntu/ noble-proposed main restricted universe multiverse

deb https://mirrors.aliyun.com/ubuntu/ noble-backports main restricted universe multiverse
deb-src https://mirrors.aliyun.com/ubuntu/ noble-backports main restricted universe multiverse
```

```sh [Debian]
deb https://deb.debian.org/debian/ bookworm main contrib non-free non-free-firmware
deb-src https://deb.debian.org/debian/ bookworm main contrib non-free non-free-firmware

deb https://security.debian.org/debian-security bookworm-security main contrib non-free non-free-firmware
deb-src https://security.debian.org/debian-security bookworm-security main contrib non-free non-free-firmware

deb https://deb.debian.org/debian/ bookworm-updates main contrib non-free non-free-firmware
deb-src https://deb.debian.org/debian/ bookworm-updates main contrib non-free non-free-firmware

deb https://deb.debian.org/debian/ bookworm-backports main contrib non-free non-free-firmware
deb-src https://deb.debian.org/debian/ bookworm-backports main contrib non-free non-free-firmware
```

:::

### 更新缓存

编辑文件完成后，执行如下命令进行更新缓存

```sh
sudo apt update
sudo apt upgrade
```

## 删除系统自带软件

```sh
sudo apt --purge remove thunderbird totem rhythmbox empathy brasero simple-scan gnome-mahjongg aisleriot gnome-mines cheese transmission-common gnome-orca gnome-sudoku remmina
```

## 自动卸载不需要的依赖

```sh
sudo apt --purge autoremove
sudo apt upgrade	#更新软件仓库
```

## 卸载桌面环境

```sh
# 卸载 gnome-shell
sudo apt remove gnome-shell

# 卸载 gnome
sudo apt remove gnome

# 卸载不需要的依赖关系
sudo apt autoremove

# 彻底卸载删除gnome的相关配置文件
sudo apt purge gnome

# 清理安装gnome时候留下的缓存程序软件包
sudo apt autoclean
sudo apt clean
```

## 同步时间

#### 安装 `ntpdate`

```sh
sudo apt install ntpdate
```

#### 设置系统时间与网络时间同步

```sh
sudo ntpdate cn.pool.ntp.org
```

#### 将时间更新到硬件

```sh
sudo hwclock --systohc
```

## 修改主机名

```sh
vim /etc/hostname

```

主机名存放在 `/etc/hostname` 文件中，编辑 `hostname` 并输入新的主机名保存即可。

```sh
reboot #重启
hostname #重新查看主机名
```

## 开启 Root 登陆

### 取得 Root 权限

先从浏览器打开或者 SSH 工具连接服务器，登陆成功之后输入一下命令

```bash
sudo -i #切换到root
passwd #修改密码
```

### 修改 ssh 配置文件

```bash
vim /etc/ssh/sshd_config #编辑文件
PermitRootLogin yes #默认为no，需要开启root用户访问改为yes
PasswordAuthentication yes #默认为no，改为yes开启密码登陆
```

:::tip
按 `i` 进入编辑模式，按 `esc` 退出，输入 `:wq` 保存
:::

### 重启服务器

```bash
reboot    #重启服务器
```

## 恢复默认源

### 备份当前的软件源列表

::: code-group

```sh [Ubuntu]
sudo cp /etc/apt/sources.list.d/ubuntu.sources /etc/apt/sources.list.d/ubuntu.sources.bak
```

```sh [Debian]
sudo cp /etc/apt/sources.list /etc/apt/sources.list.bak
```

:::

### 编辑源配置文件

::: code-group

```sh [Ubuntu]
sudo vim /etc/apt/sources.list.d/ubuntu.sources
```

```sh [Debian]
sudo vim /etc/apt/sources.list
```

:::

### 恢复默认的软件源

::: code-group

```sh [Ubuntu]
Types: deb-src
URIs: http://archive.ubuntu.com/ubuntu
Suites: noble noble-updates noble-backports noble-security
Components: main restricted universe multiverse
Signed-By: /usr/share/keyrings/ubuntu-archive-keyring.gpg
```

```sh [Debian]
deb https://deb.debian.org/debian/ bookworm main contrib non-free non-free-firmware
deb-src https://deb.debian.org/debian/ bookworm main contrib non-free non-free-firmware

deb https://security.debian.org/debian-security bookworm-security main contrib non-free non-free-firmware
deb-src https://security.debian.org/debian-security bookworm-security main contrib non-free non-free-firmware

deb https://deb.debian.org/debian/ bookworm-updates main contrib non-free non-free-firmware
deb-src https://deb.debian.org/debian/ bookworm-updates main contrib non-free non-free-firmware

deb https://deb.debian.org/debian/ bookworm-backports main contrib non-free non-free-firmware
deb-src https://deb.debian.org/debian/ bookworm-backports main contrib non-free non-free-firmware
```

:::

### 更新软件包缓存

```sh
sudo apt update
sudo apt upgrade
```
