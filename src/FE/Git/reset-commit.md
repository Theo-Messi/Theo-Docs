---
title: Git 重置提交记录
head:
  - - meta
    - name: description
      content: Git 重置提交记录
---

有时候，我们提交了一些隐私的数据例如密码等到 Github 仓库，就算更新了仓库文件，但依旧会在 commit 历史记录中保存这部分数据。这个时候，我们就需要一种方法，可以把Github分支下所有提交记录进行删除！

一般使用新建分支，都会在当前 master 分支的基础上克隆一份，如下图所示：

![Git](https://i.theojs.cn/docs/202406112003627.png 'Git 重置提交记录')

```sh
# 所以，我们需要新建一个空白的分支：
git checkout --orphan latest_branch

# 添加你想提交的所有文件到这个新分支：
git add -A
git commit -m "commit message"

# 先将旧分支删除
git branch -D main
# 再将新分支的名字改为旧分支的名字
git branch -m main
# 最后提交所有本地操作到Github仓库
git push -f origin main
```
