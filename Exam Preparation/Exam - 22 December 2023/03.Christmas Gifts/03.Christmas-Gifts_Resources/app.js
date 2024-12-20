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

let giftId = null;

function attachEvents() {
    loadPresentsBtnEl.addEventListener('click', loadPresents);
    addPresentBtnEl.addEventListener('click', addPresent);
    editPresentBtnEl.addEventListener('click', editPresent);
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
    attachEventListeners();
}

async function addPresent() {
    if (presentInputEl.value !== '' && forInputEl.value !== '' && priceInputEl.value !== '') {

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

        clearInputFields();

    }
}

function attachEventListeners() {
    const changeButtons = document.querySelectorAll('.change-btn');
    const deleteButtons = document.querySelectorAll('.delete-btn');

    changeButtons.forEach((button) => {
        button.addEventListener('click', (e) => {

            const currGiftSock = e.target.closest('.gift-sock');
            const currContent = currGiftSock.querySelector('.content');
            const gift = currContent.querySelector('p:nth-child(1)').textContent;
            const giftFor = currContent.querySelector('p:nth-child(2)').textContent;
            const price = currContent.querySelector('p:nth-child(3)').textContent;

            populateInputField(gift, giftFor, price);
            enableEditBtn();
        });
    });
    deleteButtons.forEach((button) => {
        button.addEventListener('click', (e) => {
            const currGiftSock = e.target.closest('.gift-sock');
            const currContent = currGiftSock.querySelector('.content');
            const gift = currContent.querySelector('p:nth-child(1)').textContent;
            deletePresent(gift);
        })
    })
}

function editPresent() {

    const data = {
        gift: presentInputEl.value,
        for: forInputEl.value,
        price: priceInputEl.value,
        _id: giftId,
    }
    fetch(endpoints.update(data._id), {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data),
    }).then(() => {
        clearInputFields();
        loadPresents();
        enableAddBtn();
        giftId = null;
    });
}

function deletePresent(gift) {
    getIdByGift(gift)
        .then((id) =>
            fetch(endpoints.delete(id), {
                method: 'DELETE',
                headers: {'Content-Type': 'application/json'},
            }))
        .then(() => {
            loadPresents();
            })
}

//--------------------- helpers ---------------------------------------
async function populateInputField(gift, giftFor, price) {
    giftId = await getIdByGift(gift);

    presentInputEl.value = gift;
    forInputEl.value = giftFor;
    priceInputEl.value = price;
}

function getIdByGift(gift) {
    return fetch(baseUrl)
        .then(res => res.json())
        .then(data => Object.entries(data).find(g => g[1].gift === gift)[1]._id)
}

function enableEditBtn() {
    editPresentBtnEl.disabled = false;
    addPresentBtnEl.disabled = true;
}

function enableAddBtn() {
    addPresentBtnEl.disabled = false;
    editPresentBtnEl.disabled = true;
}

function clearPresentsList() {
    giftListEl.innerHTML = '';
}

function clearInputFields() {
    presentInputEl.value = '';
    forInputEl.value = '';
    priceInputEl.value = '';
}

attachEvents();