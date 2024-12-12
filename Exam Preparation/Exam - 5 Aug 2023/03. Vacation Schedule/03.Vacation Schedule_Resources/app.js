function loadRecords(baseUrl, onSuccess) {
    fetch(baseUrl)
        .then(res => res.json())
        .then(onSuccess)
        .catch(error => console.error(error));
}

function createRecord(baseUrl, record, onSuccess) {
    fetch(baseUrl, {
        method: 'POST',
        body: JSON.stringify(record),
    })
        .then(res => res.json())
        .then(onSuccess)
        .catch(error => console.error(error));
}

function updateRecord(baseUrl, record, onSuccess) {
    fetch(baseUrl + record._id, {
        method: 'PUT',
        body: JSON.stringify(record),
    })
        .then(res => res.json())
        .then(onSuccess)
        .catch(error => console.error(error));
}

function deleteRecord(baseUrl, record, onSuccess) {
    fetch(baseUrl + record._id, {
        method: 'DELETE',
    })
        .then(res => res.json())
        .then(onSuccess)
        .catch(error => console.error(error));
}

function createElement(tag, properties, container) {
    const element = document.createElement(tag);

    Object.keys(properties).forEach(key => {
        if (typeof properties[key] === "object") {
            // if (!element[key]) element[key] = {}; // same like: element[key] ??= {};
            Object.assign(element[key], properties[key]);
        } else {
            element[key] = properties[key];
        }
    });

    if (container) {
        container.appendChild(element);
    }

    return element;
}

function init() {
    const baseUrl = 'http://localhost:3030/jsonstore/tasks/'

    const fields = [...document.querySelectorAll('#form form input')];
    const listEl = document.querySelector('#list');

    const loadButtonEl = document.querySelector('#load-vacations');
    const addBtnEl = document.querySelector('#add-vacation');
    const editBtnEl = document.querySelector('#edit-vacation');
    const changeBtnEl = document.querySelector('.change-btn');
    const doneBtnEl = document.querySelector('.done-btn');

    addBtnEl.addEventListener('click', createHandler);
    editBtnEl.addEventListener('click', updateHandler);

    function loadEntries() {
        listEl.innerHTML = '';

        loadRecords(baseUrl, (result) => {
            Object.values(result).forEach(createEntry)
        });
    }

    function createEntry({name, days, date, _id}) {
        const entryEl = createElement('li', {
            className: 'container',
            dataset: {name, days, date, _id}
        }, listEl);
        createElement('h2', {textContent: name}, entryEl);
        createElement('h3', {textContent: days}, entryEl);
        createElement('h3', {textContent: date}, entryEl);
        createElement('button', {
            className: 'change-btn',
            textContent: 'Change',
            onclick: changeHandler
        }, entryEl);
        createElement('button', {
            className: 'done-btn',
            textContent: 'Done',
            onclick: doneHandler
        }, entryEl);
    }

    function doneEntry({name, days, date, _id}) {
        listEl.querySelector(`li[data-_id='${_id}']`).remove()}

    function createHandler(e) {
        e.preventDefault();

        const [name, days, date] = fields.map(field => field.value);

        if (!name || !days || !date) return;

        const record = {name, days, date};

        createRecord(baseUrl, record, (result) => {
            createEntry(result);
        });

        fields.forEach(field => field.value = '');

    }

    function changeHandler(e) {
        const entryEl = e.target.closest('li');
        const values = Object.values(entryEl.dataset);

        entryEl.classList.add('active');

        fields.forEach((field, index) => field.value = values[index]);

        addBtnEl.disabled = true;
        editBtnEl.disabled = false;
    }

    function updateHandler(e) {
        e.preventDefault();

        const [name, days, date] = fields.map(field => field.value);

        if (!name || !days || !date) return;

        const entryEl = listEl.querySelector('li.active');

        const record = {name, days, date, _id: entryEl.dataset._id};

        updateRecord(baseUrl, record, (result) => {
            loadEntries();
            fields.forEach(field => field.value = '');
            addBtnEl.disabled = false;
            editBtnEl.disabled = true;
        });
    }

    function doneHandler(e) {
        const entryEl = e.target.closest('li');

        const record = Object.assign({}, entryEl.dataset);

        deleteRecord(baseUrl, record, (result) => {
            doneEntry(result);
        });
    }
}

init();