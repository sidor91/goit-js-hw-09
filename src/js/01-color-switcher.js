
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeBckgrndColor() {
    const body = document.querySelector('body');
    body.style.backgroundColor = getRandomHexColor();
}

const startButton = document.querySelector('button[data-start]');
const stopButton = document.querySelector('button[data-stop]');


startButton.addEventListener('click', onStartButtonClick);
stopButton.addEventListener('click', onStopButtonClick);
let interval = null;


function onStartButtonClick() {
    interval = setInterval(changeBckgrndColor, 1000);
    startButton.setAttribute('disabled', true);
}

function onStopButtonClick() {
    clearInterval(interval);
    startButton.removeAttribute('disabled');
}