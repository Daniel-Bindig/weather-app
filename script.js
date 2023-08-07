function init() {
    var searchButton = document.getElementById('btn')
    searchButton.addEventListener('click', fetchWeather());

    function fetchWeather() {
        let city = document.getElementById('city-search').value;
        let key = 'e99ffb98e40309894b1ddec2b52687ff';
        let units = 'metric';
        let url = `api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&units${units}`;
        //fetch
        fetch(url)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                console.log(data);
            })

        
    }

    
}

init()