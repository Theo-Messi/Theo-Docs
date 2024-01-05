---
title: Homebrew 入门使用
---

## 简介

Homebrew 由开发者 Max Howell 开发，并基于 BSD 开源，是一个非常方便的包管理器工具。在早期， Homebrew 仅有 macOS 的版本，后续随着用户的增多，Homebrew 还提供了 Linux 的版本，帮助开发者在 Linux 同样使用 Homebrew 来配置环境。

## 安装 Homebrew

```sh
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

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

## 检查 Hombrew 环境

如果你的 Hombrew 没有办法正常的工作，你可以执行 `brew doctor` 来开启 Homebrew 自带的检查，从而确认有哪些问题，并进行修复。

## 更新 Homebrew

```sh
brew update
```

## 添加一个新的 tap

```sh
brew tap [user/repo]
```

## 常用 tap

在使用 homebrew 时，我们一般会添加几个常用的 tap，来确保我们有足够的软件来安装。

### Caskroom

Caskroom 是 Homebrew 下一个非常出名的 tap ，有了 caskroom，我们就可以安装一些有图形化界面的软件了，比如 VSCode、Typora 等软件。

使用起来也非常简单，最新版 Homebrew 中，你可以直接使用 `brew cask install [软件名]` 来安装特定的软件，homebrew 会自动安装 Caskroom。

### homebrew-cask-fonts

程序员难免要安装一些代码字体，这样才能更好的写代码，Homebrew 也提供了方便我们安装字体的 tap。

在使用时，你需要先添加对应的 tap ，然后执行安装即可了，比如我们要安装 `source code pro` 只需要执行如下命令。

```sh
brew tap homebrew/cask-fonts
brew cask install font-source-code-pro
```

## 切换国内的镜像源

### 使用中科大的镜像

```sh
cd "$(brew --repo)"
git remote set-url origin git://mirrors.ustc.edu.cn/brew.git
cd "$(brew --repo)/Library/Taps/homebrew/homebrew-core"
git remote set-url origin git://mirrors.ustc.edu.cn/homebrew-core.git
```

### 使用清华大学的镜像

```sh
git -C "$(brew --repo)" remote set-url origin https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/brew.git
git -C "$(brew --repo homebrew/core)" remote set-url origin https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/homebrew-core.git
```

## 使用 Brewfile 完成环境迁移

设备用久了，我们的电脑中会有大量的软件，如果你需要迁移环境，重新安装会是一个大麻烦，好在 Homebrew 本身为我们提供了一个非常好用的环境迁移的工具 —— `Homebrew Bundle`

你首先需要在之前的电脑中执行 `brew bundle dump` 来完成当前环境的导出,导出完成后，你会得到一个 Brewfile。

然后将 Brewfile 复制到新的电脑中，并执行 `brew bundle` 来开始安装的过程。
