const Letter = require('./Letter');

function Word(word) {
  this.sayHello = function() {
    console.log('Word says "Hello!"');
    let letter = new Letter();
    letter.sayHello();
  }

  this.letters = word.split("").map(char => {
    return new Letter(char);
  });
}

Word.prototype.getSolution = function() {
  return this.letters.map(letter => {
    return letter.getSolution();
  }).join(" ");
};

Word.prototype.concat = function() {
  return this.letters.join(" ");
};

Word.prototype.guessLetter = function(char) {
  let foundLetter = false;
  this.letters.forEach(letter => {
    if (letter.guess(char)) {
      foundLetter = true;
    }
  });

  console.log("\n" + this + "\n");
  return foundLetter;
}

Word.prototype.guessedCorrectly = function() {
  return this.letters.every(letter => {
    return letter.visible;
  });
};

module.exports = Word;