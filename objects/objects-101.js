let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

console.log(`${myBook.title} by ${myBook.author}`);

myBook.title = 'Animal Farm'

console.log(`${myBook.title} by ${myBook.author}`);


// Challenge area

// name, age, location
// Jaz is 24 and lives in London
// Increase age by 1 and print message again

let myProfile = {
    name: 'Jaz',
    age: 24,
    location: 'London'
}

console.log(`${myProfile.name} is ${myProfile.age} and lives in ${myProfile.location}.`);

myProfile.age = myProfile.age + 1;

console.log(`${myProfile.name} is ${myProfile.age} and lives in ${myProfile.location}.`);
