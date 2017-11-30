//*** 声明了一个私有的items变量，只能被Stack类访问。
//*** 但是每个类的实例方法不共享
function Stack() {

  let items = [];

  this.push = function(element){
    items.push(element);
  };

  this.pop = function(){
    return items.pop();
  };

  this.peek = function(){
    return items[items.length - 1];
  };

  this.isEmpty = function(){
    return items.length === 0;
  };

  this.size = function() {
    return items.length;
  };

  this.clear = function() {
    items = [];
  };

  this.print = function() {
    console.log(items.toString());
  };

  this.toString = function() {
    return items.toString();
  };
}
