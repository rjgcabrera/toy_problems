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
linkedList.addToTail(2);
linkedList.addToTail(4);
linkedList.addToTail(3);
linkedList.addToTail(2);
linkedList.addToTail(5);
linkedList.addToTail(6);
linkedList.addToTail(2);

//console.log(linkedList);

var removeDups = (linkedList) => {
    var nodeObj = {};
    var currNode = linkedList.head;
    nodeObj[currNode.value] = true;
    while (currNode.next !== null) {
        if (nodeObj[currNode.next.value] !== undefined) {
            if (currNode.next.next !== null) {
                currNode.next = currNode.next.next;
            } else {
                linkedList.tail = currNode;
                currNode.next = null;
            }

        } else {
            nodeObj[currNode.next.value] = true;
            currNode = currNode.next;
        }
    }
    return linkedList;
};

// console.log(removeDups(linkedList));

var removeDupsNoBuff = (linkedList) => {
  var current = linkedList.head;
  var subsequent;
  while (current !== null) {
    subsequent = current;
    while (subsequent.next !== null) {
      if (subsequent.next.value === current.value) {
        if (subsequent.next.next === null) {
            linkedList.tail = subsequent;
        }
        subsequent.next = subsequent.next.next;
      } else {
        subsequent  = subsequent.next;
      }

    }
    current = current.next;
  }
  return linkedList
}
