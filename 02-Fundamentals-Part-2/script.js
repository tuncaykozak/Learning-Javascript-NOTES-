'use strict';



/*

// USING STRICT MODE:

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive');

// const interface = 'Audio';
// const private = 634;

*/



/*

// FUNCTIONS:

function logger() {
  console.log("My name is Tuncay");
}

// calling - running - invoking  function:
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

//console.log(typeof fruitProcessor(3, 5));

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const number = Number('23'); // (casting to number) is a function too
console.log(number);


// Function Declaration:
function calcAge1(birthYear) {
  return (2022 - birthYear);
}
const age1 = calcAge1(1991);
console.log(age1);


// Function Expression:
const calcAge2 = function (birthYear) {
  return (2022 - birthYear);
}
console.log(calcAge2(1991));


// ARROW FUNCTION:

const calcAge3 = birthYear => 2022 - birthYear;
console.log(calcAge3(1991));

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2022 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} year`
}
console.log(yearsUntilRetirement(1991, 'Tuncay'));
console.log(yearsUntilRetirement(1987, 'Oktay')); // My brother 🧑


// Functions Calling Other Functions

function fruitSlicer(fruit) {
  return fruit * 4;
}

function fruitProcessor2(apples, oranges) {
  const applePieces = fruitSlicer(apples);
  const orangePieces = fruitSlicer(oranges);

  const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of orange.`;
  return juice;
}
console.log(fruitProcessor2(2, 3));


const calcAge4 = function (birthYear) {
  return 2022 - birthYear;
}

const yearsUntilRetirement2 = (birthYear, firstName) => {
  const age = calcAge4(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} year`);
    return retirement;
  } else {
    console.log(`${firstName} already retired`);
    return - 1;
  }
}

console.log(yearsUntilRetirement2(1991, 'Tuncay'));
console.log(yearsUntilRetirement2(1954, 'Osman Nuri'));

*/



/*

// ARRAYS:

*/
const friend1 = 'Ahmed';
const friend2 = 'Mahmud';
const friend3 = 'Mehmed';

const friends = ['Ahmed', 'Mahmud', 'Mehmed'];
console.log(friends);

const years = new Array(1991, 1995, 1987);
console.log(years);

console.log(friends[0]); // first element
console.log(friends[2]); // last element

console.log(friends.length); // 3 elements
console.log(friends[friends.length - 1]); // last element

friends[2] = 'Davud'; // mutate?
console.log(friends);

const me = ['Tuncay', 'KOZAK', 2022 - 1991, 'Engineer', friends]; // Array in Array
console.log(me);


const calcAge = function (birthYear) {
  return 2022 - birthYear;
}

const birthYears = [1991, 1995, 1987, 2022, 1954];

console.log(calcAge(birthYears)); // NaN
console.log(birthYears - 10); //NaN

const age = calcAge(birthYears[0]);
console.log(age);

const ages = [calcAge(birthYears[0]), calcAge(birthYears[1]), calcAge(birthYears[2])];
console.log(ages);


const myFriends = ['Ahmed', 'Mahmud', 'Mehmed'];
console.log(myFriends);

myFriends.push('Ali');
console.log(myFriends);

const newLength = myFriends.push('Murad');
console.log(newLength);

myFriends.unshift('Selim'); // added first place
console.log(myFriends);

const popped = myFriends.pop(); // last element is removed ('Murad')
console.log(myFriends);
console.log(popped);

myFriends.shift(); // first element is removed ('Selim')
console.log(myFriends);

console.log(myFriends.indexOf('Mahmud')); // 1 -- (Second place 0,1)

console.log(myFriends.includes('Ali')); // true

if (myFriends.includes('Murad')) { // false
  console.log('You have a friend called Murad');
}