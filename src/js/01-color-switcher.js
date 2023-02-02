const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const body = document.querySelector('body');

const CHANGE_TIME = 1000;
let timerId = null;

// startBtn.addEventListener('click', onClickStartBtn);
// stopBtn.addEventListener('click', onClickStopBtn);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeBodyColor() {
  const color = getRandomHexColor;
  body.style.backgroundColor = color;
}
