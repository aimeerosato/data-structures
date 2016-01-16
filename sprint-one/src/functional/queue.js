var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var count = 0;

  var removed = 0;

  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value){
    //adding to the back of line
   
    storage[count++] = value;
  };

  someInstance.dequeue = function(){
    //removing from front
    if(count - removed) {
      return storage[removed++];
    }
  };

  someInstance.size = function(){
    return count - removed;
  };

  return someInstance;
};
