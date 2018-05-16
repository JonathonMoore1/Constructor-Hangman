var inquirer = require('inquirer');
var Word = require('./Word');
var words = require('./words');

function Game() {

  // Grab reference for use in inquirer
  var self = this;

  this.play = () => {
    this.guessesLeft = 10;
    this.nextWord();
  }

  this.nextWord = () => {
    var randomWord = words[Math.floor(Math.random() * words.length)];
    console.log(randomWord);
    this.currentWord = new Word(randomWord);
    console.log("\n" + this.currentWord + "\n");
    this.makeGuess();
  };

  this.makeGuess = () => {
    this.askForLetter().then(() => {
      if (self.guessesLeft < 1) {
        console.log("\nYou are out of guesses! The answer was: " + self.currentWord.getSolution() + ".\n");
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

  this.askToPlayAgain = () => {
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

  this.askForLetter = () => {
    return inquirer.prompt([
      {
        type: "input",
        name: "choice",
        message: "Guess a letter!",
        validate: val => {
          console.log("reached validation")
          return /[a-z1-9]/gi.test(val);
        }
      }
    ]).then(val => {
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

  this.quit = () => {
    console.log("\nSee you next time, amigo!\n");
    process.exit(0);
  }

};

module.exports = Game;