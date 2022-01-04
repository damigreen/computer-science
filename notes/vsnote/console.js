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
// console.log(exampletable);
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

/**
 * Access
          {
                   7:9
            6:2,   6:2,
            5:9,   5:9,
            4:4,   4:4,
            3:7,   3:7,
            2:10,  2:10,
            1:1,   1:1,
            0:8    0:8 

            n = 3
              a: pop*4   l=7
              b: pop*5   l=8
          }
 */
function stackAccessNthTopNode(stack, n) {
  if (n <= 0) throw "error";

  var bufferArray = stack.getBuffer();
  var bufferStack = new Stack(bufferArray);

  // pop elements while thery are not equal to zero
  while (--n !== 0) {
    bufferStack.pop();
  }

  // do a last pop when n=0 and return the element (obviously)
  return bufferStack.array.pop();
}
var stack2 = new Stack();
stack2.push(1);
stack2.push(2);
stack2.push(3);
// const iidn = stackAccessNthTopNode(stack2, 2); // 2
// console.log(iidn);
// //Instance of the stack class
// var stack1 = new Stack([2, 3, 4, 5]);
var stack1 = new Stack([8, 1, 10, 7, 4, 9, 2]);
// stack1.push(10);
// stack1.push(12);
// console.log(stack1.array);
// stack1.pop();
// console.log(stack1.array);
// stack1.push(12);
// stack1.pop();
// stack1.push(12);
// console.log(stack1.peek());
// console.log(stack1.array);
// console.log(stackAccessNthTopNode(stack1, 5));
// console.log([1,2,3,4,5].pop())

/**
 * Search
 *
 */
function stackSearch(stack, element) {
  var bufferArray = stack.getBuffer();
  var bufferStack = new Stack(bufferArray);
  while (bufferStack.array.length > 0) {
    if (bufferStack.array.pop() == element) {
      return true;
    }
  }
  return false;
}
// console.log(stackSearch(stack1, 9))
// console.log(stackSearch(stack1, 1))
// console.log(stackSearch(stack1, 0))
// console.log(stackSearch(stack1, 3))

/**
 * Queues
 */
function Queue(array) {
  this.array = [];
  if (array) this.array = array;
}

Queue.prototype.getBuffer = function () {
  return this.array.slice();
};

Queue.prototype.isEmpty = function () {
  return this.array.length == 0;
};

/**
 * Peek
 */
Queue.prototype.peek = function () {
  return this.array[0];
};

// Insertion
// O(1)
Queue.prototype.enqueue = function (value) {
  return this.array.push(value);
};

// Deletion
// O(n)
Queue.prototype.dequeue = function () {
  return this.array.shift();
};

// Access
// O(n)
function queueAccessNthTopNode(queue, n) {
  var bufferArray = queue.getBuffer();
  if (n <= 0) throw "error";

  var bufferQueue = new Queue(bufferArray);

  while (--n !== 0) {
    bufferQueue.dequeue();
  }
  return bufferQueue.dequeue();
}

var queue1 = new Queue([3, 4, 5, 0, 9]);
queue1.enqueue(8);
queue1.enqueue(9);
queue1.enqueue(10);
// console.log(queue1)
queue1.dequeue();
queue1.dequeue();
console.log(queue1);
console.log(queueAccessNthTopNode(queue1, 1)); // 3

/**
 * Search
 * O(n)
 */
function queueSearch(queue, element) {
  var bufferArray = queue.getBuffer();

  var bufferQueue = new Queue(bufferArray);

  while (!bufferQueue.isEmpty()) {
    if (bufferQueue.dequeue() == element) return true;
  }
  return false;
}
// console.log(queueSearch(queue1, 10))
// console.log(queueSearch(queue1, 2))

/**
 * Dynamic Array
 * Query: 1 x y
 * let idx = ((x (+) lastAnswer) % n)
 * append integer y to idx
 * Query: 2 x y
 * let idx = ((x (+) lastAnswer) % n)
 * assign the value arr[idx][y % size(arr[idx])] to lastAnswer
 * store tne new value of lastAnswer to an answer array
 *
 */
function dynamicArray(arr) {
  let lastAnswer = 0;
  // let idx =
}
