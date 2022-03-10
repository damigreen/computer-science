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

// let iis = { 0: 12 };
// console.log("iis == null_________");

// iis["a"] += 0 + 5;

// iis = iis["c"] = 2;
// console.log(iis);
