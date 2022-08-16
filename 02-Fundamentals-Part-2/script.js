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
