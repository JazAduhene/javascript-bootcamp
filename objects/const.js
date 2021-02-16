// Const is an alternative way to define variables
// Const is short for constant
// The difference between let and const is with const you cannot reassign the variable value. You can with let.
// It is best to use const over a let based variable when I know I will not be reassigning a variable.
// Cannot use const if I want to reassign a variables value.

// const isRaining = true;
// // isRaining = false; - Invalid with const
// console.log(isRaining);

const person = {
    age: 24
}

person.age = 25; // Assigning a new value only with object method.

console.log(person);

// We use const for code readability. 
// Const is a variable whose vale is never going to change.
// Let is a variable whose value is probably going to change.