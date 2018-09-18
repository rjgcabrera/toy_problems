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


let deleteNodeByVal = (linkedList, val) => {
  let current = linkedList.head;
  while (current.next !== null) {
    if (current.next.value === val) {
      if (current.next.next === null) {
        linkedList.tail = current;
      }
      current.next = current.next.next;
    }
    current = current.next;
  }
};
