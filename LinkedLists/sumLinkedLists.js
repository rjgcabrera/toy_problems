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

var sumLinkedLists = (intList1, intList2) => {
  let currNode1 = intList1.head;
  let currNode2 = intList2.head;
  let sumList = new LinkedList();
  let carry = 0;
  while (currNode1 !== null && currNode2 !== null) {
    let sum = currNode1.value + currNode2.value + carry;
    if (carry === 1) {
      carry = 0;
    }
    if (sum > 9) {
      carry = 1;
      sumList.addToTail(sum - 10);
    } else {
      sumList.addToTail(sum);
    }
    currNode1 = currNode1.next;
    currNode2 = currNode2.next;
  }
  if (carry === 1) {
    sumList.addToTail(carry);
  }
  return sumList;
};

//TODO: Fix space efficiency
var sumOrderedLists = (intList1, intList2) => {
  let currNode1 = intList1.head;
  let currNode2 = intList2.head;
  let nodeArr1 = [];
  let nodeArr2 = [];
  var sumArr = [];
  let sumList = new LinkedList();
  while (currNode1 !== null && currNode2 !== null) {
    nodeArr1.push(currNode1.value);
    nodeArr2.push(currNode2.value);
    currNode1 = currNode1.next;
    currNode2 = currNode2.next;
  }
  let longerLen = nodeArr1.length >= nodeArr2.length ? nodeArr1.length : nodeArr2.length;
  let carry = 0;
  for (let i = longerLen - 1; i >= 0; i--) {
    let sum = nodeArr1[i] + nodeArr2[i] + carry;
    if (sum > 9) {
      carry = 1;
    } else {
      carry = 0;
    }
    sumArr.unshift(sum);
  }
  for (let j = 0; j < sumArr.length; j++) {
    sumList.addToTail(sumArr[j]);
  }

  return sumList;
};
