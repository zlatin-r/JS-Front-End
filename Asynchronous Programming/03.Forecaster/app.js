function attachEvents() {
    const locationInput = document.getElementById('location');
    const submitButton = document.getElementById('submit');
    const forecastDiv = document.getElementById('forecast');
    const currentDiv = document.getElementById('current');
    const upcomingDiv = document.getElementById('upcoming');

    const symbols = {
        Sunny: '☀',
        'Partly sunny': '⛅',
        Overcast: '☁',
        Rain: '☂',
        Degrees: '°'
    };

    submitButton.addEventListener('click', async () => {
        const locationName = locationInput.value;

        try {
            const locationsResponse = await fetch('http://localhost:3030/jsonstore/forecaster/locations');
            const locations = await locationsResponse.json();

            const location = locations.find(loc => loc.name === locationName);
            const locationCode = location.code;

            const todayResponse = await fetch(`http://localhost:3030/jsonstore/forecaster/today/${locationCode}`);
            const todayData = await todayResponse.json();

            const upcomingResponse = await fetch(`http://localhost:3030/jsonstore/forecaster/upcoming/${locationCode}`);
            const upcomingData = await upcomingResponse.json();

            displayForecast(todayData, upcomingData);

        } catch (error) {
            forecastDiv.style.display = 'block';
            forecastDiv.innerHTML = '<div class="label">Error</div>';
        }
    });

    function displayForecast(todayData, upcomingData) {
        forecastDiv.style.display = 'block';

        const todayElement = document.createElement('div');
        todayElement.className = 'forecasts';

        const conditionSymbolSpan = document.createElement('span');
        conditionSymbolSpan.className = 'condition symbol';
        conditionSymbolSpan.textContent = `${symbols[todayData.forecast.condition]}`;

        const conditionSpan = document.createElement('span');
        conditionSpan.className = 'condition';

        const locationSpan = document.createElement('span');
        locationSpan.className = 'forecast-data';
        locationSpan.textContent = `${todayData.name}`;

        const degreeSpan = document.createElement('span');
        degreeSpan.className = 'forecast-data';
        degreeSpan.textContent = `${todayData.forecast.low}${symbols.Degrees}/${todayData.forecast.high}${symbols.Degrees}`;

        const forecastSpan = document.createElement('span');
        forecastSpan.className = 'forecast-data';
        forecastSpan.textContent = `${todayData.forecast.condition}`;

        conditionSpan.appendChild(locationSpan);
        conditionSpan.appendChild(degreeSpan);
        conditionSpan.appendChild(forecastSpan);

        todayElement.appendChild(conditionSymbolSpan);
        todayElement.appendChild(conditionSpan);

        currentDiv.appendChild(todayElement);

        const forecastInfoDiv = document.createElement('div');
        forecastInfoDiv.className = 'forecast-info';

        upcomingData.forecast.forEach(day => {
            debugger
            const upcomingSpan = document.createElement('span');
            upcomingSpan.className = 'upcoming';

            const symbolSpan = document.createElement('span');
            symbolSpan.className = 'symbol';
            symbolSpan.textContent = `${symbols[day.condition]}`;

            const degreeSpan = document.createElement('span');
            degreeSpan.className = 'forecast-data';
            degreeSpan.textContent = `${day.low}${symbols.Degrees}/${day.high}${symbols.Degrees}`;

            const forecastSpan = document.createElement('span');
            forecastSpan.className = 'forecast-data';
            forecastSpan.textContent = `${day.condition}`;

            upcomingSpan.appendChild(symbolSpan);
            upcomingSpan.appendChild(degreeSpan);
            upcomingSpan.appendChild(forecastSpan);

            forecastInfoDiv.appendChild(upcomingSpan);
        })
        upcomingDiv.appendChild(forecastInfoDiv);
    }
}

attachEvents();
