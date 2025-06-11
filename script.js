let secretNumber = Math.floor(Math.random() * 50) + 1;
let attempts = 10;
let highScore = 0;

const displayBox = document.querySelector('.display-box');
const statusMessage = document.querySelector('.status-message');
const inputField = document.querySelector('.user-input');
const attemptsEl = document.querySelector('.attempts');
const highScoreEl = document.querySelector('.high-score');

document.querySelector('.submit-btn').onclick = () => {
  const guess = Number(inputField.value);

  if (!guess || guess < 1 || guess > 50) {
    statusMessage.textContent = 'Enter a valid number (1–50)';
    return;
  }

  if (guess === secretNumber) {
    statusMessage.textContent = '🎉 You unlocked the Mystery Box!';
    displayBox.textContent = secretNumber;
    document.body.style.backgroundColor = '#16a085';

    if (attempts > highScore) {
      highScore = attempts;
      highScoreEl.textContent = highScore;
    }
  } else {
    attempts--;
    attemptsEl.textContent = attempts;

    if (attempts > 0) {
      statusMessage.textContent = guess > secretNumber ? ' Too high!' : 'Too low!';
    } else {
      statusMessage.textContent = 'Game Over! Try again.';
      displayBox.textContent = 'X';
    }
  }
};

document.querySelector('.reset-btn').onclick = () => {
  attempts = 10;
  secretNumber = Math.floor(Math.random() * 50) + 1;
  inputField.value = '';
  displayBox.textContent = '?';
  statusMessage.textContent = 'Start guessing...';
  attemptsEl.textContent = attempts;
  document.body.style.backgroundColor = '#1c1c1c';
};
