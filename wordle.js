const console = require("console");

const prompt = require("prompt-sync")();
// Import test file as string and split it into an array
const string = require("fs").readFileSync("./wordle-words.txt", 'utf8')
let wordList = string.split("\n")
let gameCompletion = true
let count = 0


function selectAWord(arrayOfWords) {
    return arrayOfWords[Math.floor(Math.random() * arrayOfWords.length)]
}

function getInput(userGuess) {
    while (true) {
        userGuess = prompt("Please Guess a Word: ")

        if (userGuess.length == 5) {
            break
        }

        console.log("Please enter a word with 5 letters")
    }

    return userGuess
}

function wordComparison(wordle, userGuess) {
    let wordCompare = ""
    if (wordle == userGuess) {
        console.log("YOU WIN!!!")
        gameCompletion = false
    } else {
        for (let letter = 0;letter < 5; letter++) {
            if (wordle[letter] == userGuess[letter]) {
                wordCompare+=userGuess[letter].toUpperCase()
            } else if (wordle.includes(userGuess[letter])) {
                wordCompare+=userGuess[letter].toLowerCase()
            } else {
               wordCompare+="_" 
            }
        }
    }

    console.log(wordCompare)


}

function playGame() {
    let wordle = selectAWord(wordList)

    while(gameCompletion && count < 5) {
        userGuess = getInput()
        wordComparison(wordle, userGuess)
        count+=1
    }

}

playGame()


// letter doesnt exist == " "
// letter correct and correct place == Capital Letter
// Letrter correct, wrong place == lowercase letter