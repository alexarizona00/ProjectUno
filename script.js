let restEl1 = document.querySelector("#rest1");
let restEl2 = document.querySelector("#rest2");
let restEl3 = document.querySelector("#rest3");
let restEl4 = document.querySelector("#rest4");
let restEl5 = document.querySelector("#rest5");
let restEl6 = document.querySelector("#rest6");
let weatherEl = document.querySelector(".weather");

let city = localStorage.getItem('city')

console.log(city)
localStorage.clear()
console.log(city)

function restApi() {
 weather();
ticketApi();
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
    "https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&city=phoenix&apikey=LUhaSTXpgoB5GJGYIsUgEU0Nq5yjfC78"
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
      "X-RapidAPI-Host": "hotels4.p.rapidapi.com",
      "X-RapidAPI-Key": "59f6b0a5d6msh2d72ba87fa06eadp18d3cdjsn5d6a057b5578",
    },
  };
  fetch(
    "https://hotels4.p.rapidapi.com/locations/v2/search?query=phoenix&locale=en_US&currency=USD",
    options
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      // for (let i = 0; i < 5; i++) {
      //   console.log(data.length);
      //   document.querySelector("#rest" + i).textContent =
      //     data[i]["restaurantName"];
      // }
    });
}
function weather() {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=Tucson&units=imperial&appid=f9b6ea43279bd22f926c1e54b46af35a"
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      weatherEl.textContent = data["main"]["temp"];
          });
}
restApi()



