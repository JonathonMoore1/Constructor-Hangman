var letter = "a";
var arg = process.argv[2];

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
    this.takeArg = function (letter, arg) {
        if (letter !== arg) {
            this.guessed = false;
            console.log("Changed to FALSE");
        } else {
            this.guessed = true;
            console.log("Changed to TRUE");
        }
    }
}

// Letter.prototype.check
var abc = new Letter (letter);
abc.takeArg(letter, arg);
abc.checkLet();

// abc.takeArg();

// var letter = function(let){
// 	this.charac = let;
// 	this.appear = false;
// 	this.letterRender = function(){
// 		return !(this.appear) ? "_" : this.charac;
// 	};
// };