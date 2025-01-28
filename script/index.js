
function selectedCity(event) {
  const selectedCity = event.target.value;
  {
    if (selectedCity === "london") {
      alert(`It is ${timeZoneLondon}`);
    } else if (selectedCity === "paris") {
      alert(`It is ${timeZoneParis}`);
    } else if (selectedCity === "tokyo") {
      alert(`It is ${timeZoneTokyo}`);
    }
  }
}

let timeZoneLondon = moment()
  .tz("Europe/London")
  .format(`dddd, MMMM D, YYYY hh:mm a`);

  let timeZoneParis = moment()
  .tz("Europe/Paris")
  .format(`dddd, MMMM D, YYYY hh:mm a`);

  let timeZoneTokyo = moment().tz("Asia/Tokyo").format(`dddd, MMMM D, YYYY hh:mm a`);

const citySelect = document.querySelector("#city");

citySelect.addEventListener("change", selectedCity);





let firstCity = moment().format("dddd, MMMM D, YYYY");
let cityElement = document.querySelector("#firstCity");
cityElement.innerHTML = `${firstCity}`;

let currentTime = moment().format("hh:mm:ss");
let timeElement = document.querySelector("#time");
timeElement.innerHTML = `${currentTime}`;

let tomorrow = moment().add(1, "days").format("dddd, MMMM D, YYYY");
let tomorrowElement = document.querySelector("#tomorrow");
tomorrowElement.innerHTML = `${tomorrow}`;



