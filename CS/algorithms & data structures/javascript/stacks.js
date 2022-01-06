/**
 * Stacks
 * @param {*} array
 */
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
