import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';
const inputEl = document.getElementById('datetime-picker');
const btnStartEl = document.querySelector('[data-start]');
const dayEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minuteEl = document.querySelector('[data-minutes]');
const secondEl = document.querySelector('[data-seconds]');

btnStartEl.addEventListener('click', onTimerStart);
let intervalId = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose([selectedDates]) {
    onPassedDates(selectedDates);
  },
};
flatpickr(inputEl, options);

function onTimerStart() {
  const chosenDate = new Date(inputEl.value).getTime();
  intervalId = setInterval(() => {
    const difference = chosenDate - Date.now();
    if (difference < 1000) {
      clearInterval(intervalId);
      return;
    }
    const data = convertMs(difference);
    onTimerTime(data);
  }, 1000);
}

function onTimerTime({
  days = '00',
  hours = '00',
  minutes = '00',
  seconds = '00',
} = {}) {
  dayEl.textContent = addLeadingZero(days);
  hoursEl.textContent = addLeadingZero(hours);
  minuteEl.textContent = addLeadingZero(minutes);
  secondEl.textContent = addLeadingZero(seconds);
}

function onPassedDates(selectedDates) {
  const result = selectedDates < Date.now();
  btnStartEl.disabled = result;
  if (result) {
    Notiflix.Notify.warning('Please choose a date in the future');
    clearInterval(intervalId);
    onTimerTime();
  }
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
