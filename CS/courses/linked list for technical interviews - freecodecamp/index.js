class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const a = new Node("A");
const b = new Node("B");
const c = new Node("C");
const d = new Node("D");

a.next = b;
b.next = c;
c.next = d;

const printLinkedList = (head) => {
  let current = head;
  while (current != null) {
    console.log(current.val);
    current = current.next;
  }
};
const printLinkedListRec = (head) => {
  if (head == null) return;
  console.log(head.val);
  printLinkedListRec(head.next);
};
console.log("print linked list_________");
printLinkedList(a);
console.log("print linked list Recursion_________");
printLinkedListRec(a);

const linkedListValues = (head) => {
  var current = head;
  var values = [];
  while (current != null) {
    values.push(current.val);
    current = current.next;
  }
  return values;
};
const linkedListValuesRec1 = (head) => {
  var values = [];
  // fillValues(head, values);
  const fillValues = (head, values) => {
    if (head == null) return;
    values.push(head.val);
    console.log(values);
    fillValues(head.next, values);
  };
  fillValues(head, values);
  // linkedListValuesRec1(head.next);
};
const linkedListValuesRec = (head) => {
  var values = [];
  fillValuesRec(head, values);
};
const fillValuesRec = (head, values) => {
  if (head == null) return;
  values.push(head.val);
  console.log(values);
  fillValuesRec(head.next, values);
};
console.log("Linked list values_________");
// linkedListValues(a);
console.log("Linked list values Rec _________");
linkedListValuesRec1(a);
// linkedListValuesRec(a);

const sumList = (head) => {
  // let sum = 0;
  let sum = "";
  let current = head;
  while (current) {
    sum += current.val;
    current = current.next;
  }
  console.log(sum);
  return sum;
};
const sumListRec = (head) => {
  if (head == null) return 0;
  let result = head.val + sumListRec(head.next);
  return result;
};
console.log("Sum list _________");
sumList(a);
var sumListRecA = sumListRec(a);
console.log(sumListRec(a));

const linkedListFind = (head, target) => {
  let current = head;
  while (current != null) {
    if (current.data == target) {
      return true;
    }
    current = current.next;
  }
  return false;
};

const linkedListFindRec = (head, target) => {
  if (head == null) return false;
  if (head.data == target) return true;
  return linkedListFindRec(head.next, target);
};
console.log("Find Linked list _________");
console.log(sll1);
console.log(linkedListFind(sll1.head, 42));
console.log(linkedListFindRec(sll1.head, 7));
console.log(linkedListFindRec(sll1.head, 34));

const getNodeValue = (head, index) => {
  let current = head;
  let count = 0;
  while (current != null) {
    if (count == index) return current.data;
    current = current.next;
    count++;
  }
  return null;
};

const getNodeValueRec = (head, index) => {
  if (head == null) return null;
  if (index == 0) return head.data;
  return getNodeValueRec(head.next, index - 1);
};
console.log("Get Nodes _________");
console.log(getNodeValue(sll1.head, 0));
console.log(getNodeValue(sll1.head, 1));
console.log("Get Nodes REC _________");
console.log(getNodeValueRec(sll1.head, 0));
console.log(getNodeValueRec(sll1.head, 1));
console.log(getNodeValueRec(sll1.head, 2));

// reverse linked list
/* 
    prev - 4 - 5 - 6 - 2 - 7 - 4 - null
          cur nxt
  */
const reverseList = (head) => {
  if (head == null) return null;
  var current = head,
    prev = null;
  while (current != null) {
    var temp = current.next;
    current.next = prev;
    prev = current;
    current = temp;
  }
  return prev;
};

const reverseListRec = (head) => {
  var prev = null;
  return reverseRec(head, prev);
};

const reverseRec = (head, prev) => {
  if (head == null) return prev;
  var temp = head.next;
  head.next = prev;
  prev = head;
  return reverseRec(temp, prev);
};

const reverseListRec1 = (head, prev = null) => {
  if (head == null) return prev;
  var next = head.next;
  head.next = prev;
  prev = head;
  return reverseListRec1(next, head);
};

console.log("Reverse list fcc_________");
console.log(sll1);
// var rev = reverseList(sll1.head);
// var rev = reverseListRec(sll1.head);
// var rev = reverseListRec1(sll1.head);
// console.log(rev);

/* 
  * Zipper list
            1   ->   2   ->   3   ->   9
            7   ->   8   ->   5
            1   ->   7   ->   2   ->   8   ->   3   ->   5   ->   9
  
            1   ->   2   ->   3
            7   ->   8   ->   5   ->   9
            1   ->   7   ->   2   ->   8   ->   3   ->   5   ->   9
  */
const zipperList001 = (head1, head2) => {
  var current = head1;
  var current1 = head1;
  var current2 = head2;

  while (current != null && current2 != null) {
    var temp1 = current1.next;

    current.next = current2;
    current.next.next = temp1;

    current1 = current1.next;
    current2 = current2.next;
    // current2.next = temp1;
  }
  if (current1 == null) {
  }
};

const zipperList = (head1, head2) => {
  let tail = head1;
  let current1 = head1.next;
  let current2 = head2;
  let count = 0;

  while (current1 != null && current2 != null) {
    if (count % 2 == 0) {
      tail.next = current2;
      current2 = current2.next;
    } else {
      tail.next = current1;
      current1 = current1.next;
    }
    tail = tail.next;
    count++;
  }
  if (current1 == null) tail.next = current2;
  if (current2 == null) tail.next = current1;
  return head1;
};

const zipperListRec = (head1, head2) => {
  if (head1 == null && head2 == null) return null;
  if (head1 == null) return head2;
  if (head2 == null) return head1;

  const next1 = head1.next;
  const next2 = head2.next;
  head1.next = head2;
  head2.next = zipperListRec(next1, next2);
  return head1;
};
console.log("Zipper list___________");
console.log(sll1); //24-42-9-7
// console.log(sll2);
// console.log(sll3);
console.log(sll4); // 5 7 12 3
// var zip = zipperList(sll1.head, sll4.head);
var zip = zipperListRec(sll1.head, sll4.head);
console.log(zip);
