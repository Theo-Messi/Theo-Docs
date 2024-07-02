---
title: pnpm 管理依赖项
head:
  - - meta
    - name: description
      content: pnpm 管理依赖项
---

### 安装包

```bash
pnpm install [包]
pnpm i [包]
pnpm add [包]    # -S  默认写入dependencies
pnpm add -D     # -D devDependencies
pnpm add -g     # 全局安装
```

### 移除包

```bash
pnpm remove 包                            //移除包
pnpm remove 包 --global                   //移除全局包
```
