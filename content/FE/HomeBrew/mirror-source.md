---
title: Homebrew 切换镜像源
head:
  - - meta
    - name: description
      content: Homebrew 是由 Mac 开发团队开发的包管理器工具，它可以帮助我们快速安装和卸载软件，并且可以方便的进行软件的升级。
---

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
