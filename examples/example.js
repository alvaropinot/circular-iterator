/* eslint no-console: 0 */
const circularIterator = require('circular-iterator');
const iterator = circularIterator([1, 2, 3]);
console.log(iterator.next().value); //1
console.log(iterator.next().value); //2
console.log(iterator.next().value); //3
console.log(iterator.next().value); //1
