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

var sllA = new SinglyLinkedList();
var sllB = new SinglyLinkedList();
sllA.insert(12);
sllB.insert(10);

sllA.insert(1);
sllB.insert(5);

sllA.insert(8)

sllA.insert(7);
sllB.insert(7);

sllA.insert(4);
sllB.insert(4);

sllA.insert(9);
sllB.insert(9);
/* 
    12-1-8
          \
           7-4-9-null
         /
    10-5

    12-1-8-7-4-9    
      10-5-7-4-9    
*/
// iterate through both list
    // check if the data is the same
    // if it is the same check the next value it they are the same
    // return the node value
function findMergeNode(headA, headB) {
  console.log(headA);
//   let currentA = headA;
//   let currentB = headB;
//     while (currentA != currentB) {
//         currentA = currentA.next;

//     }
}

findMergeNode(sllA.head, sllB.head);

const person = {
    name: "damigreen",
    age: 29
}
const printName = ({age}) => {
    console.log(age);
}

printName(person)
