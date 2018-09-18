var BinarySearchTree = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
};

BinarySearchTree.prototype.insert = function(value) {
  if (this.value === undefined) {
    this.value = value;
  } else if (value < this.value) {
    if (this.left === null) {
      this.left = new BinarySearchTree(value);
      return;
    }
    this.left.insert(value);
  } else if(value > this.value) {
    if (this.right === null) {
      this.right = new BinarySearchTree(value);
      return;
    }
    this.right.insert(value);
  }
};

BinarySearchTree.prototype.contains = function(value) {
  if(value === this.value) {
    return true;
  } else if (value < this.value && this.left !== null) {
    return this.left.contains(value);
  } else if (value > this.value && this.right !== null) {
    return this.right.contains(value);
  }
  return false;
};

BinarySearchTree.prototype.depthFirstLog = function(cb) {
  cb(this.value);
  if (this.left !== null) {
    this.left.depthFirstLog(cb);
  }
  if (this.right !== null) {
    this.right.depthFirstLog(cb);
  }
};

var calcDepth = (bst, levels = 0) => {
  if (bst === null) {
      return 0;
  }
  let left = calcDepth(bst.left, levels + 1) || levels;
  let right = calcDepth(bst.right, levels + 1) || levels;
  return left > right ? left : right;
};

var checkBalanced = (bst) => {
    let left = calcDepth(bst.left, 1);
    let right = calcDepth(bst.right, 1);
    return Math.abs(left - right) <= 1;
};
