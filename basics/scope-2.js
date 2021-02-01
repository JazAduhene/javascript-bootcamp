// Global ()
 // Local () - Variable shadowing
    //Local (name)
 // Local

 // let name = 'Jasmine'

if (true) {
    // let name = 'Jon' // Variable shadowing, the local variable is hiding the global, basically overrides it.
    
    if (true) {
        name = 'Jean' // This line changes name from Jon to Jean
        console.log(name) // Prints Mike
    }
}

if (true) {
    console.log(name) // Prints Jon because it is outside the scope it falls back on the global not local.
}

// Leaked global (not good) happens if we assign a value to a variable but that variable wasnt explicitly defined.
