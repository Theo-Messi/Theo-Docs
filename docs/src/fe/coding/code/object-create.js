function create(proto, properties) {
  // 如果 proto 不是 null 或非原始包装对象，抛出 TypeError 异常
  const type = typeof proto
  if (type !== 'object' && type !== 'function') {
    throw new TypeError('Object prototype may only be an Object or null: ' + proto)
  }

  function F() {}
  // 将 proto 的原型设置为 F 的原型
  F.prototype = proto
  // 创建新对象
  const result = new F()

  // 兼容 null 的处理
  if (proto === null) {
    result.__proto__ = null
    // OR Reflect.setPrototypeOf(result, null)
  }

  // 将 properties 的属性设置到新对象上
  if (properties !== null && properties !== undefined) {
    Object.defineProperties(result, properties)
  }

  return result
}
