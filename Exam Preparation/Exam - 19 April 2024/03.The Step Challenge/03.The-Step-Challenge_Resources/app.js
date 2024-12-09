const baseUrl = 'http://localhost:3030/jsonstore/records'
const endpoints = {
    update: (id) => `${baseUrl}/${id}`,
    delete: (id) => `${baseUrl}/${id}`,
}

const loadRecordsBtnEl = document.querySelector('#load-records');

const recordsListEl = document.querySelector('#list');

function attachEvents() {
    loadRecordsBtnEl.addEventListener('click', loadRecords);
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
    })
}

//----------- Helpers ----------------------------

function clearInputs() {

}

function clearRecords() {
    recordsListEl.innerHTML = '';
}

attachEvents();