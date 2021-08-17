class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.refs = {
      sec: document.querySelector('[data-value="secs"]'),
      min: document.querySelector('[data-value="mins"]'),
      hours: document.querySelector('[data-value="hours"]'),
      days: document.querySelector('[data-value="days"]'),
      clockFace: document.querySelector('#timer-1'),
    };

    this.targetDate = targetDate;
    this.intervalId = null;
    this.selector = selector;

    window.addEventListener('DOMContentLoaded', this.timerStart.bind(this));
  }

  getTimeComponents(time) {
    const secs = Math.floor((time % (1000 * 60)) / 1000);
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const days = Math.floor(time / (1000 * 60 * 60 * 24));

    this.refs.sec.textContent = secs < 10 ? `0${secs}` : secs;
    this.refs.min.textContent = mins < 10 ? `0${mins}` : mins;
    this.refs.hours.textContent = hours < 10 ? `0${hours}` : hours;
    this.refs.days.textContent = days < 10 ? `0${days}` : days;
  }

  calc = () => {
    const currentDate = Date.now();
    const time = this.targetDate - currentDate;
    if (time < 0) {
      this.timerStop();
    } else {
      this.getTimeComponents(time);
    }
  };

  timerStart() {
    this.intervalId = setInterval(this.calc, 1000);
  }

  timerStop() {
    clearInterval(this.intervalId);
    this.getTimeComponents(0);
    this.refs.clockFace.textContent = 'Time is over.';
  }
}

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Aug 25, 2021'),
});

// const refs = {
//   sec: document.querySelector('[data-value="secs"]'),
//   min: document.querySelector('[data-value="mins"]'),
//   hours: document.querySelector('[data-value="hours"]'),
//   days: document.querySelector('[data-value="days"]'),
//   clockFace: document.querySelector('#timer-1'),
// };

// let targetDate = new Date('Aug 25, 2021');
// let intervalId = null;

// function calc() {
//   const currentDate = Date.now();
//   const time = targetDate - currentDate;
//   if (time < 0) {
//     timerStop();
//     return;
//   }
//   getTimeComponents(time);
// }

// function timerStart() {
//   intervalId = setInterval(calc, 1000);
// }

// function timerStop() {
//   clearInterval(intervalId);
//   getTimeComponents(0);
//   refs.clockFace.textContent = 'Time is over.';
// }

// function getTimeComponents(time) {
//   const secs = Math.floor((time % (1000 * 60)) / 1000);
//   const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
//   const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   const days = Math.floor(time / (1000 * 60 * 60 * 24));

//   refs.sec.textContent = secs < 10 ? `0${secs}` : secs;
//   refs.min.textContent = mins < 10 ? `0${mins}` : mins;
//   refs.hours.textContent = hours < 10 ? `0${hours}` : hours;
//   refs.days.textContent = days < 10 ? `0${days}` : days;
// }

// window.addEventListener('DOMContentLoaded', timerStart);
