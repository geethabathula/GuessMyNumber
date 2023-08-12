//Guess Number Game
// Working Version-1.0
let getNumberBox = document.querySelector('#number-box');
let getGuessCount = document.querySelector('.guess-count');
let getSectionMessage = document.querySelector('.section-message');


let countGuess = 3;
let randomNum = Math.floor(Math.random() * 10) + 1;
console.log("RandomNum", randomNum);
let attempt = 1;

const displayMessage = function (message) {
    getSectionMessage.textContent = message;
};


document.querySelector('.section-check-button').addEventListener('click', guessGame);
//Game Functionality
function guessGame() {
    let usrInput = Number(document.querySelector('.section-number').value);
    console.log(usrInput);
    if (usrInput === 0) {
        displayMessage(`⛔️ Please Enter a number`);
        return;
    }
    attempt++;

    if (usrInput === randomNum) {
        console.log("Hurray... You won");
        displayMessage(`Hurray...🤩 You won in ${attempt} attempt/s.`);
        getSectionMessage.style.color = 'var(--win-color)';
        getNumberBox.textContent = randomNum;
    } else {
        countGuess--;
        if (countGuess >= 0) {
            getGuessCount.textContent = countGuess;
            getGuessCount.style.color = 'var(--count-color)';
        }


        if (countGuess === 0) {
            console.log("Sorry you ran out of Guesses. Better Luck Next Time");
            console.log("The Number is : ", randomNum);
            displayMessage(`Sorry🙁 you ran out of Guesses. Better Luck Next Time`);
            getSectionMessage.style.color = 'var(--lost-color)';
            getNumberBox.textContent = randomNum;
        } else if (usrInput > randomNum) {
            displayMessage(`Try a lower number.`);
        } else if (usrInput < randomNum) {
            displayMessage(`Try a higher number.`);
        }
    }
}
//Reset Functionality
document.querySelector('.section-reset-button').addEventListener('click', function () {
    document.querySelector('.section-number').value = "";
});
