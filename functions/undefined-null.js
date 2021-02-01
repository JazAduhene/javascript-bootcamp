// Undefined is used to represent the absence of a value.

// Example of undefined for a variable
let name = 'Jean'  // variable (name)

if (name === undefined) {
    console.log('Please provide a name')
} else {
    console.log(name)
}

// Example of undefined for an argument
// Undefined as the function returns default value
let square = function (num) {
    console.log(num)
}

let result = square()
    console.log(result)

// Null as assigned value
let age = 27 

age = null

console.log(age)