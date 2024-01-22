---
title: oh-my-zsh 安装 & 配置
---

## zsh 安装 & 配置

### 安装

```zsh
brew install zsh zsh-completions
```

### 更改默认shell

```zsh
# 把zsh设为默认shell，如果shell列表中没有zsh或者你没有使用chsh权限的时候，不起作用
echo $SHELL
[sudo] chsh -s $(which zsh)  或 chsh -s /bin/zsh
```

## oh-my-zsh 安装 & 配置

### 安装

::: code-group

```zsh [Homebrew]
brew install zsh
```

```zsh [wget]
sh -c "$(wget https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh -O -)"
```

```zsh [curl]
sh -c "$(curl -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
```

:::

### 配置主题

```zsh
vim ~/.zshrc

# 找到 ZSH_THEME
ZSH_THEME="cloud"

# ZSH_THEME="样式名称"
```

### 随机主题

```zsh
ZSH_THEME="random"
```

## oh-my-zsh 插件推荐

### autojump

```zsh
# 安装步骤
brew install autojump

vim ~/.zshrc
# 在文件里找到plugins，添加
plugins=(autojump)

# 在文件末尾添加
[[ -s $(brew --prefix)/etc/profile.d/autojump.sh ]] && . $(brew --prefix)/etc/profile.d/autojump.sh
source $ZSH/oh-my-zsh.sh

# 最后
source ~/.zshrc
```

### zsh-autosuggestion

```zsh
# 安装步骤
brew install zsh-autosuggestion

vim ~/.zshrc
# 在文件里找到plugins，添加
plugins=(
  autojump
  zsh-autosuggestions
)

# 最后
source ~/.zshrc
```

### zsh-syntax-highlighting

```zsh
# 安装步骤
brew install zsh-syntax-highlighting

vim ~/.zshrc
# 在文件里找到plugins，添加
plugins=(
  autojump
  zsh-autosuggestions
  zsh-syntax-highlighting
)

# 最后
source ~/.zshrc
```
