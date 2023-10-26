# Programming questions

## Simulation Implementation Series (Building Rockets)

### new operator

::: tip new operator principle

1. Create a brand new object
2. Add the **`__proto__`** attribute to the newly created object and point to the prototype object of the constructor
3. Use the newly created object as this for function calls
4. If the constructor does not return an object type, the newly created object is returned

:::

::: details Mock implementation of new operator
<<< @/fe/coding/code/new.js
:::

- [new operator - MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/new)
- [JavaScript in-depth simulation implementation of new](https://github.com/mqyqingfeng/Blog/issues/13)

### instanceof operator

::: tip instanceof operator principle
The `instanceof` operator is used to detect whether the `prototype` attribute of the constructor appears on the prototype chain of an instance object

:::

::: details Mock implementation of instanceof operator
<<< @/fe/coding/code/instanceof.js
:::

- [instanceof operator - MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/instanceof)<br>
- [Implementation principle of instanceof operator](https://juejin.cn/post/6844903613584654344#heading-1)

###Object.create()

::: tip Object.create()
The `Object.create()` method creates a new object, using an existing object to provide the `__proto__` of the newly created object.
:::

::: details Mock implementation Object.create()
<<< @/fe/coding/code/object-create.js
:::

[Object.create() —— MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/create)

### Function.prototype.call()

The `call()` method calls a function using a specified `this` value and one or more arguments given individually

::: details ES6 mock implementation Function.prototype.call()
<<< @/fe/coding/code/call.js#es6
:::

::: details ES5 mock implementation Function.prototype.call()
<<< @/fe/coding/code/call.js#es5
:::

- [Function.prototype.call() —— MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/call)
- [JavaScript in-depth simulation implementation of call and apply](https://github.com/mqyqingfeng/Blog/issues/11)

### Function.prototype.apply()

The `apply()` method calls a function with the given value of `this` and arguments provided in the form of an array (or array-like object)

::: details ES6 mock implementation Function.prototype.apply()
<<< @/fe/coding/code/apply.js#es6
:::

::: details ES5 mock implementation Function.prototype.apply()
<<< @/fe/coding/code/apply.js#es5
:::

- [Function.prototype.apply() —— MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)
- [JavaScript in-depth simulation implementation of call and apply](https://github.com/mqyqingfeng/Blog/issues/11)

### Function.prototype.bind()

The `bind()` method creates a new function. When `bind()` is called, `this` of this new function is specified as the first parameter of `bind()`, and the remaining parameters will be used as the new function The parameters are used when calling.

::: details ES6 mock implementation Function.prototype.bind()
<<< @/fe/coding/code/bind.js#es6
:::

::: details ES5 mock implementation Function.prototype.bind()
<<< @/fe/coding/code/bind.js#es5
:::

- [Function.prototype.bind() —— MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)
- Related learning articles
  - [JavaScript in-depth simulation implementation of bind](https://github.com/mqyqingfeng/Blog/issues/12)
  - [From an interview question to "I may have read fake source code"](https://zhuanlan.zhihu.com/p/25379434)
  - [From an interview question to "I may have read fake source code" (2)](https://zhuanlan.zhihu.com/p/25483361)

## Tool method series

### debounce function anti-shake

::: tip function anti-shake
**Function**: If a function is triggered multiple times within a period of time, it will only be executed the last time** <br>
**Principle**: Use the timer to set a timer when the function is executed for the first time. If the timer has been set when it is called again, the previous timer will be cleared and a new timer will be set. When the timer is called, Execute the passed callback function after the processor ends<br>
**Application\*\*: Search the input box to obtain the association results entered by the user
:::

::: details Implement anti-shake function
<<< @/fe/coding/code/debounce.js
:::

### throttle function throttling

::: tip function throttling
**Function**: Function throttling refers to allowing a function to be executed only once within a period of time (for example, once every `3` seconds, then subsequent function calls within `3` seconds after the first call of the function will be ignore) <br>
**Principle**: Use the timestamp to judge, record the timestamp of the last execution, and judge whether the current time is greater than the last execution time + the set interval every time an event is triggered. If so, execute the callback and update the last time. Execution timestamp<br>
**Application**: Reduce the firing frequency of `scroll resize` event

:::

::: details Implement throttling function
<<< @/fe/coding/code/throttle.js
:::
