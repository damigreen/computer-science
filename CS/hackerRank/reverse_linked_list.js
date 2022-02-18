function SinglyLinkedListNode(data) {
  this.data = data;
  this.next = null;
}

function SinglyLinkedList() {
  this.head = null;
  this.size = 0;
}
/**
 * Time complexity O(1)
 */
SinglyLinkedList.prototype.insert = function (value) {
  if (this.head == null) {
    this.head = new SinglyLinkedListNode(value);
    this.size++;
  } else {
    var temp = this.head;
    this.head = new SinglyLinkedListNode(value);
    this.head.next = temp;
    this.size++;
  }
  this.size++;
};

function reverseSinglyLinkedListHack(sll) {
  const linkedList = new sll();
  var currentNode = linkedList.head;
  var prev = null;
  var dataArray = [currentNode.data];
  while (currentNode != null) {
    var temp = currentNode.next;
    currentNode.next = prev;
    prev = currentNode;
    // if (!temp) break;
    currentNode = temp;
    dataArray.push(prev.data);
  }
  for (var i = dataArray.length - 1; i > 0; i--) {
    console.log(dataArray[i]);
  }
  return prev;
}

var sll1 = new SinglyLinkedList();
sll1.insert(9);
sll1.insert(42);
sll1.insert(42);
sll1.insert(4);
sll1.insert(24);
console.log(sll1);
reverseSinglyLinkedListHack(sll1);
