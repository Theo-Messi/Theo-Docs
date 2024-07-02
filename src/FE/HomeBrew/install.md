---
title: Homebrew 简介与安装
head:
  - - meta
    - name: description
      content: Homebrew 是由 Mac 开发团队开发的包管理器工具，它可以帮助我们快速安装和卸载软件，并且可以方便的进行软件的升级。
---

## 简介

Homebrew 由开发者 Max Howell 开发，并基于 BSD 开源，是一个非常方便的包管理器工具。在早期， Homebrew 仅有 macOS 的版本，后续随着用户的增多，Homebrew 还提供了 Linux 的版本，帮助开发者在 Linux 同样使用 Homebrew 来配置环境。

## 安装 Homebrew

```sh
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

## 检查 Hombrew 环境

如果你的 Hombrew 没有办法正常的工作，你可以执行 `brew doctor` 来开启 Homebrew 自带的检查，从而确认有哪些问题，并进行修复。

## 更新 Homebrew

```sh
brew update
```

## 使用 Brewfile 完成环境迁移

设备用久了，我们的电脑中会有大量的软件，如果你需要迁移环境，重新安装会是一个大麻烦，好在 Homebrew 本身为我们提供了一个非常好用的环境迁移的工具 —— `Homebrew Bundle`

你首先需要在之前的电脑中执行 `brew bundle dump` 来完成当前环境的导出,导出完成后，你会得到一个 Brewfile。

然后将 Brewfile 复制到新的电脑中，并执行 `brew bundle` 来开始安装的过程。
