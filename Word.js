var Letter = require("./letter.js");

// Word.js: Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. 
// That means the constructor should define:

// An array of new Letter objects representing the letters of the underlying word...
// A function that returns a string representing the word. This should call the function on each letter object (the first function defined in Letter.js) 
// that displays the character or an underscore and concatenate those together...
// A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in Letter.js)...



var userInput = process.argv[2];
var arg = process.argv[3];

var newLet = new Letter (userInput);
newLet.takeArg(userInput, arg);
newLet.checkLet();

var Word = function (newLetter) {
    this.userInput = userInput;
    this.letters = [];
    this.guessed = false;

    this

    // this.getLetter = function() {
    //     for (var i = 0; i < userInput.length; i++) {
    //         this.letters.push(new Letter(this.userInput[i]));
    //     }
    // }

    // this.takeArg2 = function(arg) {
    //     for (var j = 0; i < this.letters.length; i++) {
    //         this.letters[i].takeArg1();
    //     }
    //     console.log("takeArg2 works");
    // }
}

// var wurd = new Word(userInput);
// wurd.getLetter();
// wurd.takeArg2(arg);

module.exports = Word;