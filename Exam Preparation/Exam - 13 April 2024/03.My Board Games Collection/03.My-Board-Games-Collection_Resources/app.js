const baseUrl = 'http://localhost:3030/jsonstore/games'
const gameListEl = document.querySelector('#games-list');
const addBtnEl = document.querySelector('#add-game');
const editBtnEl = document.querySelector('#edit-game');
const allChangeBtnEl = document.querySelectorAll('#change-btn');
const allDeleteBtnEl = document.querySelectorAll('#delete-btn');

loadRecords();

addBtnEl.addEventListener('click', addNewGame);

async function loadRecords() {
    clearHTML(gameListEl);

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
    })
}

function addNewGame() {
    const newGameNameEl = document.querySelector('#g-name');
    const newGameTypeEl = document.querySelector('#type');
    const newGamePlayersEl = document.querySelector('#players');

    const newGame = {
        name: newGameNameEl.value,
        type: newGameTypeEl.value,
        players: newGamePlayersEl.value
    }

    fetch(baseUrl, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(newGame)
    });

    clearValues(newGameNameEl, newGameTypeEl, newGamePlayersEl);
    loadRecords();
}

allDeleteBtnEl.forEach((btnEl) => {
    btnEl.addEventListener('click', () => {
        const parentEl = btnEl.target.parentElement;
    })

})




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
