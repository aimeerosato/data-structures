var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  /*var properties = {
    count: 0,
    storage: {}
  };
  
  var stackInstance = Object.create(properties);
  */
};
  
  Stack.prototype.size = function() { return this.count; };
  Stack.prototype.push = function(value) {
    this.storage[count] = value;
    this.count++;
  };
  Stack.prototype.pop = function() {
    if (this.count) {
      return this.storage[this.count];
    }
  };

