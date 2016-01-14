var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.count = 0;
  this.removed = 0;
  this.storage = {};
};

Queue.prototype = {
  constructor : Queue,
  dequeue : function () {
    if(this.count - this.removed){
      var result = this.storage[this.removed];
      this.removed++;
      return result;
    }
  },
  enqueue : function (value) {
    this.storage[this.count] = value; 
    this.count++;
  },
  size : function () {
    return this.count - this.removed;
  }
};


