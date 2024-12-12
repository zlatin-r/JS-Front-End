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