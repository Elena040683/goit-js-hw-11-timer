class CountdownTimer {
  constructor() {
    this.refs = {
      sec: document.querySelector('[data-value="secs"]'),
      min: document.querySelector('[data-value="mins"]'),
      hours: document.querySelector('[data-value="hours"]'),
      days: document.querySelector('[data-value="days"]'),
    };

    this.targetDate = null;
    window.addEventListener('DOMContentLoaded', this.timerStart.bind(this));
  }

  calc = () => {
    const currentDate = Date.now();
    const time = this.targetDate - currentDate;

    const secs = Math.floor((time % (1000 * 60)) / 1000);
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const days = Math.floor(time / (1000 * 60 * 60 * 24));

    this.refs.sec.textContent = secs < 10 ? `0${secs}` : secs;
    this.refs.min.textContent = mins < 10 ? `0${mins}` : mins;
    this.refs.hours.textContent = hours < 10 ? `0${hours}` : hours;
    this.refs.days.textContent = days < 10 ? `0${days}` : days;
  };

  timerStart = () => {
    this.targetDate = new Date('Aug 20, 2021');
    setInterval(this.calc, 1000);
  };
}

const timer = new CountdownTimer();

// new CountdownTimer({
//   selector: '#timer-1',
//   targetDate: new Date('Aug 20, 2021'),
// });

// const refs = {
//   sec: document.querySelector('[data-value="secs"]'),
//   min: document.querySelector('[data-value="mins"]'),
//   hours: document.querySelector('[data-value="hours"]'),
//   days: document.querySelector('[data-value="days"]'),
// };

// let targetDate = null;

// function calc() {
//   const currentDate = Date.now();
//   const time = targetDate - currentDate;

//   const secs = Math.floor((time % (1000 * 60)) / 1000);
//   const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
//   const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   const days = Math.floor(time / (1000 * 60 * 60 * 24));

//   refs.sec.textContent = secs < 10 ? `0${secs}` : secs;
//   refs.min.textContent = mins < 10 ? `0${mins}` : mins;
//   refs.hours.textContent = hours < 10 ? `0${hours}` : hours;
//   refs.days.textContent = days < 10 ? `0${days}` : days;
// }

// function timerStart() {
//   targetDate = new Date('Aug 20, 2021');
//   setInterval(calc, 1000);
// }

// window.addEventListener('DOMContentLoaded', timerStart);
