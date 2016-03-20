'use strict';

function *circularIterator(arr) {
  let index = 0;
  const elements = Array.isArray(arr) ? arr.slice() : [];
  const length = elements.length;

  while (elements.length) {
    yield elements[ index++ % length ];
  }
}

module.exports = circularIterator;
