/*

// BEGINNING:

let js = "amazing";
// if (js === "amazing") alert("JS is FUN!");

console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = 'KOZAK';

console.log(firstName);
console.log(firstName);
console.log(firstName);

//let new = 27; unexpected token 'new'

let PI = 3.14;

//Naming Variables
let myFirstJob = 'Electrical Engineer';
let myCurrentJob = 'Programmer';

console.log(myFirstJob);

* /


/*

// DATA TYPES:

let javascriptIsFun = true;
console.log(javascriptIsFun);

//console.log(typeof true);
console.log(typeof javascriptIsFun);
//console.log(typeof 23);
//console.log(typeof 'true');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);

*/



/*

// DECLARING VARIABLES:

let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;

// const job;

var job = 'programmer';
job = 'teacher';

lastName = 'KOZAK'
console.log(lastName);

*/



/*

// COMPARISONS:

const ageTuncay = 2042 - 1991;
const ageSarah = 2042 - 2020;
console.log(ageTuncay, ageSarah);

console.log(ageTuncay * 2, ageTuncay / 10, 2 ** 3);

const firstName = 'Tuncay';
const lastName = 'KOZAK';
console.log(firstName + ' ' + lastName);

let x = 10 + 5;
console.log(x);
x += 10;
console.log(x);
x *= 4;
console.log(x);
x++;
console.log(x);
x--;
console.log(x);


console.log(ageTuncay > ageSarah);
console.log(ageSarah >= 22);
console.log(ageSarah > 30);

const isFullAge = ageSarah >= 18;

*/



/*

//COMPARISONS-2:

const now = 2022;
const ageTuncay = now - 1991;
const ageSarah = now - 2005;

console.log(now - 1991 > now - 2005);

let x, y;
x = y = 25 - 10 - 5; //right to left example
console.log(x, y);

const averageAge = (ageTuncay + ageSarah) / 2;
console.log(ageTuncay, ageSarah, averageAge);

*/



/*

// CODE CHALLENGE:

let markWeight = 78;
let markHeight = 1.69;

let johnWeight = 92;
let johnHeight = 1.95;


let markBMI = markWeight / markHeight ** 2;
let johnBMI = johnWeight / johnHeight ** 2;
console.log(markBMI);
console.log(johnBMI);

let markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);

//-------------------------------------------------------

markWeight = 95;
markHeight = 1.88;

johnWeight = 85;
johnHeight = 1.76;


markBMI = markWeight / markHeight ** 2;
johnBMI = johnWeight / johnHeight ** 2;
console.log(markBMI);
console.log(johnBMI);

markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);

*/



/*

// STRING:

const firstName = 'Tuncay';
const job = 'enginner';
const birthYear = 1991;
const year = 2022;

const tuncay = "I'm " + firstName + ', a ' + (year - birthYear) + " " + "years old " + job;
console.log(tuncay);

const tuncayNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}`;
console.log(tuncayNew);

console.log(`Just a regular string...`);

console.log('String with \n\
multiple\n\
lines');

*/


/*

// IF/ELSE STATEMENTS:

const age = 19;
const isOldEnough = age >= 18;

if (isOldEnough) {
  console.log('Sarah can start driving license 🚗');
} else {
  const yearsLeft = 18 - age;
  console.log(`Wait another ${yearsLeft} years :)`);
}

const birthYear = 1991;

let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century);

*/



/*

// CODE CHALLENGE:

let markWeight = 78;
let markHeight = 1.69;

let johnWeight = 92;
let johnHeight = 1.95;

let bmiMark = markWeight / markHeight ** 2;
let bmiJohn = johnWeight / johnHeight ** 2;

if (bmiMark > bmiJohn)
  console.log(`Mark's BMI is higher than John's`);
else console.log(`John's BMI is higher than Mark's`);



//-------------------------------------------------------

markWeight = 95;
markHeight = 1.88;

johnWeight = 85;
johnHeight = 1.76;

bmiMark = markWeight / markHeight ** 2;
bmiJohn = johnWeight / johnHeight ** 2;

if (bmiMark > bmiJohn)
  console.log(`Mark's BMI(${bmiMark}) is higher than John's BMI(${bmiJohn})`);
else console.log(`John's BMI(${bmiJohn}) is higher than Mark's BMI(${bmiMark})`);

*/



/*

// TYPE CONVERSION:

const inputYear = '1991';
console.log(inputYear);
console.log(Number(inputYear));
console.log(inputYear + 18);
console.log(Number(inputYear) + 18);

console.log(Number('Tuncay')); //NotaNumber - NaN
console.log(typeof NaN);

console.log(String(23), 23);


// TYPE COERCION:

console.log('I am ' + 31 + ' years old');
console.log('23' - '10' - 3);
console.log('23' * '2');

let n = '1' + 1;
n = n - 1;
console.log(n);

*/



/*

// TRUTHY AND FALSY VALUES:

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(''));
console.log(Boolean('Tuncay'));
console.log(Boolean({}));
console.log(Boolean(NaN));

// const money = 0; 
const money = 100;
if (money) {
  console.log('Dont spend it all :)');
} else
  console.log("You should get a job!");

let height;
if (height) {
  console.log('Is defined');
} else
  console.log('UNDEFINED!');

  */



/*

// EQUALITY OPERATOR:

const age = 18;
if (age === 18) console.log('You just became an adult'); // strict
if (age == 18) console.log('You just became an adult'); // loose

const favouriteNumber = prompt("What's your favourite number:");
console.log(favouriteNumber + "-" + typeof favouriteNumber);

if (favouriteNumber === 13) {
  console.log('Cool!');
} else {
  console.log('No LUCK!');
}

if (favouriteNumber !== 13) console.log("Why not 13!");

*/

/*

// LOGICAL OPERATORS:

const hasLicense = true;
const hasVision = false;

console.log(hasLicense && hasVision);
console.log(hasLicense || hasVision);

console.log(!hasLicense);

const shouldDrive = hasLicense && hasVision;

if (shouldDrive) {
  console.log('Able to drive');
} else {
  console.log('Not able to');
}

const isTired = true;

console.log(hasVision && hasLicense && !isTired);

*/



/*

// CODE CHALLENGE:

let averageDolphins = (96 + 108 + 89) / 3;
let averageKoalas = (88 + 91 + 110) / 3;

console.log('According to First Data:');
console.log(`Average of Dolphins: ${averageDolphins}\n\
Average of Koalas: ${averageKoalas}`);

if (averageDolphins > averageKoalas) {
  console.log(`Dolphins won (According to Condition1)`);
} else if (averageKoalas > averageDolphins) {
  console.log(`Koalas won (According to Condition1)`);
} else {
  console.log(`Draw! (According to Condition1)`);
}

if (averageDolphins > 100 || averageKoalas > 100) {
  if (averageDolphins > averageKoalas) {
    console.log(`Dolphins won (According to Condition2)`);
  } else if (averageKoalas > averageDolphins) {
    console.log(`Koalas won (According to Condition2)`);
  } else {
    console.log(`Draw! (According to Condition2)`);
  }
} else console.log(`There is no Winner!(According to Condition2)`);

if (averageDolphins > 100 || averageKoalas > 100) {
  if (averageDolphins > averageKoalas) {
    console.log(`Dolphins won (According to Condition3)`);
  } else if (averageKoalas > averageDolphins) {
    console.log(`Koalas won (According to Condition3)`);
  } else if (averageDolphins > 100 && averageKoalas > 100) {
    console.log(`Draw! (According to Condition3)`);
  }
} else console.log(`There is no Winner!(According to Condition3)`);
console.log('\n');

//----------------------------------------------------------------------

averageDolphins = (97 + 112 + 101) / 3;
averageKoalas = (109 + 95 + 123) / 3;

console.log('According to Second Data:');
console.log(`Average of Dolphins: ${averageDolphins}\n\
Average of Koalas: ${averageKoalas}`);

if (averageDolphins > averageKoalas) {
  console.log(`Dolphins won (According to Condition1)`);
} else if (averageKoalas > averageDolphins) {
  console.log(`Koalas won (According to Condition1)`);
} else {
  console.log(`Draw! (According to Condition1)`);
}

if (averageDolphins > 100 || averageKoalas > 100) {
  if (averageDolphins > averageKoalas) {
    console.log(`Dolphins won (According to Condition2)`);
  } else if (averageKoalas > averageDolphins) {
    console.log(`Koalas won (According to Condition2)`);
  } else {
    console.log(`Draw! (According to Condition2)`);
  }
} else console.log(`There is no Winner!(According to Condition2)`);

if (averageDolphins > 100 || averageKoalas > 100) {
  if (averageDolphins > averageKoalas) {
    console.log(`Dolphins won (According to Condition3)`);
  } else if (averageKoalas > averageDolphins) {
    console.log(`Koalas won (According to Condition3)`);
  } else if (averageDolphins > 100 && averageKoalas > 100) {
    console.log(`Draw! (According to Condition3)`);
  }
} else console.log(`There is no Winner!(According to Condition3)`);
console.log('\n');

//--------------------------------------------------------------------------

averageDolphins = (97 + 112 + 101) / 3;
averageKoalas = (109 + 95 + 106) / 3;

console.log('According to Third Data:');
console.log(`Average of Dolphins: ${averageDolphins}\n\
Average of Koalas: ${averageKoalas}`);

if (averageDolphins > averageKoalas) {
  console.log(`Dolphins won (According to Condition1)`);
} else if (averageKoalas > averageDolphins) {
  console.log(`Koalas won (According to Condition1)`);
} else {
  console.log(`Draw! (According to Condition1)`);
}

if (averageDolphins > 100 || averageKoalas > 100) {
  if (averageDolphins > averageKoalas) {
    console.log(`Dolphins won (According to Condition2)`);
  } else if (averageKoalas > averageDolphins) {
    console.log(`Koalas won (According to Condition2)`);
  } else {
    console.log(`Draw! (According to Condition2)`);
  }
} else console.log(`There is no Winner!(According to Condition2)`);

if (averageDolphins > 100 && averageKoalas > 100) {
  if (averageDolphins > averageKoalas) {
    console.log(`Dolphins won (According to Condition3)`);
  } else if (averageKoalas > averageDolphins) {
    console.log(`Koalas won (According to Condition3)`);
  } else
    console.log(`Draw! (According to Condition3)`);

} else console.log(`There is no Winner!(According to Condition3)`);
console.log('\n');

*/



/*

// SWITCH STATEMENT:

const day = 'saturday';

switch (day) {
  case 'monday': console.log('Course day'); console.log('Meetup!'); break;
  case 'tuesday': console.log('Prepare theory lessons'); break;
  case 'wednesday': console.log('Prepare theory lessons'); break;
  case 'friday': break;
  case 'saturday':
  case 'sunday': console.log('Enjoy the weekend :D'); break;
  default: console.log('Not a valid day!'); break;
}

*/



/*

// TERNARY OPERATOR

let age = 23;
age > 18 ? console.log('An adult') : console.log('A child');

age = 15;
const person = age > 18 ? ('An adult') : ('A child');
console.log(person);

const myAge = 31;
console.log(`I am ${myAge > 18 ? 'an adult.' : 'a child'}`);

*/



/*

// CODE CHALLENGE :

let bill = 270;
let tip = 0;
console.log(`The bill was ${bill}, the tip was ${(bill < 300 && bill > 50) ? bill * 0.15 : bill * 0.2} and the total value ${bill + tip}`);

bill = 40;
console.log(`The bill was ${bill}, the tip was ${(bill < 300 && bill > 50) ? tip = bill * 0.15 : tip = bill * 0.2} and the total value ${bill + tip}`);

bill = 430;
console.log(`The bill was ${bill}, the tip was ${(bill < 300 && bill > 50) ? tip = bill * 0.15 : tip = bill * 0.2} and the total value ${bill + tip}`);

*/

