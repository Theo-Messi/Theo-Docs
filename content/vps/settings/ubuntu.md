---
title: Debian/Ubuntu 系统优化设置
head:
  - - meta
    - name: description
      content: Ubuntu 系统优化设置
---

## 系统下载

<Box :items="[
{name: 'Ubuntu', link: 'https://cn.ubuntu.com/download/desktop', icon: 'logos:ubuntu',  color: '#dd4814', tag: '24.04 LTS' },
{name: 'Debian',link: 'https://www.debian.org/', icon: 'logos:debian', color: '#a80030',  tag: '12.5' }
]"/>

## 开启SSH服务远程登录

#### 安装net-tools和openssh-server

```sh
sudo apt install net-tools
sudo apt install openssh-server
```

#### 查看是否开启ssh服务

```sh
dpkg -l | grep ssh

```

如果看到 `sshd` 那说明 `ssh-server` 已经启动了 如果没有则可以这样启动：

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

```sh
vi /etc/apt/sources.list
```

### 镜像源地址

::: code-group

```sh [Ubuntu镜像源]
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

```sh [Debian镜像源]
deb https://mirrors.aliyun.com/debian/ bullseye main non-free contrib
deb-src https://mirrors.aliyun.com/debian/ bullseye main non-free contrib
deb https://mirrors.aliyun.com/debian-security/ bullseye-security main
deb-src https://mirrors.aliyun.com/debian-security/ bullseye-security main
deb https://mirrors.aliyun.com/debian/ bullseye-updates main non-free contrib
deb-src https://mirrors.aliyun.com/debian/ bullseye-updates main non-free contrib
deb https://mirrors.aliyun.com/debian/ bullseye-backports main non-free contrib
deb-src https://mirrors.aliyun.com/debian/ bullseye-backports main non-free contrib
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
vi /etc/ssh/sshd_config #编辑文件
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

```sh
sudo cp /etc/apt/sources.list /etc/apt/sources.list.bak
```

### 恢复默认的软件源

```sh
sudo sh -c 'echo "deb http://archive.ubuntu.com/ubuntu $(lsb_release -sc) main restricted universe multiverse" > /etc/apt/sources.list'
```

### 更新软件包缓存

```sh
sudo apt update
sudo apt upgrade
```
