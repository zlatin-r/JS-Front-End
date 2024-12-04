function attachEvents() {
    const getWeatherBtnEl = document.getElementById('submit');
    const forecastEl = document.getElementById('forecast');
    const url = "http://localhost:3030/jsonstore/forecaster/locations"

    getWeatherBtnEl.addEventListener('click', (e) => {
        e.preventDefault();

        const location = document.getElementById('location').value;
        const responsePromise = fetch(url);

        responsePromise
            .then(response => response.json())
            .then(data => {
                let currLocation = data.filter(item => item.name === location);
            })

        forecastEl.style.display = 'block';
    });
}

attachEvents();