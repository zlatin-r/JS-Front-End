const baseUrl = 'http://localhost:3030/jsonstore/appointments';

const appointmentsListEl = document.querySelector('#appointments-list');

const loadAppointmentsBtnEl = document.querySelector('#load-appointments');
const addAppointmentBtnEl = document.querySelector('#add-appointment');

const carModel = document.querySelector('#car-model');
const carService = document.querySelector('#car-service');
const serviceDate = document.querySelector('#date');

loadAppointmentsBtnEl.addEventListener('click', loadAppointments);
addAppointmentBtnEl.addEventListener('click', addAppointment);

async function addAppointment() {

    if (carModel.value || carService.value || serviceDate.value) {

        const headers = {
            method: 'POST',
            body: JSON.stringify({
                model: carModel.value,
                service: carService.value,
                date: serviceDate.value,
            }),
        }

        fetch(baseUrl, headers)
            .then(loadAppointments)
            .catch(error => console.log(error));

        carModel.value = '';
        carService.value = '';
        serviceDate.value = '';
    }
}

async function loadAppointments() {
    try {
        const response = await fetch(baseUrl);
        const appointments = await response.json();

        Object.values(appointments).forEach((appointment) => {
            const newAppointmentLiEl = document.createElement('li');
            newAppointmentLiEl.className = 'appointment';

            const carModelEl = document.createElement('h2');
            carModelEl.textContent = appointment.model;

            const appDateEl = document.createElement('h3');
            appDateEl.textContent = appointment.date;

            const serviceDescriptionEl = document.createElement('h3');
            serviceDescriptionEl.textContent = appointment.service;

            const buttonsContainerDivEl = document.createElement('div');
            buttonsContainerDivEl.className = 'buttons-appointment';

            const changeBtnEl = document.createElement('button');
            changeBtnEl.textContent = 'Change';
            changeBtnEl.className = 'change-btn';

            const deleteBtnEl = document.createElement('button');
            deleteBtnEl.textContent = 'Delete';
            deleteBtnEl.className = 'delete-btn';

            buttonsContainerDivEl.appendChild(changeBtnEl);
            buttonsContainerDivEl.appendChild(deleteBtnEl);

            newAppointmentLiEl.appendChild(carModelEl);
            newAppointmentLiEl.appendChild(appDateEl);
            newAppointmentLiEl.appendChild(serviceDescriptionEl);

            newAppointmentLiEl.appendChild(buttonsContainerDivEl);

            appointmentsListEl.appendChild(newAppointmentLiEl);
        })
    } catch (error) {
        console.error(error)
    }
}

