function Person(name) {
  this.name = name;
}

Person.prototype.sayName = function() {
  console.log(`Hello, I'm ${this.name}!`);
}

function Player(name, marker) {
  this.name = name;
  this.marker = marker;
}

Player.prototype.getMarker = function() {
  console.log(`My marker is '${this.marker}'`);
}

/* Object.getPrototypeOf(Player.prototype) should return the value of "Person.prototype" instead of "Object.prototype" */
Object.getPrototypeOf(Player.prototype); // returns Object.prototype

// Make `Player` objects inherit from `Person`
Object.setPrototypeOf(Player.prototype, Person.prototype);
Object.getPrototypeOf(Player.prototype); // returns Person.prototype

/*Player.prototype = Person.prototype does not work because it will set Player.prototype to directly refer to Person.prototype (i.e. not a copy */

const player1 = new Player('steve', 'X')
const player2 = new Player('also steve', 'O')

console.log(player1.sayName()); // Hello, I'm steve!
console.log(player2.sayName()); // Hello, I'm also steve!

console.log(player1.getMarker()); // My marker is 'X'
console.log(player2.getMarker()); // My marker is 'O'


function Enemy(name) {
  this.name = name
  this.marker = '^'
}

Enemy.prototype = Person.prototype;

Enemy.prototype.sayName = function() { 
  console.log('HAHAHAHAHAHA');
}

const carl = new Player('carl', 'X');
console.log(carl.sayName()); //"HAHAHAHAHAHA" because we edited the sayName function