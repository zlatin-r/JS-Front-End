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

let recordId = null;

function attachEvents() {
    loadHistoryBtnEl.addEventListener('click', loadAllRecords);
    addButtonEl.addEventListener('click', addRecord);
    editButtonEl.addEventListener('click', editRecord)
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
    attachEventListeners();
}

function addRecord() {

    const data = {
        location: locationInputEl.value,
        date: dateInputEl.value,
        temperature: temperatureInputEl.value,
    }

    fetch(baseUrl, {
        method: 'POST',
        body: JSON.stringify(data),
    }).then(() => {
        loadAllRecords();
        clearAllInputs();
    });
}

function attachEventListeners() {
    const changeButtonsEl = document.querySelectorAll('.change-btn');
    const deleteButtonsEl = document.querySelectorAll('.delete-btn');

    changeButtonsEl.forEach(button => {
        button.addEventListener('click', (e) => {
            const currRecord = e.target.closest('.container');
            const location = currRecord.querySelector('h2').textContent;
            const date = currRecord.querySelector('h3:first-of-type').textContent;
            const temperature = currRecord.querySelector('h3:last-of-type').textContent;
            changeRecord(location, date, temperature);
            enableEditBtn();
        });
    });
    deleteButtonsEl.forEach(button => {
        button.addEventListener('click', (e) => {
            const currRecord = e.target.closest('.container');
            const location = currRecord.querySelector('h2').textContent;
            deleteRecord(location);
        })
    })
}

async function changeRecord(l, d, t) {
    recordId = await getIdByLocation(l);

    locationInputEl.value = l;
    dateInputEl.value = d;
    temperatureInputEl.value = t;
}

function editRecord() {
    const data = {
        location: locationInputEl.value,
        date: dateInputEl.value,
        temperature: temperatureInputEl.value,
        _id: recordId,
    }

    fetch(endPoints.update(data._id), {
        method: 'PUT',
        body: JSON.stringify(data),
    }).then(() => {
        loadAllRecords();
        clearAllInputs();
        enableAddBtn();
        recordId = null;
    });
}

function deleteRecord(l) {
    getIdByLocation(l)
        .then(id =>
            fetch(endPoints.delete(id), {
                method: 'DELETE',
            }))
        .then(() => {
            loadAllRecords();
        });
}

// ------------------ Helpers ---------------------------------------

function getIdByLocation(l) {
    return fetch(baseUrl)
        .then(res => res.json())
        .then(res => Object.entries(res).find(r => r[1].location === l)[1]._id);
}
function enableAddBtn() {
    editButtonEl.disabled = true;
    addButtonEl.disabled = false;
}


function enableEditBtn(){
    addButtonEl.disabled = true;
    editButtonEl.disabled = false;
}

function clearAllInputs() {
    locationInputEl.value = '';
    temperatureInputEl.value = '';
    dateInputEl.value = '';
}
function clearAllRecords() {
    recordsListEl.innerHTML = '';
}

attachEvents();
