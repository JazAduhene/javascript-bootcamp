const todo = ['Prey', 'Meditate', 'Eat', 'Drink', 'Web Dev']; // Created an array with 5 todos

todo.splice(2, 1);
todo.push('New item');

console.log(todo.shift());

console.log(`You have ${todo.length} todos!`); // Prints 'You have 5 todos'
console.log(todo);

// console.log(`Todo: ${todo[0]}, ${todo[todo.length - 2]}`); // Prints the first and second to last items

// Another way of doing the above

// console.log(`Todo: ${todo[0]}`); // Prints the first item in the array
// console.log(`Todo ${todo[todo.length - 2]}`); // Prints the second to last item in the array