const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const docBody = document.querySelector('body');
stopBtn.classList.add('disable');
let timerId = 0;

startBtn.addEventListener("click", startBtnPush);
stopBtn.addEventListener("click", stopBtnPush);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function startBtnPush() {
  startBtn.classList.add('disable');
    stopBtn.classList.remove('disable');
    timerId = setInterval(() => {
    docBody.style.backgroundColor = getRandomHexColor();
    }, 1000);
};

function stopBtnPush() {
  stopBtn.classList.add('disable');
  startBtn.classList.remove('disable');
  clearInterval(timerId);
}