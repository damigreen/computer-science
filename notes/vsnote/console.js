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
  // node.next = this.head.next;
  // node.next = this.head;
  // this.head.next.prev = node; // remove
  // this.head = node;
  // node.prev = this.head;

  // var temp = node;
  node.next = this.head;
  this.head.prev = node;
  this.head = node;
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
  // node.prev.next = node.next;
  // node.next.prev = node.prev;
  // 4-5-6
  //
  var temp = this.head;
  if ((node = this.head)) {
    node.next = temp.next;
    this.head = node;
  }

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

    // this.freq[oldFreqCount].removeNode(node);

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

    // this.freq[oldFreqCount].removeNode(node);

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

console.log("+++++++++++++++++ LFU " + "++++++++++++");
var myLFU = new LFUCache(5);
myLFU.set(1, 1);
myLFU.set(4, 4);
myLFU.set(3, 3);
myLFU.set(5, 5);
myLFU.set(7, 7);
myLFU.set(7, 7);
myLFU.set(7, 7);
console.log("+++++++++++++++++++++++++++++++");
console.log(myLFU);
var getLFU = myLFU.get(7);
console.log(getLFU);
myLFU.set(9, 2);
console.log("+++++++++++++++++++++++++++++++");
console.log(getLFU);
console.log("-------------------------------");
console.log(myLFU);
console.log("###############################");
// console.log(myLFU.freq[1].head);
console.log("===============================");
var getLFU = myLFU.get(9);
console.log(getLFU);

var name = "damilola faseun";
var uname = name.slice(0, name.indexOf(" "));
console.log(name);
console.log(uname);
console.log(name.indexOf(" "));

let zombie = {
  eatbrains() {
    return "yum!!";
  },
};

console.log("=============================== Chad");
// var chad = Object.create(zombie);
var chad = Object.create(zombie, { age: { value: 42 } });
var zeng = Object.create(zombie, { name: { value: "green" } });
console.log(chad.age);
console.log(zeng.name);
console.log(chad.eatbrains());

console.log(chad.__proto__.eatbrains());
console.log(Object.getPrototypeOf(zeng).eatbrains);

const ellipse = (text, length) => {
  const ellipseText = text.length > length ? "..." : "";
  return text.substring(0, length + 1) + ellipseText;
};
console.log(ellipse("where is my money now", 17));

/**
 * Step backwards
 *        *
 *       **
 *      ***
 *     ****
 *
 *  i: 0
 *  #: 3 -> 4 - (1 + j) -> n - (1 + j)
 *  *: 1 -> 0 + 1 -> 1
 * ------------------------------
 *  #: 3 -> 4 - 1 -> n - 1
 *  *: 1 -> 0 + 1 -> j + 1
 *
 *
 *  i: 1
 *  #: 2 -> 4 - 2 -> n - 2
 *  *: 2 -> 0 + 2 -> j + 2
 *
 *  i: 3
 *  #: 0 -> 4 - 2 -> n - 2
 *  *: 2 -> 0 + 2 -> j + 2
 *
 */
console.log("------------------------------------- step backwards");
function stepBackwards(n) {
  for (var i = 0; i < n; i++) {
    let step = "";
    for (var j = 0; j < n; j++) {
      step += "*";
      console.log(step);
    }
    break;
  }
}

stepBackwards(4);

/**
 * Step forward
 *        *
 *       **
 *      ***
 *     ****
 *
 *  i: 0
 *  #: 3 -> 4 - (1 + j) -> n - (1 + j)
 *  *: 1 -> 0 + 1 -> 1
 * ------------------------------
 *  #: 3 -> 4 - 1 -> n - 1
 *  *: 1 -> 0 + 1 -> j + 1
 *
 *
 *  i: 1
 *  #: 2 -> 4 - 2 -> n - 2
 *  *: 2 -> 0 + 2 -> j + 2
 *
 *  i: 3
 *  #: 0 -> 4 - 2 -> n - 2
 *  *: 2 -> 0 + 2 -> j + 2
 *
 */
console.log("------------------------------------- step forward");
function stepForward(n) {
  for (var i = 0; i < n; i++) {
    let step = "";
    for (var j = 0; j < n; j++) {
      if (j < n - 1 - i) {
        step += " ";
      } else step += "*";
    }
    console.log(step);
    // break;
  }
}
stepForward(4);

console.log("------------------------------------- step forward 2");
function stepForward2(n) {
  for (var i = 0; i < n; i++) {
    let step = "";
    for (var j = 0; j < n - 1 - i; j++) {
      step += " ";
    }
    for (var k = 0; k < i + 1; k++) {
      step += "*";
    }
    console.log(step);
  }
}
stepForward2(4);

/**
 * Step up
 *        * *
 *       ** **
 *      *** ***
 *     **** ****
 *  [###**###]
 *  [##****##]
 *  [#******#]
 *  [********]
 *  i: 0
 *  *:
 */
console.log("------------------------------------- step up");
function stepUp(n) {
  for (var i = 0; i < n; i++) {
    let step = "";
    let stepReverse = " ";
    for (var j = 0; j < n - 1 - i; j++) {
      step += " ";
    }
    for (var k = 0; k < i + 1; k++) {
      step += "*";
    }
    for (var a = step.length - 1; a > -1; a--) {
      stepReverse += step[a];
    }

    console.log(step + stepReverse);
  }
}
stepUp(7);

/**
 *  [###* *###]
 *  [##** **##]
 *  [#*** ***#]
 *  [**** ****]
 *  [###**###]
 *  [##****##]
 *  [#******#]
 *  [********]
 *  i: 0
 *  *:
 */
console.log("------------------------------------- step up U2");
function stepUp2(n) {
  for (var i = 0; i < n; i++) {
    let step = "";
    // for (var j = 0; j < 2 * n; j++) {
    for (var j = 0; j < 2 * n; j++) {
      if (j < n - 1 - i || (j > n) ) {
        step += "#";
      // } else if (j < j + 1 && j < 2*n - n + 1 + j) {
      } else if (j < j + 1 || j < 2*n - n + 1) {
        step += "$";
      } 
      // else if (j >= n && n + 1 + j < 2 * n - n - 1 + j) {
      //   step += "$";
      // } 
      // else if (j > n + i + 1 && j < 2 * n - 1) {
      //   step += "#";
      // }
    }
    console.log(step);
  }
}
stepUp2(4);

console.log(new Date(1657013991943))


let arrayX = [1,2,3,4,5]
let arrayY = arrayX.slice(-3)
console.log("arrayY-->", arrayY)
arrayX.push(7)
console.log("arrayX-->", arrayX)
arrayY = arrayX.slice(-3)
console.log("arrayY-->", arrayY)


let v = new DataView(new ArrayBuffer(4));
v.setUint32(0, 0x40D720000);
var value = v.getFloat32(0);
console.log(value);


// var data = "01030473583E5730FA"

let hexString = "0103045C8040C51818"
// let hexString = data.slice(-8, -4);
hexString = hexString.padEnd(8, "0");

console.log("hexString",hexString)

v.setUint32(0, "0x" + "00200020");
// v.setUint32(0, 0x00200000);

value = v.getFloat32(0)


console.log(hexString.substring(5));
console.log(hexString.substring(6));
console.log(hexString.substring(7));
console.log("value", value);

console.log(new Date(1649670528000))

// let sensorData = "01030400000000FA33"

// let code = sensorData.substring(4, 6)
// console.log(code)

// console.log((new Date()).getTime())

// let a = [1,2,4]
// a.reverse()
// console.log(a)