const baseUrl = 'http://localhost:3030/jsonstore/games'
const gameListEl = document.querySelector('#games-list');
const loadGamesBtnEl = document.querySelector('#load-games');
const addBtnEl = document.querySelector('#add-game');
const editBtnEl = document.querySelector('#edit-game');

const newGameNameEl = document.querySelector('#g-name');
const newGameTypeEl = document.querySelector('#type');
const newGamePlayersEl = document.querySelector('#players');

const allChangeBtnEl = document.querySelectorAll('#change-btn');
const allDeleteBtnEl = document.querySelectorAll('#delete-btn');

let selectedTaskId = null;

const endPoints = {
    update: (id) => `${BASE_URL}/${id}`,
    delete: (id) => `${BASE_URL}/${id}`,
}

clearHTML(gameListEl);

loadGamesBtnEl.addEventListener('click', loadRecords);
addBtnEl.addEventListener('click', addNewGame);
gameListEl.addEventListener('click', handleChangeClick);
editBtnEl.addEventListener('click', editBtnHandler);

async function loadRecords() {

    try {
        const response = await fetch(baseUrl);
        const data = await response.json();

        Object.values(data).forEach(game => {
            const newGameDivEl = createEl('div');
            newGameDivEl.className = 'board-game';

            const contentEl = createEl('div');
            contentEl.className = 'content';

            const gameNameEl = createEl('p');
            gameNameEl.textContent = game.name;

            const playersCountEl = createEl('p');
            playersCountEl.textContent = game.players;

            const gameTypeEl = createEl('p');
            gameTypeEl.textContent = game.type;

            const buttonsContainerEl = createEl('div');
            buttonsContainerEl.className = 'buttons-container';

            const changeBtnEl = createEl('button');
            changeBtnEl.className = 'change-btn';
            changeBtnEl.textContent = 'Change';

            const deleteBtnEl = createEl('button');
            deleteBtnEl.className = 'delete-btn';
            deleteBtnEl.textContent = 'Delete';

            contentEl.appendChild(gameNameEl);
            contentEl.appendChild(playersCountEl);
            contentEl.appendChild(gameTypeEl);

            buttonsContainerEl.appendChild(changeBtnEl);
            buttonsContainerEl.appendChild(deleteBtnEl);

            newGameDivEl.appendChild(contentEl);
            newGameDivEl.appendChild(buttonsContainerEl);

            gameListEl.appendChild(newGameDivEl);
        });
    } catch (error) {
        console.error(error);
    }
}

function addNewGame() {

    const newGame = {
        name: newGameNameEl.value,
        type: newGameTypeEl.value,
        players: newGamePlayersEl.value
    }

    fetch(baseUrl, {
        method: 'POST',
        body: JSON.stringify(newGame)
    })
        .catch(error => {
            console.error(error);
        });

    clearValues(newGameNameEl, newGameTypeEl, newGamePlayersEl);
    loadRecords();
}

function handleChangeClick(event) {
    if (event.target.classList.contains('change-btn')) {
        const boardGameEl = event.target.closest('.board-game');

        const gameName = boardGameEl.querySelector('.content p:nth-of-type(1)').textContent;
        const gamePlayers = boardGameEl.querySelector('.content p:nth-of-type(2)').textContent;
        const gameType = boardGameEl.querySelector('.content p:nth-of-type(3)').textContent;

        newGameNameEl.value = gameName;
        newGameTypeEl.value = gameType;
        newGamePlayersEl.value = gamePlayers;

        editBtnEl.disabled = false;
        addBtnEl.disabled = true;
    }
}

async function editBtnHandler() {
    selectedTaskId = await getIdByName(newGameNameEl.value);
    debugger

    const data = {
        name: newGameNameEl.value,
        type: newGameTypeEl.value,
        players: newGamePlayersEl.value,
        _id: selectedTaskId,
    }
    fetch(endPoints.update(data._id), {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then(() => {
            clearAllInputs()
        })
}

function getIdByName(name) {
    return fetch(baseUrl)
        .then(res => res.json())
        .then(data => Object.entries(data).find(e => e[1].name === name)[1]._id);
}

function createEl(tag) {
    return document.createElement(tag);
}

function clearHTML(...args) {
    args.forEach((el) => {
        el.innerHTML = '';
    });
}

function clearValues(...args) {
    args.forEach((el) => {
        el.value = '';
    })
}
