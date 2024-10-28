---
title: Git 常用命令
head:
  - - meta
    - name: description
      content: Git 常用命令
---

## 创建目录

```sh
mkdir "目录名称"
```

## Git 常用命令

|                            |                                    |
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

## Git 分支操作

|                               |                                           |
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

|                                                       |                  |
| ----------------------------------------------------- | ---------------- |
| `git tag 标签名` 例如: `git tag v1.0`                 | 创建标签         |
| `git tag`                                             | 查看所有标签     |
| `git push origin 标签名` 例如: `git push origin v1.0` | 将标签推送到远程 |
| `git tag -d 标签名`                                   | 删除本地标签     |
| `git push origin:refs/tags/标签名`                    | 删除远程标签     |
| `git push origin 标签名` 例如: `git push origin v1.0` | 将标签推送到远程 |
| `git tag -d 标签名`                                   | 删除本地标签     |
| `git push origin:refs/tags/标签名`                    | 删除远程标签     |
