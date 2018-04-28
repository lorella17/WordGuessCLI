//Our constructor for lettes
var Letter = function (letter) {
    this.letter = letter;
    this.guesses = false;

    this.checkGuess = function (Guess) {
        if(Guess === this.letter){
            console.log("test");
            this.guesses = true;
            console.log(Guess);
        }
    };


    this.showResult = function() {
        if (!this.guesses) {
            console.log("wrong guess");
            return "_";
        }
        else {
            console.log("right guess");
            return this.letter;
        }

    };

};

var test = new Letter('a');

// console.log("Letters: " + test.showResult() + "\nGuesses: " + test.guesses );

test.checkGuess("b");
console.log(test.guesses);
test.showResult();



module.exports = Letter;