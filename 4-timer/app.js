const newYearTime = "2023-12-31 00:00:00";

const MONTH = document.querySelector(".month");
const DAYS = document.querySelector(".days");
const HOURS = document.querySelector(".hours");
const MINUTES = document.querySelector(".minutes");
const SECONDS = document.querySelector(".seconds");

function timer(time) {
  const nowData = new Date();
  const newYearDate = new Date(time);
  const lastYear = newYearDate - nowData;

  const millisecondDays = Math.floor(lastYear / 86400000);

  const monthLeft = newYearDate.getMonth() - nowData.getMonth();
  const hoursLeft = Math.floor(lastYear / 1000 / 60 / 60) % 24;
  const minutesLeft = Math.floor(lastYear / 1000 / 60) % 60;
  const secondsLeft = Math.floor(lastYear / 1000) % 60;

  MONTH.innerHTML = String(monthLeft).padStart(2, "0");
  DAYS.innerHTML = String(millisecondDays).padStart(2, "0");
  HOURS.innerHTML = String(hoursLeft).padStart(2, "0");
  MINUTES.innerHTML = String(minutesLeft).padStart(2, "0");
  SECONDS.innerHTML = String(secondsLeft).padStart(2, "0");
}
timer(newYearTime);

setInterval(() => {
  timer(newYearTime);
}, 1000);
