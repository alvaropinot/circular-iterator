function *circularIterator(arr) {
  var index = 0,
    elements = Array.isArray(arr) ? arr.slice(0) : [];
  while (1) {
    yield elements[index % elements.length];
    index++;
  }
}

module.exports = circularIterator;
