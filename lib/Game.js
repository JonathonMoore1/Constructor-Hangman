const inquirer = require('inquirer');
const Word = require('./Word');
const words = require('./words');

function Game() {

  // Grab reference for use in inquirer
  const self = this;

  this.play = function() {
    console.log('Game says "Hello!"');
    let word = new Word();
    word.sayHello();

    this.guessesLeft = 10;
    this.nextWord();
  }

  this.nextWord = function() {
    
  }
};

module.exports = Game;