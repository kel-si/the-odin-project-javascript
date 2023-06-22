/* All objects in JavaScript have a prototype, another object that the original object inherits from. A centralized, shared object which the objects have access to saves memory */

function Player(name, marker) {
  this.name = name;
  this.marker = marker;
  this.sayName = function() {
    console.log(name);
  }
}
const player1 = new Player('steve', 'X');
const player2 = new Player('suzy', '0');

// Check an object's prototype: 
console.log(Object.getPrototypeOf(player1) === Player.prototype); // true
console.log(Object.getPrototypeOf(player2) === Player.prototype); // true

// Don't do this! (Deprecated)
// player1.__proto__ === Player.prototype // returns true

// Defining on the prototype
Player.prototype.sayHello = function() {
  console.log("Hello, I am a player!");
}

console.log(player1.sayHello()); // "Hello, I am a player!"

console.log(player1.valueOf()); // { name: 'steve', marker: 'X', sayName: [Function (anonymous)] }

/* Player.prototype is inheriting from Object.prototype. Every prototype object inherits from Object.prototype by default. An object’s Object.getPrototypeOf() value can only be one unique prototype object*/

console.log(player1.hasOwnProperty('valueOf')); // false
console.log(Object.prototype.hasOwnProperty('valueOf')); // true