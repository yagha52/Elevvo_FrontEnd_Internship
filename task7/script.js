const API_KEY = 'ea30f9dec193b3541baaf0a8bbc14771';
const weatherContainer = document.getElementById('weather-container');
const searchForm = document.getElementById('search-form');
const cityInput = document.getElementById('city-input');
const currentLocationBtn = document.getElementById('current-location-btn');

let cities = [];

searchForm.addEventListener('submit', e => {
    e.preventDefault();
    const city = cityInput.value.trim();
    if (city && !cities.includes(city)) {
        cities.push(city);
        fetchWeather(city);
        cityInput.value = '';
    }
});

// Fetch weather for a city
async function fetchWeather(city) {
    const card = createCityCard(city);
    weatherContainer.appendChild(card);
    card.querySelector('.loading').textContent = 'Loading...';

    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
        );
        if (!response.ok) throw new Error('City not found');
        const data = await response.json();
        updateCityCard(card, data);
    } catch (err) {
        card.querySelector('.loading').textContent = err.message;
    }
}

// Create card element
function createCityCard(city) {
    const card = document.createElement('div');
    card.className = 'city-card';
    card.innerHTML = `
        <h2>${city}</h2>
        <p class="loading"></p>
        <div class="current-weather"></div>
        <div class="forecast"></div>
    `;
    return card;
}

// Update card with weather data
function updateCityCard(card, data) {
    card.querySelector('.loading').textContent = '';

    const current = data.list[0];
    const currentHTML = `
        <img src="https://openweathermap.org/img/wn/${current.weather[0].icon}.png" alt="icon">
        <p>${current.main.temp} °C</p>
        <p>${current.weather[0].description}</p>
    `;
    card.querySelector('.current-weather').innerHTML = currentHTML;

    // 3-day forecast (every 8th element ~ 24h)
    const forecastHTML = data.list
        .filter((_, idx) => idx % 8 === 0 && idx < 24)
        .map(day => `
            <div>
                <p>${new Date(day.dt_txt).toLocaleDateString()}</p>
                <img src="https://openweathermap.org/img/wn/${day.weather[0].icon}.png" alt="icon">
                <p>${day.main.temp} °C</p>
            </div>
        `).join('');
    card.querySelector('.forecast').innerHTML = forecastHTML;
}

// Use user's location
currentLocationBtn.addEventListener('click', () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async pos => {
            const { latitude, longitude } = pos.coords;
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
            );
            const data = await response.json();
            const city = data.city.name;
            if (!cities.includes(city)) {
                cities.push(city);
                const card = createCityCard(city);
                weatherContainer.appendChild(card);
                updateCityCard(card, data);
            }
        });
    } else {
        alert('Geolocation is not supported by your browser.');
    }
});
