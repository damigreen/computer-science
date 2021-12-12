import helpers from "lodash";
const { concat, findIndex, orderBy, uniqBy } = helpers;
// const { concat, findIndex, orderBy, uniqBy } = require("lodash")

var DICTIONARY = "abcdefghijklmnopqrstuvwxyz0123456789".split("");
// console.log(DICTIONARY)

function encodeId(num) {
  var base = DICTIONARY.length; //36
  var encoded = "";

  if (num == 0) {
    return DICTIONARY[0];
  }

  while (num > 0) {
    encoded += DICTIONARY[num % base];
    num = Math.floor(num / base);
  }

  // encoded = "9ujd88"

  // console.log(encoded);
  return reverseWord(encoded);
}

function reverseWord(str) {
  var reversed = "";
  for (var i = str.length - 1; i >= 0; i--) {
    // reversed += str[i]
    reversed += str.charAt(i);
  }
  return reversed;
}
// console.log(encodeId(11231230));

function decodeId(id) {
  var base = DICTIONARY.length;
  var decoded = "";
  for (var i = 0; i < id.split("").length; i++) {
    decoded = decoded * base + DICTIONARY.indexOf(id.charAt(i));
    console.log("decoded", decoded, base, DICTIONARY.indexOf(id.charAt(i)));
    // 6 36 6
    // 240 36 24
    // 8666 36 26
    // 311978 36 2
    // 11231230 36 22
    // 11231230
  }
  return decoded;
}

// console.log(decodeId(encodeId(11231230)))

var dict = "ABCDEFG";
var num = 12;
var base = "";
while (num > 0) {
  base += dict[num % 7];
  num = Math.floor(num / 7);
  console.log(base, dict[num % 7], num);
}
// console.log(base)

// console.log(new Date(1636146298918))

function modInverse(e, phi) {
  var m0 = phi,
    t,
    q;
  var x0 = 0,
    x1 = 1;

  if (phi == 1) {
    return 0;
  }

  console.log("e, phi, m0, x0, t, q, x1", e, phi, m0, x0, t, q, x1);
  console.log("------------------------");

  while (e > 1) {
    q = Math.floor(e / phi);
    t = phi;
    (phi = e % phi), (e = t);
    t = x0;
    x0 = x1 - q * x0;
    x1 = t;

    console.log("e, phi, m0, x0, t, q, x1", e, phi, m0, x0, t, q, x1);
  }

  if (x1 < 0) {
    x1 += m0;
    console.log(">>------------>");
    console.log("e, phi, m0, x0, t, q, x1", e, phi, m0, x0, t, q, x1);
  }

  return x1;
}
// modInverse(7, 40);
// console.log(Math.floor(3/10))

/**
 * Recursion
 */
function countDownToZero(n) {
  // Base case. Stop at 0
  if (n < 0) {
    return; //Stop the function
  } else {
    console.log(n);
    countDownToZero(n - 1); // Count down 1
  }
}

// Iterative Solution
// 0 1 1 2 3 5 8
// 2: last 1, lastlast = 0, sum = 1
// 3: last: sum = 1, lastlast = last = 1 sum = 2
// countDownToZero(10)
function getNthFibo(n) {
  if (n <= 1) return n;
  var sum = 0,
    last = 1,
    lastlast = 0;

  for (var i = 1; i < n; i++) {
    sum = last + lastlast;
    lastlast = last;
    last = sum;
  }
  return sum;
}

// getNthFiboRec()
// getNthFiboRec(5) +  // getNthFiboRec(4) + getNthFiboRec(3) =
// getNthFiboRec(4) +  // getNthFiboRec(3) + getNthFiboRec(2)
// getNthFiboRec(3) +  // getNthFiboRec(3) + getNthFiboRec(2)
// getNthFiboRec(2) +  // getNthFiboRec(2) + getNthFiboRec(1)
// getNthFiboRec(1) +  // getNthFiboRec(0)

// console.log(getNthFibo(6));
function getNthFiboRec(n) {
  if (n <= 1) {
    return n;
  }
  // console.log(n);
  // console.log(getNthFiboRec(n - 1) + getNthFiboRec(n-2))
  return getNthFiboRec(n - 1) + getNthFiboRec(n - 2);
}
// console.log(getNthFiboRec(6))

// Using two for loops
// Time Complexity: O(n2)
// Space Complexity: Object(1)
function fundSum(arr, weight) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] == weight) {
        return [i, j];
      }
    }
  }
  return -1;
}
// console.log(fundSum([2,4,5,6,2], 9));

/* 
[1,2,3], 5

i = 2
differenct = 3

0: currentElement = 1 difference = 4
1: currentElement = 2 difference = 3
2: currentElement = 3 difference = 2

if the hashtable[currentElement] != undefined
[i, hashtable[weight - difference]]

{
    4: 0
    3: 1

}
*/
// Time Complexity: O(n)
// Space Complexity: O(n)
function findSumHash(arr, weight) {
  var hashtable = {};
  for (var i = 0, arrLength = arr.length; i < arrLength; i++) {
    var currentElement = arr[i],
      difference = weight - currentElement;

    // Check if the right one already exists
    if (hashtable[currentElement] != undefined) {
      return [i, hashtable[weight - difference]];
    } else {
      // store index
      hashtable[difference] = i;
    }
  }
  return -1;
}
// console.log(findSumHash([1, 3, 3,7, 4, 12, 2, 9, 2], 14));

const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(a.slice(0, 3));

/**
 * Linear Search
 * time complexity O(n)
 *
 */
function linearSearch(array, n) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] == n) {
      return true;
    }
  }
  return false;
}
// console.log(linearSearch([2, 3, 5, 8, 6, 5, 0, 9, 6, 4], 8));

/**
 * Binary Search
 *
 * [1,2,3,4,5,6,7,8]: n = 7 mid=3[4], low=0[1] high=7[8]
 * [4,5,6,7,8]: n = 7 mid=5[6], low=4[5] high=7[8]
 * [6,7,8]: n=7 mid=6[7]
 */
function binarySearch(array, n) {
  var lowIndex = 0,
    highIndex = array.length - 1;

  while (lowIndex <= highIndex) {
    var midIndex = Math.floor((lowIndex + highIndex) / 2);
    if (array[midIndex] == n) {
      return midIndex;
    } else if (n > array[midIndex]) {
      lowIndex = midIndex;
      console.log(n, array[midIndex], midIndex, lowIndex, highIndex);
    } else {
      highIndex = midIndex;
    }
    if (highIndex - lowIndex == 1) return highIndex;
  }
  return -1;
}
// console.log(binarySearch([4, 5, 6, 8, 9, 8, 23, 78, 9, 12, 22, 67, 0], 0));
// console.log(binarySearch([4,5,9],9));

/**
 * Swap Function
 *
 */
function swap(array, index1, index2) {
  var temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
}
// console.log(swap([1, 2, 4, 5], 2, 3));

/**
 * Bubble Sort
 * Time Complexity: O(n2)
 * Space Complexity: O(1)
 * Swap when outer loop iterator(element) is less than the inner loop element
 * [2,1,4,3]: (0[2]): 0[2]  2==2//no swap
 * [2,1,4,3]: (1[1]): 0[2] => 1<2//swap, 1[1] => 1==1
 * [1,2,4,3]: (2[4]): 0[1] => 4>1, 1[2] => 4>2, 2[4] => 4==3
 * [1,2,4,3]: (3[3]): 0[1] => 3>1, 1[2] => 3>2, 2[4] => 3<4//swap, 3[3] => 3==3
 *
 */
function bubbleSort(array) {
  for (var i = 0, arrayLength = array.length; i < arrayLength; i++) {
    for (var j = 0; j <= i; j++) {
      if (array[i] < array[j]) {
        swap(array, j, i);
      }
    }
  }
  return array;
}
// console.log(bubbleSort([2,1,7,4,6,4,1,3]));

/**
 * Selection Sort
 *
 * Compare every element on the right side of the array with the current element and
 * swap when the elements are less than the current element
 *
 * [3,2,7,5]
 *  0,1,2,3
 *
 * x[j] < x[min]: min = j
 *
 * [3,2,7,5]
 *  0: min:[0](3) j[1](2) => 2<3, min[1](2), 0:1 [2,3,7,5]
 *     min:[1](2) j[2](7) => 7>2, min[1](2), 0:1 [2,3,7,5]
 * [2,3,7,5]
 * [1](3):  min:[1](2) j()
 *
 */
function selectionSort(items) {
  var len = items.length,
    min;

  for (var i = 0; i < len; i++) {
    // Set min to this position(index)
    min = i;
    // Check the rest of the array to see if anything is smaller
    for (var j = i + 1; j < len; j++) {
      console.log(items[j], items[min]);
      if (items[j] < items[min]) {
        min = j;
      }
    }

    if (i != min) {
      // swap(items, i, min);
      swap(items, i, min);
      console.log(items);
    }
  }
  // if the minimum isn't in the position, swap it
  return items;
}
// console.log(selectionSort([9, 2, 5, 3]));

// [2,1,8,4,3,6]
// 0: [2,1,8,4,3,6]
// 1: [1,2,8,4,3,6]
// 2: [1,2,8,4,3,6]
// 3: [1,2,4,8,3,6]
// 4: [1,2,3,4,8,6]
// 4: []

//    1:2
// [1,2,8,4,3,6]
// 2: 8:1, 8:2 8:4, 8:3 8:6
//    [1,2,8,]
function bS(items) {
  for (var i = 0; i < items.length; i++) {
    for (var j = 0; j <= i; j++) {
      if (items[i] < items[j]) {
        swap(items, i, j);
      }
    }
  }
  return items;
}
// console.log(bS([2,1,8,4,3,6]));

function generatePassword() {
  var length = 42,
    charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
    retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
    retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
}
// console.log(generatePassword())

/**
 * Insertion Sort
 * outer for loop iterates over the array indices
 * inner for loop moves the unsorted items into the sorted sublist on the lerf side of the array
 *
 * Time Complexity: O(n2)
 * Space Complexity: O(1)
 *
 * Compare every element to the left of the current element(iterator)
 * with the current element
 * Swap the current with that element (for every iteration cycle)
 *
 *
 * [4,2,1]
 * item[i] = value
 * j = i - 0; j > -1
 *
 * 0:   item[i] value items[j] items[j+1]    items
 * -1   4       4     und       4            [4,2,1]
 *
 *  1:
 * 0    2       2     4         2->4         [4,4,1]
 * -1   2       2     und       4->2         [2,4,1]
 *
 *  2:
 * 1    1       1     4         1->4         [2,4,4]
 * 0    1       1     2         4->2         [2,2,4]
 * -1   1       1     und       2->1         [1,2,4]
 *
 */

function insertionSort(items) {
  var len = items.length,
    value,
    i,
    j;

  for (i = 0; i < len; i++) {
    value = items[i];
    for (j = i - 1; j > -1 && items[j] > value; j--) {
      // if (items[j] > value) {
      items[j + 1] = items[j];
      // }
    }
    items[j + 1] = value;
  }

  return items;
}
// console.log(insertionSort([4,2,5,7,2,1]))
// console.log(insertionSort([2,5,3]));

/**
 * Quick Sort
 *
 * [2,3,7,4,1]
 * [2, 4]->[2,3,7,4,1] [2,3]->[2,3,1,4,7] [2,2]->[2,3,1,4,7]
 * low = 1
 * hight = 5
 * leftArr
 * rightArr
 * pivot=7
 * 0: [(2<7),3,7,4,(1<7)]
 *    leftArr=[2,1], rightArr=[]
 * 1: [(2<7),3,7,4,(1<7)]
 *
 *  * [4,9,2,8,5,4,6,3]
 * [4,9,2,8,5,4,6,3]  [4,3,2,8,5,4,6,9]  [4,3,2,8,5,4,6,9] [4,3,2,4,5,8,6,9] [4,3,2,4,5,8,6,9]
 *    i           j        i       j            i   j              ij               j   i
 * left=0,1,2,3,4,5
 * right=7,6,5,4,3
 * pivot=5
 *
 * [4,3,2,4,5,8,6,9] [2,3,4,4,5,8,6,9]
 *    ij
 * left=0,1,2
 * right=index-1=4,3,2,1,0
 * pivot=2
 * ***************************************************
 *
 * [4,9,2,8,5,4,6,3]  --> [4,3,2,6,5,4,8,9]
 * left=6
 * right=5
 * pivot=8
 *
 * [4,3,2,6,5,4,8,9] [2,3,4,6,5,4,8,9]
 *  i   j             j   i
 * index=6
 * left=0,1
 * right=5,4,3,2,1,0
 * pivot=2
 *
 * left < index - 1
 * index < right
 *
 * [2,3,4,6,5,4,8,9] -> [2,3,4,4,5,6,8,9]
 *  ij
 * index=1
 * pivot=6
 * left=0,1,2,3,4,5
 * right=4
 *
 *
 */
function partition(array, left, right) {
  var pivot = array[Math.floor((left + right) / 2)];
  while (left <= right) {
    while (pivot > array[left]) {
      //pivot=5, arr[left]=8
      left++;
    }
    while (pivot < array[right]) {
      right--;
    }
    if (left <= right) {
      var temp = array[left];
      array[left] = array[right];
      array[right] = temp;
      left++;
      right--;
    }
  }

  console.log("Array Partition->", array);

  return left;
}
// console.log(partition([8,4,7,2,5,1,3,5,9], 0, 9));
// console.log(partition([8,3,7,4,1,9], 0, 5));
// console.log(partition([2,1,3,4,6,23], 0, 5));
// console.log(partition(ar, 0, ar.length-1));

function quickSortHelper(items, left, right) {
  var index;
  if (items.length > 1) {
    index = partition(items, left, right);
    console.log("index", index);
    console.log("left->", left, "right->", right);

    if (left < index - 1) {
      quickSortHelper(items, left, index - 1);
    }
    if (index < right) {
      quickSortHelper(items, index, right);
    }
  }
  return items;
}

function quickSort(items) {
  return quickSortHelper(items, 0, items.length - 1);
}
// const ar = [6,1,23,4,2,3];
// const ar = [2, 3, 7, 4, 1];
const ar = [4, 9, 2, 8, 5, 4, 6, 3];
// console.log("ar", ar);
// console.log(quickSort(ar));

// [2, [3,4,5,6,7]]
// [[3,4,5,6], 7]
// [[3,4,5], 6]
// [[3,4], 5]
// [[3], 4]
function quickSortFCC(array) {
  if (array.length <= 1) {
    return array;
  }

  const pivot = array[array.length - 1];
  const leftArr = [];
  const rightArr = [];
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] < pivot) {
      leftArr.push(array[i]);
    } else {
      rightArr.push(array[i]);
    }
  }
  console.log(leftArr);
  console.log(rightArr);
  console.log(array);

  return [...quickSortFCC(leftArr), pivot, ...quickSortFCC(rightArr)];
}
function quickSortFCC1(array) {
  if (array.length === 1) {
    return array;
  }

  const pivot = array[array.length - 1];
  const leftArr = [];
  const rightArr = [];
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] < pivot) {
      leftArr.push(array[i]);
    } else {
      rightArr.push(array[i]);
    }
  }
  console.log(leftArr);
  console.log(rightArr);
  console.log(array);

  if (leftArr.length > 0 && rightArr.length > 0) {
    return [...quickSortFCC(leftArr), pivot, ...quickSortFCC(rightArr)];
  } else if (leftArr.length > 0) {
    return [...quickSortFCC(leftArr), pivot];
  } else {
    return [pivot, ...quickSortFCC(rightArr)];
  }
}
// console.log(quickSortFCC([3, 4, 5, 6, 7, 2]));

// [4,7,2,9,5,4,6,3]
// [4,2,4,3] [5] [7,9,6]
// [2,3] [4] [4]  [5]  [6,7] [9]
// [2][3][4][5][6][7][9]
function qS1(array) {
  if (array.length <= 1) {
    return array;
  }

  let leftArr = [],
    rightArr = [];
  let pivot = array[Math.floor(array.length / 2)];
  for (var i = 0; i < array.length; i++) {
    // move element less than pivot to leftArr
    // move element greather than pivot to rightArr
    if (pivot > array[i] && array[i] != pivot) {
      leftArr.push(array[i]);
    } else if (pivot < array[i] && array[i] != pivot) rightArr.push(array[i]);
  }

  return [...qS1(leftArr), pivot, ...qS1(rightArr)];
}
// console.log(qS1([4,3,1,8,2,9,7,6,5,9,23,9,2,1,6]));

/**
 * Quickselect
 * Time complecity O(n)
 * [4,1,3,2] -> [2,1,3,4]
 *  i     j        j,i
 * p = 2
 */
function quickSelectInPlace(A, l, h, k) {
  var p = partition(A, l, h);
  if (p == k - 1) {
    return A[p];
  } else if (p > k - 1) {
    return quickSelectInPlace(A, l, p - 1, k);
  } else {
    return quickSelectInPlace(A, p + 1, h, k);
  }
}
function medianQuickselect(array) {
  return quickSelectInPlace(
    array,
    0,
    array.length - 1,
    Math.floor(array.length / 2)
  );
}
// console.log(medianQuickselect([1,2,5,7,9]));
// console.log(quickSelectInPlace([1,2,3,5,7,9], 0, 4, 3));

/**
 * Merge Sort
 * [5,1,9,2]
 * [5,1] [9,2]
 * [5][1]  [9][2]
 * [1,5] [2,9]
 *
 */
function merge(leftA, rightA) {
  var results = [],
    leftIndex = 0,
    rightIndex = 0;

  while (leftIndex < leftA.length && rightIndex < rightA.length) {
    if (leftA[leftIndex] < rightA[rightIndex]) {
      results.push(leftA[leftIndex++]);
    } else {
      results.push(rightA[rightIndex++]);
    }
  }
  var leftRemains = leftA.slice(leftIndex),
    rightRemains = rightA.slice(rightIndex);

  // Add remaining to resultant array
  return results.concat(leftRemains).concat(rightRemains);
}

// console.log(new Date(1641665920000))
// console.log(new Date(1638987520000))
// console.log(new Date(1641665920000))
// console.log(new Date().getTime())
// console.log(new Date(1641665920000))
// console.log(new Date(1641665920000))
// console.log(new Date(1641730560000))

// console.log(new Date(1639052160000))
// console.log(new Date(1639452160000))
// console.log(Date.now()-Date.parse("2021-10-20T15:24:15.000+01:00"));

const populateList = (
  targetArray,
  newArray,
  uniqId = "id",
  sortBy,
  sortOrder = "asc"
) => {
  newArray = uniqBy(concat(newArray, targetArray), uniqId);
  newArray = orderBy(newArray, [sortOrder], [sortBy]);

  return newArray;
};

console.log(populateList([{ a: 12, b: 89, id: 21 }], [{ a: 73, b: 34, id: 1 }], "b"));

// const a = { a: 2, b: 23, id: 42 }
const b = [{ a: 73, b: 34, id: 1 }, { a: 2, b: 23, id: 1 }]
const c = { a: 2, b: 23, id: 1 }

const addObjectToList = (
  targetArray,
  newObject,
  uniqId = "id",
  sortBy,
  sortOrder = "asc"
) => {
    let newArray = targetArray.map(element => {
      if (newObject[uniqId] == element[uniqId]) {
        element = newObject;
      }
      console.log(element)
      return element;
    })
    
    return populateList({
      targetArray: newArray,
      newArray: [newObject],
      uniqId,
      sortBy,
      sortOrder
    })
};

// const day = addObjectToList([{ a: 12, b: 89, id: 21 }, { a: 73, b: 34, id: 1 }], b)
// console.log(day);


const phone = "+23409017755801"
const x = phone.replace("0", "+234")
console.log(x)
console.log(phone.length)
const y = "+234" + phone.substring(5);
console.log(phone[5])
console.log(y)


