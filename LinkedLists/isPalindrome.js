var LinkedList = function() {
    this.head = null;
    this.tail = null;
};

//write methods here!

LinkedList.prototype.addToTail = function(value) {

  var newTail = this.makeNode(value);
  if ( !this.head ) { this.head = newTail; }
  if ( this.tail ) { this.tail.next = newTail; }
  this.tail = newTail;
  };

LinkedList.prototype.removeHead = function() {

  var currentHead = this.head;
  if (!this.head) {
    return null;
  }
  if (this.head === this.tail) {
    this.head = this.tail = null;
  } else {
    this.head = this.head.next;
  }
  return currentHead ? currentHead.value : null;
  };

LinkedList.prototype.contains = function(target) {

  var node = this.head;
  while ( node ) {
    if ( node.value === target ) { return true; }
    node = node.next;
  }
  return false;
  };

LinkedList.prototype.makeNode = function(value) {

  var node = {};
  node.value = value;
  node.next = null;
  return node;
};

var isPalindrome = (linkedList) => {
  let len = 0;
  let currNode = linkedList.head;
  let halfLen;
  let halfListObj = {};
  while (currNode !== null) {
    len += 1;
    currNode = currNode.next;
  }
  halfLen = Math.floor(len / 2);
  currNode = linkedList.head;
  let iter = 0;
  while (iter + 1 <= halfLen) {
    halfListObj[currNode.value] = true;
    currNode = currNode.next;
    iter += 1;
  }
  if (len % 2 !== 0) {
    halfListObj[currNode.value] = true;
    currNode = currNode.next;
  }
  while (currNode !== null) {
    if (halfListObj[currNode.value] !== true) {
      return false;
    }
    currNode = currNode.next;
  }
  return true;
};
