'use strict';


/*

// DEFAULT PARAMETERS:

const bookings = [];

const createBooking = function (flightNum, numPassengers = 1, price) {


  //numPassenger = numPassenger || 1; // default
  // price = price || 199; //default
  price = 199 * numPassengers;

  const booking = {
    flightNum,
    numPassengers,
    price
  }

  console.log(booking);
  bookings.push(booking);
}

createBooking('LH123');
createBooking('LH324', 2, 400); // 400 not exist - (398)
createBooking('LH543', 5);
createBooking('LH324', undefined, 1000); // numPassengers = 1 - price = 199

*/



/*
// VALUE vs REFERENCE:

const flight = 'LH456';
const tuncay = {
  name: 'Tuncay KOZAK',
  passport: 1846309020
}

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  alert(passenger.passport === 1846309020 ? ('Check in') : ('Wrong passport!'));

}
checkIn(flight, tuncay);
console.log(flight);
console.log(tuncay);

const flightNum = flight;
const passenger = tuncay;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000000);
}

newPassport(tuncay); // new passport number
checkIn(flight, tuncay);

console.log(tuncay); // Mr. duplicated!

*/



/*

// CALLBACK FUNCTIONS:

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
}

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
}

// Higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Trasformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
}

transformer('Javascript is the best!', upperFirstWord);
console.log(' ');
transformer('Javascript is the best!', oneWord);


const high5 = function () {
  console.log('🤚');
}

document.body.addEventListener('click', high5); // anywhere clicked on body element

['Tuncay', 'Mahmud', 'Murad'].forEach(high5); // 3 high5

*/



/*

// RETURNING FUNCTIONS:

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting}! ${name}`);
  }
}

// greet('Hey');
const greeterHey = greet('Hey');
greeterHey('Tuncay');
greeterHey('Mahmud');

greet('Hello')('Tuncay');

const greetArr = greeting => name =>
  console.log(`${greeting}! ${name}`);

greetArr('Hi')('Tuncay');

*/



/*

// call - apply - bind METHODS:

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],

  book(flightNum, name) {
    console.log(`${name} booked seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(198, 'Tuncay Kozak');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book; // not method any more!
//book(23, 'Mahmud'); // error about reading 'airline'

book.call(eurowings, 23, 'Mahmud Seher');
book.call(lufthansa, 23, 'Mahmud Seher');

console.log(lufthansa); // flights added bookings
console.log(eurowings); // flight added bookings

const flightData = [583, 'George'];
book.apply(eurowings, flightData); // flight added bookings
console.log(eurowings);

book.call(lufthansa, ...flightData);

const bookEW = book.bind(eurowings); // ???
const bookLH = book.bind(lufthansa);

bookEW(34, 'Murad');
bookLH(34, 'Murad');

const bookEW23 = book.bind(eurowings, 23); // ???
bookEW23('Tuncay');


lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;

  console.log(this.planes);
}
// lufthansa.buyPlane();

document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));


const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.10, 200));

const addVAT = addTax.bind(null, 0.23); // first argumet is 'this' keyword!
console.log(addVAT(100)); // 123

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  }
}

const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100)); // 123

*/



/*

// CODE CHALLENGE:

const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  answers: new Array(4).fill(0),

  registerNewAnswer() {
    const answer = Number(
      prompt(`${this.question}\n${this.options.join('\n')}\n(Write option number)`)
    );
    console.log(answer);
    typeof answer === 'number'
      && answer < this.answers.length
      && this.answers[answer]++;

    this.displayResults();
    this.displayResults('string');
  },
  displayResults(type = 'array') {
    if (type === 'array') console.log(this.answers);
    else if (type = 'string') console.log(`Results are ${this.answers.join(', ')}`);
  }
};
document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
poll.displayResults.call({ answers: [5, 2, 3, 7, 9, 11] }, 'string');

*/



/*

// IIFE:

const runOnce = function () {
  console.log('This will never run again');
}
runOnce();

(function () {
  console.log('This will never run again');
})();

(() => console.log('This will never run again'))();

{
  const isPrivate = 23;
  var notPrivate = 46;
}
//console.log(isPrivate); // doesn't exist
console.log(notPrivate);

*/



/*

// CLOSURES:

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  }
}

const booker = secureBooking();

booker(); // 1
booker(); // 2
booker(); // 3


let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  }
}

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  }
}

g();
f(); // have to write both
console.dir(f);
// re-assigning f function
h();
f(); // have to write both
console.dir(f);

*/



/*

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();

*/
