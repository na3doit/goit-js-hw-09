import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
const inputEl = document.querySelector('datetime-picker');
const btnStartEl = document.querySelector('[data-start]');
const dayEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minuteEl = document.querySelector('[data-minutes]');
const secondEl = document.querySelector('[data-seconds');
btnStartEl.addEventListener('click', onTimerStart);
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

function onTimerStart() {}

function onPassedDates(selectedDates) {
  const result = selectedDates < Date.now();
  btnStartEl.disabled = result;
  if (result) {
    alert('Please choose a date in the future');
  }
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
