/*
 * NOTE: A method is a object property whose value is a function
 * Whats interesting about putting a function in an object is that you get access to that objects properties right inside of the function, can access all objects from inside the function.
 */

let restaurant = {
  name: 'Jazzys',
  guestCapacity: 75,
  guestCount: 0,
  checkAvailability: function (partySize) {
    // (This) refers to the object, (this) is a way to access the object property.
    let seatsLeft = this.guestCapacity - this.guestCount;
    return partySize <= seatsLeft;
  },
  seatParty: function (partySize) {
    this.guestCount = this.guestCount + partySize;
  },
  removeParty: function (partySize) {
    this.guestCount = this.guestCount - partySize;
  },
};

// If I seat 72 people I only have 3 seats left (guestCapacity)
restaurant.seatParty(72);
// When I check the availability I can't seat 4 people because I only have 3 available seats (will print false)
console.log(restaurant.checkAvailability(4));
// If I remove 5 people I then have 67 seats, leaving 8 seats available.
restaurant.removeParty(5);
// (Prints true) because I now have availability for the 4 seats.
console.log(restaurant.checkAvailability(4));
