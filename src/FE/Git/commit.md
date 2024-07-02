---
title: Git 合并commit
head:
  - - meta
    - name: description
      content: Git 合并commit
---

| 命令           | 特点                                                                               |
| -------------- | ---------------------------------------------------------------------------------- |
| `Merge`        | 合并两个分支，保留所有历史记录。                                                   |
| `Rebase`       | 将一个分支的更改应用到另一个分支的顶部，形成线性历史。                             |
| `Reset --soft` | 撤销最后一次提交，但保留更改在工作目录和暂存区，适合需要撤销合并但保留修改的场景。 |

## Merge 的使用方法

**创建临时分支并切换**

```sh
git checkout -b temp-branch
```

**在临时分支上做更改并提交**

```sh
echo "Some changes" > file.txt
git add file.txt
git commit -m "Changes on temp-branch"
```

**切换回main并合并临时分支**

```sh
git checkout main
git merge temp-branch
```

**推送更改到远程仓库**

```sh
git push origin main
```

**删除临时分支**

```sh
git branch -d temp-branch
```

## Rebase 的使用方法

**创建临时分支并切换**

```sh
git checkout -b temp-branch
```

**在临时分支上做更改并提交**

```sh
echo "Some changes" > file.txt
git add file.txt
git commit -m "Changes on temp-branch"
```

**切换回main并进行rebase**

```sh
git checkout main
git rebase temp-branch
```

**推送更改到远程仓库**

```sh
git push origin main
```

**删除临时分支**

```sh
git branch -d temp-branch
```

## Reset --soft的使用方法

**在main分支上做更改并提交**

```sh
echo "Some changes" > file.txt
git add file.txt
git commit -m "Changes on main"
```

**撤销最后一次提交**

```sh
git reset --soft HEAD^
```

**重新提交或进行其他操作，然后推送到远程仓库**

```sh
echo "Updated changes" > file.txt
git add file.txt
git commit -m "Updated changes on main"

git push origin main
```
