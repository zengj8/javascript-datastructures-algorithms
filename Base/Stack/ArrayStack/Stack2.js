let _items = Symbol();      // 不可变，可以用作对象的属性

// 私有属性是假的，Object.getOwnPropertyNames()虽然无法获取Symbols属性
// 但是，ES6新增的Object.getOwnPropertySymbols()能去到类里面声明的所有Symbols属性
class Stack2 {

  constructor () {
    this[_items] = [];
  }

  push(element) {
    this[_items].push(element);
  }

  pop() {
    return this[_items].pop();
  }

  peek() {
    return this[_items][this[_items].length - 1];
  }

  isEmpty() {
    return this[_items].length == 0;
  }

  size() {
    return this[_items].length;
  }

  clear() {
    this[_items] = [];
  }

  print() {
    console.log(this.toString());
  }

  toString() {
    return this[_items].toString();
  }
}
