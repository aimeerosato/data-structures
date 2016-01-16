var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  //storage = [bucket1, bucket2, bucket3, ...] bucket[i]=[keyval1, keyval2, ...] keyval[i]=[key, value]
};

HashTable.prototype.insert = function(key, value){
  var i = getIndexBelowMaxForKey(key, this._limit);
  // Create key/value pair in a 2-tuple
  var bucket;
  var keyValPair = LimitedArray(2);
  keyValPair.set(0, key);
  keyValPair.set(1, value); 
  
  // If there is a bucket at index, put key/val at second index. (else at first)  
  if(this._storage.get(i)){
    bucket = this._storage.get(i);
    var keyVal1 = bucket.get(0);
    var keyVal2 = bucket.get(1);
    
    if(keyVal1){
      if (key === bucket.get(0).get(0)) {
        bucket.set(0, keyValPair);  
      } 
    } 
    if(keyVal2) {
      if (key === bucket.get(1).get(0)) {
        bucket.set(1, keyValPair);
      } else {
        bucket.set(0, keyValPair);
      }
    }
    
    bucket.set(1, keyValPair);
    
  } else {
    bucket = LimitedArray(2);
    bucket.set(0, keyValPair);
    this._storage.set(i, bucket);
  }
};

HashTable.prototype.retrieve = function(key){
  var i = getIndexBelowMaxForKey(key, this._limit);
  //look in bucket at first index, if that is i, return...if return what's in position 2
  var bucket = this._storage.get(i);
  if(bucket){
    var keyVal1 = bucket.get(0);
    var keyVal2 = bucket.get(1);
    
    if(keyVal1){
      if(keyVal1.get(0) === key) { 
        return keyVal1.get(1); 
      } 
    }
    if(keyVal2){
      if(keyVal2.get(0) === key){
        return keyVal2.get(1);
      }
    } 
  }
  return null;
};

HashTable.prototype.remove = function(key){
 var i = getIndexBelowMaxForKey(key, this._limit);
 var bucket = this._storage.get(i);
 
 if (bucket) {
  if (key === bucket.get(0).get(0)) {
    bucket.get(0).set(0, null);
    bucket.get(0).set(1, null);
  } else if (key === bucket.get(1).get(0)) {
    bucket.get(1).set(0, null);
    bucket.get(1).set(1, null);
  }
 }


};

/*
 * Complexity: What is the time complexity of the above functions?
 insert() = O(1)
 retrieve() = O(1)
 remove() = O(1)
 */
