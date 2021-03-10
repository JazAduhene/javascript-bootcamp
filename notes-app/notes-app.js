/*
 * DOM - Document Object Model
 * DOM is used to access everything inside the web page. Dom manipulation.
 */

// Query all and remove all pertaining the element selected (paragraph assigned to p tag)
const ps = document.querySelectorAll('p');

// Created a new function, with forEach that selects all elements with same tag
ps.forEach(function (p) {
  // Removes all within p tag from page
  p.remove();
});

/*
// Query and remove 1st paragraph
const p = document.querySelector('p');
p.remove();


// Query all and remove all pertaining the element selected (paragraph assigned to p tag)
const ps = document.querySelectorAll('p');
// Created a new function, with forEach that selects all elements with same tag
ps.forEach(function (p) {
  // Change the value of each paragraph
  p.textContent = 'Gotcha!';
});


const ps = document.querySelectorAll('p');
// Prints all p texts to console
console.log(p.textContent);
*/
