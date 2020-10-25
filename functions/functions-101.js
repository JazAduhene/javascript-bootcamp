// Function consists of: input (known as an argument), code and output

let greetUser = function () {
    console.log('Welcome user!')
}

greetUser() 
greetUser() 
greetUser() 

let square = function (num) {
    let result = num * num
    return result
}

let value = square(3)
let otherValue = square(10)

console.log(value)
console.log(otherValue)
