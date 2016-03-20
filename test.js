var chai = require('chai'),
  mocha = require('mocha');

var describe = mocha.describe,
  beforeEach = mocha.beforeEach,
  it = mocha.it,
  expect = chai.expect;

var circularIterator = require('./');

describe('circular iterator', function () {
  var arr, iterator;

  beforeEach(function() {
    arr = [1, 2, 3];
    iterator = circularIterator(arr);
  });

  it('should be defined and a function', function () {
    expect(circularIterator).to.be.a('function');
  });

  it('should return the following properties', function () {
    var status = circularIterator(arr).next();
    expect(status).to.have.property('value');
    expect(status).to.have.property('done').that.is.a('boolean');
  });

  it('should return first item', function () {
    expect(circularIterator(arr).next().value).to.equal(1);
  });

  it('should return all items in order', function () {
    arr.map(function(number){
      expect(iterator.next().value).to.equal(number);
    });
  });

  it('should return first number when the end is reached', function () {
    // first call for each number
    arr.map(function(number){
      expect(iterator.next().value).to.equal(number);
    });

    // called again on the same iterator should return the same array elements.
    arr.map(function(number){
      expect(iterator.next().value).to.equal(number);
    });
  });

  it('should not return `done` when the end is reached', function () {
    arr.map(function(){
      iterator.next();
    });
    expect(iterator.next().done).to.be.false;
  });

  it('should work with no params', function () {
    var iterator = circularIterator();
    expect(iterator.next().value).to.be.undefined;
  });

  it('should work with non array params', function () {
    expect(circularIterator(2).next().value).to.be.undefined;
    expect(circularIterator(true).next().value).to.be.undefined;
    expect(circularIterator(false).next().value).to.be.undefined;
    expect(circularIterator({a:2}).next().value).to.be.undefined;
  });

  it('should not allow external modifications', function () {
    expect(iterator.next().value).to.be.equal(1);
    arr[1] = 'foo';
    expect(iterator.next().value).to.be.equal(2);
  });
});
