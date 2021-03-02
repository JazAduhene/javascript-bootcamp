const list = [{}, {
    title: 'My next trip',
    body: 'I would like to go to Portugal'
}, {
    title: 'Habits to work on',
    body: 'Web Dev, Daily & Weekly goals'
}, {
    title: 'Office modification',
    body: 'Get a computer setup and my own place'
}]

console.log(list.length);
console.log(list); 

let someObject = {};
let otherObject = someObject;
console.log(someObject === otherObject);

/*
* NOTE: indexOf - always uses ===
* NOTE: findIndex - allows me to specify my own way to compare two things, i.e by selecting titles
*/

// findIndex returns a true or false value
// Uses === to go through list array and find item, Specified search criteria, in other words does this title match this string
const index = list.findIndex(function (listItem, index) { 
    return listItem.title === 'Habits to work on'; 
});

console.log(index);