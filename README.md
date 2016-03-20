[![npm version](https://badge.fury.io/js/circular-iterator.svg)](https://badge.fury.io/js/circular-iterator)
[![Build Status](https://travis-ci.org/alvaropinot/circular-iterator.svg)](https://travis-ci.org/alvaropinot/circular-iterator.svg)
[![Code Climate](https://codeclimate.com/github/alvaropinot/circular-iterator/badges/gpa.svg)](https://codeclimate.com/github/alvaropinot/circular-iterator)
[![Test Coverage](https://codeclimate.com/github/alvaropinot/circular-iterator/badges/coverage.svg)](https://codeclimate.com/github/alvaropinot/circular-iterator/coverage)

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
var circularIterator = require('circular-iterator');
var iterator = circularIterator([1, 2, 3]);
console.log(iterator.next().value); //1
console.log(iterator.next().value); //2
console.log(iterator.next().value); //3
console.log(iterator.next().value); //1
```



## Example
A fancy players turns controller.
```javascript
var circularIterator = require('circular-iterator');

// Some players
var players = [
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
var turnController = circularIterator(players);

var actualPlayer = turnController.next().value;
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
