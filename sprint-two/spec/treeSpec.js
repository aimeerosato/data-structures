describe('tree', function() {
  var tree;

  beforeEach(function() {
    tree = Tree();
  });

  it('should have methods named "addChild" and "contains", and a property named "value"', function() {
    expect(tree.addChild).to.be.a("function");
    expect(tree.contains).to.be.a("function");
    expect(tree.hasOwnProperty("value")).to.equal(true);
  });

  it('should add children to the tree', function() {
    tree.addChild(5);
    expect(tree.children[0].value).to.equal(5);
  });

  it('should return true for a value that the tree contains', function(){
    tree.addChild(5);
    expect(tree.contains(5)).to.equal(true);
  });

  it('should return false for a value that was not added', function(){
    tree.addChild(5);
    expect(tree.contains(6)).to.equal(false);
  });

  it('should be able to add children to a tree\'s child', function() {
    tree.addChild(5);
    tree.children[0].addChild(6);
    expect(tree.children[0].children[0].value).to.equal(6);
  });

  it('should correctly detect nested children', function(){
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    expect(tree.contains(7)).to.equal(true);
    expect(tree.contains(8)).to.equal(true);
  });
});

describe ('tree - extra credit', function(){
  var tree;
  
  beforeEach(function() {
    tree = Tree();
    // var hello = function(){console.log('hello world!')};
    // var emptyobj = {};
    // var emptyarr = [];
    
    tree.addChild(3);
    tree.addChild('bus');
    tree.children[0].addChild(4);
    tree.children[0].children[0].addChild(6);
    tree.children[1].addChild('car');
    tree.children[1].addChild('bike');
    // tree.addChild(emptyarr);
    // tree.children[2].addChild(emptyobj);
    // tree.children[2].children[0].addChild(hello);
    
    
    var bus = tree.children[1];
    var car = tree.children[1].children[0];
    var bike = tree.children[1].children[1];
    
    var treeContents = {'bus': 'bus', 'car': 'car', 'bike': 'bike', 3: 3, 4: 4, 6: 6, 'undefined':undefined};    
  });
  
  it('should add children and keep track of the parent', function () {
    //first we add child
    tree.children[1].addChild("motorcycle");
    // create a reference to our example tree - 'bus'
    var bus = tree.children[1];
    //Then we check the child and parent - did we create a tree with motorcycle?
    expect(bus.contains('motorcycle')).to.equal(true);
    //Does motorcycle have bus as a parent?
    expect(bus.children[2].parent).to.equal(bus);
  });

  it('should remove child from parent and parent from child', function(){
    bus = tree.children[1];
    // First remove a child 
    var childTree = tree.removeFromParent('bus');
    // Expect to return the child tree

    // Expect the parent to not have any reference to child
    // Expect the child to not have any reference to parent    
  });

  it('should perform a callback on all of the nodes in the tree', function() {
    var bus = tree.children[1];
    var car = tree.children[1].children[0];
    var bike = tree.children[1].children[1];
    
    var treeContents = {'bus': 'bus', 'car': 'car', 'bike': 'bike', 3: 3, 4: 4, 6: 6};  
    // Create an output array
    var output = {};
    // Traverse the tree with callback
    tree.traverseTree(function(node) { output[node.value] = node.value; });
    // Expect everything in treeContents to be contained in output array 
    var everythingMatches = true;
    for (var key in treeContents){
      //compare if key is in output
      if(output[key]){
        everythingMatches = everythingMatches && true;
      } else {
        everythingMatches = everythingMatches && false;
      }
    }
    expect(everythingMatches).to.equal(true);

  });
});