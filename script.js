'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;
// diplayMessage fuction is used for eliminate reused code by applying dry principle
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // corner case if ther is no input

  // when there is no inpute
  if (!guess) {
    // document.querySelector('.message').textContent = '🆘 Not a Number';
    // dry principle
    displayMessage('🆘 Not a Number');

    //When player wins
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = `🎉 Correct Number!`;

    // dry principle
    displayMessage(`🎉 Correct Number!`);

    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    // When out does not match with random number
  } else if (guess !== secretNumber) {
    if (score > 1) {
      //   document.querySelector('.message').textContent =
      //     score > secretNumber ? `📈 To High` : `📉 To Low`;

      // dry principle ok

      displayMessage(guess > secretNumber ? `📈 To High` : `📉 To Low`);

      score--;
      document.querySelector('.score').textContent = score;
    } else {
      //   document.querySelector('.message').textContent = `🎇 You Lost The Game!`;

      // dry principle
      displayMessage(`🎇 You Lost The Game!`);

      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  //   document.querySelector('.message').textContent = `Start guessing...`;
  // dry principle

  displayMessage(`Start guessing...`);

  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
