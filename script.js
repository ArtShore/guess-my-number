'use strict';

const max = 21;
const min = 0;

let randomNum = Math.floor(Math.random() * (max - min) + min);
let highScore = +document.querySelector('.highscore').textContent;
console.log(randomNum);

// const guessFunction = function (userInput) {
//   if (userInput == randomNum) {
//     document.querySelector('.message').textContent = 'Correct! 🎊';
//     document.querySelector('.number').textContent = randomNum;
//     document.body.style.backgroundColor = 'green';
//     let score = document.querySelector('.score').textContent;
//     score > highScore ? (highScore = score) : 0;
//   } else if (!userInput) {
//     document.querySelector('.message').textContent = '⛔ No Number';
//   } else {
//     document.querySelector('.message').textContent = 'Wrong! ❌';
//     let score = +document.querySelector('.score').textContent;
//     document.querySelector('.score').textContent = score--;
//   }
// };

document.querySelector('.check').addEventListener('click', function () {
  let userInput = +document.querySelector('.guess').value;
  if (!userInput) {
    document.querySelector('.message').textContent = '⛔ No Number';
  } else if (userInput == randomNum) {
    document.querySelector('.message').textContent = 'Correct! 🎊';
    document.querySelector('.number').textContent = randomNum;
    document.body.style.backgroundColor = 'green';
    let score = document.querySelector('.score').textContent;
    score > highScore ? (highScore = score) : 0;
  } else {
    document.querySelector('.message').textContent = 'Wrong! ❌';
    let score = +document.querySelector('.score').textContent;
    document.querySelector('.score').textContent = score--;
  }
});
