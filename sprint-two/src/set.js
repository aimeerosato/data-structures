var Set = function(){
  var set = Object.create(Set.prototype);
  set._storage = {};
  return set;
};

Set.prototype.add = function(item){
  this._storage[item] = [item];
};

Set.prototype.contains = function(item){
  return !!this._storage[item];
};

Set.prototype.remove = function(item){
  delete this._storage[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
 //All functions O(1)