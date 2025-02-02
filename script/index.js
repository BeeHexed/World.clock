function updateTime(){
//London
let firstCityDateElement = document.querySelector("#first-date");
let firstCityTimeElement = document.querySelector("#first-time");
let timeOne = moment().tz("Europe/London");
firstCityDateElement.innerHTML= timeOne.format("ddd., MMMM Do YYYY");
firstCityTimeElement.innerHTML = timeOne.format(`h:mm:ss [<small>]A[</small>]`);


//Rome
let secondCityDateElement = document.querySelector("#second-date");
let secondCityTimeElement = document.querySelector("#second-time");
let timeTwo = moment().tz("Europe/Rome");
secondCityDateElement.innerHTML= timeTwo.format("ddd., MMMM Do YYYY");
secondCityTimeElement.innerHTML = timeTwo.format(`h:mm:ss [<small>]A[</small>]`);

//Tokyo
let thirdCityDateElement = document.querySelector("#third-date");
let thirdCityTimeElement = document.querySelector("#third-time");
let timeThree = moment().tz("Asia/Tokyo");
thirdCityDateElement.innerHTML= timeThree.format("ddd., MMMM Do YYYY");
thirdCityTimeElement.innerHTML = timeThree.format(`h:mm:ss [<small>]A[</small>]`);

//New York
let fourthCityDateElement = document.querySelector("#fourth-date");
let fourthCityTimeElement = document.querySelector("#fourth-time");
let timeFour = moment().tz("America/New_York");
fourthCityDateElement.innerHTML= timeFour.format("ddd., MMMM Do YYYY");
fourthCityTimeElement.innerHTML = timeFour.format(`h:mm:ss [<small>]A[</small>]`);
}

updateTime();
setInterval(updateTime, 1000);

