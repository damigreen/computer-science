
/**
 * Hash Tables
 * 
 */

/**
 * Lineaar probing
 * initArray = [null, null,, null, ...] -> 
 * size = 13
 * (key, value), (7, 'hi')
 * hash = 7%13 = 6
 * put ()
  * hashedIndex = hash(7) = 6
  * keys[hashedIndex] = keys[6] =  7
  * hashedIndex++ = 7
  * hashedIndex = 6
  * newAray {}
      i:   [0,..., 4,    5,    6,    7, ...]
      key: [..., null, null,   7,    null, ...]
      value: [..., null, null, 'hi', null]
 * 
 * 
 * 
 */

function HashTable(size) {
  this.size = size;
  this.keys = this.initArray(size);
  this.values = this.initArray(size);
  this.limit = 0;
}

HashTable.prototype.put = function (key, value) {
  if (this.limit >= this.size) throw "hash table is full";
  var hashedIndex = this.hash(key);

  // Linear probing
  while (this.keys[hashedIndex] != null) {
    hashedIndex++;
    hashedIndex = hashedIndex % this.size;
  }
  this.keys[hashedIndex] = key;
  this.values[hashedIndex] = value;
  this.limit++;
};

HashTable.prototype.get = function (key) {
  var hashedIndex = this.hash(key);
  while (this.keys[hashedIndex] != key) {
    hashedIndex++;
    hashedIndex = hashedIndex % this.size;
  }
  return this.values[hashedIndex];
};

HashTable.prototype.hash = function (key) {
  // Check if init
  if (!Number.isInteger(key)) throw "must be init";
  return key % this.size;
};

HashTable.prototype.initArray = function (size) {
  var array = [];
  for (var i = 0; i < size; i++) {
    array.push(null);
  }
  return array;
};

var exampletable = new HashTable(13);
// exampletable.put(85, "happy");
// exampletable.put(72, "forty");
// exampletable.put(98, "sad");
// exampletable.put(7, "hi");
// // console.log(exampletable)
// console.log(exampletable.get(7))
// console.log("--------------------->")

/**
 * Quadratic probing
 */
HashTable.prototype.put = function (key, value) {
  if (this.limit >= this.size) throw 'hash table full';

  var hashedIndex = this.hash(key), squareIndex = 1;

  // quadratic probing
  while (this.keys[hashedIndex] != null) {
    hashedIndex += Math.pow(squareIndex, 2);
    squareIndex++;
  }

  this.keys[hashedIndex] = key;
  this.values[hashedIndex] = value;
  this.limit++;
}

HashTable.get = function (key) {
  this.hashedIndex = this.hash(key), squareIndex = 1;
  if (this.keys[hashedIndex] != key) {
    this.hashedIndex = Math.pow(squareIndex, 2);
    squareIndex++;
  }
  return this.values[hashedIndex];
}
exampletable = new HashTable(13);
exampletable.put(85, "happy");
exampletable.put(72, "forty");
exampletable.put(98, "sad");
exampletable.put(7, "hi");
console.log(exampletable)
// console.log(exampletable.get(7))
// console.log("--------------------->")
