var Letter = function (letter) {
    this.char = letter;
    this.guessed = false;
    this.checkLet = function () {
        if (this.guessed) {
            console.log("It matches!");
            return console.log(this.char);
        } 
        if (!this.guessed) {
            console.log("No match :(");
            return console.log("_");       
        }
    }
    this.takeArg1 = function (letter, arg) {
        if (letter !== arg) {
            this.guessed = false;
            console.log("Changed to FALSE");
        } else {
            this.guessed = true;
            console.log("Changed to TRUE");
        }
    }
}

module.exports = Letter;