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