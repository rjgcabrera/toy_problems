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

var isValidBST = (bst) => {
  //I: binary tree
  //O: bool denoting vallid bst
  let result;
  if (bst === null || (bst.left === null && bst.right === null)) {
      return true;
  } else if ((bst.left !== null && bst.left.value > bst.value) || (bst.right !== null && bst.right.value < bst.value)) {
      return false;
  } else {
      result = isValidBST(bst.left) && isValidBST(bst.right);
  }
  return result;
};
