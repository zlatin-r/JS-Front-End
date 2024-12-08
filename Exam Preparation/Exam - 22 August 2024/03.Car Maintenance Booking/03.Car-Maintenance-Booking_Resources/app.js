const baseUrl = 'http://localhost:3030/jsonstore/appointments';

const endpoints = {
    update: (id) => `${baseUrl}/${id}`,
    delete: (id) => `${baseUrl}/${id}`,
};

const appointmentsListEl = document.querySelector('#appointments-list');

const loadAppointmentsBtnEl = document.querySelector('#load-appointments');
const addAppointmentBtnEl = document.querySelector('#add-appointment');

const addBtn = document.getElementById("add-appointment");
const editAppointmentBtnEl = document.getElementById("edit-appointment");

const carModel = document.querySelector('#car-model');
const carService = document.querySelector('#car-service');
const serviceDate = document.querySelector('#date');

let selectedTaskId = null;

loadAppointmentsBtnEl.addEventListener('click', loadAppointments);
addAppointmentBtnEl.addEventListener('click', addAppointment);

editAppointmentBtnEl.addEventListener('click', editAppointment);

async function addAppointment() {
    if (carModel.value || carService.value || serviceDate.value) {

        try {
            appointmentsListEl.innerHTML = '';

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

            clearAllInputs();

        } catch (error) {
            console.log(error);
        }
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
            newAppointmentLiEl.appendChild(serviceDescriptionEl);
            newAppointmentLiEl.appendChild(appDateEl);

            newAppointmentLiEl.appendChild(buttonsContainerDivEl);

            appointmentsListEl.appendChild(newAppointmentLiEl);
        });
        attachEventListeners();
    } catch (error) {
        console.error(error);
    }
}

function attachEventListeners() {
    const changeButtons = document.querySelectorAll('.change-btn');
    const deleteButtons = document.querySelectorAll('.delete-btn');

    changeButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const appointmentEl = e.target.closest('.appointment');
            const model = appointmentEl.querySelector('h2').textContent;
            const serviceDate = appointmentEl.querySelector('h3:first-of-type').textContent;
            const serviceDescription = appointmentEl.querySelector('h3:last-of-type').textContent;
            editTask(model, serviceDate, serviceDescription);
            enableEditBtn();
        });
    });

    deleteButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const appointmentEl = e.target.closest('.appointment');
            const model = appointmentEl.querySelector('h2').textContent;
            deleteTask(model);
        });
    });
}

function editAppointment(ev) {
    ev.preventDefault();
    const taskmodel = carModel.value;
    const data = {
        model: carModel.value,
        service: carService.value,
        date: serviceDate.value,
        _id: selectedTaskId,
    };

    fetch(endpoints.update(data._id), {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then(() => {
            clearAllInputs();
            selectedTaskId = null;
            enableAddBtn();
            return loadAppointments();
        })
        .catch(console.error);
}

function deleteTask(taskLocation) {
    getIdByModel(taskLocation)
        .then((id) =>
            fetch(endpoints.delete(id), {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
            })
        )
        .then(() => {
            clearAllInputs();

            selectedTaskId = null;
            enableAddBtn();
            return loadAppointments();

        })
        .catch(console.error);
}


function getIdByModel(task) {
    return fetch(baseUrl)
        .then(res => res.json())
        .then(res => Object.entries(res).find(e => e[1].model === task)[1]._id);
}

async function editTask(taskModel, taskDate, taskService) {
    selectedTaskId = await getIdByModel(taskModel);
    carModel.value = taskModel;
    serviceDate.value = taskDate;
    carService.value = taskService;
}

function enableEditBtn() {
    addBtn.disabled = true;
    editAppointmentBtnEl.disabled = false;
}

function enableAddBtn() {
    addBtn.disabled = false;
    editAppointmentBtnEl.disabled = true;
}

function clearAllInputs() {
    carModel.value = '';
    carService.value = '';
    serviceDate.value = '';
}
