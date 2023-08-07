
var searchButton = document.getElementById('btn')

function fetchLocation() {
    let city = document.getElementById('city-search').value;
    let key = 'e99ffb98e40309894b1ddec2b52687ff';
    let locationUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${key}`;
    //fetch
    fetch(locationUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            
        })
}

function showWeather(response) {
    let row = document.querySelector('.days.row')
    row.innerHTML = response.daily.map(function(day) {
        return '<p>Day<p>'
    }).join(' ');
    console.log(response.lon);
}
searchButton.addEventListener('search', fetchLocation())