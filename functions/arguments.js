// Multiple arguments
let add = function (a, b, c, d) { // Can add as many arguments as I want
    return a + b + c + d 
}

let result = add(10, 1, 2, 1) // Represented by a and b, c, d 
    console.log(result)

// Default arguments
let getScoreText = function (name = 'Anonymous', score = 0) {
    return `Name: ${name} - Score: ${score}` // return 'Name: ' + name + '  Score: ' + score - This is concatentation, using template strings are better than using concatenation. Concatenation = complex
}

let scoreText = getScoreText(undefined, 14)
    console.log(scoreText)


// Challenge area
// Tip calculator 
let getTip = function (total, tipPercent = .2){
    let percent = tipPercent * 100
    let tip = total * tipPercent
    return `A ${percent}% tip on $${total} would be $${tip}`
}

let tip = getTip(60) 
    console.log(tip)

// Regular string
console.log('Jaz' + ' Aduhene') // I can use single quotes or double quotes to make a string, it doesnt make a difference

// Template string - Preferable
let name = 'Jaz'
let age = 24
console.log(`Hey, my name is ${name}! I am ${age} years old.`) // Backticks, this format make the syntax easier to read and change