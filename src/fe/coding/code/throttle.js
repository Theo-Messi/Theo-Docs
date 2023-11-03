function throttle(fn, wait) {
  // 通过闭包缓存上一次的调用时间 (默认为 0)
  let lastCallTime = 0
  return function () {
    const now = Date.now()
    // 判断当前调用时间和上次调用时间的差值是否大于 wait
    if (now - lastCallTime >= wait) {
      // 更新调用时间
      lastCallTime = now
      // 执行回调函数
      fn.apply(this, arguments)
    }
  }
}
