var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    // Create a new node with Node instantiation
    var newNode = Node(value);
     // If it's the first time and there's no head, set the node to it
    if(!list.head){
      list.head = newNode; 
    }
    // If there IS a tail, set its address to the newNode
    if(list.tail){
      list.tail.next = newNode;
    }
    // Finaly, set the new tail to the new node
    list.tail = newNode;
    
  };

  list.removeHead = function(){
    // Get value before removing the head
    var headValue = list.head.value;
    // Set new head to whatever was in previous head's .next address
    list.head = list.head.next;
    // Return value of old head
    return headValue;
  };

  list.contains = function(target, node){
    if (node === undefined) {
      node = list.head;
    }

    // Contains with recursion

    // Base Case, if node.next is null, we've reached the end of the list without finding anything
    if (node === null){
      return false;
    } 
    // If the value of the node is the target, we've found it, and can return true
    else if (node.value === target){
      return true;
    } 
    // Otherwise keep calling contains recursively on the next node until one of the two above cases trips
    else {
      return list.contains(target, node.next);
    }
    

  };

  return list;
};

var Node = function(value){
  var node = {};
  // Value of the node
  node.value = value;
  // Address to next node; null if end
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
