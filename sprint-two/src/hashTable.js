 // Helper functions to use to get/set items in limited array
 // limitedArray.get = function(index){
 //    checkLimit(index);
 //    return storage[index];
 //  };
 //  limitedArray.set = function(index, value){
 //    checkLimit(index);
 //    storage[index] = value;
 //  };


var HashTable = function(){
  this._limit = 8;
  // Storage Element - we decide what and how we want to store things there
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);

  //At each value in above Limited Array, there will be a bucket
  //Get the bucket at the index i in the limited array so we insert the new key value pair
  var bucket = this._storage.get(i);
  // If there is no bucket at that index already, create one
  if(!bucket){
    bucket = [];
    // Use set method on limited array to place new bucket at that index
    this._storage.set(i, bucket);
  }

  // Before inserting, take a look at what's inside the bucket
  // If there's something there that matches the key of what is coming in, update it with the 
  //new value so there's no duplicates
  var found = false;
  for(var j = 0; j < bucket.length; j++){
    if(bucket[j][0] === k){
      bucket[j][1] = v;
      found = true;
      //you updated the value and now you're done.  Get out.
      break;
    }
  }
  if(!found){
    bucket.push([k,v]);
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  if(!bucket){
    return null;
  } else {
    for(var j = 0; j < bucket.length; j++){
      if(bucket[j][0] === k){
        return bucket[j][1];
      }
    }
    // In case there IS a bucket, but there's nothing in it....return null
    return null;
  }
  //look at index to see if there's a bucket there
  //if there's no bucket, return false b/c it means that the value wasn't found
  //if there is a bucket, loop through the tuples to see if there's a match with the key
    //if there's a match, return the value and break the loop
    //if there's no match, return null
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  if(!bucket){
    return null;
  } else {
    for(var j = 0; j < bucket.length; j++){
      if(bucket[j][0] === k){
        bucket[j][0] = null;
        bucket[j][1] = null;

      }

    }
    return null;
  }
  
    


};



/*
 * Complexity: What is the time complexity of the above functions?
 */
