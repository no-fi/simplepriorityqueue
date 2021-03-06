var expect = require('chai').expect;
var PriorityQueue = require('./index.js');

describe('Simple Priority Queue', function () {
  var pq;
  beforeEach(function () {
    pq = new PriorityQueue();
  });
  describe('constructor', function () {
    it('Should be constructed with new keyword', function () {
      expect(new PriorityQueue()).to.be.an('object');
    });
  });
  describe('length', function () {
    it('should be a numeric property', function () {
      expect(pq).to.have.property('length')
    });
    it('should be the number 0 for an empty PriorityQueue', function () {
      expect(pq).to.have.property('length', 0);
    });
    it('should update when elements are inserted', function () {
      pq.insert(12, 'foo');
      expect(pq).to.have.property('length', 1);
      pq.insert(1, 'bar');
      pq.insert(13, 'quz');
      pq.insert(14, 'baz');
      expect(pq).to.have.property('length', 4);
    });
  });
  describe('insert', function () {
    it('should be a method', function () {
      expect(pq.insert).to.be.a('function');
    });
    it('should insert a new key and value and maintain proper order', function () {
      pq.insert(10, 'value 10');
      expect(pq.peek()).to.equal('value 10');
      pq.insert(12, 'value 12');
      expect(pq.peek()).to.equal('value 10');
      pq.insert(5, 'value 5');
      expect(pq.peek()).to.equal('value 5');
      pq.insert(3, 'value 3');
      expect(pq.peek()).to.equal('value 3');
      pq.insert(22, 'value 22');
      expect(pq.peek()).to.equal('value 3');
      pq.insert(-1, 'value -1');
      expect(pq.peek()).to.equal('value -1');
    });
    it('should support inserting multiple objects with the same key', function () {
      for (var i = 0; i < 10; i++) {
        expect(pq).to.have.property('length', i);
        pq.insert(10, 'value 10');
      }
      expect(pq).to.have.property('length', 10);
      for (var i = 10; i > 0; i--) {
        expect(pq).to.have.property('length', i);
        expect(pq.pop()).to.equal('value 10');
      }
      expect(pq).to.have.property('length', 0);
    });
  });
  describe('peek', function () {
    it('should be a method', function () {
      expect(pq.peek).to.be.a('function');
    });
    it('should return undefined if PriorityQueue is empty', function () {
      expect(pq.peek()).to.equal(undefined);
    });
    it('should return the top element', function () {
      pq.insert(12, 'foo');
      expect(pq.peek()).to.equal('foo');
    });
  });
  describe('pop', function () {
    it('should be a method', function () {
      expect(pq.pop).to.be.a('function');
    });
    it('should return undefined if PriorityQueue is empty', function () {
      expect(pq.pop()).to.equal(undefined);
    });
    it('should remove the top element of the PriorityQueue', function () {
      // Build up PriorityQueue
      pq.insert(10, 'value 10');
      expect(pq.peek()).to.equal('value 10');
      pq.insert(12, 'value 12');
      expect(pq.peek()).to.equal('value 10');
      pq.insert(5, 'value 5');
      expect(pq.peek()).to.equal('value 5');
      pq.insert(3, 'value 3');
      expect(pq.peek()).to.equal('value 3');
      pq.insert(22, 'value 22');
      expect(pq.peek()).to.equal('value 3');
      pq.insert(-1, 'value -1');
      expect(pq.peek()).to.equal('value -1');
      // Test pops now
      expect(pq).to.have.property('length', 6);
      expect(pq.pop()).to.equal('value -1');
      expect(pq).to.have.property('length', 5);
      expect(pq.pop()).to.equal('value 3');
      expect(pq).to.have.property('length', 4);
      expect(pq.pop()).to.equal('value 5');
      expect(pq).to.have.property('length', 3);
      expect(pq.pop()).to.equal('value 10');
      expect(pq).to.have.property('length', 2);
      expect(pq.pop()).to.equal('value 12');
      expect(pq).to.have.property('length', 1);
      expect(pq.pop()).to.equal('value 22');
      expect(pq).to.have.property('length', 0);
      expect(pq.pop()).to.equal(undefined);
      expect(pq).to.have.property('length', 0);
    });
  });
});
