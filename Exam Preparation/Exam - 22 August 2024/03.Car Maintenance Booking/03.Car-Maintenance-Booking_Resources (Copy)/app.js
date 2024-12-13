const baseUrl = 'http://localhost:3030/jsonstore/appointments';
const endpoints = {
    update: (id) => `${baseUrl}/${id}`,
    delete: (id) => `${baseUrl}/${id}`,
}

const appointmentsListEl = document.querySelector('#appointments-list');

const modelInputEl = document.querySelector('#car-model');
const serviceInputEl = document.querySelector('#car-service');
const appDateInputEl = document.querySelector('#date');

const loadBtnEl = document.querySelector('#load-appointments');
const addAppointmentBtnEl = document.querySelector('#add-appointment');


function init() {
    loadBtnEl.addEventListener('click', loadAppointments)
    addAppointmentBtnEl.addEventListener('click', addAppointment);
}

async function addAppointment() {
    if (!modelInputEl.value || !serviceInputEl.value || !appDateInputEl.value) return;

    const headers = {
        method: 'POST',
        body: JSON.stringify({
            model: modelInputEl.value,
            service: serviceInputEl.value,
            date: appDateInputEl.value,
        })
    }

    fetch(baseUrl, headers)
        .then(() => {
            loadAppointments();
            clearInputFields();
        });
}

async function loadAppointments() {
    clearAppointmentsList();

    const response = await fetch(baseUrl);
    const data = await response.json();

    Object.values(data).forEach((appointment) => {
        const newAppointment = document.createElement("li");
        newAppointment.className = "appointment";

        const carModelEl = document.createElement("h2");
        carModelEl.textContent = appointment.model;

        const appDateEl = document.createElement("h3");
        appDateEl.textContent = appointment.date;

        const appServiceEl = document.createElement("h3");
        appServiceEl.textContent = appointment.service;

        const buttonContainerEl = document.createElement("div");
        buttonContainerEl.className = "buttons-appointment";

        const changeBtnEl = document.createElement("button");
        changeBtnEl.className = "change-btn";
        changeBtnEl.textContent = 'Change';

        const deleteBtnEl = document.createElement("button");
        deleteBtnEl.className = 'delete-btn';
        deleteBtnEl.textContent = 'Delete';

        buttonContainerEl.append(changeBtnEl);
        buttonContainerEl.append(deleteBtnEl);

        newAppointment.appendChild(carModelEl);
        newAppointment.appendChild(appDateEl);
        newAppointment.appendChild(appServiceEl);
        newAppointment.appendChild(buttonContainerEl);

        appointmentsListEl.appendChild(newAppointment);

    });
}

function clearAppointmentsList() {
    appointmentsListEl.innerHTML = '';
}

function clearInputFields() {
    modelInputEl.value = '';
    serviceInputEl.value = '';
    appDateInputEl.value = '';
}


init();