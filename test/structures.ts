/// <reference path="../Scripts/typings/mocha/mocha.d.ts"/>
/// <reference path="../Scripts/typings/node/node.d.ts" />
/// <reference path="../Scripts/typings/chai/chai.d.ts" />

var expect = require("chai").expect;
import Algo = require("../index");

describe("Stack", function() {

    it("Create a stack and add an item + check size", function () {
        var stack = new Algo.Types.Stack();
        stack.push("first item");
        expect(stack.size()).to.equal(1);
    });  
    
    it("Push and item then pop it again", function () {
        var stack = new Algo.Types.Stack();
        stack.push("first item");
        expect(stack.size()).to.equal(1);
        
        var item = stack.pop();
        expect(item).to.equal("first item");
    });  

    it("Push and item then peek it again", function () {
        var stack = new Algo.Types.Stack();
        stack.push("first item");
        expect(stack.size()).to.equal(1);

        var item = stack.peek();
        expect(item).to.equal("first item");

        expect(stack.size()).to.equal(1);
    });  

    it("Check add / remove order", function () {
        var stack = new Algo.Types.Stack();
        
        for (var index = 0; index < 10; index++)
            stack.push(index);

        expect(stack.size()).to.equal(10);
        
        for (var index = 9; index >= 0; index--)
            expect(stack.pop()).to.equal(index);
    });

    it("Iterate through the results", function () {
        var stack = new Algo.Types.Stack();

        for (var index = 0; index < 10; index++)
            stack.push(index);

        expect(stack.size()).to.equal(10);

        var counter = 9;

        stack.forEach(function (item) {
            expect(item).to.equal(counter);
            counter--;
        });

        expect(counter).to.equal(-1);
    });
});

describe("Queue", function () {

    it("Create a queue and add an item + check size", function () {
        var queue = new Algo.Types.Queue();
        queue.enqueue("first item");
        expect(queue.size()).to.equal(1);
    });
    

    it("Enqueue + dequeue (check order)", function () {
        var queue = new Algo.Types.Queue();
        
        for (var index = 0; index < 10; index++)
            queue.enqueue(index);

        expect(queue.size()).to.equal(10);

        for (var index = 0; index < 10; index++) {
            expect(queue.size()).to.equal(10 - index);
            expect(queue.dequeue()).to.equal(index);
        }
    });

    it("enqueue 10 items then iterate using forEach, check order", function () {
        var queue = new Algo.Types.Queue();

        for (var index = 0; index < 10; index++)
            queue.enqueue(index);

        expect(queue.size()).to.equal(10);

        var counter = 0;

        queue.forEach(function (item) {
            expect(item).to.equal(counter);
            counter++;
        });
    });
});

describe("Bag", function () {

    it("Create a bag and add an item + check size", function () {
        var bag = new Algo.Types.Bag();
        bag.add("first item");
        expect(bag.size()).to.equal(1);
    });

    it("Iterate through the results", function () {
        var bag = new Algo.Types.Bag();

        for (var index = 0; index < 10; index++)
            bag.add(index);

        expect(bag.size()).to.equal(10);

        var counter = 9;

        bag.forEach(function (item) {
            expect(item).to.equal(counter);
            counter--;
        });

        expect(counter).to.equal(-1);
    });
    
});
