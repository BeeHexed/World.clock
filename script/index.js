/*
stop here. Reapproach in am
function selectedCity(event) {
  const selectedCity = event.target.value;
  {
    if (selectedCity === "london") {
      alert("It is Saturday, October 8, 2023 2:51 PM in Europe/Paris");
    } else if (selectedCity === "paris") {
      alert("💙");
    } else if (selectedCity === "tokyo") {
      alert("💛");
    }
  }
}

const citySelect = document.querySelector("#city");

citySelect.addEventListener("change", selectedCity);
*/




let firstCity = moment().format("dddd, MMMM D, YYYY");
let cityElement = document.querySelector("#firstCity");
cityElement.innerHTML = `${firstCity}`;

let currentTime = moment().format("hh:mm:ss");
let timeElement = document.querySelector("#time");
timeElement.innerHTML = `${currentTime}`;

let tomorrow = moment().add(1, "days").format("dddd, MMMM D, YYYY");
let tomorrowElement = document.querySelector("#tomorrow");
tomorrowElement.innerHTML = `${tomorrow}`;



