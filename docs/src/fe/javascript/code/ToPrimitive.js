const obj1 = {
  toString() {
    console.log('toString')
    return []
  },
  valueOf() {
    console.log('valueOf')
    return 2021
  }
}

const obj2 = {
  toString() {
    console.log('toString')
    return 'maomao'
  },
  valueOf() {
    console.log('valueOf')
    return []
  }
}

/** 显式类型转换 */
Number(obj1)    // valueOf              => 2021
Number(obj2)    // valueOf   toString   => NaN

String(obj1)    // toString  valueOf    => '2021'
String(obj2)    // toString             => 'maomao'

/** 隐式类型转换 */
1 + obj1        // valueOf              => 2022
1 + obj2        // valueOf   toString   => '1maomao'

'str: ' + obj1  // valueOf              => 'str: 2021'
'str: ' + obj2  // valueOf   toString   => 'str: maomao'

