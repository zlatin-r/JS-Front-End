const baseUrl = 'http://localhost:3030/jsonstore/workout';
const endpoints = {
    update: (id) => `${baseUrl}/${id}`,
    delete: (id) => `${baseUrl}/${id}`,
}
const workoutInputEl = document.querySelector('#workout');
const locationInputEl = document.querySelector('#location');
const dateInputEl = document.querySelector('#date');

const workoutsList = document.querySelector('#list');

const loadBtnEl = document.querySelector('#load-workout');
const addWorkoutBtnEl = document.querySelector('#add-workout');
const editWorkoutBtnEl = document.querySelector('#edit-workout');

let workoutId = null;

loadBtnEl.addEventListener('click', loadWorkouts);
addWorkoutBtnEl.addEventListener('click', addWorkout);
editWorkoutBtnEl.addEventListener('click', editWorkout);

function loadWorkouts() {
    clearWorkoutsList();

    fetch(baseUrl)
        .then(res => res.json())
        .then((workouts) => {
            Object.values(workouts).forEach(workout => {
                const newContainerEl = document.createElement('div');
                newContainerEl.className = 'container'

                const newWorkoutEl = document.createElement('h2');
                newWorkoutEl.textContent = workout.workout;

                const workoutDate = document.createElement('h3');
                workoutDate.textContent = workout.date;

                const workoutLocation = document.createElement('h3');
                workoutLocation.id = 'location';
                workoutLocation.textContent = workout.location;

                const buttonsContainerEl = document.createElement('div');
                buttonsContainerEl.id = 'buttons-container';

                const changeButtonEl = document.createElement('button');
                changeButtonEl.className = 'change-btn';
                changeButtonEl.textContent = 'Change';

                const doneButtonEl = document.createElement('button');
                doneButtonEl.className = 'delete-btn';
                doneButtonEl.textContent = 'Done';

                buttonsContainerEl.appendChild(changeButtonEl);
                buttonsContainerEl.appendChild(doneButtonEl);

                newContainerEl.appendChild(newWorkoutEl);
                newContainerEl.appendChild(workoutDate);
                newContainerEl.appendChild(workoutLocation);
                newContainerEl.appendChild(buttonsContainerEl);

                workoutsList.appendChild(newContainerEl);
            });
            attachEventListeners();
        });
}

function addWorkout() {
    const headers = {
        method: 'POST',
        body: JSON.stringify({
            workout: workoutInputEl.value,
            location: locationInputEl.value,
            date: dateInputEl.value,
        }),
    }
    fetch(baseUrl, headers)
        .then(() => {
            loadWorkouts();
            clearInputFields();
        });
}

function editWorkout() {
    const headers = {
        method: 'PUT',
        body: JSON.stringify({
            workout: workoutInputEl.value,
            date: dateInputEl.value,
            location: locationInputEl.value,
            _id: workoutId,
        })
    }
    fetch(endpoints.update(workoutId), headers)
        .then(() => {
            loadWorkouts();
            clearInputFields();
            enableAddBtn();
            workoutId = null;
        });
}

function attachEventListeners() {
    const changeButtonsEl = document.querySelectorAll('.change-btn');
    const doneButtonsEl = document.querySelectorAll('.delete-btn');

    changeButtonsEl.forEach(button => {
        button.addEventListener('click', (e) => {
            const currWorkout = e.target.closest('.container');
            const workout = currWorkout.querySelector('h2').textContent;
            const date = currWorkout.querySelector('h3:nth-of-type(1)').textContent;
            const location = currWorkout.querySelector('h3:nth-of-type(2)').textContent;
            changeHandler(workout, date, location);
        });
    });

    doneButtonsEl.forEach(button => {
        button.addEventListener('click', (e) => {
            const currWorkout = e.target.closest('.container');
            const workout = currWorkout.querySelector('h2').textContent;
            deleteWorkout(workout);
        })
    })
}

function deleteWorkout(workout) {
    getIdByWorkout(workout)
        .then((id) => {
            fetch(endpoints.delete(id), {
                method: 'DELETE',
            })
        })
        .then(() => {
            loadWorkouts();
        })
}

async function changeHandler(workout, date, location) {
    workoutId = await getIdByWorkout(workout);

    workoutInputEl.value = workout;
    dateInputEl.value = date;
    locationInputEl.value = location;

    enableEditBtn();
}

//----------- Helpers ------------------
function getIdByWorkout(workout) {
    return fetch(baseUrl)
        .then(res => res.json())
        .then((data) => Object.entries(data).find(w => w[1].workout === workout)[1]._id);
}

function enableAddBtn() {
    addWorkoutBtnEl.disabled = false;
    editWorkoutBtnEl.disabled = true;
}

function enableEditBtn() {
    editWorkoutBtnEl.disabled = false;
    addWorkoutBtnEl.disabled = true;
}

function clearWorkoutsList() {
    workoutsList.innerHTML = '';
}

function clearInputFields() {
    workoutInputEl.value = '';
    locationInputEl.value = '';
    dateInputEl.value = '';
}