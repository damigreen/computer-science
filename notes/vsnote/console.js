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
console.log("SLL Empty ...", sll1.isEmpty());
sll1.insert(9);
sll1.insert(42);
sll1.insert(42);
sll1.insert(4);
sll1.insert(24);
sll1.insertAtTail(7);
sll1.insertNodeAtPosition(12, 1);
console.log("Removing ... :(");
// sll1.remove(9);
// sll1.remove(42);
// sll1.remove(4);
// sll1.remove(24);
sll1.delete(4);
console.log("**********Singly Linked List**********");
sll1.deleteAtPosition(1);
console.log(sll1);
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
    console.log(headNode.data);
  }
  // return headNode;
}

console.log("**********Reverse Singly Linked List***********");
console.log(sll1); // [24]-[42]-[9]-[7]-null
var reverse = reverseSinglyLinkedList(sll1);

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
