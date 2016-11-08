var expect = require('chai').expect;
var PriorityQueue = require('./index.js');

describe("Simple Priority Queue", function () {
  var pq;
  beforeEach(function () {
    pq = new PriorityQueue();
  });
  it("Should be constructed with new keyword", function () {
    expect(new PriorityQueue()).to.be.an('object');
  });
  describe("length", function () {
    it("should be a numeric property", function () {
      expect(pq).to.have.property('length')
    });
    it("should be the number 0 for an empty PriorityQueue", function () {
      expect(pq).to.have.property('length', 0);
    });
    it("should update when elements are inserted", function () {
      pq.insert(12, 'foo');
      expect(pq).to.have.property('length', 1);
      pq.insert(1, 'bar');
      pq.insert(13, 'quz');
      pq.insert(14, 'baz');
      expect(pq).to.have.property('length', 4);
    });
  });
  describe("insert", function () {
    it("should be a method", function () {
      expect(pq.insert).to.be.a('function');
    });
    xit("should insert a new key and value", function () {

    });

  });
});
