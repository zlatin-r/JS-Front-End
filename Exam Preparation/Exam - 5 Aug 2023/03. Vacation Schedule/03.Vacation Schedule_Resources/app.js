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

    function deleteEntry({name, days, date, _id}) {
        listEl.querySelector(`li[data-_id='${_id}']`).remove()}

    function changeHandler(e) {
        const entryEl = e.target.closest('li');
        const values = Object.values(entryEl.dataset);

        fields.forEach((field, index) => field.value = values[index]);
    }

    function doneHandler(e) {
        const entryEl = e.target.closest('li');
    }

    loadEntries();
}

init();