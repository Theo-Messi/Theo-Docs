# type of data

::: tip Tips
Read ["JavaScript Advanced Programming (4th Edition)"](https://www.ituring.com.cn/book/2472) and the summary summarized in the articles of various experts. **If you have any objection, please press your Understand first**
:::

Data types in `JavaScript` are divided into basic data types and reference data types

## basic type

> Note: Basic data types can also be called primitive data types

There are a total of 7 basic types of `JavaScript` under the `ES2020` standard:

- **`undefined`** undefined
- **`null`** Null pointer
- **`boolean`** Boolean value
- **`string`** string
- **`number`** numerical value
- **`symbol`** Unique value ([Introduced in ES6](https://es6.ruanyifeng.com/#docs/symbol))
- **`bigint`** Big integer ([Introduced in ES2020](https://es6.ruanyifeng.com/#docs/number#BigInt-%E6%95%B0%E6%8D%AE%E7%B1% BB%E5%9E%8B))

::: tip summary of basic types

-Basic types only store primitive values and do not have properties and methods

- Basic types are stored in **stack memory**
- Variables that hold basic types are accessed by value (by value), and the actual value stored in the variable is operated.
- When copying a basic type, a second copy of the value is created (used independently, without interfering with each other)

:::

::: tip Why properties and methods don't exist for primitive values, but 'hello world'.toString() works correctly
In order to facilitate the operation of primitive values `ECMAScript` provides 3 special reference types: `Boolean` `Number` `String`. Whenever a method or attribute of a primitive value is used, a corresponding primitive wrapper type will be created in the background. Object, and then destroy this packaging object after execution.
:::

```js
// Give me an example 🌰
const str = 'hello world'
str.toString()
str.length

/**
 * When executing the above code, `JavaScript` will execute the following 3 steps
 * 1. Create an instance of String type
 * 2. Call specific methods or properties on the instance
 * 3. Destroy the instance just created
 */
const str = 'hello world'
new String(str).toString()
new String(str).length
```

## Reference type

In `JavaScript`, except for basic types, other types are reference types. Common reference types are as follows

- **`Object`** object
- **`Array`** Array
- **`Function`** function
- **`Date`** date and time
- **`RegExp`** Regular expression
- **`Set`** is similar to an array but the values of the members are unique ([Introduced in ES6](https://es6.ruanyifeng.com/#docs/set-map#Set))
- **`WeakSet`** ([Introduced in ES6](https://es6.ruanyifeng.com/#docs/set-map#WeakSet))
- **`Map`** is similar to an object which is also a collection of key-value pairs ([Introduced in ES6](https://es6.ruanyifeng.com/#docs/set-map#Map))
- **`WeakMap`** ([Introduced in ES6](https://es6.ruanyifeng.com/#docs/set-map#WeakMap))

::: tip reference type summary

- Because `JavaScript` does not allow direct access to memory locations (the memory space where the object is located cannot be directly manipulated), the reference type stores the address (memory pointer) in **stack memory**, and the data in the reference type (method or attributes) are stored in **heap memory**
- Variables holding reference types are accessed by reference (by reference). In fact, the reference to the object is operated instead of the actual object itself.
- When copying reference types, only the memory pointer will be copied

:::

::: tip stack memory and heap memory

- **Stack memory**
  - Store basic data types and heap memory addresses
  - is a continuous memory space
- **Heap memory**
  - Store reference data types and variables in closures
  - Not a contiguous memory space
- To learn more, please click [Stack memory and heap memory in JS](https://github.com/chenqf/frontEndBlog/issues/9)

:::

## Type judgment

Five common judgment methods

- **`typeof`**
- **`instanceof`**
- **`constructor`**
- **`Array.isArray()`**
- **`Object.prototype.toString`**

### typeof

- Basic types except **`null`** can be accurately judged

<<< @/fe/javascript/code/typeof.js#primitive

::: tip why typeof null === 'object'
In the original implementation of `JavaScript`, values in `JavaScript` were represented by a tag representing the type and the actual data value. The object's type tag is `0`. Since `null` represents a null pointer (the value is `0x00` on most platforms), the type label of `null` is `0`, and `typeof null` therefore returns `"object"` - [MDN] (https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/typeof#typeof_null)
:::

- Reference types except **`function`** return `object`

<<< @/fe/javascript/code/typeof.js#object{3}

### instanceof

[`instanceof`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/instanceof) Used to detect whether the `prototype` attribute of the constructor exists in the prototype chain of the instance object superior

<<< @/fe/javascript/code/instanceof.js

::: tip instanceof Summary

- `instanceof` cannot determine the basic type. For reference types, it can only determine the affiliation on the prototype chain.
- `instanceof` is not completely reliable because the constructor's `prototype` property may be modified
  - How to modify the prototype
    - Use [`Reflect.setPrototypeOf()`](https://es6.ruanyifeng.com/?search=%E5%9F%BA%E6%9C%AC%E7%B1%BB%E5 provided by `ES6` %9E%8B&x=0&y=0#docs/reflect#Reflect-setPrototypeOfobj-newProto) method
    - With the help of non-standard `__proto__` pseudo-attributes

:::

### constructor

An instance object can access its constructor through the [`constructor`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor) attribute

<<< @/fe/javascript/code/constructor.js

::: tip constructor summary

- `constructor` can determine all basic types and reference types except `undefined` and `null` (`undefined` and `null` do not have constructors)
- `constructor` is not completely reliable because the `prototype` attribute of the constructor may be modified, resulting in inaccurate pointing of the `constructor` attribute

:::

### Array.isArray()

[`Array.isArray()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray) Used to determine whether a value is an array (`Array` )

<<< @/fe/javascript/code/isArray.js

### Object.prototype.toString

- Every object has a [`toString()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) method when the object is represented Automatically called when a text value is used, or when an object is referenced in the expected string format. The `toString()` method is inherited by every `Object` object by default. If this method is not overridden in a custom object `toString()` returns `"[object type]"` where `type` is the type of the object
- In order for each object to be detected through `Object.prototype.toString()`, it needs to be called in the form of `Function.prototype.call()` or `Function.prototype.apply()`

<<< @/fe/javascript/code/toString.js

The approximate execution process of the `toString` method under [`ECMAScript 5`](https://es5.github.io/#x15.2.4.2)

1. If `this` is `undefined` return `[object Undefined]`
2. If `this` is `null` return `[object Null]`
3. Let `O` be the result of `ToObject(this)`
4. Let `class` be the value of `O`’s internal attribute `[[Class]]`
5. Return a string consisting of three parts: **`"[object "`** **`class`** **`"]"`**

::: warning Notes

Different `ECMAScript` versions have different specifications for the `toString` method.

[Principle of Object.prototype.toString method](https://juejin.cn/post/6972878737582850062#heading-27)

:::
