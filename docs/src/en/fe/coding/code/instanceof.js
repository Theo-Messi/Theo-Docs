function myInstanceof(left, right) {
  // 取右边构造函数的 prototype 值
  const prototype = right.prototype
  // 取左边实例的 __proto__ 值
  left = left.__proto__

  while (true) {
    // 当左边实例的 __proto__ 为 null 时返回 false
    if (left === null) {
      return false
    }
    // 判断左右两边的原型是否一致
    if (left === prototype) {
      return true
    }
    // 修改 __proto__
    left = left.__proto__
  }
}
