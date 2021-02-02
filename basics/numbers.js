//  Program that calculates, arithmatics operations
//  Order of operation PEMDAS - Parentheses (), Exponents, Multiply *, Divide /, Add +, Subtract -

let num = 5.5 + 2;
let num1 = 5.5 - 2;
let num2 = 5.5 * 2;
let num3 = 5.5 / 2;

let x = 11;
let num4 = x + 1 * 2; // * operation comes first, unless I add () paretheses to signify coming first.

let age = 24;
let dogYears = (age + 1) / 7; // Overriding the default order of operation

console.log(num);
console.log(num1);
console.log(num2);
console.log(num3);

console.log(num4);

console.log(dogYears);
