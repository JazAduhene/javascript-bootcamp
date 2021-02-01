// Function consists of: input (known as an argument), code and output

let greetUser = function () {
    console.log('Welcome user!')
}

greetUser() 
greetUser() 
greetUser() 

let square = function (num) { // input/argument
    let result = num * num // code
    return result // result
}

let value = square(3) // Calling the function, by referencing it by name
let otherValue = square(10)

console.log(value)
console.log(otherValue)


// Challenge area

// Function to convert fahrenheit to celsius 

let convertFahrenheitToCelsius = function (fahrenheit) {
    let celsius = (fahrenheit - 32) * 5 / 9
    return celsius // retruns the temeperature in celcius, which is the converted value
}

let tempOne = convertFahrenheitToCelsius(32)
let tempTwo = convertFahrenheitToCelsius(68)

console.log(tempOne)
console.log(tempTwo)