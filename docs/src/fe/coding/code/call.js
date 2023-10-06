// #region es6
/** ES6 实现 **/
Function.prototype.myCall = function (context, ...args) {
  // 在非严格模式下，传入的 context 为 null 或 undefined 时会自动替换为全局对象
  // 因此在判断时不能使用 context = context || window
  if (context == null) {
    context = window
  }
  // 原始值需要被 Object 包装成对象
  else {
    context = Object(context)
  }

  context.fn = this

  // 获取 fn 函数调用的返回值
  const result = context.fn(...args)

  delete context.fn

  return result
}

function get(params) {
  console.log(this, params)

  return '这是返回值'
}

const obj = {
  name: 'maomao',
  age: 18
}

console.log(`call :>> `, get.call(obj, 'call'))
console.log(`myCall :>> `, get.myCall(obj, 'myCall'))
// #endregion es6

// #region es5
/** ES5 实现 **/
Function.prototype.myCall = function (context) {
  // 在非严格模式下，传入的 context 为 null 或 undefined 时会自动替换为全局对象
  // 因此在判断时不能使用 context = context || window
  if (context == null) {
    context = window
  }
  // 原始值需要被 Object 包装成对象
  else {
    context = Object(context)
  }

  // 获取调用 call 的函数
  context.fn = this

  // 获取传入的参数
  var args = []
  // arguments 是类数组对象，可以使用 for 循环
  for (var i = 1, len = arguments.length; i < len; i++) {
    args.push('arguments[' + i + ']')
  }

  /**
   * 获取 fn 函数调用的返回值
   * 此时 args 为 ['arguments[1]', 'arguments[2]', 'arguments[3]']
   * 但在执行时 args 会自动调用 Array.toString() 转化为 context.fn(arguments[1], arguments[2], arguments[3])
   **/
  var result = eval('context.fn(' + args + ')')

  // 删除 fn 函数
  delete context.fn

  // 将 fn 函数的返回值返回
  return result
}
// #endregion es5
