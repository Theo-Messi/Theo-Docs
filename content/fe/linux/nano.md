---
title: Linux nano 编辑器 | 简洁高效的终端文本编辑器
head:
  - - meta
    - name: description
      content: 学习如何使用 Linux 中的 nano 编辑器，快速掌握基本操作、快捷键和配置技巧，提升终端下的编辑效率。
  - - meta
    - name: keywords
      content: Linux nano 编辑器 终端文本编辑 快捷键 nano命令
---

![nano](https://i.theojs.cn/docs/nano.webp 'nano')

`nano` 是一款轻量级、易于使用的终端文本编辑器，适用于大多数 Linux 发行版。它比 `vi`/`vim` 更加直观，非常适合新手用户快速编辑文本文件，尤其常用于编辑配置文件和脚本。

## 安装 nano

大多数 Linux 系统默认已预装 `nano`，你可以通过以下命令检查是否安装：

```bash
nano --version
```

如果未安装，可以根据系统类型执行以下命令：

::: code-group

```bash [Debian / Ubuntu]
sudo apt update
sudo apt install nano
```

```bash [CentOS / RHEL]
sudo yum install nano
```

```bash [Arch Linux]
sudo pacman -S nano
```

:::

## 启动和打开文件

在终端中使用以下命令打开或新建文件：

```bash
nano 文件名
```

示例：

```bash
nano hello.txt
```

如果该文件不存在，nano 将自动创建一个新文件并开始编辑。

## 基本编辑操作

- 使用方向键移动光标。
- 直接输入内容即可开始编辑。
- 可以使用终端支持的快捷方式进行复制粘贴，如 `Ctrl+Shift+C` / `Ctrl+Shift+V`（取决于终端）。

## 保存与退出

- 按下 `Ctrl + O` 保存文件，会提示输入文件名，按 Enter 确认。
- 按下 `Ctrl + X` 退出 nano，若文件有改动会提示是否保存。

## 常用快捷键

| 快捷键     | 功能说明           |
| ---------- | ------------------ |
| `Ctrl + O` | 保存当前文件       |
| `Ctrl + X` | 退出编辑器         |
| `Ctrl + G` | 显示帮助文档       |
| `Ctrl + K` | 剪切当前行         |
| `Ctrl + U` | 粘贴最近剪切的内容 |
| `Ctrl + W` | 搜索指定文本       |
| `Ctrl + \` | 查找并替换文本     |
| `Alt + U`  | 撤销上一步操作     |
| `Alt + E`  | 重做撤销的操作     |

> 注意：某些终端可能需按 `Esc` 后再按组合键才能触发 Alt 键操作。

## 搜索与替换文本

### 搜索

按下 `Ctrl + W`，输入关键字后回车即可搜索下一处匹配内容。可反复按 `Ctrl + W` + 回车继续查找。

### 替换

按下 `Ctrl + \` 启动替换流程：

1. 输入要查找的字符串，按回车。
2. 输入替换后的字符串，再按回车。
3. 可选择替换当前匹配、全部替换或跳过。

## 进阶用法

### 显示行号

使用 `-l` 参数可在左侧显示行号：

```bash
nano -l 文件名
```

### 打开时定位到特定行

```bash
nano +行号 文件名
```

示例：

```bash
nano +20 settings.conf
```

会直接跳转到第 20 行。

## 配置文件 ~/.nanorc

你可以通过编辑 `~/.nanorc` 文件来自定义 nano 的行为，如开启行号、设置制表符宽度、语法高亮等。

常用配置示例：

```bash
set linenumbers
set tabsize 4
include "/usr/share/nano/*.nanorc"
```

- `set linenumbers`：开启行号显示
- `set tabsize 4`：设置 tab 宽度为 4 空格
- `include`：加载语法高亮规则

## 获取帮助

- 在 nano 中按 `Ctrl + G` 可查看内建帮助菜单。
- 使用 `man nano` 命令可查看系统手册页，了解更多命令参数。

```bash
man nano
```

## 总结

`nano` 是一款简单而强大的终端文本编辑器，适合快速编辑文件、编写脚本或修改配置文件。它易于上手，快捷键直观，几乎适用于所有 Linux 用户。通过掌握上述基本与进阶功能，你可以在终端中高效地进行文本编辑工作。
