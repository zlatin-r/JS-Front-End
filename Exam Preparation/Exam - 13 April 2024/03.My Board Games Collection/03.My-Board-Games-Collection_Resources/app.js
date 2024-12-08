const baseUrl = 'http://localhost:3030/jsonstore/games'

const gamesListEl = document.querySelector('#games-list');

const nameElement = document.getElementById("g-name");
const typeElement = document.getElementById("type");
const playersElement = document.getElementById("players");

const addBtn = document.getElementById("add-game");
const editBtn = document.getElementById("edit-game");
const loadBtnEl = document.querySelector('#load-games');
const clearBtn = document.querySelector(".clear-btn");

function attachEvents() {
    loadBtnEl.addEventListener('click', loadGamesEvHandler);
    addBtn.addEventListener('click', createTaskEventHandler);
}

async function loadGamesEvHandler() {
    clearAllSections();

    try {
        const response = await fetch(baseUrl);
        const data = await response.json();

        Object.values(data).forEach(game => {
            const newGameDivEl = createElement('div');
            newGameDivEl.className = 'board-game';

            const contentEl = createElement('div');
            contentEl.className = 'content';

            const gameNameEl = createElement('p');
            gameNameEl.textContent = game.name;

            const playersCountEl = createElement('p');
            playersCountEl.textContent = game.players;

            const gameTypeEl = createElement('p');
            gameTypeEl.textContent = game.type;

            const buttonsContainerEl = createElement('div');
            buttonsContainerEl.className = 'buttons-container';

            const changeBtnEl = createElement('button');
            changeBtnEl.className = 'change-btn';
            changeBtnEl.textContent = 'Change';

            const deleteBtnEl = createElement('button');
            deleteBtnEl.className = 'delete-btn';
            deleteBtnEl.textContent = 'Delete';

            contentEl.appendChild(gameNameEl);
            contentEl.appendChild(playersCountEl);
            contentEl.appendChild(gameTypeEl);

            buttonsContainerEl.appendChild(changeBtnEl);
            buttonsContainerEl.appendChild(deleteBtnEl);

            newGameDivEl.appendChild(contentEl);
            newGameDivEl.appendChild(buttonsContainerEl);

            gamesListEl.appendChild(newGameDivEl);
        });
        attachEventListeners();
    } catch (error) {
        console.error(error);
    }
}

function createTaskEventHandler(ev) {
    ev.preventDefault();
    if (nameElement.value !== '' && playerslement.value !== '' && typeElement.value !== '') {
        const headers = {
            method: 'POST',
            body: JSON.stringify({
                name: nameElement.value,
                type: typeElement.value,
                players: playerslement.value,
            }),
        };

        fetch(BASE_URL, headers)
            .then(loadBoardEventHandler)
            .catch(console.error);

        clearAllInputs();
    }
}

//-----------------Helpers--------------------------------------------------------------
function attachEventListeners() {
    const changeButtons = document.querySelectorAll('.change-btn');
    const deleteButtons = document.querySelectorAll('.delete-btn');

    changeButtons.forEach(changeButton => {
        changeButton.addEventListener('click', (event) => {
            const taskElement = event.target.closest('.board-game');
            const name = taskElement.querySelector('.content p:nth-of-type(1)').textContent;
            const players = taskElement.querySelector('.content p:nth-of-type(2)').textContent;
            const type = taskElement.querySelector('.content p:nth-of-type(3)').textContent;

            editTask(name, type, players);
            enableEditBtn();
        });
    });

    deleteButtons.forEach((doneButton) => {
        doneButton.addEventListener('click', (event) => {
            const taskElement = event.target.closest('.board-game');
            const name = taskElement.querySelector('p').textContent;
            deleteTask(name);
        });
    });
}

async function editTask(name, type, players) {
    selectedTaskId = await getIdByName(name);

    nameElement.value = name;
    typeElement.value = type;
    playersElement.value = players;
}


function getIdByName(name) {
    return fetch(baseUrl)
        .then(res => res.json())
        .then(res => Object.entries(res).find(e => e[1].name === name)[1]._id);
}

function clearAllSections() {
    gamesListEl.innerHTML = '';
}

function clearAllInputs() {
    nameElement.value = '';
    playersElement.value = '';
    typeElement.value = '';
}

function enableEditBtn() {
    addBtn.disabled = true;
    editBtn.disabled = false;
}

function enableAddBtn() {
    addBtn.disabled = false;
    editBtn.disabled = true;
}

function createElement(tag) {
    return document.createElement(tag);
}

attachEvents();