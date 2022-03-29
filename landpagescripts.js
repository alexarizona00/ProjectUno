let searchButton = document.querySelector('#searchbutton')
let searchField = document.querySelector('#searchfield')
let city = '';


searchButton.addEventListener('click', function() {
city = searchField.value
localStorage.setItem("city", city)
window.location = './finalpage.html'
})
 