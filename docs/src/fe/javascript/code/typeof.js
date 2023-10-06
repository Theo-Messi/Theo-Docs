// #region primitive
typeof undefined        // 'undefined'
typeof null             // 'object'
typeof true             // 'boolean'
typeof 'maomao'         // 'string'
typeof 2021             // 'number'
typeof Symbol()         // 'symbol'
typeof BigInt(2021)     // 'bigint'
// #endregion primitive

// #region object
typeof {}               // 'object'
typeof []               // 'object'
typeof console.log      // 'function'
typeof new Date()       // 'object'
typeof new RegExp()     // 'object'
typeof new Set()        // 'object'
typeof new WeakSet()    // 'object'
typeof new Map()        // 'object'
typeof new WeakMap()    // 'object'
// #endregion object
