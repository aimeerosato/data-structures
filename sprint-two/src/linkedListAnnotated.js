var LinkedList = function(){
  var list = {
    //value: theValue, next: pointer (node2)}, , ...
  };
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    //if we've already started adding to the tail
    if (list.tail) {
      //assign the new pointer on the current tail to the new Node
      list.tail.next = Node(value);
      //assign the new node to be the current tail
      list.tail = list.tail.next;
      //assign the VALUE of the new tail
      //THIS IS CONFUSING>
      //why need  bracket notation? list.value
      list[value] = list.tail;
      //example value '2'now in list object we have 2:2, next
      //wait, so what happens to the old tail value....it just exists in the list?
    } 

    else {
      //set the new node to equal the head
      list.head = Node(value);
      //since it's the first also set the tail to the new head
      list.tail = list.head;
      //set the value of the head
      list[value] = list.head;
    }
  };

  list.removeHead = function(){
    //save the value of the old head before beheading it
    var oldHeadVal = list.head.value;
    //assign the new head to the node that was in the old head's .next
    list.head = list.head.next;
    //delete the old head value
    delete list[oldHeadVal];
    //return the old head's value
    return oldHeadVal;
  };
  
  list.contains = function (target) {    
    var currNode = list.head;
    //if currNode.next is null it means we've reached the end and it wasn't found
    //why currNode not currNode.next
    if(currNode.next === null){
      return false;
    }
    //if value at the current node is the target we are looking for, return true
    else if (currNode.value === target) {
      return true;
    } 
    //loops through all the nodes until one of the two previous conditions is met and
    //turns off the recursion 
    else {
      list.contains(target, currNode.next);
    }

   
  };
  
  // My recursive version works.  Can you see why?
  // list.contains = function(target, currNode){
  //   currNode = currNode === undefined ?  list.head : currNode;
  //   if (currNode === null) {
  //     return false;
  //   } else if (currNode.value === target) {
  //     return true;
  //   } else {
  //     return list.contains(target, currNode.next);
  //   }
  // };

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
 */
