const prompt = require("prompt-sync")();
// Import test file as string and split it into an array
const string = require("fs").readFileSync("./wordle-words.txt", 'utf8')
let wordList = string.split("\n")



function selectAWord(arrayOfWords) {
    return arrayOfWords[Math.floor(Math.random() * arrayOfWords.length)]
}

function getInput(userGuess) {
    while (true) {
        let userGuess = prompt("Please Guess a Word: ")

        if (userGuess.length == 5) {
            break
        }
        
        console.log("Please enter a word with 5 letters")
    }
}

getInput()