const baseUrl = 'http://localhost:3030/jsonstore/matches';

const matchesList = document.querySelector('#list');

const loadBtn = document.querySelector('#load-matches');
const addBtn = document.querySelector('#add-match');
const editBtn = document.querySelector('#edit-match');

const hostTeamNameEl = document.querySelector('#host');
const scoreEl = document.querySelector('#score');
const guestTeamEl = document.querySelector('#guest');

function attachEvents() {
    loadBtn.addEventListener('click', loadMatchesHandler);
    addBtn.addEventListener('click', addMatchHandler);

}

async function loadMatchesHandler() {
    clearMatchesList();

    const response = await fetch(baseUrl);
    const matches = await response.json();

    Object.values(matches).forEach(match => {
        const newMatchLiEl = document.createElement('li');
        newMatchLiEl.className = 'match';

        const infoDiv = document.createElement('div');
        infoDiv.className = 'info';

        const hostParagraph = document.createElement('p');
        hostParagraph.textContent = match.host;

        const scoreParagraph = document.createElement('p');
        scoreParagraph.textContent = match.score;

        const guestParagraph = document.createElement('p');
        guestParagraph.textContent = match.guest;

        const buttonWrapper = document.createElement('div');
        buttonWrapper.className = 'btn-wrapper';

        const changeButton = document.createElement('button');
        changeButton.className = 'change-btn';
        changeButton.textContent = 'Change';

        const deleteButton = document.createElement('button');
        deleteButton.className = 'delete-btn';
        deleteButton.textContent = 'Delete';

        infoDiv.appendChild(hostParagraph);
        infoDiv.appendChild(scoreParagraph);
        infoDiv.appendChild(guestParagraph);

        buttonWrapper.appendChild(changeButton);
        buttonWrapper.appendChild(deleteButton);

        newMatchLiEl.appendChild(infoDiv);
        newMatchLiEl.appendChild(buttonWrapper);

        matchesList.appendChild(newMatchLiEl);
    });
    attachEventListeners();
}

function addMatchHandler() {
    if (hostTeamNameEl.value !== '' && scoreEl.value !== '' && guestTeamEl.value !== '') {

        const header = {
            method: 'POST',
            body: JSON.stringify({
                host: hostTeamNameEl.value,
                score: scoreEl.value,
                guest: guestTeamEl.value,
            }),
        }
        fetch(baseUrl, header)
            .then(loadMatchesHandler)
            .catch(error => {
                console.log(error)
            });

        clearInputFields();
    }
}

function attachEventListeners() {
    const changeButtons = document.querySelectorAll('.change-btn');
    const deleteButtons = document.querySelectorAll('.delete-btn');

    changeButtons.forEach(changeButton => {
        changeButton.addEventListener('click', (e) => {
            const currentMatch = e.target.closest('.match');
            const currHostTeam = currentMatch.querySelector('p');
            const currScore = currentMatch.querySelector('p:nth-child(2)');
            const currGuestTeam = currentMatch.querySelector('p:nth-child(3)');
            changeMatchData(currHostTeam.value, currScore.value, currGuestTeam.value);
            activateEditBtn();
        })
    })
}

//---------- Helpers ---------------------

function activateEditBtn() {
    editBtn.disabled = false;
    addBtn.disabled = true;
}

function changeMatchData(host, score, guest) {
    hostTeamNameEl.value = host;
    scoreEl.value = score;
    guestTeamEl.value = guest;
}

function clearMatchesList() {
    matchesList.innerHTML = '';
}

function clearInputFields() {
    hostTeamNameEl.innerHTML = '';
    scoreEl.innerHTML = '';
    guestTeamEl.innerHTML = '';
}

attachEvents();