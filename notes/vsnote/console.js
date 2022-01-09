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
  return this.array.push(value);
};

// Deletion
Stack.prototype.pop = function () {
  return this.array.pop();
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
              a: pop*4 l=7
              b: pop*5 l=8
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
console.log(queueSearch(queue1, 10));
console.log(queueSearch(queue1, 2));

/**
 * Queue Using Stacks
 * inbox:  [1,2,3,4,5]
 * outbox: [5,4,3,2,1]
 *
 */
function TwoStackQueue() {
  this.inbox = new Stack();
  this.outbox = new Stack();
}

TwoStackQueue.prototype.enqueue = function (val) {
  console.log(this.inbox);
  this.inbox.push(val);
};

TwoStackQueue.prototype.dequeue = function () {
  if (this.outbox.isEmpty()) {
    while (!this.inbox.isEmpty()) {
      console.log("inbox", this.inbox.array);
      this.outbox.array.push(this.inbox.array.pop());
    }
  }
  return this.outbox.pop();
};
var queue2 = new TwoStackQueue();
// queue2.enqueue(3);
// queue2.enqueue(4);
// queue2.enqueue(5);
// queue2.dequeue(5);
// console.log(queue2);

/**
 * Stack Using Stacks
 * inbox:  [1,2,3,4,5]
 * [5,4,3,2,1]
 * dequeue 5 => [5]
 * dequeue 4 => [5,4] ...
 *
 */
function QueueStack() {
  this.inbox = new Queue();
}
QueueStack.prototype.push = function (val) {
  this.inbox.enqueue(val);
};
QueueStack.prototype.pop = function () {
  var size = this.inbox.array.length - 1;
  var counter = 0;
  var bufferQueue = new Queue();

  while (++counter <= size) {
    bufferQueue.enqueue(this.inbox.dequeue());
  }

  var popped = this.inbox.dequeue();
  this.inbox = bufferQueue;
  return popped;
};

var stack = new QueueStack();
stack.push(4);
stack.push(5);
stack.push(7);
stack.push(9);
console.log(stack);
console.log(stack.inbox);
console.log(stack.pop());


/**
 * DESIGN A CASHIER CLASS THAT TAKES IN A CUSTOMER OBJECT AND HANDLES FOOD
 * ORDERING ON A FIRST-COME, FIRST-SERVED BASIS
 */
function Customer(name, order) {
  this.name = name;
  this.order = order;
}

function Cashier() {
  this.customers = new Queue();
}

Cashier.prototype.addOrder = function (customer) {
  this.customers.enqueue(customer);
};

Cashier.prototype.deliverOrder = function () {
  var finishedCustomer = this.customers.dequeue();

  console.log(
    finishedCustomer.name + " your " + finishedCustomer.order + " is ready!"
  );
};

var cashier = new Cashier()
var customer = new Customer("dami", "Burger");
var customer1 = new Customer("sun", "Moon");
cashier.addOrder(customer)
cashier.deliverOrder()


/**
 * Paranthesis Validation Checker using Stack
 */
function isParenthesisValid(validationString) {
  var stack = new Stack();
  for (var i = 0; i < validationString.length; i++) {
    var currentChar = validationString.charAt(i);
    if (currentChar == "(") {
      stack.push(currentChar);
    }else if(currentChar == ")") {
      if (stack.isEmpty()) return false;
      stack.pop();
    }
  }

  return stack.isEmpty();
}


console.log("Valid Parenthesis >>----------->");
console.log(isParenthesisValid("((()))"));
console.log(isParenthesisValid("((())"));
console.log(isParenthesisValid("()))"));
