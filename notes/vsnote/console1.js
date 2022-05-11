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

let dll = new DoublyLinkedList();
dll.insertAtHead(10);
dll.insertAtHead(4);
dll.insertAtHead(3);
dll.insertAtHead(1);
// console.log("dll >>---------------------------->");
// console.log(dll);

console.log("dll.head, 5 >>--------------------->");
function sortedInsert(llist, data) {
  if (llist == null) return new DoublyLinkedListNode(data);
  let current = llist;
  var prev = current;
  while (current) {
    // 1<->3<->4<->10
    if (data <= current.data) {
      var newNode = new DoublyLinkedListNode(data);
      current.prev = newNode
      newNode.next = current;
      prev.next = newNode;
      newNode.prev = prev;
      return llist;
    } else {
      prev = current;
      current = current.next;
    }
  }

  // while (llist) {
  //   console.log(llist.data);
  //   llist = llist.next;
  // }
}
let sorted_insert = sortedInsert(dll.head, 5);
console.log(sorted_insert);

let obj = {
  a: 1,
  b: 2
}
// let objClone = obj
obj.a = 12;
let objClone = obj
// objClone.b = 1
console.log(obj);
console.log(objClone);
