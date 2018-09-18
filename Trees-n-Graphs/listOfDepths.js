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

BinarySearchTree.prototype.logLevels = function() {
  let result = [];
  let current = [];
  if (this === null) {
      return;
  } else {
      current.push(this);
  }

  while (current.length > 0) {
    result.push(current.map(elem => elem.value));
    let parents = current;
    current = [];

    for (let i = 0; i < parents.length; i++) {
      if (parents[i].left !== null) {
        current.push(parents[i].left);
      }
      if (parents[i].right !== null) {
        current.push(parents[i].right);
      }
    }
  }
  return result;
};
