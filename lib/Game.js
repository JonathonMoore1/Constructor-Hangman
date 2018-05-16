const inquirer = require('inquirer');
const Word = require('./Word');
const words = require('./words');

function Game() {

  // Grab reference for use in inquirer
  const self = this;

  this.play = function() {
    this.guessesLeft = 10;
    this.nextWord();
  };

  this.nextWord = function() {
    let randomWord = words[Math.floor(Math.random() * words.length)];
    this.currentWord = new Word(randomWord);
    console.log("\n" + this.currentWord + "\n");
    this.makeGuess();
  };

  this.makeGuess = function() {
    this.askForLetter().then(function() {
      if (self.guessesLeft < 1) {
        console.log("\nYou are out of guesses! The answer was: " + self.currentWord.getSolution() + "\n");
        self.askToPlayAgain();
      }
      else if (self.currentWord.guessedCorrectly()) {
        console.log("You win! Let's move on to the next word.");
        self.guessesLeft = 10;
        self.nextWord();
      }
      else {
        self.makeGuess();
      }
    });
  };

  this.askToPlayAgain = function() {
    inquirer.prompt([
      {
        type: "confirm",
        name: "choice",
        message: "\nPlay again? Y/n\n"
      }
    ]).then(answer => {
      if (answer.choice) {
        self.play();
      }
      else {
        self.quit();
      }
    });
  };

  this.askForLetter = function() {
    inquirer.prompt([
      {
        type: "input",
        name: "choice",
        message: "Guess a letter!",
        validate: function (val) {
          return /[a-z1-9]/gi.test(val);
        }
      }
    ]).then(function(val) {
      let didGuessCorrectly = self.currentWord.guessLetter(val.choice);
      if (didGuessCorrectly) {
        console.log("\nCorrect!\n");
      }
      else {
        self.guessesLeft--;
        console.log("\nIncorrect!\n" + self.guessesLeft + " guesses remaining.");
      }
    });
  }

  this.quit = function() {
    console.log("\nSee you next time, amigo!\n");
    process.exit(0);
  }

};

module.exports = Game;