'use strict'

function *circularIterator(arr) {
  var index = 0,
    elements = Array.isArray(arr) ? arr.slice(0) : [],
    length = elements.length;
  while (true) {
    yield elements[index++ % length];
  }
}

module.exports = circularIterator;
