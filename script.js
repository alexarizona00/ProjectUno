

let restEl1 = document.querySelector("#rest1");
let restEl2 = document.querySelector("#rest2");
let restEl3 = document.querySelector("#rest3");
let restEl4 = document.querySelector("#rest4");
let restEl5 = document.querySelector("#rest5");
let restEl6 = document.querySelector("#rest6");
let weatherEl = document.querySelector(".weather");
let locationEl = document.querySelector(".location");
let hotelEl = document.querySelector(".hotel");
let city = localStorage.getItem("city");

////// added localstorage key for the city that stores from previous page and is recalled below, then the local storage is cleared and variable city holds the data.
console.log(city);
localStorage.clear();

locationEl.textContent = "Now searching: " + city;
function restApi() {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Host": "restaurants-near-me-usa.p.rapidapi.com",
      "X-RapidAPI-Key": "59f6b0a5d6msh2d72ba87fa06eadp18d3cdjsn5d6a057b5578",
    },
  };

  fetch(
    "https://restaurants-near-me-usa.p.rapidapi.com/restaurants/location/state/AZ/city/Phoenix/0",
    options
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      for (let i = 0; i < 5; i++) {
        console.log(data.length);
        document.querySelector("#rest" + i).textContent =
          data[i]["restaurantName"];
      }
    });
}

function ticketApi() {
  fetch(
    "https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&city=" +
      city +
      "&apikey=LUhaSTXpgoB5GJGYIsUgEU0Nq5yjfC78"
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      for (let i = 0; i < 5; i++) {
        document.querySelector("#event" + i).textContent =
          data._embedded.events[i].name;
      }
    });
}
function hotelApi() {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Host": "best-booking-com-hotel.p.rapidapi.com",
      "X-RapidAPI-Key": "59f6b0a5d6msh2d72ba87fa06eadp18d3cdjsn5d6a057b5578",
    },
  };
  fetch(
    "https://best-booking-com-hotel.p.rapidapi.com/booking/best-accommodation?cityName=" +
      city +
      "&countryName=usa",
    options
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      hotelEl.textContent = data["name"];
    });
}
function weather() {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=Tucson&units=imperial&appid=6deedd65fb7eb5d3e6a9e33d74aa628d"
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      weatherEl.textContent =
        "Current Temperature: " + data["main"]["temp"] + " in " + city;
    });
}

weather();
restApi();
ticketApi();
hotelApi();


