---
title: Git 入门使用
---

## 设置用户信息

```sh
git config --global user.name “用户名”
git config --global user.email “邮箱”
# 用户名：建议使用注册 GitHub 时用的用户名
# 邮箱：建议使用注册 GitHub 时用的邮箱
```

## 查看配置信息

```sh
git config --list
git config user.name
git config user.email
```

## 创建目录

```sh
mkdir "目录名称"
```

## Git 常用命令

| 命令                       | 命令说明                           |
| -------------------------- | ---------------------------------- |
| `git init`                 | 初始化 Git 本地仓库                |
| `git status`               | 查看当前状态                       |
| `git add [文件名]`         | 添加文件到缓存区                   |
| `git add .`                | 添加当前目录下的所有文件到缓存区中 |
| `git commit -m "描述信息"` | 提交至版本库（本地仓库）           |
| `git clone [线上仓库地址]` | 克隆线上仓库到本地                 |
| `git push`                 | 推送到线上仓库                     |
| `git pull`                 | 从线上仓库拉取到本地               |
| `git reset`                | 在缓存区的文件取消暂存             |
| `git rm [文件名]`          | 删除文件                           |

## 添加远程仓库

- 添加远程仓库 : `git remote add origin 仓库地址`
- 提交到远程仓库 : `git push -u origin master`

- 查看已配置的远程仓库

  - `git remote`
    > 如果克隆过远程仓库到本地，会显示 origin,Git 默认克隆仓库的名字
  - 详细查看 : `git remote show origin`

- 移除远程仓库（只移除本地远程仓库的记录，不会真正影响到远程仓库）

  - `git remote rm`

## 版本回退

#### 查看版本，确定要回退的时刻

```sh
git log
git log --pretty=oneline
```

#### 回退操作

```sh
git reset --hard 提交编号
```

#### 在回退成功后，又想回到回退之前的状态，则需要使用指令查看历史提交信息

```sh
git reflog
```

#### 强制提交到远程

```sh
git push -f origin <branch name>
```

## 合并 commit

#### 查看 commit 历史

```sh
git log
```

#### 合并多条提交

```sh
git rebase -i 提交编号
```

## 使用 SSH 的方式

```sh
ssh-keygen -t rsa -C “邮箱地址”
公钥：id_rsa.pub
私钥：id_rsa
```

## Git 分支操作

| 命令                          | 命令说明                                  |
| ----------------------------- | ----------------------------------------- |
| `git branch`                  | 查看本地分支                              |
| `git branch -r`               | 查看远程分支                              |
| `git branch -a`               | 查看本地和远程全部分支                    |
| `git branch 分支名`           | 创建分支                                  |
| `git checkout 分支名`         | 切换分支                                  |
| `git push origin 分支名`      | 推送分支到远程仓库                        |
| `git branch -d 分支名`        | 删除分支                                  |
| `git push origin -d 分支名称` | 删除远程分支                              |
| `git merge 被合并的分支名`    | 合并分支                                  |
| `git checkout -b 分支名`      | -b 表示创建并切换到该分支，相当于两个指令 |

## 忽略文件

创建`.gitignore` 文件

```sh
git touch .gitignore
```

- `/mtk/` 过滤整个文件夹
- `\*.zip` 过滤所有.zip 文件
- `/mtk/do.c` 过滤某个具体文件
- `!index.jsp` 不过滤某个文件

## git 标签

| 命令                                                 | 命令说明         |
| ---------------------------------------------------- | ---------------- |
| `git tag 标签名` 例如:`git tag v1.0`                 | 创建标签         |
| `git tag`                                            | 查看所有标签     |
| `git push origin 标签名` 例如:`git push origin v1.0` | 将标签推送到远程 |
| `git tag -d 标签名`                                  | 删除本地标签     |
| `git push origin:refs/tags/标签名`                   | 删除远程标签     |
| `git push origin 标签名` 例如:`git push origin v1.0` | 将标签推送到远程 |
| `git tag -d 标签名`                                  | 删除本地标签     |
| `git push origin:refs/tags/标签名`                   | 删除远程标签     |

## 缩减 git 仓库

#### 清除垃圾文件

大量无用的 mp3 文件

```bash
git filter-branch --force --index-filter 'git rm --cached --ignore-unmatch *.mp3' --prune-empty --tag-name-filter cat -- --all
```

#### 提交到远程仓库

如 GitHub, 我再次从 git clone GitHub 代码库会变小为 1.3M

```bash
git push origin --force --all
```

#### 必须回收垃圾,本地仓库才变小

```bash
git for-each-ref --format='delete %(refname)' refs/original | git update-ref --stdin
git reflog expire --expire=now --all
git gc --prune=now

rm -rf .git/refs/original
git reflog expire --expire=now --all
git gc --prune=now
git gc --aggressive --prune=now
```
