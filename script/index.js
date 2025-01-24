let today = moment().format("dddd, MMMM D, YYYY");
let todayElement = document.querySelector("#date");
todayElement.innerHTML = `${today}`;

let currentTime = moment().format("h:mm:s");
let timeElement = document.querySelector("#time");
timeElement.innerHTML = `${currentTime}`;