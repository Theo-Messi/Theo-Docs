# 编程题

## 模拟实现系列(造火箭)

### new 运算符

::: tip new 运算符原理

1. 创建一个全新的对象
2. 为新创建的对象添加 **`__proto__`** 属性并指向构造函数的原型对象
3. 将新创建的对象作为函数调用的 this
4. 如果构造函数没有返回对象类型，则返回新创建的对象

:::

::: details 模拟实现 new 运算符
<<< @/fe/coding/code/new.js
:::

- [new 运算符 —— MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/new)
- [JavaScript 深入之 new 的模拟实现](https://github.com/mqyqingfeng/Blog/issues/13)

### instanceof 运算符

::: tip instanceof 运算符原理
`instanceof` 运算符用于检测构造函数的 `prototype` 属性是否出现在某个实例对象的原型链上

:::

::: details 模拟实现 instanceof 运算符
<<< @/fe/coding/code/instanceof.js
:::

- [instanceof 运算符 —— MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/instanceof)<br>
- [instanceof 操作符的实现原理](https://juejin.cn/post/6844903613584654344#heading-1)

### Object.create()

::: tip Object.create()
`Object.create()` 方法创建一个新对象，使用现有的对象来提供新创建的对象的 `__proto__`
:::

::: details 模拟实现 Object.create()
<<< @/fe/coding/code/object-create.js
:::

[Object.create() —— MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/create)

### Function.prototype.call()

`call()` 方法使用一个指定的 `this` 值和单独给出的一个或多个参数来调用一个函数

::: details ES6 模拟实现 Function.prototype.call()
<<< @/fe/coding/code/call.js#es6
:::

::: details ES5 模拟实现 Function.prototype.call()
<<< @/fe/coding/code/call.js#es5
:::

- [Function.prototype.call() —— MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/call)
- [JavaScript 深入之 call 和 apply 的模拟实现](https://github.com/mqyqingfeng/Blog/issues/11)

### Function.prototype.apply()

`apply()` 方法调用一个具有给定 `this` 值的函数，以及以一个数组（或类数组对象）的形式提供的参数

::: details ES6 模拟实现 Function.prototype.apply()
<<< @/fe/coding/code/apply.js#es6
:::

::: details ES5 模拟实现 Function.prototype.apply()
<<< @/fe/coding/code/apply.js#es5
:::

- [Function.prototype.apply() —— MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)
- [JavaScript 深入之 call 和 apply 的模拟实现](https://github.com/mqyqingfeng/Blog/issues/11)

### Function.prototype.bind()

`bind()` 方法创建一个新的函数，在 `bind()` 被调用时，这个新函数的 `this` 被指定为 `bind()` 的第一个参数，而其余参数将作为新函数的参数供调用时使用。

::: details ES6 模拟实现 Function.prototype.bind()
<<< @/fe/coding/code/bind.js#es6
:::

::: details ES5 模拟实现 Function.prototype.bind()
<<< @/fe/coding/code/bind.js#es5
:::

- [Function.prototype.bind() —— MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)
- 相关学习文章
  - [JavaScript 深入之 bind 的模拟实现](https://github.com/mqyqingfeng/Blog/issues/12)
  - [从一道面试题的进阶，到“我可能看了假源码”](https://zhuanlan.zhihu.com/p/25379434)
  - [从一道面试题的进阶，到“我可能看了假源码”（2）](https://zhuanlan.zhihu.com/p/25483361)

## 工具方法系列

### debounce 函数防抖

::: tip 函数防抖
**作用**: 一个函数在一段时间内多次触发都**只执行最后一次** <br>
**原理**: 利用定时器，在函数第一次执行时设定一个定时器，再次调用时如果已经设定过定时器就清空之前的定时器并设定一个新的定时器，当定时器结束后执行传入的回调函数 <br>
**应用**: 搜索输入框获取用户输入的联想结果
:::

::: details 实现防抖函数
<<< @/fe/coding/code/debounce.js
:::

### throttle 函数节流

::: tip 函数节流
**作用**: 函数节流指指的是在一段时间内只允许函数执行一次 (例如 `3` 秒执行一次那么在函数第一次调用后的 `3` 秒内后面的函数调用将被忽略) <br>
**原理**: 利用时间戳来判断，记录上次执行的时间戳，在每次触发事件时判断当前时间是否大于上次执行的时间 + 设置的间隔 ，如果是则执行回调并更新上次执行的时间戳<br>
**应用**: 降低 `scroll resize` 事件的触发频率

:::

::: details 实现节流函数
<<< @/fe/coding/code/throttle.js
:::
