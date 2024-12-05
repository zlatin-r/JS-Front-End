function attachEvents() {
    const loadBtnEl = takeElementByTag('#btnLoad');
    const createBtnEl = takeElementByTag('#btnCreate');
    const nameInputEl = takeElementByTag('#person');
    const phoneInputEl = takeElementByTag('#phone');
    const phoneBookEl = takeElementByTag('#phonebook');

    const baseUrl = 'http://localhost:3030/jsonstore/phonebook'

    loadBtnEl.addEventListener('click', loadAllContacts);
    createBtnEl.addEventListener('click', createContact);

    async function loadAllContacts() {
        const response = await fetch(baseUrl);
        const data = await response.json();

        Object.values(data).forEach(contact => {
            const newLiEl = createElement('li');
            const textNode = document.createTextNode(`${contact.person}: ${contact.phone}`);

            const newDelBtnEl = createElement('button');
            newDelBtnEl.textContent = 'Delete';

            newLiEl.appendChild(textNode);
            newLiEl.appendChild(newDelBtnEl);

            phoneBookEl.appendChild(newLiEl);
        });
    }

    async function createContact() {

    }
}

function takeElementByTag(tag) {
    return document.querySelector(tag);
}

function createElement(tag) {
    return document.createElement(tag);
}

attachEvents();