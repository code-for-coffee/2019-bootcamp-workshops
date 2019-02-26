// write an arrow function that calculates the area of a square

function Square(height) {
  return height * height;
}

const newSquare = height => {
  return Math.pow(height, 2);
};

function sayName(given, family) {
  return family + given;
}

const newSayName = (given, family) => {
  return `${family}${given}`;
};

// variable challenge

const age = 18;

const pets = ['Magda', 'Derp', 'Beer', 'Piggy', 'Meowington'];

const car = {
  model: 'Ranger',
  make: 'Ford',
  year: '1987',
};

const lunch = ['tacos', { pizza: true }];

if (lunch.length > 2) {
  let full = true;
}

//
