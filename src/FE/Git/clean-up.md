---
title: Git 缩减仓库
head:
  - - meta
    - name: description
      content: Git 缩减仓库
---

## 缩减 git 仓库

```sh
# 清除垃圾文件 - 大量无用的 mp3 文件
git filter-branch --force --index-filter 'git rm --cached --ignore-unmatch *.mp3' --prune-empty --tag-name-filter cat -- --all
```

```sh
# 提交到远程仓库
# 如 GitHub, 我再次从 git clone GitHub 代码库会变小为 1.3M
git push origin --force --all
```

```sh
# 必须回收垃圾,本地仓库才变小
git for-each-ref --format='delete %(refname)' refs/original | git update-ref --stdin
git reflog expire --expire=now --all
git gc --prune=now

rm -rf .git/refs/original
git reflog expire --expire=now --all
git gc --prune=now
git gc --aggressive --prune=now
```
