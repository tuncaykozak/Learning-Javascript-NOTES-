'use strict';

/*

// SCOPING IN PRACTICE:
// Global Scope -- Function(Local) Scope -- Block Scope(ES6)

function calcAge(birthYear){
    const age = 2022-birthYear;

    function printAge(){
        const output =(`You are ${age} years old, born in ${birthYear}.`);
        console.log(output);
        if(birthYear >= 1981 && birthYear <= 1996){
            var millenial = true;
            const firstName = 'Mahmud';
            console.log(`Oh millenial, ${firstName}`); // was 'Tuncay' before 'Mahmud'

            function add (a, b){
                return a + b;
            }
        }
        // console.log(add(2, 3)); -- Error!
        // console.log(output);
        console.log(millenial);
    }

    // console.log(lastName); -- Error!
    printAge();
    console.log(firstName);
    return age;
}

const firstName ='Tuncay';
calcAge(1991);

// console.log(age); --Error!
// printAge(); --Error!

*/

/*

// HOISTING and TDZ IN PRACTICE:


// Variables

console.log(me); // -- undefined
//console.log(job); // -- error!
//sconsole.log(year); // -- error!

var me = 'Tuncay';
let job = 'engineer';
const year = 1991;

console.log('');

// Functions

console.log(addDecl(2, 3));
// console.log(addExpr(2, 3)); // -- error!
// console.log(addArrow(2, 3)); // -- error!
console.log(addVar); // undefined

console.log('');

function addDecl(a, b) {
    return a + b;
}

const addExpr = function (a, b) {
    return a + b;
};

const addArrow = (a, b) => a + b;

var addVar = (a, b) => a + b;

// Example

if (!numProducts) deleteShoopingCart();

var numProducts = 10; // -- it works
// let numProducts = 10; // -- error!

console.log('');

function deleteShoopingCart() {
    console.log('All products deleted!');
}

*/



/*
// THE THIS KEYWORD IN PRACTICE:

console.log(this);

const calcAge = function (birthYear) {
    console.log(2022 - birthYear);
    console.log(this); // undefined
}

calcAge(1991);

const calcAgeArrow = (birthYear) => {
    console.log(2022 - birthYear);
    console.log(this); // same console.log(this); 
}

calcAgeArrow(1991);

const tuncay = {
    year: 1991,
    calcAge: function () {
        console.log(this); // tuncay object
        console.log(2022 - this.year); // 31
    },
};

tuncay.calcAge();

const another = {
    year: 2007,
};

another.calcAge = tuncay.calcAge;
another.calcAge(); // 15

*/
