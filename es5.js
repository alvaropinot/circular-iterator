'use strict';

var _marked = [circularIterator].map(regeneratorRuntime.mark);

function circularIterator(arr) {
  var index, elements, length;
  return regeneratorRuntime.wrap(function circularIterator$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          index = -1;
          elements = Array.isArray(arr) ? arr.slice() : [];
          length = elements.length;

        case 3:
          if (!length) {
            _context.next = 9;
            break;
          }

          index = (index + 1) % length;
          _context.next = 7;
          return elements[index];

        case 7:
          _context.next = 3;
          break;

        case 9:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked[0], this);
}

module.exports = circularIterator;
