---
title: 使用 GPG 签名 Git Commit
---

## GPG 安装

::: code-group

```bash [gpg]
brew install gpg
```

```bash [keybase]
brew cask install keybase
```

:::

---

### 常用命令

```bash
$ gpg --gen-key
$ gpg --list-keys
$ gpg --list-secret-keys
$ gpg2 --list-keys
$ gpg2 --list-secret-keys

$ gpg2 --keyserver hkp://pool.sks-keyservers.net --send-keys C6EED57A
$ gpg2 --keyserver hkp://pool.sks-keyservers.net --recv-keys C6EED57A
```

---

### 生成 GPG key

```bash
gpg --gen-key
```

#### 具体步骤如下

```bash
$ gpg --gen-key
gpg (GnuPG) 2.2.15; Copyright (C) 2019 Free Software Foundation, Inc.
This is free software: you are free to change and redistribute it.
There is NO WARRANTY, to the extent permitted by law.

注意：使用 “gpg --full-generate-key” 以获得一个功能完整的密钥产生对话框。

GnuPG 需要构建用户标识以辨认您的密钥。

真实姓名： Theo-messi
电子邮件地址： fanxiaobin422@gmail.com
您选定了此用户标识：
    “Theo-messi <fanxiaobin422@gmail.com>”

更改姓名（N）、注释（C）、电子邮件地址（E）或确定（O）/退出（Q）？ o
我们需要生成大量的随机字节。在质数生成期间做些其他操作（敲打键盘
、移动鼠标、读写硬盘之类的）将会是一个不错的主意；这会让随机数
发生器有更好的机会获得足够的熵。
gpg: 密钥 8284896418BCC645 被标记为绝对信任
gpg: 目录‘/Users/xiexianbin/.gnupg/openpgp-revocs.d’已创建
gpg: 吊销证书已被存储为‘/Users/xiexianbin/.gnupg/openpgp-revocs.d/11518af49eaa27d86ea01b5c901487ea218aeb1a.rev’
公钥和私钥已经生成并被签名。

pub   rsa2048 2019-05-16 [SC] [有效至：2021-05-15]
      11518af49eaa27d86ea01b5c901487ea218aeb1a
uid                      xiexianbin <me@xiexianbin.cn>
sub   rsa2048 2019-05-16 [E] [有效至：2021-05-15]
```

---

### 查看 GPG key

```bash
gpg --list-keys
gpg --list-secret-keys
```

#### 示例

```bash
$ gpg --list-keys
/Users/xiexianbin/.gnupg/pubring.kbx
------------------------------------
pub   rsa2048 2019-05-16 [SC] [有效至：2021-05-15]
      11518af49eaa27d86ea01b5c901487ea218aeb1a
uid           [ 绝对 ] xiexianbin <me@xiexianbin.cn>
sub   rsa2048 2019-05-16 [E] [有效至：2021-05-15]
```

---

### 密钥

- `pub`：公钥
- `sub`：私钥
- `11518af49eaa27d86ea01b5c901487ea218aeb1a` 是 pub GPG key ID

#### 导出公钥

```bash
gpg --armor --export <pub GPG key ID>
```

#### GPG key 格式

```bash
-----BEGIN PGP PUBLIC KEY BLOCK-----
...
-----END PGP PUBLIC KEY BLOCK-----
```

---

### 删除GPG key

```bash
gpg --delete-keys <pub GPG key ID>
gpg --delete-secret-keys <pub GPG key ID>
```

## Github 配置 GPG

### 配置 GPG 公钥到仓库

Github `Setting` -> `SSH and GPG keys` -> `New GPG Key` 导入即可

---

### 本地代码仓库启用GPG Sign

通过`gpg --list-keys`查看`pub GPG key ID`，后设置`git签名`时用的`key`

#### 全局设置

```bash
# 配置已经生成的GPG Key ID
git config --global user.signingkey <pub GPG key ID>
# 配置启用GPG签名
git config --global commit.gpgsign true
```

#### 指定仓库设置，需要进入代码目录：

```bash
# 配置已经生成的GPG Key ID
git config --local user.signingkey <pub GPG key ID>
# 配置启用GPG签名
git config --local commit.gpgsign true
```

---

### 重启 gpg-agent

```bash
gpgconf –kill gpg-agent
```

---

### 上述示例

```bash
~ xiexianbin$ git config --global user.signingkey 11518af49eaa27d86ea01b5c901487ea218aeb1a
~ xiexianbin$ git config --global commit.gpgsign true
~ xiexianbin$ gpgconf –kill gpg-agent
gpg:OpenPGP:/usr/local/Cellar/gnupg/2.2.15/bin/gpg
gpg-agent:私钥:/usr/local/Cellar/gnupg/2.2.15/bin/gpg-agent
scdaemon:智能卡:/usr/local/Cellar/gnupg/2.2.15/libexec/scdaemon
gpgsm:S/MIME:/usr/local/Cellar/gnupg/2.2.15/bin/gpgsm
dirmngr:网络:/usr/local/Cellar/gnupg/2.2.15/bin/dirmngr
pinentry:密码条目:/usr/local/opt/pinentry/bin/pinentry
~ xiexianbin$
```

## git 使用

### 提交

```bash
git commit -am "feature: something"
git push origin develop
```

然后我们可以在 `git` 中看到 `Verified` 的标识。

如果不设置`git config --global commit.gpgsign true`，提交的时候加上一个 `-S` 参数就可以为提交签名：

```bash
git commit -S -m `your commit message`
```

### 提交 tag 时签名

```bash
git tag -s ...
```

### 查看日志

```bash
git log --show-signature -1
```

## 常见问题

```bash
$ GIT_TRACE=1 git commit -m "xxx"
22:03:55.417251 git.c:455               trace: built-in: git commit -m 'feature: jwt support'
22:03:55.424110 run-command.c:667       trace: run_command: gpg --status-fd=2 -bsau B5A1B728A2FD170FE0E6C4E2D6B71988603A67D2
error: gpg failed to sign the data
fatal: failed to write commit object
或
error: gpg 无法为数据签名
fatal: 写提交对象失败
```

## 解决办法

```bash
echo export GPG_TTY=$(tty) >> ~/.bash_profile
export GPG_TTY=$(tty)
```

重新执行，发现会弹出一个密码输入界面。

### 如果没有解决，执行如下命令

```bash
$ gpg --status-fd=2 -bsau B5A1B728A2FD170FE0E6C4E2D6B71988603A67D2

# 如果卡住，执行
killall gpg-agent
```
