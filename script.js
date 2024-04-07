'use strict';

let randomNum;

const generateRandomNum = function () {
  randomNum = Math.floor(Math.random() * (21 - 1) + 1);
};

let highScore = +document.querySelector('.highscore').textContent;

const setBackgroundColor = function (color) {
  document.body.style.backgroundColor = color;
};

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const disableGame = function (elementClass, condition) {
  document.querySelector(elementClass).disabled = condition;
};

generateRandomNum();

document.querySelector('.check').addEventListener('click', function () {
  let userInput = +document.querySelector('.guess').value;
  let score = +document.querySelector('.score').textContent;

  if (!userInput) {
    displayMessage('⛔ No Number');
  } else if (userInput == randomNum) {
    displayMessage('Correct! 🎊');
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = randomNum;
    setBackgroundColor('#60b347');
    score > highScore ? (highScore = score) : 0;
    document.querySelector('.highscore').textContent = highScore;
    disableGame('.guess', true);
    disableGame('.check', true);
  } else {
    displayMessage(userInput > randomNum ? 'Go Lower 📉' : 'Go Higher 📈');
    score -= 1;
    document.querySelector('.score').textContent = score;
    if (score == 0) {
      document.querySelector('.number').style.width = '30rem';
      disableGame('.guess', true);
      disableGame('.check', true);
      document.querySelector('.number').textContent = randomNum;
      displayMessage('You lost you fucking loser! 🤣🤣\n try again!');
      setBackgroundColor('#8b0000');
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.number').style.width = '15rem';
  generateRandomNum();
  setBackgroundColor('#222');
  disableGame('.guess', false);
  disableGame('.check', false);
  document.querySelector('.guess').value = '';
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = '20';
});
