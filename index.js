var word = require("./Word.js");
var inquirer = require("inquirer");




var hangman = {

    wordArr =["Handel", "Bach", "Vivaldi", "Rameau", "Carpentier", "Monteverdi", "Pergolesi", "Muffat", "LeClair", "Purcell", "Byrd", "Bieber", "Locatelli", "Tartini"];

    guessesRemaining = 15,
    guessedLetters = [],
    startGame: function () {
        var that = this;
        if (this.guessedLetters.length > 0) {
            this.guessedLetters = [];
        }

}