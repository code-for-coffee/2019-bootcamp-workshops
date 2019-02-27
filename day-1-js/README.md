---
title: Introduction to Javascript
type: lesson
duration: '2:30'
creator:
  name: James Traver
  city: Chansgha, Hunan, China
competencies: Programming, Front-end Frameworks, Javascript
---

# Introduction to Javascript

### Objectives

_After this lesson, engineers will be able to:_

1. Define variables using _let_, _const_ & _symbol_
2. Use Javascript variables inside of String templates
3. Create basic Data structures (Objects & Arrays, Set, Map)
4. Define functions using lambdas and function syntax
5. Understand when to destructure a Javascript object
6. Import a Javascript module and use it

### Preparation

_Before this lesson, engineers should already be able to:_

- Write basic Javascript in legacy (ES5) syntax
- Have a basic understanding of programming

## Introduction to Javascript

Who has written Javascript? [*Prompt*]: Who has had a problem with Javascript?

#### Resources

- [Babel](https://babeljs.io/docs/learn-es2015/) project for ES2015 syntax.

## Define variables using _let_, _const_ & _symbol_

JavaScript has always had `var`:

```js
var name = 'James';
```

`var` can be hard to manage especially because of it's "function scoping", so now we've got two other ways to define values that have "block scope":

```js
// var does not have block scope
var name = 'James';
if (true) {
  var name = 'Colt';
  name; // 'Colt'
}
name; // 'Colt'

// let has block scope
let name = 'James';
if (true) {
  let name = 'Colt';
  name; // 'Colt'
}
name; // 'James'

// const has block scope too
const name = 'James';
if (true) {
  const name = 'Colt';
  name; // 'Colt'
}
name; // 'James'

// let can be reassigned
let isOpen = true;
isOpen = false;
isOpen; // false

// const cannot be reassigned
const isOpen = true;
isOpen = false; // throws error

// however, const may have child attributes modified
const myObject = {};
myObject.name = 'Pokemon';
```

Block scope helps save on memory allocation on the heap. therefore we don't use `var`.

We use `const` for everything, unless it can be reassigned later, only then do we use `let`. It's a way to let other people know (pun intended) to watch out for that value, because it will likely change over time.

In practice, most of the time use `const`.

Finally, we can use `Symbol` to uniquely identify important items, keys, and data.

```js
const symbol1 = Symbol();
const symbol2 = Symbol(42);
const symbol3 = Symbol('foo');

console.log(typeof symbol1);
// expected output: "symbol"

console.log(symbol3.toString());
// expected output: "Symbol(foo)"

console.log(Symbol('foo') === Symbol('foo'));
// expected output: false
```

## 2. Use Javascript variables inside of String templates

```js
const something = 'compose Strings';
const str = 'nobody likes to ' + something + ' strings this way';

const something = 'lovely stuff';
const str = `you can do ${something} like this`;

const str = `
  also
  multiline
  is the best
  yes really!
`;
```

## 3. Create basic Data structures (Objects & Arrays, Class)

We do a lot with arrays, here are a few methods we use often:

```js
const numbers = [1, 2, 3, 4, 5];

// map converts an array to a new, transformed array
const doubled = numbers.map(number => {
  return number * 2;
});
doubled; // [ 2, 4, 6, 8, 10 ]

// filter, return false to remove from an array
const lessThan3 = numbers.filter(n => {
  return n < 3;
});
lessThan3; // [ 1, 2 ]

// remember, that can be super short
const lessThan3 = numbers.filter(n => n < 3);
```

## Concise object methods

You can drop off `: function` from object method definitions.

```js
const obj = {
  insteadOfThis: function() {
    // do stuff
    // the old way
  },

  youCanDoThis() {
    // do stuff
    // the new way
  },
};
```

Now, here is a Javascript _class_:

```js
class Cube {
  constructor(n) {
    this.length = n;
  }
  area() {
    return this.length * this.length;
  }
  volume() {
    return this.length * this.length * this.length;
  }
}
```

This would be written in older Javascript like this.

```js

function Cube(n) {
  this.length = n;
  this.area = functon() {
    return this.length * this.length;
  }
  this.volume = function() {
    return (this.length * this.length * this.length);
  }
}
```

## 4. Define functions using lambdas and function syntax

Arrow functions remove the context from a function, meaning the function has no `this`. If you reference `this` inside an arrow function, you get the `this` from outside the function. It also looks great.

```js
const obj = {
  url: '/api/pokemon',

  fetch(users) {
    pokemon.forEach(creature => {
      // `this` is the `this` from outside this function because
      // there is no context inside an arrow function
      getPokemon(`${this.url}/${creature.id}`);
    });
  },
};
```

Also, if the other side of an arrow function is an expression, it acts like an implicit return:

```js
const add = function(x, y) {
  return x + y;
};

// becomes
const add = (x, y) => {
  return x + y;
};

// which can be shorter with explicit expression return
const add = (x, y) => x + y;
```

## 5. Understand when to destructure a Javascript object

```js
const obj = { x: 1, y: 2 };

// instead of:
const x = obj.x;
const y = obj.y;

// we can "destructure" the values off
const { x, y } = obj;
x; // 1
y; // 2

// you can use this all over the place, like function parameters
function add({ x, y }) {
  return x + y;
}
add({ x: 3, y: 4 }); // 7
```

## 6. Import a Javascript module and use it

```js
// instead of cjs
var React = require('react');

// we use ES modules
import React from 'react';
import ReactDOM from 'react-dom';

// and with destructuring to boot!
import { render } from 'react-dom';
```
