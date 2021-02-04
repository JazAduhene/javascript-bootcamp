let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

let otherBook = {
    title: 'The Untethered Soul',
    author: 'Michael A Singer',
    pageCount: 245
}

let getSummary = function (book) {
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long`
    }
}

let bookSummary = getSummary(myBook);
let otherBookSummary = getSummary(otherBook);

console.log(otherBookSummary.pageCountSummary);


// Challenge area
// Take fahrenheit in - return objects with all three 

let fahrenheit =  74;

let myTemperature = {
    celsius: (fahrenheit - 32) * 5 / 9,
    kelvin: (fahrenheit + 459.67) * 5 / 9
}

let convertFahrenheit = function (temperature) {
    return {
        fahrenheitConversionOne: `${fahrenheit}f is equivalent to ${myTemperature.celsius}c`,
        fahrenheitConversionTwo: `${fahrenheit}f is equivalent to ${myTemperature.kelvin}k`
    }
}

let celsiusConversion = convertFahrenheit(myTemperature.celsius);
let kelvinConversion = convertFahrenheit(myTemperature.kelvin);

console.log(celsiusConversion.fahrenheitConversionOne);
console.log(kelvinConversion.fahrenheitConversionTwo);


// An easier way to complete this challenge

let conFahrenheit = function (fahrenheit) {
    return {
        fahrenheit: fahrenheit,
        celsius: (fahrenheit - 32) * 5 / 9,
        kelvin: (fahrenheit + 459.67) * 5 / 9
    }
}

let temps = conFahrenheit(74);
console.log(temps);
