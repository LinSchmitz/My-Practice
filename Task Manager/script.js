'use strict';

// ---------------------------------------
// 1. Hoisting & TDZ Challenge
// ---------------------------------------

// QUESTION: If you uncomment the following lines, what happens in each case? Why?
// console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

// ---------------------------------------
// 2. Memory Management (Shallow vs. Deep Copy)
// ---------------------------------------
const originalUser = {
  name: 'Alireza',
  age: 28,
  family: ['Alice', 'Bob'],
  social: {
    github: '@alireza',
  },
};

// A) Create a "Shallow Copy" of originalUser using Object.assign
const userShallow = Object.assign({}, originalUser);

// B) Create a "Deep Copy" of originalUser using structuredClone
const userDeep = structuredClone(originalUser);

// C) Modifications:
// 1. Change the name in userShallow to "Jonas".
// 2. Add a new family member 'Charlie' to the family array in userShallow.

// D) Verification:
// console.log('Original:', originalUser);
// console.log('Shallow Copy:', userShallow);
// console.log('Deep Copy:', userDeep);

// QUESTION: Which changes affected the originalUser? Explain why based on the Heap.

// ---------------------------------------
// 3. The 'this' Keyword & Method Borrowing
// ---------------------------------------
const videoGame = {
  title: 'Cyberpunk 2077',
  year: 2020,

  calcAge: function () {
    console.log(2026 - this.year);

    // CHALLENGE: Write an inner arrow function called 'isOld'
    // that logs true if the game was released before 2021.
    const isOld = () => {
      // YOUR CODE HERE (Use 'this')
    };
    isOld();
  },

  greet: () => {
    console.log(`Playing: ${this.title}`);
  },
};

const movie = {
  title: 'Inception',
  year: 2010,
};

// E) Method Borrowing:
// Borrow the calcAge method from videoGame and use it for the movie object.
// YOUR CODE HERE
