
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = [];

var winsText = document.getElementById("wins");
var lossesText = document.getElementById("losses");
var guessesLeftText = document.getElementById("guessesLeft");
var guessesText = document.getElementById("guesses");


document.onkeyup = function (event) {
    var userInput = event.key.toLowerCase();

    var compAnswer = alphabet[Math.floor(Math.random() * alphabet.length)];

    if (userInput === compAnswer) {
        alert("You did it!")
        wins++;
        guessesLeft = 9;
        guessesSoFar = [];
    }
    if (userInput != compAnswer) {
        guessesLeft--;
        guessesSoFar.push(userInput);
    }
    if (guessesLeft === 0) {
        guessesLeft = 9;
        losses++;
        guessesSoFar = [];
    }
    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;
    guessesLeftText.textContent = "Guesses Remaining: " + guessesLeft;
    guessesText.textContent = " Your guesses so far: " + guessesSoFar.join(",");
}
