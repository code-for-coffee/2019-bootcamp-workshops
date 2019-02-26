"use strict";

var _avengers = require("./avengers");

var _Pirate = _interopRequireDefault(require("./Pirate"));

var _Header = _interopRequireDefault(require("./Header"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let firstHeader = new _Header.default({
  glasses: true,
  hat: true,
  beard: null
});
let betterHeader = new _Header.default({
  hat: 'The Ultimate Hat Shop'
});
console.log(firstHeader.render());
console.log(betterHeader.render());
console.log(_Pirate.default.talk('Simon')); // // import { Party as NewParty } from './Party';
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
//# sourceMappingURL=index.js.map