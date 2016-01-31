var BinarySearchTree = function(value){
  var tree = Object.create(BinarySearchTree.prototype);
  tree.value = value;
  tree.right = null;
  tree.left = null;
  return tree;
};

BinarySearchTree.prototype.insert = function(value){
  
  // Go LEFT if value is less than parents
  if(value < this.value){
    //If there is nothing to the node's left, put the new Tree there
    if(this.left === null){
      this.left = BinarySearchTree(value);
    } 
    //Otherwise, call insert with the value, but on the left branch until it finds a place to put it
    else {
      this.left.insert(value);
    }
    
  } 
  // GO RIGHT - Same exact logic
  else if (value > this.value){
    if(this.right === null){
      this.right = BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  }
};
BinarySearchTree.prototype.contains = function(target){
  var found = false; 
  var search = function(node){
    if(node === null){
      return;
    }
    if(node.value === target){
      found = true;
      return;
    } else {
      search(node.left);
      search(node.right);
    }
  }

  search(this);
 
  return found;

};
BinarySearchTree.prototype.depthFirstLog = function(callback){
  
  var runner = function (tree){
    if(tree === null){
      return;
    } else {
      callback(tree.value);
      runner(tree.left);
      runner(tree.right);
    }
  };

  runner(this);

};

/*
 * Complexity: What is the time complexity of the above functions?
 */
