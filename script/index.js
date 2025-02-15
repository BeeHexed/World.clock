
//London
setInterval(function() {
    if (selectedCity) return;
let firstCityDateElement = document.querySelector("#first-date");
let firstCityTimeElement = document.querySelector("#first-time");
let timeOne = moment().tz("Europe/London");
firstCityDateElement.innerHTML= timeOne.format("Do MMMM YYYY");
firstCityTimeElement.innerHTML = timeOne.format(`h:mm:ss [<small>]A[</small>]`);} , 1000);

//Rome
setInterval(function() {
    if (selectedCity) return;
let secondCityDateElement = document.querySelector("#second-date");
let secondCityTimeElement = document.querySelector("#second-time");
let timeTwo = moment().tz("Europe/Rome");
secondCityDateElement.innerHTML= timeTwo.format("Do MMMM YYYY");
secondCityTimeElement.innerHTML = timeTwo.format(`h:mm:ss [<small>]A[</small>]`); } , 1000);


//New York
setInterval(function() {
    if (selectedCity) return;
let thirdCityDateElement = document.querySelector("#third-date");
let thirdCityTimeElement = document.querySelector("#third-time");
let timeThree = moment().tz("America/New_York");
thirdCityDateElement.innerHTML= timeThree.format("Do MMMM YYYY");
thirdCityTimeElement.innerHTML = timeThree.format(`h:mm:ss [<small>]A[</small>]`); } , 1000);

//Tokyo
setInterval(function() {
    if (selectedCity) return;
let fourthCityDateElement = document.querySelector("#fourth-date");
let fourthCityTimeElement = document.querySelector("#fourth-time");
let timeFour = moment().tz("Asia/Tokyo");
fourthCityDateElement.innerHTML= timeFour.format("Do MMMM YYYY");
fourthCityTimeElement.innerHTML = timeFour.format(`h:mm:ss [<small>]A[</small>]`);
}, 1000);

function updateCity(event) {
  selectedCity = true; 
    let cityTimeZone= event.target.value;
    let cityName = cityTimeZone.replace('_', ' ');
  let cityTime = moment().tz(cityTimeZone);
  
  let citiesElement = document.querySelector("#cities")
  citiesElement.innerHTML = `
     <div class="date" id="first-date">${moment().tz(cityTimeZone).format("Do MMMM YYYY ")}</div>
        <div class="timeDisplay" id="first-time">${moment().tz(cityTimeZone).format("h:mm [<small>]A[</small>]")}</div>
        <a href="index.html">Homepage</a>
        `
};

function updateTime() {
        let cityTime = moment().tz(cityTimeZone);
        document.querySelector("#first-time").innerHTML = cityTime.format("HH:mm");
    }

let dropdownElement = document.querySelector("#city")
dropdownElement.addEventListener("change", updateCity);

let selectedCity = false
if (cityTimeZone === current) {
        cityTimeZone = moment.tz.guess();}