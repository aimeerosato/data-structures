var Tree = function(value, parentTree){
  var newTree = {};
  
  newTree.value = value;
  newTree.children = []; 
  newTree.parent = parentTree || null;
  
  for (var key in treeMethods) {
    newTree[key] = treeMethods[key];
  }
    
  return newTree;
};

var treeMethods = {};
treeMethods.addChild = function(value){
  // Add new tree to parent's children, set child's parent to this
  this.children.push(Tree(value, this));
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

// removeFromParent takes a child and removes it from the parent tree
treeMethods.removeFromParent = function(valueToDetatch){
 // Create holder for child being detatched
 // First remove a child by using traverseTree function
 var removedChild;
 // Somehow track if valueToDetach was found
 var wasFound = false;
 this.traverseTree( function (node) {

    // visit every child and compare its value to valueToDetatch    
    // Assign value to remove child if it has the value AND it hasn't been found yet
   if(node.value === valueToDetatch && !wasFound) {
    //return correct tree
    removedChild = node;
    //if if valueToDetach was found, say so
    wasFound = true;
   }

 });
 // Expect the parent to not have any reference to child  // Need a general way to find parent (can't use this)
 removedChild.parent.children[Array.prototype.indexOf(removedChild)] = null;
 // Expect the child to not have any reference to parent 
 removedChild.parent = null;
 // Expect to return the child tree
 return removedChild;
};


 //traverseTree func /inputs - node, callback
 treeMethods.traverseTree = function(callback, node){
  // define node as the parent tree you are transversing (i.e. - THIS), otherwise the node on the tree you want to search
  node = node === undefined ? this : node;
  //if the node doesn't exist, don't do anything and stop traversing
  //if(node.children)
  //do something on this node of tree
  callback(node);  
  //check if the node has children
  if(node.children.length){
    //traverse tree on each child in the children
    for(var i = 0; i < node.children.length; i++){
      node.traverseTree(callback, node.children[i]);
    }
  }
 };




/*
 * Complexity: What is the time complexity of the above functions?
 addChild = O(n)
 contains = O(n)
 
 */
