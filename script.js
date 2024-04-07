'use strict';

// Generates the secret number that the user is supposed to guess
let randomNum;
const generateRandomNum = function () {
  randomNum = Math.floor(Math.random() * (21 - 1) + 1);
};

// Stores the current high score
let highScore = +document.querySelector('.highscore').textContent;

// Sets the background color to the game
const setBackgroundColor = function (color) {
  document.body.style.backgroundColor = color;
};

// Displays messages to the user indicating if they guessed correctly
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// Disables or enables the input field and the button
const disableGame = function (elementClass, condition) {
  document.querySelector(elementClass).disabled = condition;
};

generateRandomNum(); // Generated a new secret number for the game

// This is what happens on clicking the check button
document.querySelector('.check').addEventListener('click', function () {
  // SO we grab the users input and the current score
  let userInput = +document.querySelector('.guess').value;
  let score = +document.querySelector('.score').textContent;

  if (!userInput) {
    // If user leaves the input blank
    displayMessage('⛔ No Number');
  } else if (userInput == randomNum) {
    // If user guesses correct
    displayMessage('Correct! 🎊');
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = randomNum;
    setBackgroundColor('#60b347');
    score > highScore ? (highScore = score) : 0; // This changes the high score variable
    document.querySelector('.highscore').textContent = highScore; // This changes the high score field

    // The two function calls below disable the game so the user has to reset with the 'again' button
    disableGame('.guess', true);
    disableGame('.check', true);
  } else {
    // If user guesses wrong
    displayMessage(userInput > randomNum ? 'Go Lower 📉' : 'Go Higher 📈');
    score -= 1; // Decreases the score everytime the user is wrong
    document.querySelector('.score').textContent = score;
    if (score == 0) {
      // If user runs out of guesses
      document.querySelector('.number').style.width = '30rem';

      // The two function calls below disable the game so the user has to reset with the 'again' button
      disableGame('.guess', true);
      disableGame('.check', true);
      document.querySelector('.number').textContent = randomNum;
      displayMessage('You lost the game! try again ☝');
      setBackgroundColor('#8b0000');
    }
  }
});

// This is what happens on the click of the again button
document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.number').style.width = '15rem';
  generateRandomNum(); // New random number
  setBackgroundColor('#222');

  // Enabling the game with these two function calls
  disableGame('.guess', false);
  disableGame('.check', false);
  document.querySelector('.guess').value = ''; // Emptying the input field
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = '20';
});

// And that's that!
