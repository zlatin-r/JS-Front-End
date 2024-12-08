const baseUrl = 'http://localhost:3030/jsonstore/games'
const endpoints = {
    update: (id) => `${baseUrl}/${id}`,
    delete: (id) => `${baseUrl}/${id}`,
};

const gamesListEl = document.getElementById('games-list');

const nameElement = document.getElementById("g-name");
const typeElement = document.getElementById("type");
const playersElement = document.getElementById("players");

const addBtn = document.getElementById("add-game");
const editBtn = document.getElementById("edit-game");
const loadBtnEl = document.getElementById('load-games');

let selectedTaskId = null;

function attachEvents() {
    loadBtnEl.addEventListener('click', loadBoardEventHandler);
    addBtn.addEventListener('click', createTaskEventHandler);
    editBtn.addEventListener('click', editTaskEventHandler);
}

async function loadBoardEventHandler() {
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
    if (nameElement.value !== '' && playersElement.value !== '' && typeElement.value !== '') {
        const headers = {
            method: 'POST',
            body: JSON.stringify({
                name: nameElement.value,
                type: typeElement.value,
                players: playersElement.value,
            }),
        };

        fetch(baseUrl, headers)
            .then(loadBoardEventHandler)
            .catch(console.error);

        clearAllInputs();
    }
}

function editTaskEventHandler(ev) {
    ev.preventDefault();
    const data = {
        name: nameElement.value,
        type: typeElement.value,
        players: playersElement.value,
        _id: selectedTaskId,
    };

    fetch(endpoints.update(data._id), {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then(() => {
            clearAllInputs();
            loadBoardEventHandler();
            selectedTaskId = null;
            enableAddBtn();
        })
        .catch(console.error);
}

function deleteTask(taskLoacation) {
    getIdByName(taskLoacation)
        .then((id) =>
            fetch(endpoints.delete(id), {
                method: 'DELETE',
                headers: {'Content-Type': 'application/json'},
            })
        )
        .then(() => {
            clearAllSections();
            loadBoardEventHandler();
            selectedTaskId = null;
            enableAddBtn();
        })
        .catch(console.error);
}

//-----------------Helpers--------------------------------------------------------------
function attachEventListeners() {
    const changeButtons = document.querySelectorAll('.change-btn');
    const doneButtons = document.querySelectorAll('.delete-btn');

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

    doneButtons.forEach((doneButton) => {
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