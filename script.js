function showweatherDetails(e) {
    e.preventDefault();

    const city = document.getElementById('city').value;
    const apiKey = '98c3e1e75def10af18a0ae6c57c49c8b';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const weatherInfo = document.getElementById('weatherInfo');
        const weatherIcon = getWeatherIcon(data.weather[0].icon);
        weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                                <img src="${weatherIcon}" alt="${data.weatherDescription}" class="weather-icon">
                                <p>Temperature: ${data.main.temp} &#8451;</p>
                                <p>Weather: ${data.weather[0].description}</p>`;
    });
}

function getWeatherIcon(iconCode) {
    return `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
}

document.getElementById('weatherForm').addEventListener('submit', showweatherDetails );