---
title: Git 简介与安装 | 版本控制工具 安装与配置
head:
  - - meta
    - name: description
      content: 了解 Git 版本控制工具的基本概念，学习如何安装和配置 Git，快速开始项目管理。
  - - meta
    - name: keywords
      content: Git 简介 Git 安装 版本控制工具 Git 配置 项目管理 Git 使用
---

## Git 是什么？

那么，简单地说，Git 究竟是怎样的一个系统呢？ 请注意接下来的内容非常重要，若你理解了 Git 的思想和基本工作原理，用起来就会知其所以然，游刃有余。 在学习 Git 时，请尽量理清你对其它版本管理系统已有的认识，如 CVS、Subversion 或 Perforce， 这样能帮助你使用工具时避免发生混淆。尽管 Git 用起来与其它的版本控制系统非常相似， 但它在对信息的存储和认知方式上却有很大差异，理解这些差异将有助于避免使用中的困惑。

## 在 Linux 上安装

如果你想在 Linux 上用二进制安装程序来安装基本的 Git 工具，可以使用发行版包含的基础软件包管理工具来安装。

::: code-group

```sh [Debian]
sudo apt install git-all
```

```sh [ubuntu]
sudo apt install git-all
```

```sh [Fedora/RHEL/CentOS]
sudo dnf install git-all
```

:::

## 在 macOS 上安装

```sh
brew install git
```

## 在 Windows 上安装

在 Windows 上安装 Git 同样轻松，请参考 [官方指南](https://git-scm.com/download/win)。
