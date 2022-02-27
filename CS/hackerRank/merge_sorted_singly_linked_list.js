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
      newNode = new SinglyLinkedListNode(head1.data);
      head1 = head1.next;
    } else if (head1.data < head2.data) {
      // 2-7-8  2-3-7-8
      // 3-8-null
      newNode = new SinglyLinkedListNode(head1.data);
      head1 = head1.next;
    } else if (head1.data > head2.data) {
      newNode = new SinglyLinkedListNode(head2.data);
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

var sllA = new SinglyLinkedList();
var sllB = new SinglyLinkedList();
var sllC = new SinglyLinkedList();

// 1-3-7
// 2-3-9
sllA.insert(7);
sllB.insert(9);

sllA.insert(3);
sllB.insert(3);

sllA.insert(1);
sllB.insert(2);


const x = mergeList1(sllA, sllB);
console.log(x);
