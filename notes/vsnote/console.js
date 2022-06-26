function BinaryTreeNode(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function BinaryTree() {
  this._root = null;
}

/*
            42

        41      50

    10     40 45       75    
*/

/**
 * Pre-Order Traversal
 * 42 -> 41 -> 10 <->
 * 40 -> 50 -> 45 -> 75
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

// nodeStack: []
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

  // Pop all items one by one. Do follomonthing for every popped item
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

/**
 * * Binary Search Tree
 */
function BinarySearchTree() {
  this._root = null;
}

BinarySearchTree.prototype.insertCP = function (value) {
  var node = new BinaryTreeNode(value);
  if (!this._root) {
    this._root = node;
    return;
  }

  var current = this._root;
  while (true) {
    if (value < current.value) {
      if (!current.left) {
        current.left = node;
        return;
      }
      current = current.left;
    } else {
      if (!current.right) {
        current.right = node;
        return;
      }
      current = current.right;
    }
  }
};

/**
 * * Insertion
 * check the root of the tree if it is empty
 * if it is empty
 * set / make root to the new node
 *
 * if it is not empty
 * traverse the root of the tree
 *
 * if the value of the new node is less than the value of the current node
 * check if the current node has a left child
 * if there is a left child
 * set current root to the left child
 * if the current node has no left child
 * set the left child of the current root to the new node
 *
 * if the value of the new node is greater than the value of the current node
 * check if the current node has a right child
 * if there is a right child
 * set current root to the right child
 * if the current node has no right child
 * set the right child of the current root to the new node
 *
 * Time Complexity (for balanced trees): O(log2(n))
 * Time Complexity (for unbalanced trees): O(n)
 */
BinarySearchTree.prototype.insert = function (value) {
  var thisNode = { left: null, right: null, value: value };
  if (!this._root) {
    this._root = thisNode;
  } else {
    var currentRoot = this._root;
    while (true) {
      if (value < currentRoot.value) {
        if (currentRoot.left == null) {
          currentRoot.left = thisNode;
          break;
        } else {
          currentRoot = currentRoot.left;
        }
      } else if (value > currentRoot.value) {
        if (currentRoot.right == null) {
          currentRoot.right = thisNode;
          break;
        } else {
          currentRoot = currentRoot.right;
        }
      } else break; // in case they are both the same value
    }
  }
};

console.log("**********************Binary Search Tree**********************");
let bst = new BinarySearchTree();
bst.insert(10);
bst.insert(12);
bst.insert(11);
bst.insert(9);
bst.insert(9.5);
bst.insert(8);
// console.log(bst);

let bst_cp = new BinarySearchTree();
bst_cp.insertCP(10);
bst_cp.insertCP(12);
bst_cp.insertCP(11);
bst_cp.insertCP(9);
bst_cp.insertCP(9.5);
bst_cp.insertCP(8);
// console.log(bst_cp);

BinarySearchTree.prototype.removeCP = function (value) {
  var current = this._root;
  var parent = null;
  while (current) {
    if (value < current.value) {
      parent = current;
      current = current.left;
    } else if (value > current.value) {
      parent = current;
      current = current.right;
    } else {
      // we have found the node to be deleted
      // case 1: no children
      if (!current.left && !current.right) {
        if (parent) {
          if (parent.left === current) {
            parent.left = null;
          } else {
            parent.right = null;
          }
        } else {
          this._root = null;
        }
      } else if (!current.left) {
        if (parent) {
          if (parent.left === current) {
            parent.left = current.right;
          } else {
            parent.right = current.right;
          }
        } else {
          this._root = current.right;
        }
      } else if (!current.right) {
        if (parent) {
          if (parent.left === current) {
            parent.left = current.left;
          } else {
            parent.right = current.left;
          }
        } else {
          this._root = current.left;
        }
      } else {
        // case 2: two children
        var temp = current.right;
        var tempParent = current;
        while (temp.left) {
          tempParent = temp;
          temp = temp.left;
        }
        current.value = temp.value;
        if (tempParent === current) {
          tempParent.right = temp.right;
        } else {
          tempParent.left = temp.right;
        }
      }
      break;
    }
  }
};

/**
 * * Deletion
 * There are three cases to consider:
 *
 * case 1: no children
 * return null
 *
 * case 2: one child
 * return the child then child replaces parent
 *
 * case 3: two children
 * find the inorder successor
 * i.e find the maximum of the left subtree or
 * find the minumum of the right subtree
 * and replace the node with it /
 * to replace that node
 *
 * Time Complexity (for balanced tree): O(log2(n))
 * Time Complexity (for unbalanced trees): O(n)
 */
BinarySearchTree.prototype.remove = function (value) {
  return deleteRecursively(this._root, value);

  function deleteRecursively(root, value) {
    // case 1: no children
    if (!root) {
      return null;
    } else if (value < root.value) {
      root.left = deleteRecursively(root.left, value);
    } else if (value > root.value) {
      root.right = deleteRecursively(root.right, value);
    } else {
      if (!root.left && !root.right) {
        return null; //case 1
      } else if (!root.left) {
        root = root.right; // case 2
        return root;
      } else if (!root.right) {
        root = root.left; // case 2
        return root;
      } else {
        var temp = findMin(root.right); //case 3
        root.value = temp.value;
        root.right = deleteRecursively(root.right, temp.value);
        return root;
      }
    }
    return root;
  }
};

function findMin(root) {
  while (root.left) {
    root = root.left;
  }
  return root;
}

let bst_a = new BinarySearchTree();
// bst_a.insert(5);
// bst_a.insert(4);
// bst_a.insert(3);
// bst_a.insert(2);
// bst_a.insert(1);
// bst_a.insert(6);
// bst_a.insert(7);
// bst_a.insert(8);
// bst_a.remove(1);
// bst_a.insert(20);
// console.log(bst_a);

let bst_b = new BinarySearchTree();
bst_b.insert(5);
bst_b.insert(6);
bst_b.insert(4);
bst_b.insert(7);
bst_b.insert(8);
bst_b.remove(5);
// console.log(bst_b);

// let bst_b = new BinarySearchTree();
// let bst_b = {left: {left: {left: null, right: null, value: 8}, right: {left: null, right: null, value: 9}, value: 10}, right: {left: {left: null, right: null, value: 11}, right: {left: null, right: null, value: 12}, value: 13}};
// let bst_b = {
//   left: {
//     left: { left: null, right: null, value: 0.1 },
//     right: { left: null, right: null, value: 1.1 },
//     value: 1,
//   },
//   right: {
//     left: { left: null, right: null, value: 8.5 },
//     right: { left: null, right: null, value: 10 },
//     value: 9,
//   },
//   value: 2,
// };

/**
 * * Search
 * Traverse the tree
 * check if the current root is smaller or greater than the value
 * if it is smaller, go to the left (recursively)
 * if it is greater, go to the right (recursively)
 *
 * Time Complexity (for balanced tree): O(log2(n))
 * Time Complexity (for unbalanced trees): O(n)
 */
BinarySearchTree.prototype.searchCP = function (value) {
  return searchRecursively(this._root, value);

  function searchRecursively(root, value) {
    if (!root) {
      return false;
    } else if (value < root.value) {
      return searchRecursively(root.left, value);
    } else if (value > root.value) {
      return searchRecursively(root.right, value);
    } else {
      return true;
    }
  }
};

BinarySearchTree.prototype.search = function (value) {
  var current = this._root;
  while (current) {
    if (value < current.value) {
      current = current.left;
    } else if (value > current.value) {
      current = current.right;
    } else {
      return true;
    }
  }
  return false;
};

console.log(bst_b.search(7));
console.log(bst_b.search(5));

console.log(bst_b.searchCP(5));
console.log(bst_b.searchCP(7));

const hashCode = (s) => {
  return s.split("").reduce(function (a, b) {
    a = (a << 5) - a + b.charCodeAt(0);
    return a & a;
  }, 0);
};

console.log(hashCode("damis"));

const ueye = "slfnasknflasdnfafnanfl oooooo";
console.log(ueye.replace("oooooo", ""));

let x = [
  { month: "21 June", value: 122465.9 },
  { month: "21 June", value: 42465.1 },
  { month: "27 June", value: 72464.5 },
  { month: "27 June", value: 32463.5 },
  { month: "27 June", value: 42464.5 },
  { month: "26 June", value: 32463.7 },
  { month: "26 June", value: 42463.7 },
  { month: "25 June", value: 2462.9 },
  { month: "25 June", value: 42462.9 },
  { month: "25 June", value: 52462.9 },
  { month: "24 June", value: 82462.3 },
  { month: "24 June", value: 32462.3 },
  { month: "24 June", value: 42462.3 },
  { month: "23 June", value: 32461.5 },
  { month: "23 June", value: 72461.5 },
  { month: "23 June", value: 42461.5 },
  { month: "22 June", value: 32460.8 },
  { month: "22 June", value: 42460.8 },
  { month: "22 June", value: 62460.8 },
];

// let result = Array.from(
//   // x.reduce(
//   //   (m, { month, value }) => m.set(month, Math.max(m.get(month) || 0, value)),
//   //   new Map()
//   // )
// );
let uniqueMonth = "";
// let y = Array.from(
//   x.reduce((p, c, i, a) => {
//     console.log(c);
//     console.log(p);
//     console.log("--------------------");

//     // w = c.month;
//     if (w == c.month) {
//       return p + c.value;
//     } else w = c.month;
//   }, 0)
// );

// let z = x.reduce((p, curr, i, a) => {
//   if (month == curr.month) {
//     arr.push(curr.value);
//   } else {
//     if (arr.length > 0) {
//       result.push(Math.max(arr));
//     } else arr.push(curr.value);
//     arr = [];
//     month = curr.month;
//   }
//   return result;
// }, []);

/**
 *
 * group readings based on date
 *
 * parseDateMonth
 *
 *           a            b           c
 * input: [10,11,12...,10,11,12,...10,11,12,...]
 * output: [[mon], [tue], [wed], [thurs], [fri],...]
 *
 * individual array element
 * mon = [10,11,12,13...]
 * tue = [10,11,12,13...]
 * wed = [10,11,12,13...]
 * ...
 * max value
 * mon = [100]
 * tue = [700]
 * wed = [400]
 * ...
 *
 * return array
 * [100,700,400,500,1000,...]
 */
/**
 * index = 0
 * month = 25 june
 * temp = 25 june
 * arr = [10]
 *
 * index = 1
 * month = 26 june
 * temp = 25 june
 * arr = [10]
 *
 */
// let month = "";
let result = [];
let arr = [];
let temp;

let z = Array.from(
  x.reduce((p, curr, i, a) => {
    // find the max for a
    let month = curr.month; // 25 june
    // compare temp and current month
    // if they are the same
    // push month value to arr
    // else
    if (temp == month) {
      let value = curr.value;
      arr.push(value);
      if (i == a.length - 1) result.push(Math.max(...arr));
    } else {
      if (arr.length > 0) {
        result.push(Math.max(...arr));
        arr = [];
      }
      temp = month;
      arr.push(curr.value);
    }
    //get the value
    //push value into arr
    // arr.push(value);
    return result;
    // if (arr.length) return result.push(Math.max(...arr))
  }, [])
);

// console.log(result);
// console.log(y);
// console.log(z);
