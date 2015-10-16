/// <reference path="../Scripts/typings/mocha/mocha.d.ts"/>
/// <reference path="../Scripts/typings/node/node.d.ts" />
/// <reference path="../Scripts/typings/chai/chai.d.ts" />
var expect = require("chai").expect;

describe("Bubble Sort", function () {
    
    var Bubble = require("../sort/bubble");
    
    it("should sort an int array", function () {
        var data = [654, 42, 66, 3, 12, 54, 76];
        Bubble(data, function (val1, val2) {
            return val1 - val2;
        });
        expect(data[0]).to.equal(3);
        expect(data[data.length - 1]).to.equal(654);
    });
    
    it("should sort a string array", function () {
        var data = ["jerry", "tom", "daffy", "micky", "goofey"];
        Bubble(data, function (val1, val2) {
            return val1.localeCompare(val2);
        });
        expect(data[0]).to.equal("daffy");
        expect(data[data.length - 1]).to.equal("tom");
    });
});

describe("Merge Sort (Top Down)", function () {
    
    var MergeTopDown = require("../sort/mergetopdown");
    
    it("should sort an int array", function () {
        var data = [654, 42, 66, 3, 12, 54, 76, 44];
        MergeTopDown(data, function (val1, val2) {
            return val1 - val2;
        });
        
        expect(data[0]).to.equal(3);
        expect(data[data.length - 1]).to.equal(654);
    });
    
    it("should sort a string array", function () {
        
        var data = ["jerry", "tom", "daffy", "micky", "goofey"];
        MergeTopDown(data, function (val1, val2) {
            return val1.localeCompare(val2);
        });
        
        expect(data[0]).to.equal("daffy");
        expect(data[data.length - 1]).to.equal("tom");
    });
});

describe("Merge Sort (Bottom Up)", function () {
    
    var MergeBottomUp = require("../sort/mergebottomup");
    
    it("should sort an int array", function () {
        var data = [654, 42, 66, 3, 12, 54, 76, 44];
        MergeBottomUp(data, function (val1, val2) {
            return val1 - val2;
        });
        expect(data[0]).to.equal(3);
        expect(data[data.length - 1]).to.equal(654);
    });
    
    it("should sort a string array", function () {
        var data = ["jerry", "tom", "daffy", "micky", "goofey"];
        MergeBottomUp(data, function (val1, val2) {
            return val1.localeCompare(val2);
        });
        expect(data[0]).to.equal("daffy");
        expect(data[data.length - 1]).to.equal("tom");
    });
});

describe("Insertion Sort", function () {
    
    var Insertion = require("../sort/insertion");
    
    it("should sort an int array", function () {
        var data = [654, 42, 66, 3, 12, 54, 76, 44];
        Insertion(data, function (val1, val2) {
            return val1 - val2;
        });
        expect(data[0]).to.equal(3);
        expect(data[data.length - 1]).to.equal(654);
    });
    
    it("should sort a string array", function () {
        var data = ["jerry", "tom", "daffy", "micky", "goofey"];
        
        Insertion(data, function (val1, val2) {
            return val1.localeCompare(val2);
        });
        
        expect(data[0]).to.equal("daffy");
        expect(data[data.length - 1]).to.equal("tom");
    });
});

describe("Selection Sort", function () {
    
    var Selection = require("../sort/selection");
    
    it("should sort an int array", function () {
        
        var data = [654, 42, 66, 3, 12, 54, 76, 44];
        
        Selection(data, function (val1, val2) {
            return val1 - val2;
        });
        
        expect(data[0]).to.equal(3);
        expect(data[data.length - 1]).to.equal(654);
    });
    
    it("should sort a string array", function () {
        var data = ["jerry", "tom", "daffy", "micky", "goofey"];
        
        Selection(data, function (val1, val2) {
            return val1.localeCompare(val2);
        });
        
        expect(data[0]).to.equal("daffy");
        expect(data[data.length - 1]).to.equal("tom");
    });
});
describe("Shell Sort", function () {
    
    var Shell = require("../sort/shell");
    
    it("should sort an int array", function () {
        var data = [654, 42, 66, 3, 12, 54, 76, 44];
        
        Shell(data, function (val1, val2) {
            return val1 - val2;
        });
        
        expect(data[0]).to.equal(3);
        expect(data[data.length - 1]).to.equal(654);
    });
    
    it("should sort a string array", function () {
        var data = ["jerry", "tom", "daffy", "micky", "goofey"];
        
        Shell(data, function (val1, val2) {
            return val1.localeCompare(val2);
        });
        
        expect(data[0]).to.equal("daffy");
        expect(data[data.length - 1]).to.equal("tom");
    });
});

describe("Quick Sort", function () {
    var Quick = require("../sort/quick");
    
    it("should sort an int array", function () {
        var data = [654, 42, 66, 3, 12, 54, 76, 44];
        
        Quick(data, function (val1, val2) {
            return val1 - val2;
        });
        
        expect(data[0]).to.equal(3);
        expect(data[data.length - 1]).to.equal(654);
    });
    
    it("should sort a string array", function () {
        var data = ["jerry", "tom", "daffy", "micky", "goofey"];
        
        Quick(data, function (val1, val2) {
            return val1.localeCompare(val2);
        });
        
        expect(data[0]).to.equal("daffy");
        expect(data[data.length - 1]).to.equal("tom");
    });
});

describe("Quick Sort (3way)", function () {
    
    var Quick3Way = require("../sort/quick3way");
    
    it("should sort an int array", function () {
        var data = [654, 42, 66, 3, 12, 54, 76, 44];
        Quick3Way(data, function (val1, val2) {
            return val1 - val2;
        });
        expect(data[0]).to.equal(3);
        expect(data[data.length - 1]).to.equal(654);
    });
    
    it("should sort a string array", function () {
        var data = ["jerry", "tom", "daffy", "micky", "goofey"];
        Quick3Way(data, function (val1, val2) {
            return val1.localeCompare(val2);
        });
        expect(data[0]).to.equal("daffy");
        expect(data[data.length - 1]).to.equal("tom");
    });
});

describe("Heap Sort", function () {
    
    var Heap = require("../sort/heap");
    
    it("should sort an int array", function () {
        var data = [654, 42, 66, 3, 12, 54, 76, 44];
        Heap(data, function (val1, val2) {
            return val1 - val2;
        });
        expect(data[0]).to.equal(3);
        expect(data[data.length - 1]).to.equal(654);
    });
    
    it("should sort a string array", function () {
        var data = ["jerry", "tom", "daffy", "micky", "goofey"];
        
        Heap(data, function (val1, val2) {
            return val1.localeCompare(val2);
        });
        
        expect(data[0]).to.equal("daffy");
        expect(data[data.length - 1]).to.equal("tom");
    });
});
//# sourceMappingURL=sort.js.map