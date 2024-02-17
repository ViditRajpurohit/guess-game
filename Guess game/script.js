let userInput = document.querySelector("#input_element");
let submit_btn = document.querySelector("#submitBtn");
let previous_guesses = document.querySelector("#previousGuesses");
let rem_guesses = document.querySelector("#rem_Guesses");
let outcomeMessage = document.querySelector("#outcomeMessage");
let startOver = document.querySelector("#resultParas");

let p = document.createElement("p");

let pre_guesses = [];

// let rem_guessesCount = 3;

let numGuess = 1;

let playGame = true;

let randomNumber = Math.floor(Math.random() * (10 - 1) + 1);

if (playGame) {
  submit_btn.addEventListener("click", (e) => {
    e.preventDefault();
    let guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  //to check wheather user has entered valid number
  if (isNaN(guess)) {
    alert("Please enter a valid number");
  } else if (guess < 1) {
    alert("Please enter number greater or equal to 1");
  } else if (guess > 10) {
    alert("Please enter number lesser or equal to 10");
  } else {
    pre_guesses.push(guess);
    if (rem_guesses === 0) {
      cleanUpGuess(guess);
      displayMessage(`Game Over ! Better luck next time :(
         Random Number was ${randomNumber}`);
  
      endGame();
    } else {
      cleanUpGuess(guess);
      checkGuess(guess);
    } 
  }

    
  
}

function checkGuess(guess) {
  //to check wheather the number is higher or lesser than random value
  if (guess > randomNumber) {
    displayMessage(`The number is lesser`);
  } else if (guess < randomNumber) {
    displayMessage("The number is greater");
  } else {
    displayMessage(`Congragulations !!! You guessed it right :)`);
  }
}

function cleanUpGuess(guess) {
  //
  userInput.value = "";
  previous_guesses.innerHTML += `${guess}     `;
  numGuess++;
  rem_guesses.innerHTML = 4 - numGuess;
 
  
}

function displayMessage(message) {
  outcomeMessage.innerHTML = `<h1>${message}</h1>`;
}

function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 onClick="newGame()" id="newGame">Start New Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
}

function newGame() {
  let newGameBtn = document.querySelector("#newGame");
  newGameBtn.addEventListener("click", (e) => {
    randomNumber = parseInt(Math.floor(Math.random() * 10 + 1));
    pre_guesses = [];
    numGuess = 1;
    p.innerHTML = "";
    rem_guesses.innerHTML = 4 - numGuess;
    userInput.removeAttribute("disabled");
    startOver.removeChild(p);

    playGame = true;
  });
}


