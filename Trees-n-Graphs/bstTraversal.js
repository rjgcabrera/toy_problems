var inOrderTraversal = function(node) {
  if (node.value !== null) {
    inOrderTraversal(node.left);
    visit(node.value);
    inOrderTraversal(node.right);
  }
};

var preOrderTraversal = function(node) {
  if (node.value !== null) {
    visit(node.value);
    preOrderTraversal(node.left);
    preOrderTraversal(node.right);
  }
};

var postOrderTraversal = function(node) {
  if (node !== null) {
    postOrderTraversal(node.left);
    postOrderTraversal(node.right);
    visit(node.value);
  }
};

var visit = function(val) { // visit() can do anything you want
  console.log(val);
};
