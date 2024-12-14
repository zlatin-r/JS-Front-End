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
const editAppointmentBtnEl = document.querySelector('#edit-appointment');

let appointmentId = null;

function init() {
    loadBtnEl.addEventListener('click', loadAppointments)
    addAppointmentBtnEl.addEventListener('click', addAppointment);
    editAppointmentBtnEl.addEventListener('click', editAppointment);
}

async function editAppointment() {
    const headers = {
        method: 'PUT',
        body: JSON.stringify({
            model: modelInputEl.value,
            service: serviceInputEl.value,
            date: appDateInputEl.value,
            _id: appointmentId,
        }),
    }

    fetch(endpoints.update(appointmentId), headers)
        .then(() => {
            loadAppointments();
            clearInputFields();
            enableAddBtn();
            appointmentId = null;
        })
}

async function deleteAppointment(model) {
    getIdByModel(model)
        .then((id) =>
            fetch(endpoints.delete(id), {
                method: 'DELETE',
            }))
        .then(() => {
            loadAppointments();
            appointmentId = null;
        })
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
    attachEventListeners();
}

async function attachEventListeners() {
    const changeButtonsEl = document.querySelectorAll('.change-btn');
    const deleteButtonEl = document.querySelectorAll('.delete-btn');

    changeButtonsEl.forEach(button => {
        button.addEventListener('click', (e) => {
            const currAppointment = e.target.parentElement.parentElement;
            const carModel = currAppointment.querySelector('h2').textContent;
            const appDate = currAppointment.querySelector('h3:nth-of-type(1)').textContent;
            const service = currAppointment.querySelector('h3:nth-of-type(2)').textContent;
            populateData(carModel, appDate, service);
        });
    });

    deleteButtonEl.forEach(button => {
        button.addEventListener('click', (e) => {
            const currAppointment = e.target.parentElement.parentElement;
            const carModel = currAppointment.querySelector('h2').textContent;
            deleteAppointment(carModel);
        })
    })
}

function getIdByModel(model) {
    return fetch(baseUrl)
        .then(res => res.json())
        .then(res => Object.entries(res).find(a => a[1].model === model)[1]._id);
}

async function populateData(m, d, s) {
    appointmentId = await getIdByModel(m);

    console.log(appointmentId);

    modelInputEl.value = m;
    appDateInputEl.value = d;
    serviceInputEl.value = s;

    enableEditBtn();
}

function enableEditBtn() {
    addAppointmentBtnEl.disabled = true;
    editAppointmentBtnEl.disabled = false;
}

function enableAddBtn() {
    addAppointmentBtnEl.disabled = false;
    editAppointmentBtnEl.disabled = true;
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