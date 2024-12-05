function attachEvents() {
//     const getWeatherBtnEl = document.getElementById('submit');
//     const forecastEl = document.getElementById('forecast');
//     const currentEl = document.getElementById('current');
//     const upcomingEl = document.getElementById('upcoming');
//
//     const baseUrl = "http://localhost:3030/jsonstore/forecaster";
//
//     // Fetch location data
//     async function getLocationCode(locationName) {
//         const response = await fetch(`${baseUrl}/locations`);
//         const locations = await response.json();
//         const location = locations.find(loc => loc.name === locationName);
//         if (!location) {
//             throw new Error("Location not found");
//         }
//         return location.code;
//     }
//
//     // Fetch current weather
//     async function getCurrentWeather(code) {
//         const response = await fetch(`${baseUrl}/today/${code}`);
//         const data = await response.json();
//         return data;
//     }
//
//     // Fetch upcoming weather
//     async function getUpcomingWeather(code) {
//         const response = await fetch(`${baseUrl}/upcoming/${code}`);
//         const data = await response.json();
//         return data;
//     }
//
//     // Render the forecast data
//     function renderCurrentWeather(data) {
//         const { name, forecast } = data;
//         const { low, high, condition } = forecast;
//         const conditionsMap = {
//             Sunny: "&#x2600;", // ☀
//             "Partly sunny": "&#x26C5;", // ⛅
//             Overcast: "&#x2601;", // ☁
//             Rain: "&#x2614;" // ☂
//         };
//
//         currentEl.innerHTML = `
//             <div class="label">Current conditions</div>
//             <div class="forecasts">
//                 <span class="condition symbol">${conditionsMap[condition]}</span>
//                 <span class="condition">
//                     <span class="forecast-data">${name}</span>
//                     <span class="forecast-data">${low}°/${high}°</span>
//                     <span class="forecast-data">${condition}</span>
//                 </span>
//             </div>
//         `;
//     }
//
//     function renderUpcomingWeather(data) {
//         const { forecast } = data;
//         const conditionsMap = {
//             Sunny: "&#x2600;", // ☀
//             "Partly sunny": "&#x26C5;", // ⛅
//             Overcast: "&#x2601;", // ☁
//             Rain: "&#x2614;" // ☂
//         };
//
//         const forecastHTML = forecast
//             .map(day => {
//                 const { low, high, condition } = day;
//                 return `
//                     <span class="upcoming">
//                         <span class="symbol">${conditionsMap[condition]}</span>
//                         <span class="forecast-data">${low}°/${high}°</span>
//                         <span class="forecast-data">${condition}</span>
//                     </span>
//                 `;
//             })
//             .join("");
//
//         upcomingEl.innerHTML = `
//             <div class="label">Three-day forecast</div>
//             ${forecastHTML}
//         `;
//     }
//
//     // Handle errors
//     function handleError() {
//         forecastEl.style.display = "block";
//         forecastEl.innerHTML = "<div class='label'>Error</div>";
//     }
//
//     // Main event handler
//     getWeatherBtnEl.addEventListener("click", async () => {
//         const locationName = document.getElementById("location").value;
//
//         forecastEl.style.display = "block";
//         currentEl.innerHTML = ""; // Clear previous data
//         upcomingEl.innerHTML = ""; // Clear previous data
//
//         try {
//             const locationCode = await getLocationCode(locationName);
//             const [currentWeather, upcomingWeather] = await Promise.all([
//                 getCurrentWeather(locationCode),
//                 getUpcomingWeather(locationCode)
//             ]);
//
//             renderCurrentWeather(currentWeather);
//             renderUpcomingWeather(upcomingWeather);
//         } catch (error) {
//             handleError();
//         }
//     });
}

attachEvents();
