---
title: Homebrew tap使用 | 扩展 Homebrew 包源
head:
  - - meta
    - name: description
      content: Homebrew tap 允许用户为 Homebrew 添加自定义的软件源，以扩展可用的包和工具，提高软件管理的灵活性。
  - - meta
    - name: keywords
      content: Homebrew tap 使用 自定义软件源 包管理 扩展包源
---

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
