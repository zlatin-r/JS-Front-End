function attachEvents() {
    const loadBtnEl = takeElementByTag('#btnLoad');
    const createBtnEl = takeElementByTag('#btnCreate');
    const nameInputEl = takeElementByTag('#person');
    const phoneInputEl = takeElementByTag('#phone');

    loadBtnEl.addEventListener('click', loadAllContacts);
    createBtnEl.addEventListener('click', createContact);

    async function loadAllContacts() {

    }

    async function createContact() {

    }
}

function takeElementByTag(tag) {
    return document.querySelector(tag);
}

attachEvents();