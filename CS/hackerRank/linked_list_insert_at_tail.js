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
