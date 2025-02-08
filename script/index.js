setInterval(function() {
//London
let firstCityDateElement = document.querySelector("#first-date");
let firstCityTimeElement = document.querySelector("#first-time");
let timeOne = moment().tz("Europe/London");
firstCityDateElement.innerHTML= timeOne.format("MMMM Do, YYYY");
firstCityTimeElement.innerHTML = timeOne.format(`h:mm:ss [<small>]A[</small>]`);
}, 1000);


setInterval(function() {
//Rome
let secondCityDateElement = document.querySelector("#second-date");
let secondCityTimeElement = document.querySelector("#second-time");
let timeTwo = moment().tz("Europe/Rome");
secondCityDateElement.innerHTML= timeTwo.format("MMMM Do, YYYY");
secondCityTimeElement.innerHTML = timeTwo.format(`h:mm:ss [<small>]A[</small>]`);
}, 1000);

setInterval(function() {
//New York
let thirdCityDateElement = document.querySelector("#third-date");
let thirdCityTimeElement = document.querySelector("#third-time");
let timeThree = moment().tz("America/New_York");
thirdCityDateElement.innerHTML= timeThree.format("MMMM Do, YYYY");
thirdCityTimeElement.innerHTML = timeThree.format(`h:mm:ss [<small>]A[</small>]`);
}, 1000);

setInterval(function() {
//Tokyo
let fourthCityDateElement = document.querySelector("#fourth-date");
let fourthCityTimeElement = document.querySelector("#fourth-time");
let timeFour = moment().tz("Asia/Tokyo");
fourthCityDateElement.innerHTML= timeFour.format("MMMM Do, YYYY");
fourthCityTimeElement.innerHTML = timeFour.format(`h:mm:ss [<small>]A[</small>]`);
}, 1000);

