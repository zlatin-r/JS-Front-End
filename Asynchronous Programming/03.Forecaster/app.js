function attachEvents() {
    const getWeatherBtnEl = document.getElementById('submit');
    const forecastEl = document.getElementById('forecast');
    const currentEl = document.getElementById('current');
    const upcomingEl = document.getElementById('upcoming');
    const locationInput = document.getElementById('location');
    const baseUrl = "http://localhost:3030/jsonstore/forecaster";

    getWeatherBtnEl.addEventListener('click', (e) => {
        e.preventDefault();

        async function getLocationCode(locationName) {
            const response = await fetch(`${baseUrl}/locations`);
            const locations = await response.json();
            const location = locations.find(loc => loc.name === locationName);

            if (!location) {
                handleError()
            }
            return location.code;
        }

        async function getCurrentWeather(code) {
            const response = await fetch(`${baseUrl}/today/${code}`);
            const data = await response.json();
            return data;
        }

        async function getUpcomingWeather(code) {
            const response = await fetch(`${baseUrl}/upcoming/${code}`);
            const data = await response.json();
            return data;
        }

        forecastEl.style.display = 'block';
    });

    function handleError() {
        forecastEl.style.display = "block";
        forecastEl.innerHTML = "<div class='label'>Error</div>";
    }
}

attachEvents();