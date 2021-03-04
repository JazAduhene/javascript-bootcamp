let num = 103.941;

console.log(num.toFixed(2));

// Returns the value of a number rounded to the nearest integer.
console.log(Math.round(num));
// Returns the largest integer less than or equal to a given number.
console.log(Math.floor(num));
// Always rounds a number up to the next largest integer.
console.log(Math.ceil(num));

let min = 10;
let max = 20;

// Returns a random number from 10 - 20
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomNum);

// Challenge area
let makeGuess = function (guess) {
  let minGuess = 1;
  let maxGuess = 5;
  let randomNumber =
    Math.floor(Math.random() * (maxGuess - minGuess + 1)) + minGuess;

  return guess === randomNumber;
};
console.log(makeGuess(1));
