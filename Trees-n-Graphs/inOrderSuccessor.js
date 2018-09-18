var BinarySearchTree = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
  this.parent = null;
};

BinarySearchTree.prototype.insert = function(value) {
  if (value < this.value) {
    if (this.left === null) {
      this.left = new BinarySearchTree(value);
      this.left.parent = this;
      return;
    }
    this.left.insert(value);
  } else if(value > this.value){
    if (this.right === null) {
      this.right = new BinarySearchTree(value);
      this.right.parent = this;
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

BinarySearchTree.prototype.breadthFirstLog = function(cb) {
  if (this === null) {
      return;
  }
  let queue = [];
  queue.push(this);

  while (queue.length > 0) {
      cb(queue[0].value);
      let node = queue.shift();
      if (node.left !== null) {
          queue.push(node.left);
      }
      if (node.right !== null) {
          queue.push(node.right);
      }
  }
};

var inOrderSuccessor = (bst, nodeVal, found = false, result = null) => {
    // find out if bst contains nodeVal
        // if not, return -1
        // else
            // return that node's inOrderSuccessor
    if (result) {
        return result;
    }
    if (found) {
        result = bst.value;
    }
    if (bst !== null) {
        inOrderSuccessor(bst.left, nodeVal, found);
        if (bst.value === nodeVal) {
          // return successor
          found = true;
          return;
        }
        //console.log(bst.value);
        inOrderSuccessor(bst.right, nodeVal, found);
    }

   return result;

};
