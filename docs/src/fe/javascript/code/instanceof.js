/** 基本类型 */
true instanceof Boolean       // false
'maomao' instanceof String    // false
1 instanceof Number           // false

/** 引用类型 */
function Person(name) {
  this.name = name
}

const p1 = new Person('maomao')

p1 instanceof Person          // true
p1 instanceof Object          // true

// 修改原型，使 p1 不再是 Person 的实例
Reflect.setPrototypeOf(p1, Array.prototype)
// OR p1.__proto__ = Array.prototype

p1 instanceof Person          // false
p1 instanceof Array           // true
