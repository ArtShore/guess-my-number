'use strict';

const max = 21;
const min = 1;

let randomNum = Math.floor(Math.random() * (max - min) + min);
let highScore = +document.querySelector('.highscore').textContent;

document.querySelector('.check').addEventListener('click', function () {
  let userInput = +document.querySelector('.guess').value;
  let score = +document.querySelector('.score').textContent;
  if (!userInput) {
    document.querySelector('.message').textContent = '⛔ No Number';
  } else if (userInput == randomNum) {
    document.querySelector('.message').textContent = 'Correct! 🎊';
    document.querySelector('.number').textContent = randomNum;
    document.body.style.backgroundColor = '#60b347';
    score > highScore ? (highScore = score) : 0;
    document.querySelector('.highscore').textContent = highScore;
    document.querySelector('.guess').setAttribute('disabled', '');
  } else {
    document.querySelector('.message').textContent = 'Wrong! ❌';
    score -= 1;
    document.querySelector('.score').textContent = score;
    if (score == 0) {
      document.querySelector('.guess').setAttribute('disabled', '');
      document.querySelector('.check').setAttribute('disabled', '');
      document.querySelector('.message').textContent =
        'You lost you fucking loser! 🤣🤣\n try again!';
      document.body.style.backgroundColor = '#8b0000';
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  randomNum = Math.floor(Math.random() * (max - min) + min);
  document.body.style.backgroundColor = '#222';
  document.querySelector('.guess').disabled = false;
  document.querySelector('.check').disabled = false;
  document.querySelector('.guess').value = '';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = '20';
});
