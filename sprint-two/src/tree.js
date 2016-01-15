var Tree = function(value){
  var newTree = {};
  newTree.value = value;
  
  for (var key in treeMethods) {
    newTree[key] = treeMethods[key];
  }
  
  
  newTree.children = []; 
  
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  this.children.push(Tree(value));
};

treeMethods.contains = function(target, currTree){
  if (currTree === undefined) {
    currTree = this;
  } 
  if (currTree.value === target){
    return true;
  } else if (!!currTree.children.length) {
    var childrenHaveTarget = false;
    for (var i = 0; i < currTree.children.length; i++) {
      childrenHaveTarget = childrenHaveTarget || currTree.contains(target, currTree.children[i]);
    }
    return childrenHaveTarget;
  } else {
    return false;    
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 addChild = O(n)
 contains = O(n)
 
 */
