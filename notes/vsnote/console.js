function BinaryTreeNode(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function BinaryTree() {
  this._root = null;
}

BinaryTree.prototype.traversePreOrder = function() {
  traversePreOrderHelper(this._root)
  function traversePreOrderHelper(node) {
    if (!node) return;
    console.log(node.value);
    traversePreOrderHelper(node.left)
    traversePreOrderHelper(node.right)
  }
}