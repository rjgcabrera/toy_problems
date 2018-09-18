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

var linkedList = new LinkedList();
linkedList.addToTail(1);
linkedList.addToTail(2);
linkedList.addToTail(3);
linkedList.addToTail(4);

let kthToLast = (linkedList, kthElem) => {
  let current = linkedList.head;
  let length = 0;
  let count = 0;
  while (current !== null) {
    length++;
    current = current.next;
  }
  current = linkedList.head;
  while (current !== null) {
    if (length - count === kthElem) {
      return current;
    }
    count++;
    current = current.next;
  }
  return -1;
};
