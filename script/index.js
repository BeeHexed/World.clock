let today = moment().format("dddd, MMMM D, YYYY");
let todayElement = document.querySelector("#date");
todayElement.innerHTML = `${today}`;

let currentTime = moment().format("hh:mm:ss");
let timeElement = document.querySelector("#time");
timeElement.innerHTML = `${currentTime}`;