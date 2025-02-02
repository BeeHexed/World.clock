
//London
setInterval(function() {
let firstCityDateElement = document.querySelector("#first-date");
let firstCityTimeElement = document.querySelector("#first-time");
let timeOne = moment().tz("Europe/London");
firstCityDateElement.innerHTML= timeOne.format("dddd, MMMM Do YYYY");
firstCityTimeElement.innerHTML = timeOne.format(`h:mm:ss [<small>]A[</small>]`)
}, 1000);




//New York
setInterval(function(){
let secondCityDateElement = document.querySelector("#second-date");
let secondCityTimeElement = document.querySelector("#second-time");
let timeTwo = moment().tz("America/New_York");
secondCityDateElement.innerHTML= timeTwo.format("dddd, MMMM Do YYYY");
secondCityTimeElement.innerHTML = timeTwo.format(`h:mm:ss [<small>]A[</small>]`)
}, 1000);



