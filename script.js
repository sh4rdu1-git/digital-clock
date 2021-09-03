window.onload = () => {
  getDateTime();
};

const getDateTime = () => {
  let date = new Date();
  console.log(date);

  let hours = date.getHours();
  let minutes = date.getMinutes();
  let ampm = hours >= 12 ? "PM" : "AM";

  let daysOfWeek = [
    "SUNDAY",
    "MONDAY",
    "TUESDAY",
    "WEDNESDAY",
    "THURSDAY",
    "FRIDAY",
    "SATURDAY",
  ];
  let monthsOfYear = [
    "JANUARY",
    "FEBRUARY",
    "MARCH",
    "APRIL",
    "MAY",
    "JUNE",
    "JULY",
    "AUGUST",
    "SEPTEMBER",
    "OCTOBER",
    "NOVEMBER",
    "DECEMBER",
  ];

  let day = daysOfWeek[date.getDay()];
  let dateOfMonth = date.getDate();
  let month = monthsOfYear[date.getMonth()];
  let year = date.getFullYear();

  hours = hours % 12;
  hours = hours ? hours : "12";
  hours = hours < 10 ? `0${hours}` : hours;
  minutes = minutes < 10 ? `0${minutes}` : minutes;

  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("ampm").innerHTML = ampm;

  document.getElementById("day").innerHTML = day;
  let dateString = `${month} ${dateOfMonth}, ${year}`;
  document.getElementById("date").innerHTML = dateString;
};

setInterval(() => {
  getDateTime();
}, 1000);
