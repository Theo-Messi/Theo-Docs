// #region es6
/** ES6 实现 **/
Function.prototype.myApply = function (context, arr) {
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

  // 获取函数调用的返回值
  const result = arr ? context.fn(...arr) : context.fn()

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

console.log(`apply :>> `, get.apply(obj, ['apply']))
console.log(`myApply :>> `, get.myApply(obj, ['myApply']))
// #endregion es6

// #region es5
/** ES5 实现 **/
Function.prototype.myApply = function (context, arr) {
  // 在非严格模式下，传入的 context 为 null 或 undefined 时会自动替换为全局对象
  // 因此在判断时不能使用 context = context || window
  if (context == null) {
    context = window
  }
  // 原始值需要被 Object 包装成对象
  else {
    context = Object(context)
  }

  // 获取调用 apply 的函数
  context.fn = this

  // 获取 fn 函数调用的返回值
  var result
  if (arr) {
    // 获取传入的参数
    var args = []
    for (var i = 0, len = arr.length; i < len; i++) {
      args.push('arr[' + i + ']')
    }

    result = eval('context.fn(' + args + ')')
  }
  // 没有参数直接调用
  else {
    result = context.fn()
  }

  // 删除 fn 函数
  delete context.fn

  // 将 fn 的返回值返回
  return result
}
// #endregion es5
