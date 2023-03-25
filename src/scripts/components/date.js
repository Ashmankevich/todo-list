function getDate() {
  let date = new Date();
  let year = date.getFullYear();
  let monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let month = monthNames[date.getMonth()];
  let day = date.getDate();
  let hour = date.getHours();
  let min = date.getMinutes();

  day < 10 ? (day = " " + day) : day;
  hour < 10 ? (hour = "0" + hour) : hour;
  min < 10 ? (min = "0" + min) : min;

  let fullDate = day + " " + month + " " + year + " - " + hour + ":" + min;

  return fullDate;
}

export { getDate };
