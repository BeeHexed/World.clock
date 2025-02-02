
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

//Tokyo
let thirdCityDateElement = document.querySelector("#third-date");
let thirdCityTimeElement = document.querySelector("#third-time");
let timeThree = moment().tz("Asia/Tokyo");
thirdCityDateElement.innerHTML= timeThree.format("dddd, MMMM Do YYYY");
thirdCityTimeElement.innerHTML = timeThree.format(`h:mm:ss [<small>]A[</small>]`)

//Rome
let fourthCityDateElement = document.querySelector("#fourth-date");
let fourthCityTimeElement = document.querySelector("#fourth-time");
let timeFour = moment().tz("Europe/Rome");
fourthCityDateElement.innerHTML= timeFour.format("dddd, MMMM Do YYYY");
fourthCityTimeElement.innerHTML = timeFour.format(`h:mm:ss [<small>]A[</small>]`)