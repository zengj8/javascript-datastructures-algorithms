
function Set() {

  let items = {};

  this.add = function(value) {
    if (!this.has(value)) {
      items[value] = value;
      return true;
    }
    return false;
  };

  this.delete = function(value) {
    if (this.has(value)) {
      delete items[value];
      return true;
    }
    return false;
  };

  this.has = function(value) {
    return items.hasOwnProperty(value);
    //return value in items;
  };

  this.clear = function() {
    items = {};
  };

  /**
   * Modern browsers function
   * IE9+, FF4+, Chrome5+, Opera12+, Safari5+
   * @returns {Number}
   */
  this.size = function() {
    return Object.keys(items).length;
  };

  /**
   * cross browser compatibility - legacy browsers
   * for modern browsers use size function
   * @returns {number}
  */
  this.sizeLegacy = function() {
    let count = 0;
    for (let key in items) {
      if (items.hasOwnProperty(key))
        ++count;
    }
    return count;
  };

  /**
   * Modern browsers function
   * IE9+, FF4+, Chrome5+, Opera12+, Safari5+
   * @returns {Array}
   */
  this.values = function(){
    let values = [];
    for (let i=0, keys=Object.keys(items); i<keys.length; i++) {
      values.push(items[keys[i]]);
    }
    return values;
  };

  this.valuesLegacy = function(){
    let values = [];
    for(let key in items) {
      if(items.hasOwnProperty(key)) {
        values.push(items[key]);
      }
    }
    return values;
  };

  this.getItems = function(){
    return items;
  };

  this.union = function(otherSet){
    let unionSet = new Set();

    let values = this.values();
    for (let i=0; i<values.length; i++){
      unionSet.add(values[i]);
    }

    values = otherSet.values();
    for (let i=0; i<values.length; i++){
      unionSet.add(values[i]);
    }

    return unionSet;
  };

  this.intersection = function(otherSet){
    let intersectionSet = new Set();

    let values = this.values();
    for (let i=0; i<values.length; i++){
      if (otherSet.has(values[i])){
        intersectionSet.add(values[i]);
      }
    }

    return intersectionSet;
  };

  this.difference = function(otherSet){
    let differenceSet = new Set();

    let values = this.values();
    for (let i=0; i<values.length; i++){
      if (!otherSet.has(values[i])){
        differenceSet.add(values[i]);
      }
    }

    return differenceSet;
  };

  this.subset = function(otherSet){

    if (this.size() > otherSet.size()){
      return false;
    } else {
      let values = this.values();
      for (let i=0; i<values.length; i++){
        if (!otherSet.has(values[i])){
          return false;
        }
      }
      return true;
    }
  };
}