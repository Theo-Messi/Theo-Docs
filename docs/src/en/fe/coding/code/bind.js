// #region es6
/** ES6 实现 **/
Function.prototype.myBind = function (context, ...args) {
  if (typeof this !== 'function') {
    throw new TypeError('not a function')
  }

  const self = this

  return function F(...fArgs) {
    const params = [...args, ...fArgs]
    // 当作为构造函数时
    if (this instanceof F) {
      return new self(...params)
    }

    // 当作为普通函数时，将函数的 this 指向 context
    return self.apply(context, params)
  }
}
// #endregion es6

// #region es5
/** ES5 实现 **/
Function.prototype.myBind = function (context) {
  if (typeof this !== 'function') {
    throw new Error('not a function')
  }

  // 获取调用 bind 的函数
  var self = this

  // 获取除了 thisArg 外的剩余参数（第二个到最后一个）
  var args = Array.prototype.slice.call(arguments, 1)

  var fNOP = function () {}
  var fBound = function () {
    // 获取返回函数的参数
    var bindArgs = Array.prototype.slice.call(arguments)
    return self.apply(
      // 当作为构造函数时，将绑定函数的 this 实例指向实例
      // 当作为普通函数时，将绑定函数的 this 指向 context
      this instanceof fNOP ? this : context,
      args.concat(bindArgs)
    )
  }

  // 存在原型时，修改返回函数的 prototype 为绑定函数的 prototype，使实例可以继承绑定函数原型中的值
  var prototype = self.prototype
  if (prototype) {
    fNOP.prototype = prototype
  }

  fBound.prototype = new fNOP()
  return fBound
}
// #endregion es5
