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

var cashier = new Cashier();
var customer = new Customer("dami", "Burger");
var customer1 = new Customer("sun", "Moon");
cashier.addOrder(customer);
cashier.deliverOrder();

/**
 * Paranthesis Validation Checker using Stack
 */
function isParenthesisValid(validationString) {
  var stack = new Stack();
  for (var i = 0; i < validationString.length; i++) {
    var currentChar = validationString.charAt(i);
    if (currentChar == "(") {
      stack.push(currentChar);
    } else if (currentChar == ")") {
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

/**
 * Sorted Stack
 * [7,4,2,9]
 * ms: [7,4,2,9]
 * ss: [] [9] [9,2,4,7]
 * temp = ms.pop() = 9->2
 * ss.peek() = null->9
 * while ss.peek() < temp
 * ss.push(temp)
 *
 */
function SortableStack(size) {
  this.size = size;

  this.mainStack = new Stack();
  this.sortedStack = new Stack();

  for (var i = 0; i < size; i++) {
    this.mainStack.push(Math.floor(Math.random() * 11));
  }
}

// [1,2,4] -> [1,2] -> [1]
// [] -> [4] -> [4,2]
// [1,4,2] -> [1,4] -> [1,2]
// [] -> [2] -> [4]
// null <
//
SortableStack.prototype.sortStackDescending = function () {
  while (!this.mainStack.isEmpty()) {
    var temp = this.mainStack.pop();
    var peek = this.sortedStack.peek();
    while (!this.sortedStack.isEmpty() && peek < temp) {
      this.mainStack.push(this.sortedStack.pop());
    }
    this.sortedStack.push(temp);
  }
};

console.log("Sorted Stack >>----------->");
var ss = new SortableStack(10);
ss.sortStackDescending();
console.log(ss.mainStack);
console.log(ss.sortedStack);

const xy = [
  [1, 0, 5],
  [1, 1, 7],
  [1, 0, 3],
  [2, 1, 0],
  [2, 1, 1],
];

function dynamicArray(n, queries) {
  var arr = [];
  for (var i = 0; i < n; i++) {
    arr.push(new Array());
  }

  let lastAnswer = 0;
  let result = [];
  for (var i = 0; i < queries.length; i++) {
    var index = (queries[i][1] ^ lastAnswer) % n;
    if (queries[i][0] == 1) {
      arr[index].push(queries[i][2]);
    } else {
      let size = arr[index].length;
      lastAnswer = arr[index][queries[i][2] % size];
      result.push(lastAnswer);
    }
  }

  return result;
}
console.log(dynamicArray(2, xy));

/**
 * Rotate Left
 */
function rotateLeft(d, arr) {
  // [1,2,3,4,5]
  /* 

  arr = [1,2,3,4,5]
  d=2
  arrNew = [3,4,5,1,2]
  length = 5;
  [1,2,3,4,5]
   0 1 2 3 4
  [1,2,3,4,5]
  
  0->4->3  1->0->4   2->1->0 ...
    l-d    l-d       l-d
    5-2=(3)  5-2=(3)   5-2=(3)
    3-(0)=3   3+(1)=4  3-(3)=0
      arr[i]   arr[i]    arr[i]
  if i = 0 // beginning index
    i* = length - d


  change index of arr 
   */

  // let arrNew = [];
  // let arrLen = arr.length;
  // for (var i = 0; i < arr.length; i++) {
  //   let indexPrime = arrLen - d;
  //   let newIndex = indexPrime - arr[i];
  //   arr[i] = arr[newIndex];
  // }

  let arrLen = arr.length - 1;
  let j = 0;
  let arrNew = [];
  let newIndex;
  for (var i = 0; i < arr.length; i++) {
    newIndex = i + d;
    /* 
       [1,2,3,4,5,6,7]
        0,1,2,3,4,5,6


       [1,2,3,4,5]
        0,1,3,4,5

        i = 0 i*=0+2=2p
        [3,4]
        i=3
          i*=0
        i=4
          i*=1
        
    */

    if (newIndex > arrLen) {
      newIndex = j;
      arrNew.push(arr[newIndex]);
      j++;
      // break;
      continue;
    }
    arrNew.push(arr[newIndex]);
  }

  return arrNew;
}
// console.log(rotateLeft(2, [1, 2, 3, 5]));

/** Sparse Array
 * strings=["ab", 'ab, 'abc']
 * queries=["ab", 'abc, 'bc']
 */
function sparseArrayJs(strings, queries) {
  var countArray = [];
  for (var j = 0; j < queries.length; j++) {
    var stringCountForQuery = 0;
    for (var i = 0; i < strings.length; i++) {
      if (queries[j] == strings[i]) {
        stringCountForQuery++;
      }
    }
    countArray.push(stringCountForQuery);
  }
  return countArray;
}
console.log(sparseArrayJs(["ab", "ab", "abc"], ["ab", "bc", "abc"]));

function fizzBuzz(n) {
  // Write your code here
  for (var i = 0; i <= n; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log("fizzBuzz");
    } else if (i % 3 == 0) {
      console.log("fizz");
    } else if (i % 5 == 0) {
      console.log("Buzz");
    } else console.log(i);
  }
}
console.log(fizzBuzz(15));

function SinglyLinkedListNode(data) {
  this.data = data;
  this.next = null;
}

function SinglyLinkedList() {
  this.head = null;
  this.size = 0;
  return 0;
}

SinglyLinkedList.prototype.isEmpty = function () {
  return this.size == 0;
};

/**
 * Time complexity O(1)
 */
SinglyLinkedList.prototype.insert = function (value) {
  if (this.head == null) {
    this.head = new SinglyLinkedListNode(value);
  } else {
    var temp = this.head;
    this.head = new SinglyLinkedListNode(value);
    this.head.next = temp;
  }
  this.size++;
};

SinglyLinkedList.prototype.remove = function (value) {
  var currentHead = this.head;
  if (currentHead.data == value) {
    this.head = currentHead.next;
    this.size--;
  } else {
    // [] -> []
    /* 
        [24] -> [4] -> [42] -> [9] -> null
        prev    val

        [24] -> [4] -> [42] -> [9] -> null
        prev    val

        [24] ->*-> [42] -> [9] -> null
        prev    val
     */
    var prev = currentHead;
    while (currentHead.next) {
      if (currentHead.data == value) {
        prev.next = currentHead.next;
        prev = currentHead;
        currentHead = currentHead.next;
        break;
      }
      prev = currentHead;
      currentHead = currentHead.next;
    }
    // if (currentHead.data == value) {
    if (currentHead.data == value) {
      prev.next = null;
    }
    this.size--;
  }
};

SinglyLinkedList.prototype.search = function (value) {
  var currentHead = this.head;
  while (currentHead.next) {
    if (currentHead.data == value) {
      return true;
    }
    currentHead = currentHead.next;
  }
  return false;
};

var sll = new SinglyLinkedList();
console.log(sll);
sll.insert(12);
sll.insert(1);
sll.insert(4);
sll.insert(7);
console.log(sll);

function SLLN(data) {
  this.data = data;
  this.next = null;
}
function SLL() {
  this.head = null;
  this.size = 0;
}
SLL.prototype.isEmpty = function () {
  return this.size == 0;
};
SLL.prototype.insert = function (value) {
  if (this.head == null) {
    this.head = new SLLN(value);
  } else {
    var temp = this.head;
    this.head = new SLLN(value);
    this.head.next = temp;
  }
  this.size++;
};
SLL.prototype.remove = function (value) {
  var currentHead = this.head;
  if (currentHead.data == value) {
    this.head = currentHead.next;
    this.size--;
  } else {
    // [] -> []
    /* 
        [24] -> [4] -> [42] -> [9] -> null
        prev    val

        [24] -> [4] -> [42] -> [9] -> null
        prev    val

        [24] ->*-> [42] -> [9] -> null
        prev    val
     */
    var prev = currentHead;
    while (currentHead.next) {
      if (currentHead.data == value) {
        prev.next = currentHead.next;
        prev = currentHead;
        currentHead = currentHead.next;
        break;
      }
      prev = currentHead;
      currentHead = currentHead.next;
    }
    // if (currentHead.data == value) {
    if (currentHead.data == value) {
      prev.next = null;
    }
    this.size--;
  }
};
SLL.prototype.delete = function (value) {
  var currentNode = this.head;
  // Check if current node is value
  // [2]-[3]-[4]
  if (currentNode.data == value) {
    this.head = currentNode.next;
    this.size--;
  } else {
    var prevNode = currentNode;
    while (currentNode.next) {
      if (currentNode.data == value) {
        prevNode.next = currentNode.next;
        prevNode = currentNode;
        currentNode = currentNode.next;
        this.size--;
      }
      prevNode = currentNode;
      currentNode = currentNode.next;
    }
  }
};

SLL.prototype.search = function (value) {
  var currentHead = this.head;
  while (currentHead.next) {
    if (currentHead.data == value) {
      return true;
    }
    currentHead = currentHead.next;
  }
  return false;
};

function SLLN1(data) {
  this.data = data;
  this.next = null;
}

function SLL1() {
  this.head = null;
  this.size = 0;
}

SLL1.prototype.isEmpty = function () {
  return this.size == 0;
};

// []
// [[2]] -> [3] -> [8]
SLL1.prototype.insert = function (value) {
  if (this.head == null) {
    this.head = new SLLN1(value);
  } else {
    var temp = this.head;
    this.head = new SLLN1(value);
    this.head.next = temp;
    this.size++;
  }
};

SLL1.prototype.remove = function (value) {
  var currentHead = this.head;
  if (currentHead.data == value) {
    this.head = currentHead.next;
    this.size--;
  } else {
    // [7]->[[2]]->[6]->[4]->null
    var prev = currentHead; //7
    while (currentHead.next) {
      if (currentHead.data == value) {
        prev = currentHead;
        prev.next = currentHead.next;
        currentHead = currentHead.next; //6
        break;
      }
      prev = currentHead; //7
      currentHead = currentHead.next; //2
    }
    // if it wasnt found in the middle or head
    // must be tail
    // [7]->[2]->[6]->[[4]]->null
    if (currentHead.data == value) {
      console.log(prev);
      prev.next = null; // prev.next = [[4]]: set to null
    }
    this.size--;
  }
};

// sll1 = new SLL1();
var sll1 = new SLL();
console.log("SLL Empty ...", sll1.isEmpty());
sll1.insert(9);
sll1.insert(42);
sll1.insert(42);
sll1.insert(4);
sll1.insert(24);
console.log("Removing ... :(");
// sll1.remove(9);
// sll1.remove(42);
// sll1.remove(4);
// sll1.remove(24);
sll1.delete(4);
console.log(sll1);
console.log("42 present ? ...", sll1.search(42));
console.log("430 present ? ...", sll1.search(430));

function DoublyLinkedListNode(data) {
  this.data = data;
  this.next = null;
  this.prev = null;
}

function DoublyLinkedList() {
  this.head = null;
  this.tail = null;
  this.size = 0;
}

DoublyLinkedList.prototype.isEmpty = function () {
  return this.size == 0;
};

DoublyLinkedList.prototype.insertAtHead = function (value) {
  if (this.head == null) {
    this.head = new DoublyLinkedListNode(value);
    this.tail = this.head;
  } else {
    // [temp] -> <--[3]<-->[4]<-->[5]
    var temp = new DoublyLinkedListNode(value);
    temp.next = this.head;
    this.head.prev = temp;
    this.head = temp;
  }
  this.size++;
};

// [2]<-->[3]<-->[7]<-->  <--[temp(5)]null
// temp.prev will be set to tail
// tail.next will be temp
// tail will now be temp

DoublyLinkedList.prototype.insertAtTail = function (value) {
  if (this.tail == null) {
    this.tail = new DoublyLinkedListNode(value);
    this.head = this.tail;
  } else {
    var temp = new DoublyLinkedListNode(value);
    temp.prev = this.tail;
    this.tail.next = temp;
    this.tail = temp;
  }
  this.size++;
};

DoublyLinkedList.prototype.deleteAtHead = function () {
  // [3]-[5]-[8]
  var toReturn = null;
  if (this.head !== null) {
    toReturn = this.head.data;

    if (this.head == this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
    }
  }
  this.size--;
  return toReturn;
};

DoublyLinkedList.prototype.deleteAtTail = function () {
  var toReturn = null;

  if (this.tail !== null) {
    toReturn = this.tail.data;

    if (this.tail === this.head) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
  }
  this.size--;
  return toReturn;
};

DoublyLinkedList.prototype.findStartingHead = function (value) {
  var currentHead = this.head;
  while (currentHead.next) {
    if (currentHead.data == value) {
      return true;
    }
    currentHead = currentHead.next;
  }
  return false;
};

DoublyLinkedList.prototype.findStartingTail = function (value) {
  var currentTail = this.tail;
  while (currentTail.prev) {
    if (currentTail.data == value) {
      return true;
    }
    currentTail = currentTail.prev;
  }
  return false;
};

function DLLN(data) {
  this.data = data;
  this.next = null;
  this.prev = null;
}

function DLL() {
  this.head = null;
  this.tail = null;
  this.size = 0;
}

// [3]<->[9]<->[7]<->[2]<->[9]
DLL.prototype.insertAtHead = function (value) {
  // null
  if (this.head == null) {
    this.head = new DLLN(value);
    this.tail = this.head;
  } else {
    // [[3]]<->[9]<->[7]<->[2]<->[9]
    var temp = new DLLN(value); // save new node to temp
    temp.next = this.head; // set new node head to former head
    this.head.prev = temp; // set former head prev to new node
    this.head = temp; // set new head to new node
  }
  this.size++;
};

DLL.prototype.insertAtTail = function (value) {
  if (this.tail == null) {
    this.tail = new DLLN(value);
    this.head = this.tail;
  } else {
    var temp = new DLLN(value);
    temp.prev = this.tail;
    this.tail.next = temp;
    this.tail = temp;
  }
  this.size++;
};

DLL.prototype.deleteAtHead = function (value) {
  var toReturn = null;
  if (this.head !== null) {
    toReturn = this.head.data;

    if (this.tail == this.head) {
      this.head = null;
      this.tail = null;
    } else {
      // [[3]]<->[9]<->[7]<->[2]<->[9]
      //  null<->[9]<->[7]<->[2]<->[9]
      this.head = this.head.next;
      this.head.prev = null;
    }
  }
  this.size--;
  return toReturn;
};

DLL.prototype.deleteAtTail = function (value) {
  var toReturn = null;
  if (this.tail !== null) {
    toReturn = this.tail.data;

    if (this.tail == this.head) {
      this.tail = null;
      this.head = null;
    } else {
      // [9]<->[7]<->[2]<->[9]<->[[3]]
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
  }
  this.size--;
  return toReturn;
};

console.log("**********Doubly Linked List**********");
var dll = new DoublyLinkedList();
// var dll = new DLL();
console.log("is linked list empty?...", dll.isEmpty());
dll.insertAtHead(7);
dll.insertAtHead(9);
dll.insertAtTail(3);
dll.insertAtTail(12);
dll.insertAtHead(0);
dll.insertAtTail(5);
console.log(dll);
dll.deleteAtHead(); // head=9 tail=5
console.log("DLL after deleting at head...");
console.log(dll);
dll.deleteAtTail();
console.log("DLL after deleting at tail...");
console.log(dll); // tail=12 head=9
console.log("Search starting from head...");
console.log(dll.findStartingHead(7));
console.log(dll.findStartingHead(17));
console.log("Search starting from tail...");
console.log(dll.findStartingTail(7));
console.log(dll.findStartingTail(17));

/**
 * Exercises
 */
/**
 * Reverse a Singly Linked List
 * Time complexity is O(n)
 * Space complexity is O(1)
 */
function reverseSinglyLinkedList(sll) {
  var headNode = sll.head; // get the head of the sll
  var prev = null; // set prev to null
  // [24]->[42]->[9]->null
  while (headNode) {
    var temp = headNode.next; // save the next of the head node in temp
    headNode.next = prev; // set the head node next to prev
    prev = headNode; // set prev to head node
    if (!temp) break;
    headNode = temp; // set head node to temp
  }
  return headNode;
}
console.log("**********Reverse Singly Linked List***********");
// console.log(sll1);
// var reverse = reverseSinglyLinkedList(sll1)
// console.log(reverse)

/**
 * Delete Duplicates in a Linked List
 * Time complexity O(n2)
 * Space complexith O(n)
 */
function deleteDuplicateInUnsortedSll(sll) {
  var track = [];
  var temp = sll.head;
  var prev = null;

  while (temp) {
    // [2]->[4]->[2]->[3]->null
    if (track.indexOf(temp.data) >= 0) {
      prev.next = temp.next;
      sll.size--;
    } else {
      track.push(temp.data);
      prev = temp;
    }
    temp = temp.next;
  }
  // console.log(sll)
  return sll;
}
console.log("**********Delete Duplicates in Singly Linked List***********");
// var deleteDupl = deleteDuplicateInUnsortedSll(sll1);
// console.log(deleteDupl);

/**
 * Delete Duplicates in a Linked List Best Hash map
 * Time complexity O(n)
 * Space complexith O(n)
 */
function deleteDuplicateInUnsortedSllBest(sll) {
  var track = {};
  var temp = sll.head;
  var prev = null;

  while (temp) {
    if (track[temp.data]) {
      prev.next = temp.next;
      sll.size--;
    } else {
      track[temp.data] = true;
      prev = temp;
    }
    temp = temp.next;
  }
  return sll;
}
console.log("**********Delete Duplicates in Singly Linked List Best***********");
var deleteDupli = deleteDuplicateInUnsortedSll(sll1);
console.log(deleteDupli);
