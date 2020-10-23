let isAccountLocked = false
let userRole = 'admin'

/*
if (isAccountLocked) {
    console.log('Account is locked')
} else {
    console.log('Welcome')
}
*/

if (isAccountLocked) {
    console.log('Account is locked')
} else if (userRole === 'admin') {
    console.log('Welcome Admin')
} else {
    console.log('Welcome')
}

// Program using else if clause, the else clause give us the option to provide a fallback

