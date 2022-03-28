let submitButton = document.querySelector('#submitbutton'); 
let searchField = '';


submitButton.addEventListener('click', function () {

searchField = document.getElementById('searchfield').value
});

fetch("https://api.openweathermap.org/data/2.5/weather?q=phoenix&appid=f9b6ea43279bd22f926c1e54b46af35a")
    .then(response => response.json())
    .then(data => console.log(data));
