---
title: Git 合并commit | 精简提交 历史记录管理
head:
  - - meta
    - name: description
      content: 学习如何使用 Git 合并 commit，清理历史提交记录，优化代码库的版本历史。
  - - meta
    - name: keywords
      content: Git 合并 commit 提交记录 清理历史提交 Git 提交优化 Git 历史管理
---

| 命令           | 特点                                                                               |
| -------------- | ---------------------------------------------------------------------------------- |
| `Merge`        | 合并两个分支，保留所有历史记录。                                                   |
| `Rebase`       | 将一个分支的更改应用到另一个分支的顶部，形成线性历史。                             |
| `Reset --soft` | 撤销最后一次提交，但保留更改在工作目录和暂存区，适合需要撤销合并但保留修改的场景。 |
| `Fixup`        | 创建修复某次提交的临时提交，可配合 `rebase -i` 自动合并，简化历史记录。            |

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

**切换回 main 并合并临时分支**

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

**切换回 main 并进行 rebase**

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

## Reset --soft 的使用方法

**在 main 分支上做更改并提交**

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

## Fixup 的使用方法

**查看提交历史并找到要修复的提交的哈希**

```sh
git log --oneline
```

**进行修改并创建 fixup 提交**

```sh
# 修改代码
git add .

# 用 --fixup 创建修复指定提交的临时提交
git commit --fixup <commit-hash>
```

**使用自动 rebase 将 fixup 合并进目标提交**

```sh
git rebase -i --autosquash <commit-hash>^
```

> 注意：将 `<commit-hash>` 替换为目标提交的哈希值。git rebase 会自动把 fixup 提交合并到该目标提交中。

**强制推送更新后的历史**

```sh
git push --force-with-lease
```

---

通过合理使用 `fixup` 与 `rebase --autosquash`，可以让 Git 历史更简洁、易读。
