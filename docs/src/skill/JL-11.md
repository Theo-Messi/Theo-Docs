---
title: 使用 nvm 管理不同版本的 node
---

## nvm 与 n 的区别

node 版本管理工具还有一个是 TJ大神的 n 命令，n 命令是作为一个 node 的模块而存在，而 nvm 是一个独立于 node/npm 的外部 shell 脚本，因此 n 命令相比 nvm 更加局限。

由于 npm 安装的模块路径均为 `/usr/local/lib/node_modules`，当使用 n 切换不同的 node 版本时，实际上会共用全局的 node/npm 目录。 因此不能很好的满足『按不同 node 版本使用不同全局 node 模块』的需求。

## 卸载全局安装的 node/npm

在官网下载的 node 安装包，运行后会自动安装在全局目录，使用过程中经常会遇到一些权限问题，所以推荐按照以下方法卸载全局安装的 node/npm。

首先，打开你 Finder，按 shift+command+G，打开前往文件夹的窗口，分别输入下列目录进去之后删除 node 和 node_modules 相关的文件和文件夹:

- 打开 `/usr/local/lib`，删除 `node` 和 `node_modules` 相关的文件和文件夹
- 打开 `/usr/local/include`，删除 `node` 和 `node_modules` 相关的文件和文件夹

如果你是使用的 `brew install node` 安装的 NodeJS，那么你还需要在终端中执行 `brew uninstall node` 命令来卸载

检查你的个人主文件夹下面的所有的 local、lib 以及 include 文件夹，并且删除所有与 node 和 node_modules 相关的文件以及文件夹

打开 /usr/local/bin 并删除 node 可执行文件

你可能还需要在你的终端中输入一些额外的指令：

```bash
sudo rm /usr/local/bin/npm
sudo rm /usr/local/share/man/man1/node.1
sudo rm /usr/local/lib/dtrace/node.d
sudo rm -rf ~/.npm
sudo rm -rf ~/.node-gyp
sudo rm /opt/local/bin/node
sudo rm /opt/local/include/node
sudo rm -rf /opt/local/lib/node_modules
```

## 安装 nvm

```bash
brew install nvm
```

## 安装多版本 node/npm

安装4.2.2版本：

```bash
nvm install 4.2.2
```

安装最新的 4.2 系列的最新版本：

```bash
nvm install 4.2
```

列出远程服务器上所有的可用版本：

```bash
nvm ls-remote
```

## 在不同版本间切换

切换到 4.2.2：

```bash
nvm use 4.2.2
```

切换到 4.2.x：

```bash
nvm use 4.2
```

切换到最新版：

```bash
nvm use node
```

## 列出已安装实例

```bash
nvm ls
```

## 在项目中使用不同版本的 Node

我们可以通过创建项目目录中的 `.nvmrc` 文件来指定要使用的 Node 版本。之后在项目目录中执行 `nvm use` 即可。

`.nvmrc` 文件内容只需要遵守上文提到的语义化版本规则即可

## 在多环境中使用npm

每个版本的 Node 都会自带一个不同版本的 npm，可以用 `npm -v` 来查看 npm 的版本。全局安装的 npm 包并不会在不同的 Node 环境中共享，因为这会引起兼容问题。它们被放在了不同版本的目录下，例如 `~/.nvm/versions/node/<version>/lib/node_modules</version>` 这样的目录。这刚好也省去我们在 Linux 中使用 `sudo` 的功夫了。因为这是用户的主文件夹，并不会引起权限问题。

但问题来了，我们安装过的 npm 包，都要重新再装一次？幸运的是，我们有个办法来解决我们的问题，运行下面这个命令，可以从特定版本导入到我们将要安装的新版本 Node：

```bash
nvm install v5.0.0 --reinstall-packages-from=4.2
```
