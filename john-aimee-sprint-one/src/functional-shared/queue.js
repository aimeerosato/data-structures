var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queueInstance = {};
  queueInstance.count = 0;
  queueInstance.removed = 0;
  queueInstance.storage = {};
  
  for (var key in queueMethods) {
    queueInstance[key] = queueMethods[key];
  }
  
  return queueInstance;
};

var queueMethods = {
  size: function(){
    return this.count - this.removed;
  },
  enqueue: function(value){
    this.storage[this.count] = value;
    this.count++;
  },
  dequeue: function(){
    if(this.count - this.removed){
      var result = this.storage[this.removed];
      this.removed++;
      return result;
    }
  }
};


