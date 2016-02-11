/// <reference path="../Scripts/typings/mocha/mocha.d.ts"/>
/// <reference path="../Scripts/typings/node/node.d.ts" />
/// <reference path="../Scripts/typings/chai/chai.d.ts" />
var expect = require("chai").expect;
var Algo = require("../index");

describe("Stack", function() {

  var Stack = require("../containers/stack");

  it("Create a stack and add an item + check size", function() {
    var stack = Stack();
    stack.push("first item");
    expect(stack.size()).to.equal(1);
  });

  it("Push and item then pop it again", function() {
    var stack = Stack();
    stack.push("first item");
    expect(stack.size()).to.equal(1);
    var item = stack.pop();
    expect(item).to.equal("first item");
  });

  it("Push and item then peek it again", function() {
    var stack = Stack();
    stack.push("first item");
    expect(stack.size()).to.equal(1);
    var item = stack.peek();
    expect(item).to.equal("first item");
    expect(stack.size()).to.equal(1);
  });

  it("Check add / remove order", function() {

    var stack = Stack();
    for (var index = 0; index < 10; index++)
      stack.push(index);

    expect(stack.size()).to.equal(10);
    for (var index = 9; index >= 0; index--)
      expect(stack.pop()).to.equal(index);
  });

  it("Iterate through the results", function() {

    var stack = Stack();
    for (var index = 0; index < 10; index++)
      stack.push(index);

    expect(stack.size()).to.equal(10);
    var counter = 9;

    stack.forEach(function(item) {
      expect(item).to.equal(counter);
      counter--;
    });

    expect(counter).to.equal(-1);
  });
});

describe("Queue", function() {

  var Queue = require("../containers/queue");

  it("Create a queue and add an item + check size", function() {
    var queue = Queue();
    queue.enqueue("first item");
    expect(queue.size()).to.equal(1);
  });

  it("Enqueue + dequeue (check order)", function() {

    var queue = Queue();
    var index= 0;

    for (index = 0; index < 10; index++)
      queue.enqueue(index);

    expect(queue.size()).to.equal(10);

    for (index = 0; index < 10; index++) {
      expect(queue.size()).to.equal(10 - index);
      expect(queue.dequeue()).to.equal(index);
    }
  });

  it("enqueue 10 items then iterate using forEach, check order", function() {
    var queue = Queue();
    for (var index = 0; index < 10; index++)
      queue.enqueue(index);

    expect(queue.size()).to.equal(10);
    var counter = 0;

    queue.forEach(function(item) {
      expect(item).to.equal(counter);
      counter++;
    });
  });
});

describe("Bag", function() {

  var Bag = require("../containers/bag");

  it("Create a bag and add an item + check size", function() {
    var bag = Bag();
    bag.add("first item");
    expect(bag.size()).to.equal(1);
  });

  it("Iterate through the results", function() {

    var bag = Bag();
    for (var index = 0; index < 10; index++)
      bag.add(index);

    expect(bag.size()).to.equal(10);

    var counter = 9;
    bag.forEach(function(item) {
      expect(item).to.equal(counter);
      counter--;
    });

    expect(counter).to.equal(-1);
  });
});

describe("Priority Queue", function() {

  var PriorityQueue = require("../containers/priorityqueue");

  it("Create and add an item + check size", function() {

    var q = PriorityQueue(function(val1, val2) {
      return val1 - val2;
    });

    var toAdd = [22, 3, 1, 32432, 1, 2, 544, 2, 1, 23, 1, 3, 1, 223, 3];
    toAdd.forEach(function(e) {
      q.enqueue(e);
    });

    expect(q.size()).to.equal(15);
  });

  it("clear the queue", function() {
    var q = PriorityQueue(function(val1, val2) {
      return val1 - val2;
    });

    var toAdd = [22, 3, 1, 32432, 1, 2, 544, 2, 1, 23, 1, 3, 1, 223, 3];
    toAdd.forEach(function(e) {
      q.enqueue(e);
    });

    expect(q.size()).to.equal(15);
    q.clear();
    expect(q.size()).to.equal(0);
  });

  it("iterate the queue in order", function() {

    var compare = function(val1, val2) {
      return val1 - val2;
    };

    var q = PriorityQueue(compare);
    var toAdd = [];
    for (var index = 0; index < 1000; index++)
      toAdd.push(Math.floor(Math.random() * 1000) % 1000);

    toAdd.forEach(function(e) {
      q.enqueue(e);
    });

    // sort the results and expect the queue to return the same values
    var sorted = toAdd.slice();
    sorted.sort(compare);
    var count = 0;

    sorted.forEach(function(val) {
      expect(q.dequeue()).to.equal(val);
      count++;
    });

    expect(count).to.equal(sorted.length);
  });

  it("peek an item in the queue", function() {

    var compare = function(val1, val2) {
      return val1 - val2;
    };

    var q = PriorityQueue(compare);
    var toAdd = [];

    for (var index = 0; index < 1000; index++)
      toAdd.push(Math.floor(Math.random() * 1000) % 1000);

    toAdd.forEach(function(e) {
      q.enqueue(e);
    });

    // sort the results and expect the queue to return the same values
    var sorted = toAdd.slice();
    sorted.sort(compare);
    expect(q.peek()).to.equal(sorted[0]);
  });
});
