//Guess Number Game
// Working Version-2.0

let getNumberBox = document.querySelector('#number-box');
let initialNumberBox = getNumberBox.textContent;
let getGuessCount = document.querySelector('.guess-count');
let getSectionMessage = document.querySelector('.section-message');
let initialSectionMessage = getSectionMessage.textContent;
let getSectionGuessCount = document.querySelector('.section-guess-count');
let inputNumber = document.querySelector('.section-number');
let initialInputNumber = inputNumber.textContent;
let checkButton = document.querySelector('.section-check-button');
let resetButton = document.querySelector('.section-reset-button');

let createh6 = document.createElement('h4');
let getTitleContainter = document.querySelector('.titlecontainer');
createh6.classList.add('title-header-6');
createh6.textContent = 'The ✅ Number Is 👇';
createh6.style.fontSize = "17px";
createh6.style.marginTop = "35px";
createh6.style.marginBottom = "5px";

let getSection = document.querySelectorAll('#section');
let getClearBtn = document.querySelector('.clearbutton');
getClearBtn.style.display = "none";

let countGuess = 3;
let randomNumGenerator = () => Math.floor(Math.random() * 10) + 1;

let randomNum = randomNumGenerator();

const displayMessage = function (message) {
    getSectionMessage.textContent = message;
};

//Game Functionality
function guessGame() {
    let usrInput = Number(inputNumber.value);
    if (usrInput > 0 && usrInput <= 10) {
        if (usrInput === 0) {
            displayMessage(`⛔️ Please Enter a number`);
            return;
        }


        if (usrInput === randomNum) {
            displayMessage(`Hurray...🤩 You won.`);
            getSectionMessage.style.color = 'var(--win-color)';
            getNumberBox.textContent = randomNum;
            getSectionGuessCount.style.display = "none";
            getTitleContainter.appendChild(createh6);
            getClearBtn.style.display = "block";
            inputNumber.disabled = "true";
            checkButton.disabled = "true";
            resetButton.disabled = "true";

        } else {
            countGuess--;
            if (countGuess >= 0) {
                getGuessCount.textContent = countGuess;
                getGuessCount.style.color = 'var(--count-color)';
            }

            if (countGuess === 0) {
                displayMessage(`Sorry🙁 you ran out of Guesses. Better Luck Next Time`);
                getSectionMessage.style.color = 'var(--lost-color)';
                getNumberBox.textContent = randomNum;
                getSectionGuessCount.style.display = "none";
                getTitleContainter.appendChild(createh6);
                getClearBtn.style.display = "block";
                inputNumber.disabled = "true";
                checkButton.disabled = "true";
                resetButton.disabled = "true";

            } else if (usrInput > randomNum) {
                displayMessage(`Try a lower number.`);
            } else if (usrInput < randomNum) {
                displayMessage(`Try a higher number.`);
            }
        }

    } else {
        displayMessage(`⛔ Enter Numbers between 1 to 10 only`)
    }


}

checkButton.addEventListener('click', guessGame);

//Reset Functionality
resetButton.addEventListener('click', function () {
    document.querySelector('.section-number').value = "";
});

//Restart Functionality
getClearBtn.addEventListener('click', restart);
function restart() {
    getSectionMessage.textContent = initialSectionMessage;
    getSectionMessage.style.color = "var(--black)";
    inputNumber.removeAttribute("disabled");
    checkButton.removeAttribute("disabled");
    resetButton.removeAttribute("disabled");
    randomNum = randomNumGenerator();
    countGuess = 3;
    getSectionGuessCount.style.display = "block";
    document.querySelector('.section-number').value = "";
    getNumberBox.textContent = initialNumberBox;
    getGuessCount.textContent = countGuess;
    getGuessCount.style.color = 'var(--count-color)';
    createh6.textContent = '';
    getClearBtn.style.display = "none";
}