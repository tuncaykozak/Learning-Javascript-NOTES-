'use strict';


const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekdays[3]]: { // thu :
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: { // [`day-${2+4}`]: (day-6)
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // openingHours: openingHours,
  openingHours,

  orderDelivery: function ({ starterIndex, mainIndex, time, adress }) {
    console.log(`${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${adress} at ${time}.`);
  },

  orderDelivery2: function ({ starterIndex = 0, mainIndex = 1, time = '20:00', adress }) {
    console.log(`${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${adress} at ${time}.`);
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`The pasta with ${ing1}, ${ing2}, ${ing3}.`);
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

/*

// OBJECT KEYS-VALUES-ENTRIES:

const properties = Object.keys(openingHours);
console.log(properties); // array

for (const day of Object.keys(openingHours)) {
  console.log(day);
}

const values = Object.values(openingHours);
console.log(values); // open and close times

const entries = Object.entries(openingHours);
console.log(entries); // array of arrays => properties + values

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}

*/



/*

// OPTIONAL CHAINING:

console.log(restaurant.openingHours.mon); // undefined
//console.log(restaurant.openingHours.mon.open); // error

if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

console.log(restaurant.openingHours.mon?.open); // shorter
console.log(restaurant.openingHours?.mon?.open);

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  // console.log(day);
  // const open = restaurant.openingHours[day]?.open || 'closed'; // sat closed?
  const open = restaurant.openingHours[day]?.open ?? 'closed'; // sat 0
  console.log(`On ${day} we open at ${open}`);
}
const users = [];
console.log(users[0] ?? 'User array empty');

*/



/*

// LOOPING ARRAYS: (OF LOOP)

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const item of menu) console.log(item);

for (const item of menu.entries()) {
  console.log(item);
}
//console.log(...menu.entries());

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}

*/



/*

// SHORT CIRCUITING:

const rest1 = {
  name: 'Capri',
  numGuests: 20,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni',
};

const rest3 = {
  name: 'Maya',
  numGuests: 0,
};
// rest1.numGuests = rest1.numGuests || 10; // 20
// rest2.numGuests = rest2.numGuests || 10; // 10

rest1.numGuests ||= 10; // 20
rest2.numGuests ||= 10; // 10

console.log(rest1);
console.log(rest2);

rest3.numGuests ??= 10; // 0
console.log(rest3);

rest2.owner = rest2.owner && '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>'; // same below
console.log(rest2); // changed to anonymous owner

///

console.log(3 || 'Tuncay');  // 3
console.log('' || 'Tuncay'); // Tuncay
console.log(true || 0); // true
console.log(undefined || null); // null

console.log(undefined || 0 || '' || 'Hello' || 23 || null); // Hello


const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guest1); // 10

const guest2 = restaurant.numGuests || 10;
console.log(guest2); // 10

const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect); // 10

restaurant.numGuests = 23;
const guest3 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guest3); // 23


console.log(0 && 'Tuncay'); // 0
console.log(7 && 'Tuncay'); // Tuncay
console.log('Hello' && 23 && null && 'Jonas'); // null

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushroom', 'spinach')
}

restaurant.orderPizza && restaurant.orderPizza('mushroom', 'spinach');

*/



/*

// REST PATTERN and PARAMETERS:

const arr = [1, 2, ...[3, 4]];

const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others); // others is an array

const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(pizza, risotto, otherFood); // otherFood = starterMenu and 'Pasta' isn't included

const { sat, ...weekdays } = restaurant.openingHours;
console.log(sat);
console.log(weekdays);

const add = function (...numbers) {
  // console.log(numbers);
  let sum = 0;
  for (let i = 0; i < numbers.length; i++)
    sum += numbers[i];
  console.log(sum);
}
add(2, 3);
add(5, 3, 7, 2);
add(8, 4, 6, 1, 4, 2, 3);

const x = [23, 7, 5];
add(...x);

restaurant.orderPizza('mushroom', 'onion', 'olives');
restaurant.orderPizza('spinach'); // otherIngredients is an empty array

*/



/*

// SPREAD OPERATOR:

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]]; //really bad array
console.log(badNewArr);

const newArr = [1, 2, ...arr]; //better 
console.log(newArr);
console.log(...newArr); // elements

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

const mainMenuCopy = [...restaurant.mainMenu]; // easy use
console.log(mainMenuCopy);

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

const str = 'Tuncay';
const letters = [...str, 'K.'];
console.log(letters);

const ingredients = [prompt('Let\'s make pasta! Ingredients1 ?'), prompt('Let\'s make pasta! Ingredients2 ?'), prompt('Let\'s make pasta! Ingredients3 ?')];
console.log(ingredients);
restaurant.orderPasta(...ingredients);

const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);

*/



/*

// DESTRUCTURING OBJECTS:

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const { name: restaurantName, openingHours: hours, categories: tags } = restaurant;
console.log(restaurantName, hours, tags); // same ouput below

const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
//{ a, b } = obj; syntax error!
({ a, b } = obj); // it works
console.log(a, b);

const { fri } = openingHours;
console.log(fri);
const { fri: { open, close } } = openingHours;
console.log(open, close);

restaurant.orderDelivery({
  time: '22:30',
  adress: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2
})

restaurant.orderDelivery2({ // default values from function
  adress: 'Via del Sole, 21',
})

*/



/*

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z); // x = 2 - y = 3 - z = 4
console.log(arr);

let [first, second] = restaurant.categories; // took first two indexes
console.log(first, second);

[first, second] = [second, first];
console.log(first, second); // switched

const nested = [2, 4, [5, 6]];
const [i, , j] = nested;
console.log(i, j); // first and last(its an array)
const [k, , [l, m]] = nested;
console.log(k, l, m); // 2 - 5 - 6

const [p, q, r] = [8, 9];
console.log(p, q, r); // r is 'undefined'

*/



/*

// CODE CHALLENGE:

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
    'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const [players1, players2] = game.players;
console.log(players1, players2);
console.log("");

const [gk, ...fieldPlayers] = game.players[0];
console.log(gk, fieldPlayers);
console.log("");

const allPlayers = [...game.players[0], ...game.players[1]]
console.log(allPlayers);
console.log("");

const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(...players1Final);
console.log("");

const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);
console.log("");

const printGoals = function (...players) {
  console.log(`${players.length} goals were scored`);
}
printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals('Davies', 'Muller');
printGoals(...game.scored);
console.log("");

team1 < team2 && console.log('Team1 is more likely to win');
team1 > team2 && console.log('Team2 is more likely to win'); // wont work

*/
