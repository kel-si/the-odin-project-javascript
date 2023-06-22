function Player(name, marker) {
  this.name = name;
  this.marker = marker;
  this.sayName = function() {
    console.log(name);
  }
}

const player = new Player('steve', 'X');
console.log(player.name); // "steve"
console.log(player.sayName()); // "steve"