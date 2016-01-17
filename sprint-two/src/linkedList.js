var LinkedList = function(){
  var list = {
    //value: theValue, next: pointer (node2)}, , ...
  };
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    // create a new Node
    var newNode = Node(value);
    if (list.tail) {
      // Make sure previous tail points to new node (new tail)
      list.tail.next = newNode;
      // Set newNode previous property - points to old tail
      newNode.previous = list.tail;
      // Assign new node to tail
      list.tail = newNode;
    } else {
      list.head = newNode;
      list.tail = list.head;
    }
  };

  list.removeHead = function(){
    var oldHeadVal = list.head.value;
    list.head = list.head.next;
    delete list[oldHeadVal];
    return oldHeadVal;
  };
  
  list.contains = function (target, currNode) {
    var wasFound = false;
        
    list.each(function(node) {
      if (node.value === target) {
        wasFound = true;
      }
    });

    return wasFound;
  };

  list.each = function (callback, currNode) {
    currNode = currNode === undefined ? list.head : currNode;
  
    if (currNode === null) {
      return;
    } else {
      callback(currNode);
      list.each(callback, currNode.next);
    }
  };

  return list;
};



var Node = function(value){
  var node = {};

  node.value = value;
  node.previous = null;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
  removeHead() = O(1)
  addToTail() = O(1)
  contains() = O(n)
 */
