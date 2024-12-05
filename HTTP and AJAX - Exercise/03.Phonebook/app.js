function attachEvents() {
    const loadBtnEl = takeElementByTag('#btnLoad');
    const createBtnEl = takeElementByTag('#btnCreate');
    const nameInputEl = takeElementByTag('#person');
    const phoneInputEl = takeElementByTag('#phone');
    const phoneBookEl = takeElementByTag('#phonebook');

    const baseUrl = 'http://localhost:3030/jsonstore/phonebook'

    loadBtnEl.addEventListener('click', loadAllContacts);
    createBtnEl.addEventListener('click', createContact);

    phoneBookEl.addEventListener('click', async (e) => {
        if (e.target.classList.contains('btnDelete')) {
            const response = await fetch(`${baseUrl}/${e.target.id}`, {method: 'DELETE'});
            e.target.parentElement.remove();
        }
    })

    async function loadAllContacts() {

        phoneBookEl.innerHTML = '';

        const response = await fetch(baseUrl);
        const data = await response.json();

        Object.values(data).forEach(contact => {
            const newLiEl = createElement('li');
            const textNode = document.createTextNode(`${contact.person}: ${contact.phone}`);

            const newDelBtnEl = createElement('button');
            newDelBtnEl.textContent = 'Delete';
            newDelBtnEl.id = contact._id;
            newDelBtnEl.classList.add('btnDelete');

            newLiEl.appendChild(textNode);
            newLiEl.appendChild(newDelBtnEl);

            phoneBookEl.appendChild(newLiEl);
        });
    }

    async function createContact() {
        const personName = nameInputEl.value;
        const phoneNumber = phoneInputEl.value;

        const contact = {
            person: personName,
            phone: phoneNumber,
        }

        const response = await fetch(baseUrl, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(contact),
        });

        nameInputEl.value = '';
        phoneInputEl.value = '';
    }
}

function takeElementByTag(tag) {
    return document.querySelector(tag);
}

function createElement(tag) {
    return document.createElement(tag);
}

attachEvents();
