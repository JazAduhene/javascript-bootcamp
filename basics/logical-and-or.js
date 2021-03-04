let temp1 = 38;
let temp2 = 49;

// Logical And Operator to print, program that prints nice weather if its between 20 and 30 degrees celsius.
// Anything out of the created range of temperature 20 - 40 will not print a message.
// Logical And Operator - True if both sides are true, false otherwise.

if (temp1 >= 20 && temp1 <= 40) {
  console.log('It is pretty nice out');
}

// Logical Or operator - Atleast 1 side has to be true.

if (temp2 <= 0 || temp2 >= 50) {
  console.log('Do not go outside');
} else {
  console.log('Do what you want');
}
