---
title: 添加 1Panel 第三方应用商店
head:
  - - meta
    - name: description
      content: 学习如何在 1Panel 面板中添加第三方应用商店，扩展管理功能，提升服务器管理效率。
  - - meta
    - name: keywords
      content: 1Panel 第三方应用商店 添加 Linux 服务器 运维管理 面板
---

## 简介

这是一些适配 `1Panel` 商店 `2.0` 版本的 `docker` 应用配置。

致力于一键运行各种 `Docker` 应用。无需复杂配置，享受便利和高效。

## 使用方式

默认 `1Panel` 安装在 `/opt/` 路径下，如果不是按需修改以下。

## 国内网络

### 使用 git 命令获取应用

`1Panel` 计划任务类型 `Shell 脚本` 的计划任务框里，添加并执行以下命令，或者终端运行以下命令

```sh
git clone -b localApps https://mirror.ghproxy.com/https://github.com/okxlin/appstore /opt/1panel/resource/apps/local/appstore-localApps

cp -rf /opt/1panel/resource/apps/local/appstore-localApps/apps/* /opt/1panel/resource/apps/local/

rm -rf /opt/1panel/resource/apps/local/appstore-localApps
```

然后应用商店刷新本地应用即可。

### 使用压缩包方式获取应用

`1Panel` 计划任务类型 `Shell 脚本` 的计划任务框里，添加并执行以下命令，或者终端运行以下命令

```sh
wget -P /opt/1panel/resource/apps/local https://mirror.ghproxy.com/https://github.com/okxlin/appstore/archive/refs/heads/localApps.zip

unzip -o -d /opt/1panel/resource/apps/local/ /opt/1panel/resource/apps/local/localApps.zip

cp -rf /opt/1panel/resource/apps/local/appstore-localApps/apps/* /opt/1panel/resource/apps/local/

rm -rf /opt/1panel/resource/apps/local/appstore-localApps

rm -rf /opt/1panel/resource/apps/local/localApps.zip
```

然后应用商店刷新本地应用即可。

## 国际互联网络

### 使用 git 命令获取应用

`1Panel` 计划任务类型 `Shell 脚本` 的计划任务框里，添加并执行以下命令，或者终端运行以下命令

```sh
git clone -b localApps https://github.com/okxlin/appstore /opt/1panel/resource/apps/local/appstore-localApps

cp -rf /opt/1panel/resource/apps/local/appstore-localApps/apps/* /opt/1panel/resource/apps/local/

rm -rf /opt/1panel/resource/apps/local/appstore-localApps
```

然后应用商店刷新本地应用即可。

### 使用压缩包方式获取应用

`1Panel` 计划任务类型 `Shell 脚本` 的计划任务框里，添加并执行以下命令，或者终端运行以下命令

```sh
wget -P /opt/1panel/resource/apps/local https://github.com/okxlin/appstore/archive/refs/heads/localApps.zip

unzip -o -d /opt/1panel/resource/apps/local/ /opt/1panel/resource/apps/local/localApps.zip

cp -rf /opt/1panel/resource/apps/local/appstore-localApps/apps/* /opt/1panel/resource/apps/local/

rm -rf /opt/1panel/resource/apps/local/appstore-localApps

rm -rf /opt/1panel/resource/apps/local/localApps.zip
```

然后应用商店刷新本地应用即可。

## 备注

- **未显示在本地应用列表里的，表示未完全适配应用商店面板操作**
- **但是支持直接终端运行。**

::: tip
本仓库应用基本支持直接 `docker-compose up` 运行
:::
以 `rustdesk` 为例

```sh
# 进入 rustdesk 的最新版本目录
cd /opt/1panel/resource/apps/local/rustdesk/versions/latest/

# 复制 .env.sample 为 .env
cp .env.sample .env

# 编辑 .env 文件，修改参数
nano .env

# 启动 RustDesk
docker-compose up -d

# 查看连接所需密钥
cat ./data/hbbs/id_ed25519.pub
```

## 应用一览图

[点击查看原图](https://i.theojs.cn/docs/app-list.png)

![1Panel](https://i.theojs.cn/docs/app-list.png '应用一览图')
