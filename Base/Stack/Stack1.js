//*** 基于原型的类，更节省内存，但是无法声明私有属性或方法
//*** items可直接被实例访问
function Stack() {
    this.items = [];
}

Stack.prototype.push = function(element) {
  this.items.push(element);
};

Stack.prototype.pop = function() {
  return this.items.pop();
};

Stack.prototype.peek = function() {
  return this.items[this.items.length - 1];
};

Stack.prototype.isEmpty = function() {
  return this.items.length == 0;
};

Stack.prototype.size = function() {
  return this.items.length;
};

Stack.prototype.clear = function() {
  this.items = [];
};

Stack.prototype.print = function() {
  console.log(this.items.toString());
};

Stack.prototype.toString = function() {
  return this.items.toString();
};
