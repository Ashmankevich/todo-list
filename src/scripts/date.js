function getDate() {
  let date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth();
  let day = date.getDate();
  let hour = date.getHours();
  let min = date.getMinutes();
  return `${day}/${month}/${year} - ${hour}:${min}`;
}

export { getDate };
