function BinaryTreeNode(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function BinaryTree() {
  this._root = null;
}

/*
 * Pre-Order Traversal
 */
BinaryTree.prototype.traversePreOrder = function () {
  traversePreOrderHelper(this._root);

  function traversePreOrderHelper(node) {
    if (!node) return;
    console.log(node.value);
    traversePreOrderHelper(node.left);
    traversePreOrderHelper(node.right);
  }
};

// [40[20, 10], 30[2, 3]]
// [40, 30]
// 40 - [30]
// [30, 10, 20]
// 20 - [30, 10]
// 10 - [30]
// 30
BinaryTree.prototype.traversePreOrderIterative = function () {
  // Create an empty staci and push root to it
  var nodeStack = [];
  nodeStack.push(this._root);

  // Pop all items one by one. Do following for every popped item
  // a) print it
  // b) push its left child
  // c) push its right child
  // Note that right child is pushed first so that left
  // is processed first
  while (nodeStack.length) {
    // pop items from stack and print it
    var node = nodeStack.pop();
    console.log(node.value);

    if (node.right) {
      nodeStack.push(node.right);
    }

    if (node.left) {
      nodeStack.push(node.left);
    }
  }
};

/*
 * In-Order Traversal
 */
BinaryTree.prototype.traverseInOrder = function () {
  traverseInOrderHelper(this._root);

  function traverseInOrderHelper(node) {
    if (!node) return;
    traverseInOrderHelper(node.left);
    console.log(node.value);
    traverseInOrderHelper(node.right);
  }
};

BinaryTree.prototype.traverseInOrderIterative = function () {
  var current = this._root,
    s = [],
    done = false;
  while (!done) {
    // Reach the leftmost node
    if (current != null) {
      // Place pointer to a tree node on the stack
      // before traversing the node's left subtree
      s.push(current);
      current = current.left;
    } else {
      if (s.length) {
        current = s.pop();
        console.log(current.value);
        current = current.right;
      } else {
        done = true;
      }
    }
  }
};

/*
 * Post-Order Traversal
 */
BinaryTree.prototype.traversePostOrder = function () {
  traversePostOrderHelper(this._root);

  function traversePostOrderHelper(node) {
    if (node.left) traversePostOrderHelper(node.left);
    if (node.right) traversePostOrderHelper(node.right);
    console.log(node.value);
  }
};

BinaryTree.prototype.traversePostOrderIterative = function () {
  // create two stacks
  var s1 = [],
    s2 = [];

  // push root to the first stack
  s1.push(this._root);

  // run while first stack is not empty
  while (s1.length) {
    // pop an item from s1 and append it to s2
    var node = s1.pop();
    s2.push(node);

    // push the left and right children of removed item to s1
    if (node.left) s1.push(node.left);
    if (node.right) s1.push(node.right);
  }
  // print all elememnt of second stack
  while (s2.length) {
    var node = s2.pop();
    console.log(node.value);
  }
};

/**
 * * Level-Order Traversal
 * create a queue[]
 * create a variable root to hold the root node
 * check root
 * if there is no root
 * return
 * search queue
 * while queue[] is not empty
 * shift queue and save the shifted node to temp /
 * remove the first element in queue[] and
 * create a variable temp to hold it
 * print the the value of the node temp.value
 *
 * check if the node has a left child (temp.left)
 * push the left child to queue
 * check if the node has a right child (temp.right)
 * push the right child to queue
 *
 */
BinaryTree.prototype.traverseLevelOrder = function () {
  // breadth first search
  var root = this._root,
    queue = [];
  if (!root) return;
  queue.push(root);

  while (queue.length) {
    var temp = queue.shift();
    console.log(temp.value);
    if (temp.left) queue.push(temp.left);
    if (temp.right) queue.push(temp.right);
  }
};
/*
            42
        41      50
    10     40 45       75    
  */
// Pre-Order Traversal
const one = new BinaryTreeNode(42);
const two = new BinaryTreeNode(41);
const five = new BinaryTreeNode(50);
const three = new BinaryTreeNode(10);
const four = new BinaryTreeNode(40);
const six = new BinaryTreeNode(45);
const seven = new BinaryTreeNode(75);

one.left = two;
one.right = five;

five.left = six;
five.right = seven;

two.left = three;
two.right = four;

const tree = new BinaryTree();
tree._root = one;
// tree.traversePreOrder();
// tree.traversePreOrderIterative();
// tree.traverseInOrder();
// tree.traverseInOrderIterative();
// tree.traversePostOrder();
// tree.traversePostOrderIterative();
tree.traverseLevelOrder();

console.log("pppppp".slice(0, "pppppp".indexOf(" ")));
console.log(new Date(1703074944000));

/**
 * [{a: 1, b: 5}, {a: 10, b: 3}, {a: 3, b: 4}]
 * [1,10, 3]
 * [5,3,4]
 * [-4,7,-1]
 * 7-1 = 6
 * 6-4 = 2
 *
 * petrol:     [3,4,6,3,4,3,7]
 * distance:   [2,4,9,1,3,6,2]
 * difference: [1,0,-3,2,1,-3,5]
 * 0: 1+0 = (1)-3 = (-2)
 * 1: (-3)
 * 2: (-3)
 * 3: 2+1=(3)-3=(0)-3=(-3)
 * 4: 0+1=(1)-3=(-2)
 * 5: 0-3=(-3)
 * 6: 0+5=(5)+1=(6)+0=(6)-3=(3)+2=(5)+1=(6)-3=(3)
 *
 *
 */
let petrolpump = [
  [1, 5],
  [3, 4],
  [10, 3],
];
// let petrolpump = [ [ 1, 5 ], [ 10, 3 ], [ 3, 4 ] ]
// let petrolpump = [ [ 10, 3 ], [ 1, 5 ], [ 3, 4 ] ]
function truckTour(petrolpumps) {
  let n = petrolpumps.length,
    petrolDiff = 0,
    index = 0;
  for (let i = 0; i < n; i++) {
    petrolDiff += petrolpumps[i][0] - petrolpumps[i][1];
    if (petrolDiff < 0) {
      index = i + 1;
      petrolDiff = 0;
    }
  }
  return index;
}
let truck_tour = truckTour(petrolpump);
console.log(truck_tour);

console.log(new Date("2022-05-19 21:53:46").getTime());
console.log(new Date().getTime());
console.log(new Date(1653156378606));
console.log(new Date(1653156378606));
// 1652993626000
// 1653156378606

function solve1(arr, queries) {
  /**
   *
   * [33,11,44,11,55]
   * i: i < len;  i++
   * j: j < len
   *
   * [33,11], [11,44], [44,11],
   */
  let n = arr.length,
    arrMin = [];

  for (let i = 0; i < n; i++) {
    let arrMax = [],
      j = 0;

    while (i + j < n && j < queries) {
      arrMax.push(arr[i + j]);
      j++;
    }
    if (arrMax.length == queries) arrMin.push(Math.max(...arrMax));
  }

  return Math.min(...arrMin);
}

// let arr = [33, 11, 44, 11, 55];
// let query1 = 1;
// let query2 = 2;
// let query3 = 3;
// let query4 = 4;
// let query5 = 5;

// console.log(solve(arr, query2));
// console.log(solve1(arr, query2));

function solve(arr, queries) {
  /**
   *
   * [33,11,44,11,55]
   * i: i < len;  i++
   * j: j < len
   *
   * [33,11], [11,44], [44,11],
   */

  let n = arr.length,
    arrMinMax = [];
  for (let k = 0; k < queries.length; k++) {
    let arrMin = [];
    for (let i = 0; i < n; i++) {
      let arrMax = [],
        j = 0;

      while (i + j < n && j < queries[k]) {
        arrMax.push(arr[i + j]);
        j++;
      }
      if (arrMax.length == queries[k]) arrMin.push(Math.max(...arrMax));
    }
    console.log(Math.min(...arrMin));
    // return Math.min(...arrMin);
    arrMinMax.push(Math.min(...arrMin));
  }
  return arrMinMax;
}

function solveX(arr, queries) {
  const answers = [];
  for (let q of queries) {
    let t = [];
    let x = false;
    let max = Math.max(...arr.slice(0, q));
    let j = 0;
    while (q + j <= arr.length) {
      max = x
        ? Math.max(...arr.slice(j, j + q))
        : Math.max(max, arr[j + q - 1]);
      t.push(max);
      x = max === arr[j];
      j++;
    }
    answers.push(Math.min(...t));
  }
  return answers;
}

function solveY(arr, queries) {
  const n = arr.length,
    // Arrays to store previous and next larger
    left = Array(n).fill(-1),
    right = Array(n).fill(n);

  // The stack (used to find previous and next larger):
  let s = [],
    s_peek = () => s[s.length - 1];

  /* Fill elements of left[] (the closest
  larger value on the left of i) */
  for (let i = 0; i < n; i++) {
    while (arr[s_peek()] <= arr[i]) s.pop();
    if (s.length) left[i] = s_peek();
    s.push(i);
  }

  //Empty the stack, as stack is going to be used for right[]
  s = [];

  /* Fill elements of right[] (the closest
  larger value on the right of i) */
  for (let i = n - 1; i >= 0; i--) {
    while (arr[s_peek()] <= arr[i]) s.pop();
    if (s.length) right[i] = s_peek();
    s.push(i);
  }

  // Create and initialize the result array
  const result = Array(n + 1).fill(Infinity);

  /* Fill result[] by comparing maximums of all 
  sizes computed using left[] and right[] */
  for (let i = 0; i < n; i++) {
    // size of the window
    const size = right[i] - left[i] - 1;
    /* arr[i] is a possible result for this size window,
      so check if arr[i] is lesser than min for 'size' */
    result[size] = Math.min(result[size], arr[i]);
  }

  // Some entries in result[] may not be filled yet. Fill
  // them by taking values from right side of result[]
  for (let i = n - 1; i >= 1; i--) {
    result[i] = Math.min(result[i], result[i + 1]);
  }

  /* return the mapped 'query' array, replacing each query
  number (i.e. window size) by the result computed for it */
  return queries.map((query) => result[query]);
}

function arrayMax(arr, start, end) {
  let max = 0;
  while (start < end) {
    max = Math.max(max, arr[start++]);
  }
  return max;
}

function solveA(n, arr, queries) {
  return queries.map((d) => {
    let max = arrayMax(arr, 0, d);
    let min = max;
    let start = 0;
    for (let end = d + 1; end <= n; ++end) {
      // Equivalent to dequeue.
      if (arr[start++] === max) {
        max = arrayMax(arr, start, end);
        if (max < min) min = max;
      }
    }
    return min;
  });
}

console.log("=================== solve ===================");
let arr = [33, 11, 44, 11, 55];
let query1 = 1;
let query2 = 2;
let query3 = 3;
let query4 = 4;
let query5 = 5;

console.log("=================== solve ===================");
// console.log(solve(arr, query2));
console.log(solve(arr, [1, 2, 3, 4, 5]));
console.log(solveX(arr, [1, 2, 3, 4, 5]));
console.log(solveY(arr, [1, 2, 3, 4, 5]));
console.log(solveA(arr.length, arr, [1, 2, 3, 4, 5]));
console.log(new Date().getTime() / 1000);

var tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);
console.log(tomorrow.getTime());

class ClassWithStaticMethod {
  static staticProperty = "someValue";
  static staticMethod(a, b) {
    return "static method has been called.";
  }
  static {
    console.log("Class static initialization block called");
  }
}

console.log(ClassWithStaticMethod.staticProperty);
// output: "someValue"
console.log(ClassWithStaticMethod.staticMethod(4, 2));
console.log(ClassWithStaticMethod);
// output: "static method has been called."
