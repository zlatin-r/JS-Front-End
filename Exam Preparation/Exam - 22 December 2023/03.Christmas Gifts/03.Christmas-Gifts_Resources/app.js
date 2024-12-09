const baseUrl = 'http://localhost:3030/jsonstore/gifts'
const endpoints = {
    update: (id) => `${baseUrl}/${id}`,
    delete: (id) => `${baseUrl}/${id}`,
}

const giftListEl = document.querySelector('#gift-list');

const loadPresentsBtnEl = document.querySelector('#load-presents');

function attachEvents() {
    loadPresentsBtnEl.addEventListener('click', loadPresents);
}

async function loadPresents() {
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




    })
}


attachEvents();