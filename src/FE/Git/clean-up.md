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
git filter-repo --path-glob '*.mp3' --invert-paths --force

# 列出标签和分支，删除不需要的
git tag -d <tag_name>
git push origin --delete <tag_name>

git branch -d <branch_name>
git push origin --delete <branch_name>

# 清理垃圾回收并重新打包对象
git reflog expire --expire=now --all
git gc --prune=now --aggressive
git repack -Ad
git prune

# 推送修改后的历史记录回远程仓库
git remote add origin <https://github.com/username/repository.git>
git push origin --force --all
git push origin --force --tags
```
