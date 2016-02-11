var Bag = function() {

  var first = null;
  var count = 0;

  var LinkedListNode = function(item, next) {
    return {
      item: item,
      next: next
    };
  };

  var add = function(item) {
    first = LinkedListNode(item, first);
    count++;
  };

  var forEach = function(callback) {
    for (var node = first; node !== null; node = node.next)
      callback(node.item);
  };

  var size = function() {
    return count;
  };

  return {
    add: add,
    forEach: forEach,
    size: size
  };
};

module.exports = Bag;
