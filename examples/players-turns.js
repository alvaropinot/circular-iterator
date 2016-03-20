/* eslint no-console: 0 */
var circularIterator = require('../');

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

// Outputs:
// Player 1 is your turn!
// Player 2 is your turn!
// Player 3 is your turn!
// Player 1 is your turn!
