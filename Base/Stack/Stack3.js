// 用闭包将Stack类包起来，这样就只能在这个函数里访问WeekMap，items就成为私有属性
// 但是用这种方法的话，扩展类无法继承私有属性
let Stack3 = (function () {

const items = new WeakMap();

  // 内部属性items是实例的弱引用，所以如果删除实例，它们也就随之消失，不会造成内存泄漏
  class Stack3 {

    constructor () {
      items.set(this, []);
    }

    push(element) {
      let s = items.get(this);
      s.push(element);
    }

    pop() {
      let s = items.get(this);
      let r = s.pop();
      return r;
    }

    peek() {
      let s = items.get(this);
      return s[s.length - 1];
    }

    isEmpty() {
      return items.get(this).length == 0;
    }

    size() {
      let s = items.get(this);
      return s.length;
    }

    clear() {
      items.set(this, []);
    }

    print() {
      console.log(this.toString());
    }

    toString() {
      return items.get(this).toString();
    }
  }

  return Stack3;
})();
