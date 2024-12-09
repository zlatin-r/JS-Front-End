const baseUrl = 'http://localhost:3030/jsonstore/records'
const endpoints = {
    update: (id) => `${baseUrl}/${id}`,
    delete: (id) => `${baseUrl}/${id}`,
}

const loadRecordsBtnEl = document.querySelector('#load-records');
const addRecordBtnEl = document.querySelector('#add-record');
const editRecordsBtnEl = document.querySelector('#edit-record');

const recordsListEl = document.querySelector('#list');

const nameInputEl = document.querySelector('#p-name');
const stepsInputEl = document.querySelector('#steps');
const caloriesInputEl = document.querySelector('#calories');

let selectedRecordId = null;

function attachEvents() {
    loadRecordsBtnEl.addEventListener('click', loadRecords);
    addRecordBtnEl.addEventListener('click', addRecord);
    editRecordsBtnEl.addEventListener('click', editRecord);
}

async function loadRecords() {
    clearRecords();

    const response = await fetch(baseUrl);
    const data = await response.json();

    Object.values(data).forEach((record) => {
        const newRecordLi = document.createElement('li');
        newRecordLi.className = 'record';

        const infoDivEl = document.createElement('div');
        infoDivEl.className = 'info';

        const nameParagraphEl = document.createElement('p');
        nameParagraphEl.textContent = record.name;

        const stepsParagraphEl = document.createElement('p');
        stepsParagraphEl.textContent = record.steps;

        const caloriesParagraphEl = document.createElement('p');
        caloriesParagraphEl.textContent = record.calories;

        const btnWrapperEl = document.createElement('div');
        btnWrapperEl.className = 'btn-wrapper';

        const changeBtnEl = document.createElement('button');
        changeBtnEl.className = 'change-btn';
        changeBtnEl.textContent = 'Change';

        const deleteBtnEl = document.createElement('button');
        deleteBtnEl.className = 'delete-btn';
        deleteBtnEl.textContent = 'Delete';

        btnWrapperEl.appendChild(changeBtnEl);
        btnWrapperEl.appendChild(deleteBtnEl);

        infoDivEl.appendChild(nameParagraphEl);
        infoDivEl.appendChild(stepsParagraphEl);
        infoDivEl.appendChild(caloriesParagraphEl);

        newRecordLi.appendChild(infoDivEl);
        newRecordLi.appendChild(btnWrapperEl);

        recordsListEl.appendChild(newRecordLi);
    });
    attachEventListeners();
}

async function addRecord() {

    const headers = {
        method: 'POST',
        body: JSON.stringify({
            name: nameInputEl.value,
            steps: stepsInputEl.value,
            calories: caloriesInputEl.value,
        }),
    }
    fetch(baseUrl, headers)
        .then(loadRecords)
        .catch(console.error);

    clearInputs();
}

function attachEventListeners() {
    const changeButtons = document.querySelectorAll('.change-btn');
    const deleteButtons = document.querySelectorAll('.delete-btn');

    changeButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const currRecord = e.target.parentElement.parentElement;
            const name = currRecord.querySelector('p:nth-child(1)').textContent;
            const steps = currRecord.querySelector('p:nth-child(2)').textContent;
            const calories = currRecord.querySelector('p:nth-child(3)').textContent;

            populateInputFields(name, steps, calories);
            enableEditBtn();
        });
    });

    deleteButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const currRecord = e.target.parentElement.parentElement;
            const name = currRecord.querySelector('p:nth-child(1)').textContent;
            deleteRecord(name);
        })
    })
}

function editRecord() {
    const data = {
        name: nameInputEl.value,
        steps: stepsInputEl.value,
        calories: caloriesInputEl.value,
        _id: selectedRecordId,
    };

    fetch(endpoints.update(data._id), {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data),
    }).then(() => {
        clearInputs();
        loadRecords();
        selectedRecordId = null;
        enableAddBtn();
    });
}

function deleteRecord(name) {
    getRecordIdByName(name)
        .then((id) => {
            fetch(endpoints.delete(id), {
                method: 'DELETE',
                headers: {'Content-Type': 'application/json'},
            });
        })
        .then(() => {
            clearRecords();
            loadRecords();
            selectedRecordId = null;
            enableAddBtn();
        });
}


//----------- Helpers ----------------------------
async function populateInputFields(name, steps, calories) {
    selectedRecordId = await getRecordIdByName(name);

    nameInputEl.value = name;
    stepsInputEl.value = steps;
    caloriesInputEl.value = calories;
}

function getRecordIdByName(name) {
    return fetch(baseUrl)
        .then(res => res.json())
        .then(res => Object.entries(res).find(rec => rec[1].name === name)[1]._id);
}

function enableEditBtn() {
    editRecordsBtnEl.disabled = false;
    addRecordBtnEl.disabled = true;
}

function enableAddBtn() {
    addRecordBtnEl.disabled = false;
    editRecordsBtnEl.disabled = true;
}


function clearInputs() {
    nameInputEl.value = '';
    stepsInputEl.value = '';
    caloriesInputEl.value = '';
}

function clearRecords() {
    recordsListEl.innerHTML = '';
}

attachEvents();