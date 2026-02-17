const fruits1 = ['apple', 'banana'];
const fruits2 = ['orange', 'mango'];

// Combine into one array: allFruits
const allFruits = fruits1.concat(fruits2);
//or
// const allFruits = [...fruits1, ...fruits2];

// console.log(allFruits);

// Exercise 2
// Write a function that accepts any number of numbers
// It should print each number and return their sum

const anyNumber = function (...numbers) {
  let sum = 0;
  for (const number of numbers) {
    console.log(number);
    sum += number;
  }
  return sum;
};

console.log('Sum:', anyNumber(1, 2, 3, 4)); // prints numbers + sum

// ### Exercise 3
// Given a variable isOnline = true
// Print "User is online" using short-circuiting only

const isOnline = true;

isOnline && console.log('User is online');

// ### Exercise 4
// Given let score = 0;
// Create a variable displayScore that uses a default of 10 if score is null or undefined

let score;
const displayScore = score ?? 10;

const displayScoreWrong = score || 10; // 10, wrong if score = 0

console.log(displayScore);

// ### Exercise 5
// Given array mainPlayers = ['A', 'B', 'C']
// Add substitutes ['X', 'Y'] to create finalPlayers
// Make sure the original mainPlayers are included

const mainPlayers = ['A', 'B', 'C'];
const finalPlayers = [...mainPlayers, 'X', 'Y'];
console.log(finalPlayers);

// ### Exercise 6
// Write a function printNames that takes any number of names
// Prints each name and prints "Total names: X"
// Test with 3–5 names

const printNames = function (...names) {
  for (name of names) {
    console.log(name);
  }
  console.log('Total names: ' + names.length);
};

printNames('a', 'b', 'c', 'd', 'e');

// ## **4️⃣ Optional Mini Challenge – Combined Skills**
// Given teams: ['Team1', 'Team2']
// Odds: { team1: 2, draw: 3, team2: 5 }
// Print which team is most likely to win using short-circuiting only

const teams = ['Team1', 'Team2'];
const Odds = { team1: 2, draw: 3, team2: 5 };

Odds.team1 > Odds.team2 && console.log('Team1 is most likely to win');
Odds.team1 < Odds.team2 && console.log('Team2 is most likely to win');
Odds.team1 === Odds.team2 && console.log('It is likely a draw');
