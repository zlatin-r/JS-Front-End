const baseUrl = 'http://localhost:3030/jsonstore/records'
const endpoints = {
    update: (id) => `${baseUrl}/${id}`,
    delete: (id) => `${baseUrl}/${id}`,
}

const loadRecordsBtnEl = document.querySelector('#load-records');

function attachEvents() {
    loadRecordsBtnEl.addEventListener('click', loadRecords);
}

async function loadRecords() {
    const response = await fetch(baseUrl);
    const data = await response.json();

    Object.values(data).forEach((record) => {

    })
}

attachEvents();