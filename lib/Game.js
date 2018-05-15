const inquirer = require('inquirer');
const Word = require('./Word');
const words = require('./words');

function Game() {
  this.play = function() {
    console.log("Hello :)");
  }
};

module.exports = Game;