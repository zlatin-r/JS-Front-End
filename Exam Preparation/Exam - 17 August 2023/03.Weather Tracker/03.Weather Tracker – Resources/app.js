const baseUrl = 'http://localhost:3030/jsonstore/tasks';
const endPoints = {
    update: (id) => `${baseUrl}/${id}`,
    delete: (id) => `${baseUrl}/${id}`,
}

const locationInputEl = document.getElementById('location');
const temperatureInputEl = document.getElementById('temperature');
const dateInputEl = document.getElementById('date');

const recordsListEl = document.getElementById('list');

const loadHistoryBtnEl = document.getElementById('load-history');
const addButtonEl = document.getElementById('add-weather');
const editButtonEl = document.getElementById('edit-weather');

function attachEvents() {
    loadHistoryBtnEl.addEventListener('click', loadAllRecords)
}

async function loadAllRecords() {
    clearAllRecords();

    const response = await fetch(baseUrl);
    const data = await response.json();

    Object.values(data).forEach((record) => {
        const newContainer = document.createElement("div");
        newContainer.className = "container";

        const locationEl = document.createElement("h2");
        locationEl.textContent = record.location;

        const dateEl = document.createElement("h3");
        dateEl.textContent = record.date;

        const temperatureEl = document.createElement("h3");
        temperatureEl.className = "celsius";
        temperatureEl.textContent = record.temperature;

        const buttonsContainerEl = document.createElement("div");
        buttonsContainerEl.className = "buttons-container";

        const changeButtonEl = document.createElement("button");
        changeButtonEl.className = "change-btn";
        changeButtonEl.textContent = 'Change';

        const deleteButtonEl = document.createElement("button");
        deleteButtonEl.className = "delete-btn";
        deleteButtonEl.textContent = 'Delete';

        buttonsContainerEl.appendChild(changeButtonEl);
        buttonsContainerEl.appendChild(deleteButtonEl);

        newContainer.appendChild(locationEl);
        newContainer.appendChild(dateEl);
        newContainer.appendChild(temperatureEl);
        newContainer.appendChild(buttonsContainerEl);

        recordsListEl.appendChild(newContainer);

    });
}

// ------------------ Helpers ---------------------------------------
function clearAllRecords() {
    recordsListEl.innerHTML = '';
}

attachEvents();
