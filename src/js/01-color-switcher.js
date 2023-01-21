
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeBckgrndColor() {
    const body = document.querySelector('body');
    body.style.backgroundColor = getRandomHexColor();
}

const startButton = document.querySelector('button[data-start]');
const stopButton = document.querySelector('button[data-stop]');

stopButton.setAttribute('disabled', true);


startButton.addEventListener('click', onStartButtonClick);
stopButton.addEventListener('click', onStopButtonClick);
let interval = null;


function onStartButtonClick() {
    stopButton.removeAttribute('disabled');
    interval = setInterval(changeBckgrndColor, 1000);
    startButton.setAttribute('disabled', true);
}

function onStopButtonClick() {
    stopButton.setAttribute('disabled', true);
    clearInterval(interval);
    startButton.removeAttribute('disabled');
}