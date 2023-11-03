function myNew() {
  // 获取构造函数
  const Constructor = [].shift.call(arguments)

  // 创建空对象并设置原型
  const obj = Object.create(Constructor.prototype)

  // 绑定 this 并执行构造函数
  const result = Constructor.apply(obj, arguments)

  // 返回构造函数显示返回的值或新对象
  const type = typeof result
  return result && (type === 'object' || type === 'function') ? result : obj
}
