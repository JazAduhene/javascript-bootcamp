// A method is a object property whose value is a function 
// Whats interesting about putting a function in an object is that you get access to that objects properties right inside of the function, can access all objects from inside the function. 

let restaurant = {
    name: 'Jazzys',
    guestCapacity: 75,
    guestCount: 40,
    checkAvailability: function (partySize) {
        let seatsLeft = this.guestCapacity - this.guestCount;  // (This) refers to the object, (this) is a way to access the object property.
        return partySize <= seatsLeft;
    }
}

let status = restaurant.checkAvailability(35);

console.log(status);