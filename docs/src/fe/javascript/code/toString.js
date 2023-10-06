const toString = Object.prototype.toString

toString.call(undefined)        // '[object Undefined]'
toString.call(null)             // '[object Null]'
toString.call(true)             // '[object Boolean]'
toString.call('maomao')         // '[object String]'
toString.call(2021)             // '[object Number]'
toString.call(Symbol())         // '[object Symbol]'
toString.call(BigInt(2021))     // '[object BigInt]'

toString.call({})               // '[object Object]'
toString.call([])               // '[object Array]'
toString.call(console.log)      // '[object Function]'
toString.call(new Date())       // '[object Date]'
toString.call(new RegExp())     // '[object RegExp]'
toString.call(new Set())        // '[object Set]'
toString.call(new WeakSet())    // '[object WeakSet]'
toString.call(new Map())        // '[object Map]'
toString.call(new WeakMap())    // '[object WeakMap]'
