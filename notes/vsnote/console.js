function LFUNode(key, value) {
  this.prev = null;
  this.next = null;
  this.key = key;
  this.data = value;
  this.freqCount = 1;
}

function LFUDoublyLinkedList() {
  this.head = new LFUNode("buffer head", null);
  this.tail = new LFUNode("buffer tail", null);
  this.head.next = this.tail;
  this.tail.prev = this.head;
  this.size = 0;
}

function LFUCache(capacity) {
  this.keys = {}; // stores the LFUNode
  this.freq = {}; // stores the LFUDoublyLinkedList
  this.capacity = capacity;
  this.minFreq = 0;
  this.size = 0;
}

/* 

    3 --> null
    n

    2 --> 4 --> 9 --> null
    h    nxt

    3 --> 4 --> 9 --> null // node.next = this.head.next
    n
    2 ---> 3 <-- [4] --> 9 --> null    [2]      // this.head.next.prev = node
    h                       prev-head
    2  --> [3] --> 4 --> 9 --> null  // this.head.next = node
           nxt 
    2 <--- [3] --> 4 --> 9 --> null  // node.prev = this.head
  prev      n
*/
LFUDoublyLinkedList.prototype.insertAtHead = function (node) {
node.next = this.head;
  this.head.next.prev = node; // remove
  this.head.next = node;
  node.prev = this.head;
  this.size++;
};

LFUDoublyLinkedList.prototype.removeAtTail = function () {
  var oldTail = this.tail.prev;
  var prev = this.tail.prev;
  prev.prev.next = this.tail;
  this.tail.prev = prev.prev;
  this.size--;
  return oldTail;
};

LFUDoublyLinkedList.prototype.removeNode = function (node) {
  node.prev.next = node.next;
  node.next.prev = node.prev;
  this.size--;
};

LFUCache.prototype.set = function (key, value) {
  var node = this.keys[key];
  if (node == undefined) {
    node = new LFUNode(key, value);
    this.keys[key] = node; // { 'hey': 6 }

    if (this.size != this.capacity) {
      // insert without deleting
      if (this.freq[1] == undefined) {
        this.freq[1] = new LFUDoublyLinkedList();
      }
      this.freq[1].insertAtHead(node);
      this.size++;
    } else {
      // delete and insert
      var oldTail = this.freq[this.minFreq].removeAtTail();
      delete this.keys[oldTail.key];

      if (this.freq[1] == undefined) {
        this.freq[1] = new LFUDoublyLinkedList();
      }

      console.log("inserting at head+++++++++");
      this.freq[1].insertAtHead(node);
    }
    // this.size++;
    this.minFreq = 1;
  } else {
    var oldFreqCount = node.freqCount;
    node.data = value;
    node.freqCount++;

    this.freq[oldFreqCount].removeNode(node);

    if (this.freq[node.freqCount] === undefined) {
      this.freq[node.freqCount] = new LFUDoublyLinkedList();
    }

    this.freq[node.freqCount].insertAtHead(node);

    if (
      oldFreqCount == this.minFreq &&
      Object.keys(this.freq[oldFreqCount]).size == 0
    ) {
      this.minFreq++;
    }
  }
};

LFUCache.prototype.get = function (key) {
  var node = this.keys[key];

  if (node == undefined) {
    return null;
  } else {
    var oldFreqCount = node.freqCount;
    // node.freqCount++;

    this.freq[oldFreqCount].removeNode(node);

    if (this.keys[node.freqCount] == undefined) {
      this.freq[node.freqCount] = new LFUDoublyLinkedList();
    }

    this.freq[node.freqCount].insertAtHead(node);

    if (
      oldFreqCount == this.minFreq &&
      Object.keys(this.freq[oldFreqCount]).length == 0
    ) {
      this.minFreq++;
    }
    return node.data;
  }
};

var myLFU = new LFUCache(5);
myLFU.set(1, 1);
myLFU.set(4, 4);
myLFU.set(4, 4);
// myLFU.set(1, 1);
myLFU.set(7, 7);
myLFU.set(7, 7);
myLFU.set(7, 7);
var getLFU = myLFU.get(7);
console.log(getLFU);
var getLFU = myLFU.get(4);
myLFU.set(9, 2);
console.log("+++++++++++++++++Get lfu " + "++++++++++++");
console.log(getLFU);
var getLFU = myLFU.get(9);
console.log(getLFU);
