/*
 * NOTE: Function consists of: input (known as an argument), code and output
 */

let greetUser = function () {
  console.log('Welcome user!');
};

greetUser();
greetUser();
greetUser();

// input/argument
let square = function (num) {
  // code
  let result = num * num;
  // result
  return result;
};

// Calling the function, by referencing it by name
let value = square(3);
let otherValue = square(10);

console.log(value);
console.log(otherValue);

// Challenge area
// Function to convert fahrenheit to celsius

let convertFahrenheitToCelsius = function (fahrenheit) {
  let celsius = ((fahrenheit - 32) * 5) / 9;
  // returns the temperature in celsius, which is the converted value
  return celsius;
};

let tempOne = convertFahrenheitToCelsius(32);
let tempTwo = convertFahrenheitToCelsius(68);

console.log(tempOne);
console.log(tempTwo);
