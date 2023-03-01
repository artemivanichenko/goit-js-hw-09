import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  daysId: document.querySelector('[data-days]'),
  hoursId: document.querySelector('[data-hours]'),
  minutesId: document.querySelector('[data-minutes]'),
  secondsId: document.querySelector('[data-seconds]'),
  selectedDate: document.querySelector('#datetime-picker'),
  startBtn: document.querySelector('[data-start]'),
};

let selectedDate;

refs.startBtn.setAttribute('disabled', 'disabled');

refs.startBtn.addEventListener('click', () => {
  timer.start();
  refs.startBtn.setAttribute('disabled', 'disabled');
  refs.selectedDate.setAttribute('disabled', 'disabled');
});

class Timer {
  constructor({ onTick }) {
    this.onTick = onTick;
  }

  start() {
    setInterval(() => {
      const ms = selectedDate - Date.now();
      const time = convertMs(ms);
      this.onTick(time);
    }, 1000);
  }
}

const timer = new Timer({
  onTick: updateClockFace,
});

const NOTIFY_OPTIONS = {
  backOverlay: true,
};

flatpickr(refs.selectedDate, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0].getTime();
    if (selectedDates[0] >= Date.now()) {
      refs.startBtn.removeAttribute('disabled');
      setSelectedDate(selectedDate);
    } else {
      Notify.failure('Please choose a date in the future', NOTIFY_OPTIONS);
    }
  },
});

function setSelectedDate(date) {
  selectedDate = date;
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const days = addLeadingZero(Math.floor(ms / day));
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}

function updateClockFace({ days, hours, minutes, seconds }) {
  const { daysId, hoursId, minutesId, secondsId } = refs;

  daysId.textContent = `${days}`;
  hoursId.textContent = `${hours}`;
  minutesId.textContent = `${minutes}`;
  secondsId.textContent = `${seconds}`;
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
