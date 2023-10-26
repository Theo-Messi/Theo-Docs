# ES6 common knowledge

`ECMAScript 6` (abbreviated as `ES6`) is the next generation standard of the `JavaScript` language

`ECMAScript` proposal process

- `Stage 0 - Strawman` (showcase stage)
- `Stage 1 - Proposal` (comment solicitation stage)
- `Stage 2 - Draft` (draft stage)
- `Stage 3 - Candidate` (candidate stage)
- `Stage 4 - Finished` (finalization stage)

As long as a proposal can enter `Stage 2`, it will almost certainly be included in future official standards.

[All current proposals for ECMAScript](https://github.com/tc39/ecma262)

::: tip The difference between ES6 and ES2015
`ES2015` is a year mark, indicating the official version of the `ECMAScript` standard released that year. Its full name is "`ECMAScript 2015` Standard" (abbreviated as `ES2015`)<br>
`ES6` is a historical term and a general term, which means the next generation standard of `JavaScript` after version `5.1`, covering `ES2015, ES2016, ES2017 ES2018`, etc.
:::

## let const

`ES6` has added **`let`** and **`const`** commands for declaring variables. The declared variables are only valid within the block-level scope where they are declared.

::: The difference between tip let const var

- Variables declared with `var` will be promoted to the top of the scope, and there is no variable promotion with `let const`
- Global variables declared with `var` will be mounted on the global object `window`, but `let const` will not
- `var` can declare a variable repeatedly, but `let const` cannot declare it repeatedly
- The scope of variables declared by `var` is function scope, and the scope of variables declared by `let const` is block-level scope.
- `const` declares a read-only constant. Once the value of the constant is declared, it cannot be changed (the variable must be initialized)
  -Basic types guarantee immutable values
  - Reference types ensure that memory pointers are immutable

:::

### Variable promotion

```js
console.log(a) // output undefined
console.log(b) // Error report
console.log(c) // Error report

var a = 'var'
let b = 'let'
const c = 'const'
```

[Why don't variable promotions exist for let and const? - Zhihu](https://www.zhihu.com/question/535442142/answer/2510328090)

### Mount to global object

```js
var a = 'var'
let b = 'let'
const c = 'const'

console.log(window.a) //output var
console.log(window.b) // Output undefined
console.log(window.c) // Output undefined
```

### Repeat statement

```js
var a = 'var'
var a
console.log(a) //output var

let b = 'let'
let b // report error
```

### Scope scope

```js
function fn() {
  if (true) {
    var a = 'var'
    let b = 'let'

    console.log(a) //output var
    console.log(b) // output let
  }

  console.log(a) //output var
  console.log(b) // Error report
}

fn()
```

### const constant definition

```js
const NAME = 'maomao'
NAME = 'maomao1996' // Error report
```

## Template string

Template string (template string) is an enhanced version of string, marked with backtick (**`**). It can be treated as an ordinary string, define a multi-line string, or embed variables, function calls, and expressions in the string

```js
let name = 'maomao'
let age = 18

/* ES5 concatenating strings */
let es5Str =
  'My name is: ' + name + ', and my age is: ' + (age + 1) + 'years old'

/* ES6 template string */
let es6Str = `My name is: ${name}, my age is: ${age + 1} years`
```

## Destructuring assignment

### Destructuring object

```js
const obj = {
  name: 'maomao',
  age: 18
}

// ES5 writing method
const name = obj.name
const age = obj.age

/* ES6 destructuring writing method */
const { name, age } = obj
// Rename
const { name: myName } = obj

/* Specify default value */
const { x = 1, y = 2 } = { y: null }
console.log(x) // 1
console.log(y) // null
```

### Destructuring array

```js
const arr = ['maomao', 18]

/* ES5 writing */
const name = arr[0]
const age = arr[1]

/* ES6 destructuring writing method */
const [name, age] = arr
const { 0: name, 1: age } = arr

/* Specify default value */
const [x = 1] = []
const [y = 2] = [undefined]
console.log(x) // 1
console.log(y) // 2

const [z = 3] = [null]
console.log(z) // null
```

### Deconstruct string

Strings can also be destructured and assigned because the string is converted into an array-like object.

```js
const [a, b, c] = 'maomao'
console.log(a) // m
console.log(b) // a
console.log(c) // o

/* Deconstruct length property */
const { length } = 'maomao'
console.log(length) // 6
```

::: tip Notes on destructuring assignment

- When deconstructing arrays and strings, the value of a variable is determined by its position.
- When deconstructing an object, the variable must have the same name as the attribute to get the correct value.
- If the corresponding value is not found for the variable, the extra variable will be assigned the value `undefined`
- When specifying a default value, only the attribute value strictly equal to `undefined` will take effect
- Arrays are essentially special objects, so the object properties of arrays can be deconstructed
- When deconstructing numeric and Boolean values, they will be converted into objects through their corresponding packaging functions and then deconstructed.
- `undefined` and `null` cannot be converted to objects, and an error will be reported during destructuring

```js
const { toString } = 123
toString === Number.prototype.toString // true

const { toString } = true
toString === Boolean.prototype.toString // true

const { x } = undefined // TypeError
const { y } = null // TypeError
```

:::

## Extension of function

### Parameter default value

```js
/* ES5 */
function add(x, y) {
  // When the Boolean value corresponding to parameter y is false, this assignment has no effect
  y = y || 1
  console.log(x + y)
}
add(10) // 11
add(10, 2) // 12
add(10, 0) // 11

/* ES6 */
function add(x, y = 1) {
  console.log(x + y)
}
add(10) // 11
add(10, 2) // 12
add(10, 0) // 10
```

::: tip Default value of function parameter

- Parameter variables are declared by default and cannot be declared again using `let` or `const`, otherwise an error will be reported
- When using parameter default values, the function cannot have parameters with the same name.
- The position of the parameter default value should be the last parameter of the function

:::

### Remaining parameters (rest parameters)

`ES6` introduces the `rest` parameter (in the form of `...variable name`) to obtain the remaining parameters of the function (can replace the `arguments` object)

```js
function log(name, ...params) {
  console.log(name, params)
}

log('maomao', 1, 2) // maomao [1, 2]
log('maomao', 1, 2, 3) // maomao [1, 2, 3]
```

::: tip remaining parameters (rest parameters)

- The `rest` parameter is a real array, and array-specific methods can be used.
- There cannot be any other parameters after the `rest` parameter, otherwise an error will be reported
- The `length` attribute of the function, excluding the `rest` parameter

:::

### Arrow function

`ES6` allows the use of **arrow** (`=>`) to define functions

```js
// Use parentheses to represent the parameter part when no parameters are required
const fn = () => {}
// Equivalent to
const fn = function () {}

// When the function body only has return
const fn = (value) => value
// Equivalent to
const fn = function (value) {
  return value
}
```

::: tip The difference between arrow functions and ordinary functions

- `this`
  - Ordinary functions
    - `this` points to dynamically (depending on how the function is called)
    - You can use `call apply bind` to change what `this` points to
  - Arrow functions
    - `this` points to a fixed point, pointing to `this` in the upper scope when it is defined (it does not have its own `this`)
    - `call apply bind` cannot change what `this` points to in an arrow function (context values are always parsed lexically)
    - `this` in the global scope points to the global object
- Arrow functions cannot be used as constructors (the `new` operator cannot be used, otherwise an error will be reported)
- `arguments super new.target` cannot be used in the function body of an arrow function
- Arrow functions cannot use the yield command (cannot be used as `Generator` function)
- When using arrow functions in `class`, `this` will be bound to the class instance

:::

::: warning Notes (arrow functions should not be used in the following situations)

- When defining an object method and including `this` inside the method
- When defining a prototype method and including `this` inside the method
- When dynamic `this` is required

:::

[Use `babel` to compile the arrow function code to view the direction of `this`](https://www.babeljs.cn/repl#?browsers=defaults%2C%20not%20ie%2011%2C%20not%20ie_mob%2011&build= &builtIns=false&corejs=3.6&spec=false&loose
