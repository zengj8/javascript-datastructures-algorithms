function HashTable() {

  let table = [];

  let loseloseHashCode = function (key) {
    let hash = 0;
    for (let i = 0; i < key.length; i ++) {
      hash += key.charCodeAt(i);
    }
    return hash % 37;
  };

  let djb2HashCode = function (key) {
    let hash = 5381;
    for (let i = 0; i < key.length; i ++) {
      hash = hash * 33 + key.charCodeAt(i);
    }
    return hash % 1013;
  };

  let hashCode = function (key) {
    return loseloseHashCode(key);
  };

  this.put = function (key, value) {
    let position = hashCode(key);
    console.log(position + ' - ' + key);
    table[position] = value;
  };

  this.get = function (key) {
    return table[hashCode(key)];
  };

  this.remove = function(key) {
    table[hashCode(key)] = undefined;
  };

  this.print = function () {
    for (let i = 0; i < table.length; ++ i) {
      if (table[i] !== undefined) {
        console.log(i + ": " + table[i]);
      }
    }
  };
}