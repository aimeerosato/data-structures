var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me

  // Extend treeMethods on to tree instance b/c functional-shared style
  for (var key in treeMethods){
    newTree[key] = treeMethods[key];
  }

  return newTree;
};





var treeMethods = {};

treeMethods.addChild = function(value){
  //.push(value) is WRONG because we have to add a completely new childre
  // instance to the tree, heance calling class Tree(value)
  this.children.push(Tree(value));

};

treeMethods.contains = function(target){

  var found = false;

  var search = function (currentTree){
    // If current tree's value matches the target, set closure variable to true and break out
    if(currentTree.value === target){
      found = true;
      return;
    } 
    // If not found and it has children, call this resursively on all children
    if(currentTree.children.length){
      for(var i = 0; i < currentTree.children.length; i++){
        search(currentTree.children[i]);
      }
    }
  };
  
  // Call inner function on current instance 
  search(this);
  // Return variable, will be true or false
  return found;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
