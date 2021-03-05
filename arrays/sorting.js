const notepad = [
  {
    title: 'My next trip',
    body: 'I would like to go to Portugal',
  },
  {
    title: 'Habits to work on',
    body: 'Web Dev, Daily & Weekly goals',
  },
  {
    title: 'My Office',
    body: 'Get a computer setup and my own place',
  },
];

// A variable created for function containing argument of notepad. Function to put notepad items in alphabetical order
const sortNotepad = function (notepad) {
  // Using sort method with notepad array. function parsing in argument of a and b. a and b represent an object from the array
  notepad.sort(function (a, b) {
    // Using less than operator < to see if a comes before b
    if (a.title.toLowerCase() < b.title.toLowerCase()) {
      // If result is true return -1
      return -1;
      // Using less than operator < to see if b comes before a
    } else if (b.title.toLowerCase() < a.title.toLowerCase()) {
      // If it is and b should come first then return 1
      return 1;
    } else {
      // If a doesn't come before b and b doesn't come before a that means they're identical, return 0 means that the order the array remains the same
      return 0;
    }
  });
};

// Call sort Method, parse in a list of notes(notepad) that are being sorted
sortNotepad(notepad);
// Prints out the notes array
console.log(notepad);
