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
