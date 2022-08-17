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

// CODE CHALLENGE:

const calcAverage = (score1, score2, score3) => {
  const average = (score1 + score2 + score3) / 3;
  return average;
}

let avgDolphins = calcAverage(44, 23, 71);
console.log(avgDolphins);

let avgKoalas = calcAverage(65, 54, 49);
console.log(avgKoalas);


const checkWinner = (avgDolphins, AvgKoalas) => {
  if (avgDolphins > avgKoalas)
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  else
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
}

checkWinner(avgDolphins, avgKoalas);

avgDolphins = calcAverage(85, 54, 41);
console.log(avgDolphins);

avgKoalas = calcAverage(23, 34, 27);
console.log(avgKoalas);

checkWinner(avgDolphins, avgKoalas);

*/



/*

// ARRAYS:

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

*/



/*

// CODE CHALLENGE:

const calcTip = (bill) => {
  let tip;
  // if (bill > 50 && bill < 300)
  //   tip = bill * 0.15;
  // else
  //   tip = bill * 0.2;

  (bill > 50 && bill < 300) ? (tip = bill * 0.15) : (tip = bill * 0.2);

  return tip;
}

console.log(calcTip(100));
//console.log(calcTip(400));
//console.log(calcTip(10));

const bills = [125, 555, 44];
console.log(bills);

//let tips = new Array();
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);

const total = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]];
console.log(total);

*/



/*

// OBJECTS:

const tuncayArray = [
  'Tuncay',
  'KOZAK',
  2022 - 1991,
  'Engineer',
  ['Mahmud', 'Ahmed', 'Murad']
];

const tuncay = {
  firstName: 'Tuncay',
  lastName: 'KOZAK',
  age: 2022 - 1991,
  job: 'Engineer',
  friends: ['Mahmud', 'Ahmed', 'Murad']
}

console.log(tuncay);
console.log(tuncay.lastName);
console.log(tuncay['lastName']);

const nameKey = 'Name';
console.log(tuncay['first' + nameKey]);
console.log(tuncay['last' + nameKey]);

// console.log(tuncay.'firstName');
// console.log(tuncay.'first' + nameKey);

const interestedIn = prompt('What do you want to know about me?');
//console.log(tuncay[interestedIn]);

if (tuncay[interestedIn])
  console.log(tuncay[interestedIn]);
else console.log('Nothing to show');

tuncay.location = 'Eskisehir';
tuncay['twitter'] = '@tuncaykozak';
console.log(tuncay);

console.log(`${tuncay.firstName} has ${tuncay.friends.length} friends and his best friend is called ${tuncay.friends[0]}.`);

*/



/*

// OBJECT METHODS:

const tuncay = {
  firstName: 'Tuncay',
  lastName: 'KOZAK',
  birthYear: 1991,
  job: 'Engineer',
  friends: ['Mahmud', 'Ahmed', 'Murad'],
  hasDriversLicense: false,

  // calcAge: function (birthYear) {
  //   return 2022 - birthYear;
  // }

  calcAge: function () {
    //console.log(this);
    this.age = 2022 - this.birthYear;
    return this.age;
  }
}

//console.log(tuncay.calcAge(1991));
//console.log(tuncay['calcAge'](1991));

console.log(tuncay.calcAge());

// tuncay.age = tuncay.calcAge();
// console.log(tuncay.age);

console.log(`Tuncay has${tuncay.hasDriversLicense ? '' : ' not'} a driver's license.`);

*/



/*

// LOOPS:

for (let rep = 1; rep <= 10; rep++) {
  // console.log('Lifting weight repetition-' + rep);
  console.log(`Lifting weight repetition-${rep}`);
}

const tuncayArray = [
  'Tuncay',
  'KOZAK',
  2022 - 1991,
  'Engineer',
  ['Mahmud', 'Ahmed', 'Murad'],
  true
];

for (let i = 0; i < tuncayArray.length; i++) {
  console.log(tuncayArray[i], typeof tuncayArray[i]);
}

const types = [];

for (let i = 0; i < tuncayArray.length; i++) {
  types[i] = typeof tuncayArray[i];
}

console.log(types);


const years = [1991, 2007, 1954, 2002];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages[i] = 2022 - years[i];
}
console.log(ages);

for (let i = 0; i < tuncayArray.length; i++) {
  if (typeof tuncayArray[i] != 'string') continue; // showing only strings
  console.log(tuncayArray[i], typeof tuncayArray[i]);
}

for (let i = 0; i < tuncayArray.length; i++) {
  if (typeof tuncayArray[i] === 'number') break; // showing until first number type elemnet (except it)
  console.log(tuncayArray[i], typeof tuncayArray[i]);
}

for (let i = tuncayArray.length - 1; i >= 0; i--) { // reverse order
  console.log(tuncayArray[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`Starting exercise ${exercise}:`);
  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise-${exercise} : Repetition-${rep}`);
  }
}

let rep = 1;
while (rep <= 10) {
  console.log(`Lifting-${rep}`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1; // first value
// console.log(dice);

while (dice !== 6) {
  console.log(`You rolled : ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log(`You rolled : ${dice} and the loop about to end...`);
}

*/



/*

// CODE CHALLENGE:

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let totals = [];

for (let i = 0; i < bills.length; i++) {
  if (bills[i] > 50 && bills[i] < 300)
    tips[i] = (bills[i] * 0.15);
  else
    tips[i] = bills[i] * 0.20;

  totals[i] = bills[i] + tips[i];
}

for (let i = 0; i < totals.length; i++) {
  console.log(`Tips-${i + 1} : ${tips[i]} (Total:${totals[i]})`);
}

let average = 0;
const calcAverage = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    average = average + arr[i];
  }
  //console.log(average);
  return (average / arr.length);
}

console.log(`Average Bill : ${calcAverage(bills)}`);

*/
