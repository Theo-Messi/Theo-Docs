# 模块化

::: tip 什么是模块化？

百度百科中的解释: 模块化是指解决一个复杂问题时自顶向下逐层把系统划分成若干模块的过程，有多种属性，分别反映其内部特性。

在编程中 模块化是将一个复杂的应用程序，按照一定的规则拆分成若干个文件(代码块)，并进行组合。文件内部的数据与实现都是私有的，只是对外暴露一些接口(方法、变量)与其他模块进行通信

:::

模块化的好处

- 避免命名空间的冲突
- 提高代码的复用性
- 提高维护性
- 更好的分离，实现按需加载

目前前端主流的模块规范是

- `CommonJS`
- `ESModule`
- `AMD`
- `CMD`
- `UMD`

## CommonJS

[`CommonJS`](https://www.commonjs.org/) 规范是一种同步加载模块的方式，其主要用于服务端，即 `Node` 中的

- `module.exports` 用于规定当前模块对外输出的接口
- `exports` 是 `module.exports` 属性的引用
- `require` 用于加载模块文件(读入并执行一个 `JavaScript` 文件并返回该模块的 `exports` 对象)

```js
/* util.js */
const name = 'maomao'
exports.name = name
module.exports.log = function () {
  console.log(name)
}

/* index.js */
const util = require('./util.js)
util.name
util.log()
```

::: tip exports 和 module.exports

- `exports` 是 `module` 对象的一个属性
- `exports` 是 `module.exports` 的一个引用，在默认情况下 `module.exports` 和 `exports` 指向**同一个空对象**
- 模块导出的是 `module.exports`

:::

::: tip CommonJS 模块的特点

- 所有代码都运行在模块作用域，不会污染全局作用域
- 模块可以多次加载，但只会在第一次加载时运行一次，然后运行结果就被缓存了，以后再加载时就直接读取缓存结果。要想让模块再次运行必须清除缓存
- 模块加载的顺序按其在代码中出现的顺序

:::

## ESModule

`ESModule` 是 `ES6` 在语言标准的层面上实现的模块功能，主要由 `export` 和 `import` 构成

- `export` 命令用于规定模块的对外接口
- `import` 命令用于输入其他模块提供的功能

[ES6 常用知识 —— ESModule](/fe/es6/#esmodule)

::: tip ESModule 与 CommonJS 的差异

- `CommonJS` 是动态语法可以写在判断里；`ESModule` 静态语法只能写在顶层
- `CommonJS` 模块输出的是一个值的拷贝；`ESModule` 输出的是值的引用
  - `CommonJS` 模块一旦输出一个值模块内部的变化就影响不到这个值
  - `ESModule` 模块在 `JavaScript` 引擎对脚本静态分析时，遇到模块加载命令 `import`，就会生成一个只读引用，等到脚本真正执行时再根据这个只读引用到被加载的那个模块里面去取值(`ESModule` 是动态引用，并且不会缓存值，模块里面的变量绑定其所在的模块)
- `CommonJS` 模块是运行时加载；`ESModule` 是编译时输出接口。
  - `CommonJS` 加载的是一个对象（即 `module.exports` 属性），该对象只有在脚本运行完才会生成
  - `ESModule` 不是对象，它的对外接口只是一种静态定义，在代码静态解析阶段就会生成
- `CommonJS` 模块的 `require()` 是同步加载模块；`ESModule` 的 `import` 命令是异步加载，有一个独立的模块依赖的解析阶段。
- 顶层的 `this` 指向不同
  - `CommonJS` 模块中的顶层 `this` 指向模块本身
  - `ESModule` 模块中的顶层 `this` 指向 `undefined`
- 模块的循环加载
  - `CommonJS` 模块在加载模块后就会执行整个脚本并在内存生成一个对象，当出现某个模块被"循环加载"，就只输出已经执行的部分，还未执行的部分不会输出
  - `ESModule` 根本不会关心是否发生了"循环加载"，只是生成一个指向被加载模块的引用，需要开发者自己保证，真正取值的时候能够取到值。

:::

## AMD

`AMD` 规范全称是 Asynchronous Module Definition，即异步模块定义，主要用于浏览器。<br>
`AMD` 规范完整描述了模块的定义、依赖关系、引用关系以及加载机制。其代表库是 [RequireJS](https://requirejs.org/)

### 相关 api 及使用

- `define()`: 定义模块
- `require()`: 调用模块

```js
/* 先通过 script 加载 RequireJS */

/* 定义模块 utils.js */
define(['utils'], function () {
  function log() {}
  return {
    log: log
  }
})

/* 调用模块 */
require(['./utils'], function (utils) {
  utils.log()
})
```

## CMD

`CMD` 规范全称是 Common Module Definition，即通用模块定义，其代表库是 [SeaJS](https://seajs.github.io/seajs/docs/)

> `CMD` 规范是在 `AMD` 规范的基础上改进的一种规范，其解决了 `AMD` 规范对依赖模块的执行时机的问题

### 相关 api 及使用

- `define()`: 定义模块
- `seajs.use()`: 调用模块

```js
/* 先通过 script 加载 SeaJS */

/* 定义模块 utils.js */
define(function (require, exports, module) {
  function log() {}
  return {
    log: log
  }
})

/* 调用模块 */
seajs.use(['./utils.js'], function (utils) {
  utils.log()
})
```

::: tip AMD 和 CMD 的区别

- `AMD`
  - 依赖前置: 在定义模块的时需要声明其依赖的模块
  - 在加载模块完成后就会执行该模块，当所有模块都加载执行完后会进入 require 的回调函数执行主逻辑
- `CMD`
  - 就近依赖: 只有当用到某个具体模块时再去加载
  - 加载完某个依赖模块后并不执行，当所有依赖模块加载完成后进入主逻辑，遇到 require 语句的时候才执行对应的模块

两者最大的区别是对依赖模块的执行时机处理不同

:::

## UMD

`UMD` 只是一种通用的写法，是为了解决当时存在多种流行而不统一的规范而产生的一种通用规范<br>
`UMD` 实际是 **`AMD + CommonJS + 全局变量`** 这三种规范的结合

```js
;(function (root, factory) {
  // CommonJs 模块规范 Node 环境
  if (typeof module === 'object') {
    module.exports = factory(require('jquery'))
  }
  // AMD 模块规范
  else if (typeof define === 'function' && define.amd) {
    define(['jquery'], factory)
  }
  // 挂载全局变量(global 即全局对象)
  else {
    root.returnExports = factory(root.jQuery)
  }
})(this, function ($) {
  // 定义属性
  const name = 'jquery'

  // 定义方法
  function log() {}

  //    暴露公共方法
  return {
    name,
    log
  }
})
```

## 相关文章

[深入 CommonJs 与 ES6 Module](https://segmentfault.com/a/1190000017878394)
