// Javascript uses lexical scoping also known as static scoping. Variable defined in one part of program might no be accesible everywhere else in program due to the context that the variable is designed and used.
// 1. Global scope - Contains all things defined outside of all code blocks
// 2. Local scope - Things defined inside a code block

// In a scope you can access variables defined in that scope or in any parent/ancestor scope.

// Global scope alwsys exists, this programs has one (varOne)
 // Local scope (varTwo)
   // Local scope (varFour)
 // Local scope (varThree)

let varOne = 'varOne'

if (true) {
    console.log(varOne)
    let varTwo = 'varTwo'
    console.log(varTwo)

    if (true) {
        let varFour = 'varFour'
    }
}

if (true) {
    let varThree = 'varThree'
}

console.log(varTwo)
