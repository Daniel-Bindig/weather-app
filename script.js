const key = 'e99ffb98e40309894b1ddec2b52687ff';
var searchButton = document.getElementById('btn')

function fetchLocation() {
    let city = document.getElementById('city-search').value;
    getCoordinates(city)
}

function getCoordinates(city){
    let locationUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${key}`;
    //fetch
    fetch(locationUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data[0]);
            var lat = data[0].lat;
            var lon = data[0].lon;
            getWeather(lat, lon)
        })
}

function getWeather(lat, lon) {
    let weatherUrl = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${key}`
        fetch(weatherUrl)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                console.log(data)
                showWeather(data)
            })
}

function showWeather(data) {
    let row = document.querySelector('.days.row')
    row.innerHTML = response.daily.map(function(day) {
        return '<p>Day<p>'
    }).join(' ');
}
searchButton.addEventListener('search', fetchLocation())