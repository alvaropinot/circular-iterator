[![npm version](https://img.shields.io/npm/v/circular-iterator.svg)](https://www.npmjs.com/package/circular-iterator)
![License](https://img.shields.io/npm/l/circular-iterator.svg)

[![Build Status](https://img.shields.io/travis/alvaropinot/circular-iterator.svg)](https://travis-ci.org/alvaropinot/circular-iterator.svg)
[![Coverage](https://img.shields.io/codeclimate/coverage/github/alvaropinot/circular-iterator.svg)](https://codeclimate.com/github/alvaropinot/circular-iterator/coverage)
[![Code Climate](https://img.shields.io/codeclimate/github/alvaropinot/circular-iterator.svg)](https://codeclimate.com/github/alvaropinot/circular-iterator)
![dependencies](https://img.shields.io/david/alvaropinot/circular-iterator.svg)
![dev dependencies](https://img.shields.io/david/dev/alvaropinot/circular-iterator.svg)


# circular-iterator
Circular iteration over any array the fancy way.

## Installation
You can install circular-iterator using npm.

```
npm install --save circular-iterator
```

## Usage
Just require the module.

```javascript
const circularIterator = require('circular-iterator');
const iterator = circularIterator([1, 2, 3]);
console.log(iterator.next().value); //1
console.log(iterator.next().value); //2
console.log(iterator.next().value); //3
console.log(iterator.next().value); //1
```



## Example
A fancy players turns controller.
```javascript
const circularIterator = require('circular-iterator');

// Some players
const players = [
  {
    name: 'Player 1'
  },
  {
    name: 'Player 2'
  },
  {
    name: 'Player 3'
  }
];

// Create an iterator with our players.
const turnController = circularIterator(players);

let actualPlayer = turnController.next().value;
// It's Player 1 turn.
console.log('%s is your turn!', actualPlayer.name);

// Timer is done! Let's see who's next.
actualPlayer = turnController.next().value;
// It's Player 2 turn.
console.log('%s is your turn!', actualPlayer.name);

// Timer is done! Let's see who's next.
actualPlayer = turnController.next().value;
// It's Player 3 turn.
console.log('%s is your turn!', actualPlayer.name);

// Timer is done! Let's see who's next.
actualPlayer = turnController.next().value;
// It's Player 1 turn again :D
console.log('%s is your turn!', actualPlayer.name);
```

### Outputs
```
Player 1 is your turn!
Player 2 is your turn!
Player 3 is your turn!
Player 1 is your turn!
```
