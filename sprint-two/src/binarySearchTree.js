var BinarySearchTree = function(value){
  var tree = Object.create(BinarySearchTree.prototype);
  
//     [value = value]
//         /     \
//      < /       \ >
//       /         \
//      /           \
// [left = null]   [right = null]
  
  tree.value = value;
  tree.left = null;
  tree.right = null;
  tree.parent = null;
  
  return tree;  
};

BinarySearchTree.prototype.insert = function (valueToBeInserted) {
  //this.value = this.tree, goes to right if less than 
  if (this.value > valueToBeInserted) {
    if (this.left === null) {
      this.left = BinarySearchTree(valueToBeInserted);
    } else {
      this.left.insert(valueToBeInserted);
    }
  } else if (this.value < valueToBeInserted) {
    if (this.right === null) {
      this.right = BinarySearchTree(valueToBeInserted);
    } else {
      this.right.insert(valueToBeInserted);
    }
  }
  //edge cases - bigger than one, smaller than the other, rearrange whole thing 
};

BinarySearchTree.prototype.contains = function (valueToBeFound, currTree) {
  currTree = currTree === undefined ? this : currTree;
  
  if(currTree === null) {
    return false;
  } else if (currTree.value === valueToBeFound) {
    return true;
  } else {
    var childrenHave = false;
    if(valueToBeFound < currTree.value){
      childrenHave = childrenHave || currTree.contains(valueToBeFound, currTree.left);
    } else if (valueToBeFound > currTree.value){
      childrenHave = childrenHave || currTree.contains(valueToBeFound, currTree.right);
    }
    return childrenHave;
  }
  
};

BinarySearchTree.prototype.depthFirstLog = function (callback, currTree) {
 //treeTraversal function would increase modularity
  currTree = currTree === undefined ? this : currTree;

  if (currTree === null) {
    return;
  } else {
    callback(currTree.value);
    currTree.depthFirstLog(callback, currTree.left);
    currTree.depthFirstLog(callback, currTree.right);
  }
};




/*
 * Complexity: What is the time complexity of the above functions?
 insert() = O(log(n))
 contains() = O(log(n))
 depthFirstLog() = O(n)
 */
