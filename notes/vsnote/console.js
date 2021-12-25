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

// var exampletable = new HashTable(13);
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
  if (this.limit >= this.size) throw "hash table full";

  var hashedIndex = this.hash(key),
    squareIndex = 1;

  // quadratic probing
  while (this.keys[hashedIndex] != null) {
    hashedIndex += Math.pow(squareIndex, 2);
    squareIndex++;
  }

  this.keys[hashedIndex] = key;
  this.values[hashedIndex] = value;
  this.limit++;
};

HashTable.prototype.get = function (key) {
  (this.hashedIndex = this.hash(key)), (squareIndex = 1);
  if (this.keys[hashedIndex] != key) {
    this.hashedIndex = Math.pow(squareIndex, 2);
    squareIndex++;
  }
  return this.values[hashedIndex];
};
// exampletable = new HashTable(13);
// exampletable.put(85, "happy");
// exampletable.put(72, "forty");
// exampletable.put(98, "sad");
// exampletable.put(7, "hi");
// console.log(exampletable);
// // console.log(exampletable.get(7))
// // console.log("--------------------->")

HashTable.prototype.put = function (key, value) {
  if (this.limit >= this.size) throw "hash table full";

  var hashedIndex = this.hash(key);
  console.log("Reharshing--------");
  console.log(hashedIndex);

  while (this.keys[hashedIndex] != null) {
    hashedIndex++;
    hashedIndex = hashedIndex % this.size;
  }

  this.keys[hashedIndex] = key;
  this.values[hashedIndex] = value;
  this.limit++;
};

HashTable.prototype.get = function (key, value) {
  var hashedIndex = this.hash(key);

  while (this.keys[hashedIndex] != key) {
    hashedIndex++;
    hashedIndex = hashedIndex % this.size;
  }
  return this.values[hashedIndex];
};

HashTable.prototype.hash = function (key) {
  if (!Number.isInteger(key)) throw "must be init";
  // reharshing
  console.log("Reharshing--------");
  return this.secondHash(key % this.size);
};

HashTable.prototype.secondHash = function (hashedKey) {
  // hash2(x) = R - (x % R)
  var R = this.size - 2;
  return R - (hashedKey % R);
};

var exampletable = new HashTable(13);
exampletable.put(85, "happy");
exampletable.put(72, "forty");
exampletable.put(98, "sad");
exampletable.put(7, "hi");
console.log(exampletable);
// console.log(exampletable.get(7))
// console.log("--------------------->")

function Stack(array) {
  this.array = [];
  if (array) this.array = array;
}

Stack.prototype.getBuffer = function () {
  return this.array.slice();
};

Stack.prototype.isEmpty = function () {
  return this.array.length == 0;
};

// Peek
Stack.prototype.peek = function () {
  return this.array[this.array.length - 1];
};

// Insertion
Stack.prototype.push = function (value) {
  this.array.push(value);
};

// Deletion
Stack.prototype.pop = function () {
  this.array.pop();
};

// Access
function stackAccessNthTopNode(stack, n) {
  var bufferArray = stack.getBuffer();
  if (n <= 0) throw "error";

  var bufferStack = new Stack(bufferArray);

  while (--n !== 0) {
    bufferStack.pop();
  }
  return bufferStack.pop();
}

//Instance of the stack class
var stack1 = new Stack([2, 3, 4, 5]);
stack1.push(10);
stack1.push(12);
console.log(stack1.array);
stack1.pop();
stack1.pop();
console.log(stack1.array);
stack1.push(12);
stack1.pop();
stack1.push(12);
console.log(stack1.peek());
console.log(stack1.array);
console.log(stackAccessNthTopNode(stack1, 2));
