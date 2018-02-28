var Letter = require("./letter.js");

// Word.js: Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. 
// That means the constructor should define:

// An array of new Letter objects representing the letters of the underlying word...
// A function that returns a string representing the word. This should call the function on each letter object (the first function defined in Letter.js) 
// that displays the character or an underscore and concatenate those together...
// A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in Letter.js)...




function Word (ranWord) {
    this.word = ranWord;
    this.letters = this.word.split('').map(function(char) {
        return new Letter(char);
    });


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

Word.prototype.showWord = function() {
// Loop through letters array and call showLet function
    return this.letters.join(' ');
}

Word.prototype.guessedCorrectly = function(userInput) {
    // Loop through letters array and call guessLet function
    // Checks to see if all letters have been guessed.
}














module.exports = Word;

// :):):):)
