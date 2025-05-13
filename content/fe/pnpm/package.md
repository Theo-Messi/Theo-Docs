---
title: pnpm 管理依赖项 | 高效的依赖管理工具
head:
  - - meta
    - name: description
      content: 掌握 pnpm 管理 Node.js 项目依赖项的方法，提高开发效率和项目性能。
  - - meta
    - name: keywords
      content: pnpm 管理依赖项 Node.js 包管理 高效依赖管理 项目依赖
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
