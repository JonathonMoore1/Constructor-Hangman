var Letter = function (letter) {
    this.letter = letter + "";
    this.guessed = false;
    this.showLetter = function() {
        if (this.guessed != true) {
            return console.log("_");
        }
        else {
            return console.log(this.letter);
        }
    }
    this.checkArg = function (userGuess) {
        if (userGuess === this.letter) {
            this.guessed = true;
            console.log(this.guessed);
        }
    }
}

module.exports = Letter;