/* 6-digital clock*/

// clock with 24-format

let getNumberInTwoDigits = (number) =>
  number < 10 ? `0${number}` : String(number);

/*
- If the time is between 00:00 (midnight) and 11:59, it is AM.
- If the time is between 12:00 (noon) and 23:59, it is PM.
*/
const calculateAmPm = (hours, minutes) =>
  (hours == 12 && minutes >= 0) || hours > 12 ? "PM" : "AM";

const handleHour = (strHour) => {
  let hour = Number(strHour);

  if (hour == 0) hour = 12;

  if (hour > 12) hour -= 12;

  return String(hour);
};

// get array time [hours ,minutes ,seconds ]
const getHoursMinutesSeconds = (now) => {
  const time = [];
  time.push(getNumberInTwoDigits(handleHour(now.getHours())));
  time.push(getNumberInTwoDigits(now.getMinutes()));
  time.push(getNumberInTwoDigits(now.getSeconds()));

  return time;
};

// simple clock
const showClock = () => {
  const time = getHoursMinutesSeconds(new Date());

  let clock = `<p> ${time[0]} : ${time[1]} : ${time[2]}</p>`;
  simple.innerHTML = clock;
};

setInterval(showClock, 1000);

// Today's Time Project Clock
const showTodayTimeProjectClock = () => {
  const now = new Date();
  const time = getHoursMinutesSeconds(now);

  let clock = `

    <p>${now.toDateString()}</p>
    <h2> ${time[0]} : ${time[1]} : ${time[2]} ${calculateAmPm(time[0])}</h2> `;

  todayTime.innerHTML = clock;
};

setInterval(showTodayTimeProjectClock, 1000);
