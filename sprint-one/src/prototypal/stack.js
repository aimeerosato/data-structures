var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stackInstance = Object.create(Stack.prototype);
  
  stackInstance.count = 0; 
  stackInstance.storage = {};
  
  return stackInstance;
};
   //  Had to add in constructor 
   //  Wanted to use extend, but couldn't access library
Stack.prototype = {
  constructor: Stack,
  size : function() { return this.count; },
  push : function(value) {
    this.storage[this.count] = value;
    this.count++;
  },
  pop : function() {
    if (this.count) {
      this.count--;
      return this.storage[this.count];
    }
  }
};
  
  // Works
  // Stack.prototype.size = function() { return this.count; };
  // Stack.prototype.push = function(value) {
  //   this.storage[this.count] = value;
  //   this.count++;
  // };
  // Stack.prototype.pop = function() {
  //   if (this.count) {
  //     this.count--;
  //     return this.storage[this.count];
  //   }
  // };

