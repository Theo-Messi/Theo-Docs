## 开发设置

您将需要[pnpm](https://pnpm.io)

克隆存储库后，运行：

```sh
# 安装项目的依赖
$ pnpm install
```

### 设置 VitePress 开发环境

开始测试 VitePress 的最简单方法是调整 VitePress 文档。 您可以运行 `pnpm run docs:dev` 在本地启动 VitePress 文档站点，并实时重新加载源代码。

```sh
$ pnpm run docs:dev
```

执行上述命令后，访问 http://localhost:5173 ，尝试修改源码。 您将获得实时更新。

### 构建 VitePress 文档

```sh
$ pnpm run docs:build
```
