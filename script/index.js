let today = moment().format("dddd, MMMM D, YYYY");
let todayElement = document.querySelector("#today-date");
todayElement.innerHTML = `${today}`;

let currentTime = moment().format("h:m:s");
let timeElement = document.querySelector("#today-time");
timeElement.innerHTML = `${currentTime}`;