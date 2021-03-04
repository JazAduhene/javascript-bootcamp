/*
 * Global scope (convertFahrenheitToCelsius, tempOne, tempTwo)
 * Local scope (fahrenheit - which is the function argument, celsius)
 * Local scope (isFreezing)
 */

let convertFahrenheitToCelsius = function (fahrenheit) {
  let celsius = ((fahrenheit - 32) * 5) / 9;

  if (celsius <= 31) {
    // Just because I create something inside a function doesn't mean its accessible outside the function.
    let isFreezing = true;
    console.log('Its chilly');
  } else {
    console.log('Its warm');
  }
  // returns the temperature in celsius, which is the converted value
  return celsius;
};

let tempOne = convertFahrenheitToCelsius(90);
let tempTwo = convertFahrenheitToCelsius(50);

console.log(tempOne);
console.log(tempTwo);
