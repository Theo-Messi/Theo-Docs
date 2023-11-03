function debounce(fn, wait) {
  // 通过闭包缓存定时器 id
  let timer = null
  return function (...args) {
    // 如果定时器已经存在，清除定时器
    if (timer) {
      clearTimeout(timer)
      timer = null
    }
    // 设定定时器，定时器结束后执行传入的回调函数 fn
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, wait)
  }
}
