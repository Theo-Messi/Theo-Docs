---
title: Homebrew 切换镜像源 | 提升 Homebrew 安装速度
head:
  - - meta
    - name: description
      content: 通过切换镜像源，可以大幅提升 Homebrew 在中国地区的安装和更新速度，优化包管理体验。
  - - meta
    - name: keywords
      content: Homebrew 镜像源 切换 安装速度 优化 软件管理
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
