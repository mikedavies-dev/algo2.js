/// <reference path="../Scripts/typings/mocha/mocha.d.ts"/>
/// <reference path="../Scripts/typings/node/node.d.ts" />
/// <reference path="../Scripts/typings/chai/chai.d.ts" />
var expect = require("chai").expect;
var Algo = require("../algo");
describe("Stack", function () {
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
});
//# sourceMappingURL=structures.js.map