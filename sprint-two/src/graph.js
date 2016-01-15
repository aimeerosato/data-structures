

// ###Graph Solution

// Instantiate a new graph
var Graph = function(){
  var graph = Object.create(Graph.prototype);
  //set of nodes ie verticies
  //everything in nodes should be unique
  graph.nodes = { };
  graph.edges = { };

  return graph;

};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node){
  this.nodes[node] = node;
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node){
  return !!this.nodes[node];
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node){
  delete this.nodes[node];
  for (var neighbor in this.edges[node]) {
    delete this.edges[neighbor][node];
  }
  delete this.edges[node];
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode){
  return !!this.edges[fromNode][toNode];
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode){
  //nodes can be connected to other nodes thru and edge
  //fromNode must have array
  if(!this.edges[fromNode]){
    this.edges[fromNode] = {};
  }
  if (!this.edges[toNode]) {
    this.edges[toNode] = {};
  }
  this.edges[fromNode][toNode] = toNode;
  this.edges[toNode][fromNode] = fromNode;
  
  // edges === {A:{B:B, C:C}, B:{A:A, C:C, D:D}, C:{A:A, B:B}, D:{B:B}}

};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode){
  //look through edges in from nodes.....delete the node....in 01 

  delete this.edges[fromNode][toNode];
  delete this.edges[toNode][fromNode];
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb){
  for (var key in this.nodes) {
    cb(this.nodes[key]);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 addNode() = O(1)
 contains() = O(1)
 removeNode() = O(n)
 hasEdge = O(1)
 addEdge = O(1)
 removeEdge = O(1)
 forEachNode() = O(n) 
 */



