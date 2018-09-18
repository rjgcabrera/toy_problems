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

// var minHeight = (sortedArr) => {
//     // tree balanacing problem
//     let outputTree = new BinarySearchTree(sortedArr[0]);
//     for (let i = 1; i < sortedArr.length - 1; i++) {
//         outputTree.insert(sortedArr[i]);
//     }
// }

//TODO : Try Again
function makeBalancedTree(values) {
  let tree = new BinarySearchTree();
  if (values && values.length) {
    add(tree, values, 0, values.length - 1);
  }
  return tree;
}

function add(tree, values, start, end) {
  if (start === end) {
    tree.insert(values[start]);
  }
  else if (start < end) {
    let mid = start + Math.floor((end - start) / 2);
    tree.insert(values[mid]);
    add(tree, values, start, mid - 1);
    add(tree, values, mid + 1, end);
  }
}

var minHeightBST = (sortedArr, start = 0, end = sortedArr.length - 1, bst = new BinarySearchTree()) => {
    if (start === end) {
        bst.insert(sortedArr[start]);
    } else if (start < end) {
        let midIdx = Math.floor((end - start)/ 2) + start;
        bst.insert(sortedArr[midIdx]);
        minHeightBST(sortedArr, start, midIdx - 1, bst);
        minHeightBST(sortedArr, midIdx + 1, end, bst);
        return bst;
    }
}
