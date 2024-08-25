---
title: Git 版本回退
head:
  - - meta
    - name: description
      content: Git 版本回退
---

| 命令     | 特点                                                             |
| -------- | ---------------------------------------------------------------- |
| `reset`  | 该命令会强行覆盖当前版本和要回退的版本之间的其他版本（不太建议） |
| `revert` | 再当前版本的基础上新增一个版本，不影响以前的代码                 |

## reset 的使用方法

#### 查看版本，确定要回退的时刻

```sh
git log
git log --pretty=oneline
```

#### 回退操作

```sh
git reset --hard （目标版本号）
```

#### 在回退成功后，又想回到回退之前的状态，则需要使用指令查看历史提交信息

```sh
git reflog
```

#### 强制提交到远程

```sh
git push -f origin <branch name>
```

## revert 的使用方法

```sh
git log 查看版本号
git revert -n (版本号)
```

:::tip
这里可能会出现冲突，那么需要手动修改冲突的文件

然后就正常的提交流程就可以了，会生成一个新的版本在最新，不会影响到以前的版本
:::

#### 提交到远程

```sh
git push origin <branch name>
```
