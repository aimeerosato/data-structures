describe('linkedList', function() {
  var linkedList;

  beforeEach(function() {
    linkedList = LinkedList();
  });

  it('should have a head and tail', function() {
    expect(linkedList).to.have.property("head");
    expect(linkedList).to.have.property("tail");
  });

  it('should have methods named "addToTail", "removeHead", and "contains"', function() {
    expect(linkedList.addToTail).to.be.a("function");
    expect(linkedList.removeHead).to.be.a("function");
    expect(linkedList.contains).to.be.a("function");
  });

  it('should designate a new tail when new nodes are added', function(){
    linkedList.addToTail(4);
    expect(linkedList.tail.value).to.equal(4);
    linkedList.addToTail(5);
    expect(linkedList.tail.value).to.equal(5);
  });

  it('should remove the head from the list when removeHead is called', function(){
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    expect(linkedList.head.value).to.equal(4);
    linkedList.removeHead();
    expect(linkedList.head.value).to.equal(5);
  });

  it("should return the value of the former head when removeHead is called", function(){
    linkedList.addToTail(4);
    expect(linkedList.removeHead()).to.equal(4);
  });

  it("should contain a value that was added", function(){
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    expect(linkedList.contains(4)).to.equal(true);
    expect(linkedList.contains(5)).to.equal(true);
    expect(linkedList.contains(6)).to.equal(false);
  });

  it('should not contain a value that was removed', function(){
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    linkedList.removeHead();
    expect(linkedList.contains(4)).to.equal(false);
  });
});

describe('doubly-linked-list', function() {
  xit('should be able to add a new head', function(){
    // linkedList.addToHead(value);
    // expect(list.head).to.equal(value); 
  });
  
  xit('should be able to remove the tail', function(){
    // var removedTail = linkedList.removeTail();
    // expect(removedTail).to.exist();
    // expect(removedTail.previous).to.equal(linkedList.tail);
  });
  
  xit('should traverse the list and run a callback on each item', function(){
    // linkedList.addToTail(4);
    // linkedList.addToTail(5);
    // var listContents = [4,5];
    // var output = [];
    // var hasEverything = true;
    // linkedList.each(function(item){ output.push(item) });
    // for (var i = 0; i < listContents.length; i++) {
    //   for (var j = 0; j < output.length; j++) {
    //     hasEverything = hasEverything && listContents[i] === output[j];
    //   }
    // }
    // expect(hasEverything).to.equal(true);
  });
  
  xit('should have a previous property or null when appropriate', function(){
    // traverse list using new helper function
    // checking for previous property, or null at the head
    // expect(linkedList.head.previous).to.be(null);
  });
});
