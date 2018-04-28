var Letters = require("./Letters");


function Word(words) {

    this.words = words;
    this.newLetters = [];


    this.lettersMade = function () {
        var wordArray = this.words.split("");
        for (let x = 0; x < wordArray.length; x++) {

            var newLetter = new Letter(wordArray[x]);
            this.letters.push(newLetter);
        }
    };

    this.userGuess = function (guess) {
        this.letters.forEach(letter => {
            letter.checkGuess(guess);

        });

    };

    this.game = function () {
        var printedWord = "";
        this.letters.forEach(letter => {
            printedWord += letter.showResult() + "";

        });
        return printedWord;
    }

};



module.exports = Word;