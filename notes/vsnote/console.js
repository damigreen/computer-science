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
      if (j < n - 1 - i || j > n) {
        step += "#";
        // } else if (j < j + 1 && j < 2*n - n + 1 + j) {
      } else if (j < j + 1 || j < 2 * n - n + 1) {
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

console.log(new Date(1657013991943));

let arrayX = [1, 2, 3, 4, 5];
let arrayY = arrayX.slice(-3);
console.log("arrayY-->", arrayY);
arrayX.push(7);
console.log("arrayX-->", arrayX);
arrayY = arrayX.slice(-3);
console.log("arrayY-->", arrayY);

let v = new DataView(new ArrayBuffer(4));
v.setUint32(0, 0x40d720000);
var value = v.getFloat32(0);
console.log(value);

var data = "01030473583E5730FA"

// let hexString = "0103045C8040C51818";
let hexString = data.slice(-8, -4);
hexString = hexString.padEnd(8, "0");

console.log("hexString", hexString);

v.setUint32(0, "0x" + hexString);
// v.setUint32(0, 0x00200000);

value = v.getFloat32(0);

console.log(hexString.substring(5));
console.log(hexString.substring(6));
console.log(hexString.substring(7));
console.log("value", value);

console.log(new Date(1649670528000));

console.log((new Date()).getTime())

let a = [1,2,4]
a.reverse()
console.log(a)

let count = 0;
while (count < 10) {
  let res = 0;
  let yup = 0;
  // if (count == 2) {
  //   yup = 5;
  // } else if (count == 3) {
  //   yup = 6;
  // }
  if (count == 2) {
    yup = 5;
  }
  if (count == 3) {
    yup = 6
  }
  res = count * yup * 5;
  count++;
  console.log(res);
}

// let sensorData = "01030C43533FC943511F97435281A6B5B9" // voltage 1,2,3,4
// let sensorData = "010320461A4E02460D867F46598AEE47005882448464F644892D8244E762D9457A850959EC" // power 5,6,7,8
let sensorData = "010310432A026D430D1313433F3B2543277037BBA6" // current // 9,10,11,12

let dataRegister = sensorData.slice(0, 6)
let power1Hex = sensorData.slice(6, 14);
let power2Hex = sensorData.slice(14, 22);
let power3Hex = sensorData.slice(22, 30);
let powerAvgHex = sensorData.slice(30, 38);

let v1 = new DataView(new ArrayBuffer(4));
v1.setUint32(0, "0x" + power1Hex)
let power1Data = Math.abs(v1.getFloat32(0)).toFixed(2);

let v2 = new DataView(new ArrayBuffer(4));
v2.setUint32(0, "0x" + power2Hex)
let power2Data = Math.abs(v2.getFloat32(0)).toFixed(2);

let v3 = new DataView(new ArrayBuffer(4));
v3.setUint32(0, "0x" + power3Hex)
let power3Data = Math.abs(v3.getFloat32(0)).toFixed(2);

let vAvg = new DataView(new ArrayBuffer(4));
vAvg.setUint32(0, "0x" + powerAvgHex)
let powerAvgData = Math.abs(vAvg.getFloat32(0)).toFixed(2);

console.log(dataRegister, power1Hex, power2Hex, power3Hex, powerAvgHex);
console.log(power1Data, power2Data, power3Data, powerAvgData);

// let dataRegister = sensorData.slice(0, 6)
// let voltage1Hex = sensorData.slice(6, 14);
// let voltage2Hex = sensorData.slice(14, 22);
// let voltage3Hex = sensorData.slice(22, 30);
// let voltageAvgHex = sensorData.slice(30, 38);

// let v1 = new DataView(new ArrayBuffer(4));
// v1.setUint32(0, "0x" + voltage1Hex)
// let voltage1Data = Math.abs(v1.getFloat32(0)).toFixed(2);

// let v2 = new DataView(new ArrayBuffer(4));
// v2.setUint32(0, "0x" + voltage2Hex)
// let voltage2Data = Math.abs(v2.getFloat32(0)).toFixed(2);

// let v3 = new DataView(new ArrayBuffer(4));
// v3.setUint32(0, "0x" + voltage3Hex)
// let voltage3Data = Math.abs(v3.getFloat32(0)).toFixed(2);

// let vAvg = new DataView(new ArrayBuffer(4));
// vAvg.setUint32(0, "0x" + voltage3Hex)
// let voltageAvgData = Math.abs(vAvg.getFloat32(0)).toFixed(2);

// console.log(dataRegister, voltage1Hex, voltage2Hex, voltage3Hex, voltageAvgHex);
// console.log(voltage1Data, voltage2Data, voltage3Data, voltageAvgData);

console.log(new Date(1649790720000))

// 00000A14 - Positive active energy - kWh

// let sensorData1 = "01037800000A140000089C0000088500001B35000027A9000025290000217D00006E4F002000200020002000200020002000200000011F000000E4000000F7000002FA00000535000004450000039200000D0C00200020002000200020002000200020000032D700002EEC00002ABE00008C8100200020002000204C37"
// let hexString1 = sensorData1.slice(6, 14)
// console.log(hexString1)

// function hexToDec(s) {
//   var i, j, digits = [0], carry;
//   for (i = 0; i < s.length; i += 1) {
//       carry = parseInt(s.charAt(i), 16);
//       for (j = 0; j < digits.length; j += 1) {
//           digits[j] = digits[j] * 16 + carry;
//           carry = digits[j] / 10 | 0;
//           digits[j] %= 10;
//       }
//       while (carry > 0) {
//           digits.push(carry % 10);
//           carry = carry / 10 | 0;
//       }
//   }
//   return digits.reverse().join('');
// }
// let res = hexToDec(hexString1)
// const energyValue = res * 0.1
// console.log(res, energyValue)

console.log(Date.parse(new Date())/1000)
let obj = {a: 1, b: 2}
let objs = {...obj, c: 12}
console.log(objs)

const date = new Date("2010-08-10");

let d=new Intl.DateTimeFormat('en-GB',{year:"numeric", month:"short",day:"2-digit"}).format(date).split(" ").join("-");

console.log(d);

function formatAMPM(date = new Date()) { // This is to display 12 hour format like you asked
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
}

var myDate = new Date();
var displayDate = myDate.getMonth()+ '/' +myDate.getDate()+ '/' +myDate.getFullYear()+ ' ' +formatAMPM(myDate);
console.log(displayDate);

function formatDate(date = new Date()) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return (date.getMonth()+1) + "/" + date.getDate() + "/" + date.getFullYear() + "  " + strTime;
}

var de = new Date();
var e = formatDate(de);

console.log(e);

console.log(new Date().toString()); // e.g. "Fri Nov 21 2016 08:00:00 GMT+0100 (W. Europe Standard Time)"

console.log(new Date(1648854000000))
console.log(new Date("2022-04-20T12:08:52.537Z").getTime())
console.log(new Date("2022-04-20T13:08:52.537Z").getTime())

function moneyFormat(value) {
  value = value || 0;
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
console.log(moneyFormat(400000000))