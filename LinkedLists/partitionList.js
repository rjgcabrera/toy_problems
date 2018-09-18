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

let partition = (list, val) => {
  // TODO: fix by keeping LinkedList abstractions
  let node = list.head,
    smallerHead, smallerTail, largerHead, largerTail;

  smallerHead = smallerTail = largerHead = largerTail = null;
  while (node) {
    let next = node.next;
    node.next = null;
    if (node.value >= val) {
      if (!largerTail) {
        largerHead = largerTail = node;
      }
      else {
        largerTail = largerTail.next = node;
      }
    }
    else if (node.value < val) {
      if (!smallerHead) {
        smallerHead = smallerTail = node;
      }
      else {
        smallerTail = smallerTail.next = node;
      }
    }
    node = next;
  }

  if (smallerTail) {
    smallerTail.next = largerHead;
  }
  return smallerHead || largerHead;
};
// let partitionList = (linkedList, val) => {
//   let current = linkedList.head;
//   while (current.next.next !== null) {
//     if (current.next.next.value < val) {
//       let tmp = current.next.next.next;
//       current.next.next.next = current.next;
//       current.next = current.next.next;
//       current.next.next.next = tmp;
//     }
//     current = current.next;
//   }
// }
