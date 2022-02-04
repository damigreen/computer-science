function SLLN(data) {
  this.data = data;
  this.next = null;
}
function SLL() {
  this.head = null;
  this.size = 0;
}

SLL.prototype.insert = function (value) {
  if (this.head == null) {
    this.head = new SLLN(value);
    this.size++;
  } else {
    var temp = this.head;
    this.head = new SLLN(value);
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

var sll1 = new SLL();
// console.log("SLL Empty ...", sll1.isEmpty());
// sll1.insert(9);
// sll1.insert(42);
// sll1.insert(42);
// sll1.insert(4);
sll1.insert(24);
sll1.insertAtTail(5);
sll1.insertAtTail(4);
// sll1.insertNodeAtPosition(7, 2);
sll1.insertNodeAtPosition1(7, 0);
// console.log("Removing ... :(");
console.log(sll1);
