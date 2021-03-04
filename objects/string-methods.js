let name = 'Jaz Aduhene';
let firstName = ' Jaz ';

// Length property
console.log(name.length);

// Convert to upper case (method)
console.log(name.toUpperCase());

// Convert to lower case
console.log(name.toLowerCase());

// Includes Method
let password = '123abc$';
console.log(password.includes('password'));

// Trim Method
console.log(firstName.trim());

// Challenge area

let isValidPassword = function (password) {
  return password.length > 8 && !password.includes('password');
};

// Can use if statement but to shorten the function and get the same result, I can return
//     if (password.length > 8 && !password.includes('password')) {
//         return true;
//     } else {
//         return false;
//     }
// }

console.log(isValidPassword('sfhsjb'));
console.log(isValidPassword('JazAduhene'));
console.log(isValidPassword('jaspassword'));
