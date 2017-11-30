//*** 基于原型的类，更节省内存，但是无法声明私有属性或方法
//*** items可直接被实例访问
class Stack {

  constructor () {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length == 0;
  }

  size() {
    return this.items.length;
  }

  clear() {
    this.items = [];
  }

  print() {
    console.log(this.toString());
  }

  toString() {
    return this.items.toString();
  }
}
