const newYearTime = new Date()
newYearTime.setFullYear(newYearTime.getFullYear() + 1, 0,1)
newYearTime.setHours(0,0,0)

const timerElements = {
  month: document.querySelector(".month"),
  days: document.querySelector(".days"),
  hours: document.querySelector(".hours"),
  minutes: document.querySelector(".minutes"),
  seconds: document.querySelector(".seconds"),
};

function timer(time) {
  const nowData = new Date();
  const newYearDate = new Date(time);
  const lastYear = newYearDate - nowData;

  const MILLISECONDS_IN_DAYS = Math.floor(lastYear / 86400000);

  const MONTH_LEFT = newYearDate.getMonth() - nowData.getMonth() +11;
  const MILLISECONDS_IN_HOURS = Math.floor(lastYear / 1000 / 60 / 60) % 24;
  const MILLISECONDS_IN_MINUTES = Math.floor(lastYear / 1000 / 60) % 60;
  const MILLISECONDS_IN_SECONDS = Math.floor(lastYear / 1000) % 60;

  timerElements.month.innerHTML = String(MONTH_LEFT).padStart(2, "0");
  timerElements.days.innerHTML = String(MILLISECONDS_IN_DAYS).padStart(2, "0");
  timerElements.hours.innerHTML = String(MILLISECONDS_IN_HOURS).padStart(2, "0");
  timerElements.minutes.innerHTML = String(MILLISECONDS_IN_MINUTES).padStart(2, "0");
  timerElements.seconds.innerHTML = String(MILLISECONDS_IN_SECONDS).padStart(2, "0");
}
timer(newYearTime);

setInterval(() => {
  timer(newYearTime);
}, 1000);
