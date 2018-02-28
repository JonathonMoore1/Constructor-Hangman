function Letter (char) {
    this.char = char;
    this.guessed = false;
    // this.checkLet = function () {
    //     if (this.guessed) {
    //         console.log("It matches!");
    //         return console.log(this.char);
    //     } 
    //     if (!this.guessed) {
    //         console.log("No match :(");
    //         return console.log("_");       
    //     }
    // }
    // this.takeArg = function (char, arg) {
    //     if (char !== arg) {
    //         this.guessed = false;
    //         console.log("Changed to FALSE");
    //     } else {
    //         this.guessed = true;
    //         console.log("Changed to TRUE");
    //     }
    // }
}


Letter.prototype.toString() = function() {
    if (this.guessed) {
        console.log('Show');
        return this.char;
    }
    console.log('No match');
    return '_';
};

Letter.prototype.isCorrect = function(userInput) {
    if (userInput === this.char) {
        this.guessed = true;
        console.log("True");
        return true;
    }
    console.log('False');
    return false;
};

module.exports = Letter;