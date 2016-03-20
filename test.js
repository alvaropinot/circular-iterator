'use strict';
let chai = require('chai');
let mocha = require('mocha');

let describe = mocha.describe;
let beforeEach = mocha.beforeEach;
let it = mocha.it;
let expect = chai.expect;

let circularIterator = require('./');

describe('circular iterator', function() {
  let arr;
  let iterator;

  beforeEach(function() {
    arr = ['foo', 'bar', 'buz'];
    iterator = circularIterator(arr);
  });

  describe('public API', function() {

    it('should be defined and a function', function() {
      expect(circularIterator).to.be.a('function');
    });

    it('should return the following properties', function() {
      let status = circularIterator(arr).next();

      expect(status).to.have.property('value');
      expect(status).to.have.property('done').that.is.a('boolean');
    });

  });

  describe('usage', function() {
    it('should return first item', function() {
      expect(circularIterator(arr).next().value).to.equal('foo');
    });

    it('should return all items in order', function() {
      arr.map(function(element) {
        expect(iterator.next().value).to.equal(element);
      });
    });

    it('should return first element when the end is reached', function() {
      // first call for each element
      arr.map(function(element) {
        expect(iterator.next().value).to.equal(element);
      });

      // called again on the same iterator should return the same array elements.
      arr.map(function(element) {
        expect(iterator.next().value).to.equal(element);
      });
    });

    it('should not return `done` when the end is reached', function() {
      arr.map(function() {
        iterator.next();
      });
      expect(iterator.next().done).to.be.false;
    });

    it('should work with no params', function() {
      let voidIterator = circularIterator();

      expect(voidIterator.next().value).to.be.undefined;
    });

    it('should work with non array params', function() {
      expect(circularIterator('foo').next().value).to.be.undefined;
      expect(circularIterator(true).next().value).to.be.undefined;
      expect(circularIterator(false).next().value).to.be.undefined;
      expect(circularIterator({foo: 'foo'}).next().value).to.be.undefined;
    });

    it('should not allow external modifications', function() {
      expect(iterator.next().value).to.be.equal('foo');
      arr[1] = 'biz';
      expect(iterator.next().value).to.be.equal('bar');
    });
  });
});
