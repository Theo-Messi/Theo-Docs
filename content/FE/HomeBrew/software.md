---
title: Homebrew 安装软件
head:
  - - meta
    - name: description
      content: Homebrew 是由 Mac 开发团队开发的包管理器工具，它可以帮助我们快速安装和卸载软件，并且可以方便的进行软件的升级。
---

## 安装软件

例如我们要安装 `Nginx`，在下面终端输入以下命令即可。

```sh
brew install nginx
```

## 搜索软件

1. 使用命令搜索

```sh
 brew search [关键词]
```

2. 使用网页搜索

<https://formulae.brew.sh/>

## 查看软件信息

```sh
brew info [关键词]
```

## 查看已安装的软件

```sh
brew list
```

## 更新已安装的软件

```sh
 brew outdated # 查看所有有更新版本的软件
 brew upgrade # 更新所有的软件
 brew upgrade [软件名] #更新单个软件
```

## 卸载某个已经安装的包

```sh
 brew uninstall [软件名]
```

## 查看包信息

```sh
brew info [软件名]
```

## 清理软件的旧版

```sh
brew cleanup # 清理系统中所有软件的历史版本
brew cleanup [软件名] # 清理特定软件的旧版
```

## 管理后台软件

诸如 `Nginx``MySQL` 等软件，都是有一些服务端软件在后台运行，如果你希望对这些软件进行管理，可以使用 `brew services` 命令来进行管理

- `brew services list`： 查看所有服务
- `brew services run [服务名]`: 单次运行某个服务
- `brew services start [服务名]`: 运行某个服务，并设置开机自动运行。
- `brew services stop [服务名]`：停止某个服务
- `brew services restart`：重启某个服务。
