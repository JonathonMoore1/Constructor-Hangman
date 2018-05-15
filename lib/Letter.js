const Letter = function(char) {
  this.sayHello = function() {
    console.log('Letter says "Hello!"');
  }

  this.visible = !/a-z1-9/.test(char);
  this.char = char;
};

Letter.prototype.returnChar = function() {
  if (this.visible === true) {
    return this.char;
  }
  return "_";
};

Letter.prototype.guess = function(charGuess) {
  if (charGuess.toUpperCase() === this.char.toUpperCase()) {
    this.visible = true;
    return true;
  }
  return false;
}

Letter.prototype.getSolution = function() {
  return this.char;
}

module.exports = Letter;