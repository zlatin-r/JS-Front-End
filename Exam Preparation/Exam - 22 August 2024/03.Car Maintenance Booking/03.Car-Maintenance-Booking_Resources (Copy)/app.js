const baseUrl = 'http://localhost:3030/jsonstore/appointments';
const endpoints = {
    update: (id) => `${baseUrl}/${id}`,
    delete: (id) => `${baseUrl}/${id}`,
}

const appointmentsListEl = document.querySelector('#appointments-list');

const loadBtnEl = document.querySelector('#load-appointments');


function init () {
    loadBtnEl.addEventListener('click', loadAppointments)
}

async function loadAppointments () {
    const response = await fetch(baseUrl);
    const data = await response.json();

    Object.values(data).forEach((appointment) => {
        const newAppointment = document.createElement("li");
        newAppointment.className = "appointment";

        const carModel = document.createElement("h2");
        carModel.textContent = appointment.name;
    })
}



init();