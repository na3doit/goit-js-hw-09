const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const body = document.querySelector('body');

const CHANGE_TIME = 1000;
let timerId = null;

startBtn.addEventListener('click', () => {
  timerId = setInterval(() => {
    const color = getRandomHexColor();
    body.style.backgroundColor = color;
  }, CHANGE_TIME);
});
stopBtn.addEventListener('click', () => {
  clearInterval(timerId);
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
