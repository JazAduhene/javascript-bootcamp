const notes = ['Note 1', 'Note 2', 'Note 3'];

// console.log(notes.pop());
// notes.push('My new note');

// console.log(notes.shift());
// console.log(notes.unshift('New'));

// notes.splice(1, 1, 'New second item'); // Can use bracket notation or splice

// Brackets notation -  Accessing an item within  a bracket, for example notes[1]

notes[2] = 'This is now the new note 3';


notes.forEach(function (item, index) { // Callback function is a function that gets passed to sa function
    console.log(index) // Prints the index for each item in array
    console.log(item); // Prints all items in array
}) 

console.log(notes.length);
console.log(notes); // Index starts at 0 for arrays

// Counting... 1

for (let count = 0; count <= 2; count++) { // Starts the count at index 0, check the condition to see if the value is true, if it is then runs the code for the very first time.  
    console.log(count); // Code prints 0 to the screen, then increases the count by 1 then check this using count++
}

for (let count = 2; count >=0; count--) { // Decrement example
    console.log(count);
}

