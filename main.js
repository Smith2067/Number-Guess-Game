document.getElementById("game").style.display = "none";

const correctNumber = Math.floor(Math.random() * 100) + 1;
const pattern = new RegExp("^([1-9][0-9]?|100)$");
const tooHighList = document.getElementById("highNumList");
const tooLowList = document.getElementById("lowNumList");
var userGuess = null;
var tooHigh = [];
var tooLow = [];
var userGuesses = 0;

function checkNumber() {
    if (correctNumber == userGuess) {
        userGuesses = userGuesses + 1;
        alert("You win!  You guessed " + userGuesses + " times!");
        location.reload();
    } 
    else if (correctNumber > userGuess) {
        tooLow.push(userGuess);
        tooLowList.innerText = tooLow;
        userGuesses = userGuesses + 1;
    } 
    else if (correctNumber < userGuess) {
        tooHigh.push(userGuess);
        tooHighList.innerText = tooHigh;
        userGuesses = userGuesses + 1;
    } 
    else {
        alert("An Error has Occured");
        location.reload();
    }
}

function checkPattern(event) {
    event.preventDefault();
    userGuess = document.getElementById("userInputNum").value;
    if (pattern.test(userGuess) === true) {
        checkNumber();
    } 
    else {
        alert("Please only enter numbers from 1 to 100");
    }
}

document.getElementById("userNumSubmit").addEventListener("click", checkPattern);

function startGame(){
    document.getElementById("game").style.display = "block";
    document.getElementById("startMenu").style.display = "none";
}

document.getElementById("startButton").addEventListener("click", startGame);