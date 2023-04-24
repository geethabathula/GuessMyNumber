//Guess Number Game

let usrInput = prompt("Please enter a value b/w 1 to 20 ");
let guess = usrInput;
let randomNum = Math.floor(Math.random() * 20) + 1;
console.log(randomNum);
let attempt = 1;
while (guess !== randomNum) {
  attempt++;
  if (usrInput > randomNum) {
    usrInput = Number(prompt("Too High Enter a new guess"));
    guess = usrInput;
  } else if (usrInput < randomNum) {
    usrInput = Number(prompt("Too Low Enter a new guess"));
    guess = usrInput;
  }
}

console.log("U guessed correct at attempt no", attempt);
