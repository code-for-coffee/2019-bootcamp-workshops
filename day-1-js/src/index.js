import { IronMan, TomAndJerry } from './avengers';
import Pirate from './Pirate';

import Header from './Header';

let firstHeader = new Header({
  glasses: true,
  hat: true,
  beard: null,
});

let betterHeader = new Header({
  hat: 'The Ultimate Hat Shop',
});

console.log(firstHeader.render());

console.log(betterHeader.render());

console.log(Pirate.talk('Simon'));

// // import { Party as NewParty } from './Party';

// // let fun = new NewParty();

// console.log(IronMan, TomAndJerry);

// let name = 'James';

// let food = 'tacos';

// let friends = ['Colt', 'Adam', 'Eric', 'Julia', 'Simon'];

// const favourites = {
//   movie: 'Star Wars',
//   tv: 'Game of Thrones',
//   game: 'World of Warcraft',
//   pokemon: 'Charmander',
//   happy: true,
// };

// console.log('name', name);
// console.log('food', food);
// console.log('friends', friends);
// console.log('favourites', favourites);

// // console log specific values

// console.log('favourite movie:', favourites.movie);
// console.log('first friend in array:', friends[0]);
