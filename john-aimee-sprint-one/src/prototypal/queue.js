var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var someInstance = Object.create(Queue.prototype);

  someInstance.count = 0;
  someInstance.removed = 0;
  someInstance.storage = {};

  return someInstance;

};

Queue.prototype.size = function(){
    return this.count - this.removed;
};
Queue.prototype.enqueue = function(value){
    this.storage[this.count] = value; 
    this.count++;
};
Queue.prototype.dequeue = function(){
  if(this.count-this.removed){
    var result = this.storage[this.removed];
    this.removed++;
    return result;
  }
};

