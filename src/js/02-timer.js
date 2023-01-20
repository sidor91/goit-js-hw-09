import flatpickr from "flatpickr"; 
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';



const inputDateTime = document.querySelector("input#datetime-picker");
const startButton = document.querySelector('button[data-start]');
const days = document.querySelector('span[data-days]');
const hours = document.querySelector('span[data-hours]');
const minutes = document.querySelector('span[data-minutes]');
const seconds = document.querySelector('span[data-seconds]');


// ------------------------------------------------ стилізація ----------------------------------------------------
const timer = document.querySelector('.timer');
const fields = document.querySelectorAll('.field');

timer.style.display = "flex";
fields.forEach(field => {
    field.style.display = "flex";
    field.style.flexDirection = "column";
    field.style.marginRight = '20px';
    field.style.justifyContent = 'center';
});
// ----------------------------------------------------------------------------------------------------------------


startButton.setAttribute('disabled', true);

let dateChoosen = null;


const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
      dateChoosen = selectedDates[0];
        console.log(dateChoosen);
      if (dateChoosen <= options.defaultDate) {
          startButton.setAttribute('disabled', true);
          Notiflix.Notify.failure('Please choose a date in the future');
        //   alert("Please choose a date in the future");
      } else { startButton.removeAttribute('disabled') };
  },
};


flatpickr(inputDateTime, options);


function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}


startButton.addEventListener('click', onStartButtonClick);

// inputDateTime.setAttribute('disabled', false);

function onStartButtonClick() {
    // timerProperty.start();
    inputDateTime.setAttribute('disabled', true);
    startButton.setAttribute('disabled', true);

    const intervalId = setInterval(() => {
            const differenceInTime = convertMs(dateChoosen - Date.now());
            // console.log(differenceInTime);
            days.textContent = differenceInTime.days;
            hours.textContent = differenceInTime.hours;
            minutes.textContent = differenceInTime.minutes;
            seconds.textContent = differenceInTime.seconds;
            if ((dateChoosen - Date.now()) < 1000) {
                setTimeout(function () {
                    location.reload();
                }, 2000)
                clearInterval(intervalId);
                // inputDateTime.removeAttribute('disabled');
                // startButton.removeAttribute('disabled');
                Notiflix.Notify.success('Time is out');
                
        }
        }, 1000);
}



function addLeadingZero(value) {
    return String(value).padStart(2, '0');
}

    


// const timerProperty = {
//     intervalId: null,
//     start() {
//         this.intervalId = setInterval(() => {
//             const differenceInTime = convertMs(dateChoosen - Date.now());
//             console.log(differenceInTime);
//             days.textContent = differenceInTime.days;
//             hours.textContent = differenceInTime.hours;
//             minutes.textContent = differenceInTime.minutes;
//             seconds.textContent = differenceInTime.seconds;
//             if ((dateChoosen - Date.now()) < 1000) {
//                 setTimeout(function () {
//                     location.reload();
//                 }, 2000)
//                 clearInterval(this.intervalId);
//                 // inputDateTime.removeAttribute('disabled');
//                 // startButton.removeAttribute('disabled');
//                 Notiflix.Notify.success('Time is out');
                
//         }
//         }, 1000);
//     }
// }

