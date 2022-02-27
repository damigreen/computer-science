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

var sll1 = new SinglyLinkedList();
var sll2 = new SinglyLinkedList();
var sll3 = new SinglyLinkedList();

sll1.insert(9);
sll2.insert(9);
sll3.insert(9);

sll1.insert(42);
sll2.insert(42);
sll3.insert(42);

sll1.insert(4);
sll2.insert(4);
sll3.insert(4);

sll1.insert(24);
sll2.insert(24);
sll3.insert(24);

sll3.insert(7);

console.log("**********Compare Singly Linked List***********");
// CompareLists(sll1, sll2);
// const compareList = CompareLists(sll1, sll2);
const compareList = CompareLists(sll1, sll3);
console.log(compareList);
