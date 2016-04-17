'use strict';

function *circularIterator(arr) {
  let index = -1;
  const elements = Array.isArray(arr) ? arr.slice() : [];
  const length = elements.length;

  while (length) {
    index = (index + 1) % length;
    yield elements[index];
  }
}

module.exports = circularIterator;
