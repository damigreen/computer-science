function BinaryTreeNode(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function BinaryTree() {
  this._root = null;
}

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
tree.traverseInOrderIterative();
