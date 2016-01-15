var LinkedList = function(){
  var list = {
    //value: theValue, next: pointer (node2)}, , ...
  };
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    if (list.tail) {
      list.tail.next = Node(value);
      list.tail = list.tail.next;
      list[value] = list.tail;
    } else {
      list.head = Node(value);
      list.tail = list.head;
      list[value] = list.head;
    }
  };

  list.removeHead = function(){
    var oldHeadVal = list.head.value;
    list.head = list.head.next;
    delete list[oldHeadVal];
    return oldHeadVal;
  };
  
  list.contains = function (target, currNode) {    
    if (currNode === undefined) {
      currNode = list.head;  
    }
    
    if (currNode === null) {
      return false;
    } else if (currNode.value === target){
      return true;
    } else {
      return list.contains(target, currNode.next);
    }
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
  removeHead() = O(1)
  addToTail() = O(1)
  contains() = O(n)
 */
