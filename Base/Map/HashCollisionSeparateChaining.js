// 分离链接
function HashTableSeparateChaining() {

  let table = [];

  let ValuePair = function(key, value) {
    this.key = key;
    this.value = value;

    this.toString = function() {
      return '[' + this.key + ' - ' + this.value + ']';
    }
  };

  let loseloseHashCode = function (key) {
    let hash = 0;
    for (let i = 0; i < key.length; i ++) {
      hash += key.charCodeAt(i);
    }
    return hash % 37;
  };

  let hashCode = function(key) {
    return loseloseHashCode(key);
  };

  this.put = function(key, value) {
    let position = hashCode(key);
    console.log(position + ' - ' + key);

    if (table[position] == undefined) {
      table[position] = new LinkedList();
    }
    table[position].append(new ValuePair(key, value));
  };

  this.get = function(key) {
    let position = hashCode(key);

    if (table[position] !== undefined  && !table[position].isEmpty()) {

      //iterate linked list to find key/value
      let current = table[position].getHead();

      do {
        if (current.element.key === key) {
          return current.element.value;
        }
        current = current.next;
      } while(current);
    }
    return undefined;
  };

  this.remove = function(key) {

    let position = hashCode(key);

    if (table[position] !== undefined) {

      //iterate linked list to find key/value
      let current = table[position].getHead();

      do {
        if (current.element.key === key) {
          table[position].remove(current.element);
          if (table[position].isEmpty()) {
            table[position] = undefined;
          }
          return true;
        }
        current = current.next;
      } while(current);
    }

    return false;
  };

  this.print = function() {
    for (let i = 0; i < table.length; ++ i) {
      if (table[i] !== undefined) {
        console.log(table[i].toString());
      }
    }
  };
}
