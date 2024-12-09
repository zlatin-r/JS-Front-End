const baseUrl = 'http://localhost:3030/jsonstore/gifts'
const endpoints = {
    update: (id) => `${baseUrl}/${id}`,
    delete: (id) => `${baseUrl}/${id}`,
}

const giftListEl = document.querySelector('#gift-list');

const loadPresentsBtnEl = document.querySelector('#load-presents');
const addPresentBtnEl = document.querySelector('#add-present');
const editPresentBtnEl = document.querySelector('#edit-present');

const presentInputEl = document.querySelector('#gift');
const forInputEl = document.querySelector('#for');
const priceInputEl = document.querySelector('#price');

function attachEvents() {
    loadPresentsBtnEl.addEventListener('click', loadPresents);
    addPresentBtnEl.addEventListener('click', addPresent);
}

async function loadPresents() {
    clearPresentsList();

    const response = await fetch(baseUrl);
    const data = await response.json();

    Object.values(data).forEach((item) => {
        const newGiftSock = document.createElement('div');
        newGiftSock.className = 'gift-sock';

        const contentDiv = document.createElement('div');
        contentDiv.className = 'content';

        const giftParagraph = document.createElement('p');
        giftParagraph.textContent = item.gift;

        const forParagraph = document.createElement('p');
        forParagraph.textContent = item.for;

        const priceParagraph = document.createElement('p');
        priceParagraph.textContent = item.price;

        const buttonsContainer = document.createElement('div');
        buttonsContainer.className = 'buttons-container';

        const changeButton = document.createElement('button');
        changeButton.className = 'change-btn';
        changeButton.textContent = 'Change';

        const deleteButton = document.createElement('button');
        deleteButton.className = 'delete-btn';
        deleteButton.textContent = 'Delete';

        buttonsContainer.appendChild(changeButton);
        buttonsContainer.appendChild(deleteButton);

        contentDiv.appendChild(giftParagraph);
        contentDiv.appendChild(forParagraph);
        contentDiv.appendChild(priceParagraph);

        newGiftSock.appendChild(contentDiv);
        newGiftSock.appendChild(buttonsContainer);

        giftListEl.appendChild(newGiftSock);
    });
}

async function addPresent() {
    const headers = {
        method: 'POST',
        body: JSON.stringify({
            gift: presentInputEl.value,
            for: forInputEl.value,
            price: priceInputEl.value,
        }),
    }
    fetch(baseUrl, headers)
        .then(loadPresents);
}

//--------------------- helpers ---------------------------------------

function clearPresentsList() {
    giftListEl.innerHTML = '';
}

attachEvents();