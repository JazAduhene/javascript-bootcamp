// Program using logical and/or operator for a restaurant reservation system for vegan customers. 

let isGuestOneVegan = true
let isGuestTwoVegan = false

if (isGuestOneVegan && isGuestTwoVegan) {
    console.log('Only offer vegan dishes')
} else if (isGuestOneVegan || isGuestTwoVegan) {
    console.log('Offer some vegan options')
} else {
    console.log('Offer anything on the menu')
}