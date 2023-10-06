/** 基本类型 */
(true).constructor === Boolean            // true
'maomao'.constructor === String           // true
(2021).constructor === Number             // true
Symbol().constructor === Symbol           // true
BigInt(2021).constructor === BigInt       // true

/** 引用类型 */
({}).constructor === Object               // true
([]).constructor === Array                // true

function Person(name) {
  this.name = name
}
Person.prototype.constructor === Person   // true

// 修改原型造成 constructor 丢失
Person.prototype = {}
Person.prototype.constructor === Object   // true
