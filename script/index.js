let firstCity = moment().format("dddd, MMMM D, YYYY");
let cityElement = document.querySelector("#firstCity");
cityElement.innerHTML = `${firstCity}`;

let currentTime = moment().format("hh:mm:ss");
let timeElement = document.querySelector("#time");
timeElement.innerHTML = `${currentTime}`;

let tomorrow = moment().add(1, "days").format("dddd, MMMM D, YYYY");
let tomorrowElement = document.querySelector("#tomorrow");
tomorrowElement.innerHTML = `${tomorrow}`;