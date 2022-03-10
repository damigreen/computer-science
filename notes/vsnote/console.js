var date = new Date(1644662144000);
var date1 = new Date("2022-02-04T10:35:44.000Z");
var date2 = new Date(1643970944000);
var date3 = new Date("2022-02-04T20:48:00.000Z").getTime();
var date4 = new Date(1628985600000);
console.log(date);
console.log(date1.getTime());
console.log(date2);
console.log(date3);
console.log(date4);

/**
 * Singlly Linked List
 */
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
    var temp = this.head; // save the old head to temp
    this.head = new SLLN(value); // set the head to the new node to insert
    this.head.next = temp; // set the new heads next to temp
  }
  this.size++;
};
SLL.prototype.remove = function (value) {
  var currentHead = this.head; // create a varible to save the current head
  if (currentHead.data == value) {
    // if the head is the node is the value to remove
    this.head = currentHead.next; // set the head to the next of the current head
    this.size--;
  } else {
    // otherwise
    /* 
            [24] -> [4] -> [42] -> [9] -> null
            prev    val
    
            [24] -> [4] -> [42] -> [9] -> null
            prev    val
    
            [24] ->*-> [42] -> [9] -> null
            prev    val
         */
    var prev = currentHead; // create a variable prev to save the current head (keep track of the previous head)
    while (currentHead.next) {
      // iterate over the current head using its next
      if (currentHead.data == value) {
        // if current head data is value to be removed
        prev.next = currentHead.next; // set prev's next to currenthead's next
        prev = currentHead; // set prev to current head (keep track of the previous head)
        currentHead = currentHead.next; // set currenthead to current heads next (skip the current head which is the value to be deleted)
        break; // break out of the loop
      }
      prev = currentHead; // track the previous head
      currentHead = currentHead.next; // increment the head for the while loop
    }
    if (currentHead.data == value) {
      // if value was not found in the middle or head, then it must be tail
      prev.next = null; // set prev value to null
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

SLL.prototype.deleteAtPosition = function (position) {
  var currentNode = this.head;
  if (position == 0) {
    this.head = currentNode.next;
    this.size--;
  } else {
    var prev = currentNode;
    while (position-- != 0) {
      prev = currentNode;
      currentNode = currentNode.next;
    }
    prev.next = currentNode.next;
    currentNode = prev;
    this.size--;
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
    this.size++;
  } else {
    var temp = this.head;
    this.head = new SLLN1(value);
    this.head.next = temp;
    this.size++;
  }
};

SLL.prototype.insertAtTail = function (value) {
  var currentHead = this.head;
  if (this.head == null) {
    this.head = new SLL(value);
    this.size++;
  }
  // null
  // [2]->null
  // [2]->[3]->null
  while (currentHead.next) {
    currentHead = currentHead.next;
  }
  currentHead.next = new SLLN(value);
  this.size++;
};

SLL.prototype.insertNodeAtPosition1 = function (value, position) {
  var currentNode = this.head;
  // insert [7] at 2
  // [2]->[3]->[4]->[8]->null
  //  (size - 1) = position
  var count = 0;
  if (position == 0) {
    this.head = new SLLN(value);
    this.head.next = currentNode;
    count++;
    this.size++;
  }

  var prev = null;
  while (currentNode.next) {
    if (count == position && position != 0) {
      const newNode = new SLLN(value);
      prev.next = newNode;
      newNode.next = currentNode;

      this.size++;
      break;
    }
    count++;
    prev = currentNode;
    currentNode = currentNode.next;
  }
  // currentNode.next = new SLLN(value);
  // this.size++;
};
SLL.prototype.insertNodeAtPosition = function (value, position) {
  var currentNode = this.head;
  // insert [7] at 2
  // [2]->[3]->[4]->[8]->null
  //  (size - 1) = position
  var count = 0;
  if (position == 0) {
    this.head = new SLLN(value);
    this.head.next = currentNode;
    count++;
    this.size++;
  } else {
    var prev = null;
    while (position-- != 0) {
      prev = currentNode;
      currentNode = currentNode.next;
    }
    const newNode = new SLLN(value);
    prev.next = newNode;
    newNode.next = currentNode;

    this.size++;
  }

  // currentNode.next = new SLLN(value);
  // this.size++;
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
var sll2 = new SLL();
var sll3 = new SLL();
var sll4 = new SLL();

console.log("SLL Empty ...", sll1.isEmpty());
sll1.insert(9);
sll2.insert(9);
sll3.insert(9);
sll4.insert(3);

sll1.insert(42);
sll2.insert(42);
sll3.insert(42);
sll4.insert(12);

sll1.insert(4);
sll2.insert(4);
sll3.insert(4);
sll4.insert(7);

sll1.insert(24);
sll2.insert(24);
sll3.insert(24);
sll4.insert(5);

sll1.insertAtTail(7);
sll2.insertAtTail(7);
sll3.insertAtTail(7);

sll1.insertNodeAtPosition(12, 1);
sll2.insertNodeAtPosition(12, 1);
sll3.insertNodeAtPosition(12, 1);

console.log("Removing ... :(");
// sll1.remove(9);
// sll1.remove(42);
// sll1.remove(4);
// sll1.remove(24);

sll1.delete(4);
sll2.delete(4);
sll3.delete(4);

// sll3.insert(3);
sll3.insertAtTail(3);

console.log("**********Singly Linked List**********");

sll1.deleteAtPosition(1);
sll2.deleteAtPosition(1);
sll3.deleteAtPosition(1);

console.log(sll1);
console.log(sll3);
console.log("42 present ? ...", sll1.search(42));
console.log("430 present ? ...", sll1.search(430));

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
  return prev;
}

function reverseSinglyLinkedListHack(sll) {
  const linkedList = sll;
  var currentNode = linkedList.head;
  // Write your code here
  // [2]->[3]->[4]->[5]->null
  // [2]->null
  // [5]->[4]->[3]->[2]->null
  // [5]->[4]->[3]
  var prev = null;
  var dataArray = [currentNode.data];
  // console.log(currentNode.data)
  while (currentNode != null) {
    // 16-12-4-2-5
    // 5-2-4-12-16
    // currentNode = 3-4-5
    var temp = currentNode.next;
    currentNode.next = prev;
    prev = currentNode;
    // if (!temp) break;
    currentNode = temp;
    dataArray.push(prev.data);
    // console.log(prev.data);
    // console.log(currentNode.next)
    // console.log(currentNode.next)
  }
  for (var i = dataArray.length - 1; i > 0; i--) {
    console.log(dataArray[i]);
  }
  return prev;
}

function reverseSinglyLinkedListXOr(sll) {
  var currentNode = sll.head;
  var prev = null;
  while (currentNode) {
    var temp = headNode.next;
    headNode.next = prev;
    prev = headNode;
    headNode = temp;
  }
}

console.log("**********Reverse Singly Linked List***********");
console.log(sll1); // [24]-[42]-[9]-[7]-null
console.log("-------------------------");
// var reverse = reverseSinglyLinkedList(sll1);
// console.log(reverse); // 7-9-42-24
// var reverse = reverseSinglyLinkedListHack(sll1);

/**
 * Compare Data and length of a singly linked list
 * return 1 if they are the same otherwise
 * return 0
 */
function CompareLists(sll1, sll2) {
  var currentHead1 = sll1.head;
  var currentHead2 = sll2.head;
  // 24-42-9-7
  // 24-42-9-7-4
  // 9
  while (currentHead1.next || currentHead2.next) {
    if (currentHead1.data != currentHead2.data) return 0;

    if (
      (!currentHead1.next && currentHead2.next) ||
      (currentHead1.next && !currentHead2.next)
    )
      return 0;

    currentHead1 = currentHead1.next;
    currentHead2 = currentHead2.next;
  }
  return 1;
}
console.log("**********Compare Singly Linked List***********");
// CompareLists(sll1, sll2);
// const compareList = CompareLists(sll1, sll2);
const compareList = CompareLists(sll1, sll3);
console.log(compareList);

// 1-3-7
// 2-9-3
function mergeLists(sll1, sll3) {
  // 24-42-9-7
  // 24-42-9-7-4
  var currentHead1 = sll1.head;
  var currentHead2 = sll3.head;
  var prev1 = currentHead1;
  var prev2 = currentHead2;
  while (currentHead1.next || currentHead2.next) {
    // var currentHead1NodeData = currentHead1.data;
    if (currentHead1.data < currentHead2.data) {
      // 3 < 4
      // 2-9-5
      // 3-4

      // 2-[3]-9-5
      // 3-[4]
      prev1.next = currentHead1.next; // 9-5 -> 9-5
      prev2.next = currentHead2.next; // 4 -> null

      // 2-[9-4] -> 2-3-[9-5]
      currentHead1.next = currentHead2; // 2-[3] -> 2-3-[4]
      // console.log("currentHead1____")
      // console.log(currentHead1.next.next)

      // 2-3-null -> 2-3-4-[null]
      currentHead1.next.next = prev1.next; // 2-3-[9]-5 -> 2-3-4-[9]-5

      // [2]-3-9-5
      currentHead1 = currentHead1.next; // 2-[3]-9-5
      if (currentHead2.next) {
        currentHead2 = currentHead2.next; // 3-[4]
      } else {
        currentHead2 = currentHead1.next.next;
        while (currentHead2.next) {
          if (currentHead2.data < currentHead2.next.data) {
            currentHead2 = currentHead2.next;
          } else {
            var dataValue = currentHead2;
            currentHead2.data = currentHead2.next.data;
            currentHead2.next.data = dataValue;
          }
        }
      }
    } else {
      // 4-9-5
      // 3-6
      var dataValue = currentHead1;
      currentHead1.data = currentHead2.data;

      prev1.next = currentHead1.next; // 9-5

      // 3-4
      currentHead1.next = dataValue;
      // 3-4-[9]-5
      console.log("currentHead1.next");
      console.log(currentHead1.next);
      currentHead1.next.next = prev1.next;
      currentHead1 = currentHead1.next;
      if (currentHead2.next) {
        currentHead2 = currentHead2.next; // 3-[4]
      } else {
        currentHead2 = currentHead1.next.next;
        while (currentHead2.next) {
          if (currentHead2.data < currentHead2.next.data) {
            currentHead2 = currentHead2.next;
          } else {
            var dataValue = currentHead2.data;
            currentHead2.data = currentHead2.next.data;
            currentHead2.next.data = dataValue;
          }
        }
      }
    }
  }
  return head1;
}

var sllA = new SLL();
var sllB = new SLL();
var sllC = new SLL();

// 1-3-7
// 2-3-9
sllA.insert(7);
sllB.insert(9);

sllA.insert(3);
sllB.insert(3);

sllA.insert(1);
sllB.insert(2);

console.log("********merge singly linked list***********");
// mergeLists(sllA, sllB)
// console.log(sllA)

// 1-3-7
// 2-9-3
function mergeList1(sll1, sll2) {
  var head1 = sll1.head;
  var head2 = sll2.head;

  var newNode,
    newHead,
    prev = null;

  while (head1 && head2) {
    // 1-3-7        3-7    1->null
    // 1-2-9-3 ->   2-9-3

    if (head1.data == head2.data) {
      newNode = new SLLN(head1.data);
      head1 = head1.next;
    } else if (head1.data < head2.data) {
      // 2-7-8  2-3-7-8
      // 3-8-null
      newNode = new SLLN(head1.data);
      head1 = head1.next;
    } else if (head1.data > head2.data) {
      newNode = new SLLN(head2.data);
      head2 = head2.next;
    }

    if (newHead == null) {
      newHead = newNode;
      prev = newHead;
    } else {
      prev.next = newNode;
      prev = newNode;
    }

    if (head1 == null) {
      prev.next = head2;
    }

    if (head2 == null) {
      prev.next = head1;
    }
  }

  return newHead;
}

const x = mergeList1(sllA, sllB);
console.log(x);

function getNode(llist, positionFromTail) {
  var currentNode = llist.head;
  var prev = null;
  var count = 0;
  // 1-3-7
  //
  while (currentNode != null) {
    var next = currentNode.next; // 3
    currentNode.next = prev;
    prev = currentNode;
    if (!next) break;
    currentNode = next;
  }

  while (count++ != positionFromTail) {
    prev = prev.next;
  }
  return prev.data;
  // return prev;
}

console.log("**************Get Node**************");
console.log(sllB); // 2 3 9
console.log(sllA); // 1 3 7
var node = getNode(sllA, 0);
console.log(node); // 7-3-1

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
console.log(
  "**********Delete Duplicates in Singly Linked List Best***********"
);
var deleteDupli = deleteDuplicateInUnsortedSll(sll1);
console.log(deleteDupli);

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
// console.log("is linked list empty?...", dll.isEmpty());
// dll.insertAtHead(7);
// dll.insertAtHead(9);
// dll.insertAtTail(3);
// dll.insertAtTail(12);
// dll.insertAtHead(0);
// dll.insertAtTail(5);
// console.log(dll);
// dll.deleteAtHead(); // head=9 tail=5
// console.log("DLL after deleting at head...");
// console.log(dll);
// dll.deleteAtTail();
// console.log("DLL after deleting at tail...");
// console.log(dll); // tail=12 head=9
// console.log("Search starting from head...");
// console.log(dll.findStartingHead(7));
// console.log(dll.findStartingHead(17));
// console.log("Search starting from tail...");
// console.log(dll.findStartingTail(7));
// console.log(dll.findStartingTail(17));
console.log(new Date("01 Feb 2022").getTime());

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const a = new Node("A");
const b = new Node("B");
const c = new Node("C");
const d = new Node("D");

a.next = b;
b.next = c;
c.next = d;

const printLinkedList = (head) => {
  let current = head;
  while (current != null) {
    console.log(current.val);
    current = current.next;
  }
};
const printLinkedListRec = (head) => {
  if (head == null) return;
  console.log(head.val);
  printLinkedListRec(head.next);
};
console.log("print linked list_________");
printLinkedList(a);
console.log("print linked list Recursion_________");
printLinkedListRec(a);

const linkedListValues = (head) => {
  var current = head;
  var values = [];
  while (current != null) {
    values.push(current.val);
    current = current.next;
  }
  return values;
};
const linkedListValuesRec1 = (head) => {
  var values = [];
  // fillValues(head, values);
  const fillValues = (head, values) => {
    if (head == null) return;
    values.push(head.val);
    console.log(values);
    fillValues(head.next, values);
  };
  fillValues(head, values);
  // linkedListValuesRec1(head.next);
};
const linkedListValuesRec = (head) => {
  var values = [];
  fillValuesRec(head, values);
};
const fillValuesRec = (head, values) => {
  if (head == null) return;
  values.push(head.val);
  console.log(values);
  fillValuesRec(head.next, values);
};
console.log("Linked list values_________");
// linkedListValues(a);
console.log("Linked list values Rec _________");
linkedListValuesRec1(a);
// linkedListValuesRec(a);

const sumList = (head) => {
  // let sum = 0;
  let sum = "";
  let current = head;
  while (current) {
    sum += current.val;
    current = current.next;
  }
  console.log(sum);
  return sum;
};
const sumListRec = (head) => {
  if (head == null) return 0;
  let result = head.val + sumListRec(head.next);
  return result;
};
console.log("Sum list _________");
sumList(a);
var sumListRecA = sumListRec(a);
console.log(sumListRec(a));

const linkedListFind = (head, target) => {
  let current = head;
  while (current != null) {
    if (current.data == target) {
      return true;
    }
    current = current.next;
  }
  return false;
};

const linkedListFindRec = (head, target) => {
  if (head == null) return false;
  if (head.data == target) return true;
  return linkedListFindRec(head.next, target);
};
console.log("Find Linked list _________");
console.log(sll1);
console.log(linkedListFind(sll1.head, 42));
console.log(linkedListFindRec(sll1.head, 7));
console.log(linkedListFindRec(sll1.head, 34));

const getNodeValue = (head, index) => {
  let current = head;
  let count = 0;
  while (current != null) {
    if (count == index) return current.data;
    current = current.next;
    count++;
  }
  return null;
};

const getNodeValueRec = (head, index) => {
  if (head == null) return null;
  if (index == 0) return head.data;
  return getNodeValueRec(head.next, index - 1);
};
console.log("Get Nodes _________");
console.log(getNodeValue(sll1.head, 0));
console.log(getNodeValue(sll1.head, 1));
console.log("Get Nodes REC _________");
console.log(getNodeValueRec(sll1.head, 0));
console.log(getNodeValueRec(sll1.head, 1));
console.log(getNodeValueRec(sll1.head, 2));

// reverse linked list
/* 
  prev - 4 - 5 - 6 - 2 - 7 - 4 - null
        cur nxt
*/
const reverseList = (head) => {
  if (head == null) return null;
  var current = head,
    prev = null;
  while (current != null) {
    var temp = current.next;
    current.next = prev;
    prev = current;
    current = temp;
  }
  return prev;
};

const reverseListRec = (head) => {
  var prev = null;
  return reverseRec(head, prev);
};

const reverseRec = (head, prev) => {
  if (head == null) return prev;
  var temp = head.next;
  head.next = prev;
  prev = head;
  return reverseRec(temp, prev);
};

const reverseListRec1 = (head, prev = null) => {
  if (head == null) return prev;
  var next = head.next;
  head.next = prev;
  prev = head;
  return reverseListRec1(next, head);
};

console.log("Reverse list fcc_________");
console.log(sll1);
// var rev = reverseList(sll1.head);
// var rev = reverseListRec(sll1.head);
// var rev = reverseListRec1(sll1.head);
// console.log(rev);

/* 
* Zipper list
          1   ->   2   ->   3   ->   9
          7   ->   8   ->   5
          1   ->   7   ->   2   ->   8   ->   3   ->   5   ->   9

          1   ->   2   ->   3
          7   ->   8   ->   5   ->   9
          1   ->   7   ->   2   ->   8   ->   3   ->   5   ->   9
*/
const zipperList001 = (head1, head2) => {
  var current = head1;
  var current1 = head1;
  var current2 = head2;

  while (current != null && current2 != null) {
    var temp1 = current1.next;

    current.next = current2;
    current.next.next = temp1;

    current1 = current1.next;
    current2 = current2.next;
    // current2.next = temp1;
  }
  if (current1 == null) {
  }
};

const zipperList = (head1, head2) => {
  let tail = head1;
  let current1 = head1.next;
  let current2 = head2;
  let count = 0;

  while (current1 != null && current2 != null) {
    if (count % 2 == 0) {
      tail.next = current2;
      current2 = current2.next;
    } else {
      tail.next = current1;
      current1 = current1.next;
    }
    tail = tail.next;
    count++;
  }
  if (current1 == null) tail.next = current2;
  if (current2 == null) tail.next = current1;
  return head1;
};

const zipperListRec = (head1, head2) => {
  if (head1 == null && head2 == null) return null;
  if (head1 == null) return head2;
  if (head2 == null) return head1;

  const next1 = head1.next;
  const next2 = head2.next;
  head1.next = head2;
  head2.next = zipperListRec(next1, next2);
  return head1;
};
console.log("Zipper list___________");
console.log(sll1); //24-42-9-7
// console.log(sll2);
// console.log(sll3);
console.log(sll4); // 5 7 12 3
// var zip = zipperList(sll1.head, sll4.head);
var zip = zipperListRec(sll1.head, sll4.head);
console.log(zip);

// let iis = { 0: 12 };
// console.log("iis == null_________");

// iis["a"] += 0 + 5;

// iis = iis["c"] = 2;
// console.log(iis);
