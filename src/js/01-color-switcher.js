const refs = {
  bodyAccess: document.body,
  startBtn: document.querySelector('[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
};
let timerChangeColor = null;
refs.startBtn.addEventListener('click', handleStartBtn);
refs.stopBtn.addEventListener('click', handleStopBtn);

function handleStartBtn() {
  if (timerChangeColor) return;
  refs.startBtn.setAttribute('disabled', 'disabled');
  refs.stopBtn.removeAttribute('disabled');

  timerChangeColor = setInterval(() => {
    refs.bodyAccess.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function handleStopBtn(evt) {
  clearInterval(timerChangeColor);
  refs.startBtn.removeAttribute('disabled');
  refs.stopBtn.setAttribute('disabled', 'disabled');
  timerChangeColor = null;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
