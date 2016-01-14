var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stackInstance = {};

  stackInstance['count'] = 0;
  stackInstance['storage'] = {};
  
  //extends instance with methods
  for (var key in stackMethods){
    stackInstance[key] = stackMethods[key];
  }
  
  return stackInstance;
};

var stackMethods = {
  
  size : function(){  return this.count;  },
  pop :  function(){
    if (this.count) {
      this.count--;
      return this.storage[this.count];
    }
  },
  push :  function(value){ 
    this.storage[this.count] = value; 
    this.count++;
  }
};
