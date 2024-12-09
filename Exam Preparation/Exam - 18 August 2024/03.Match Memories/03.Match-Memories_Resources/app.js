const baseUrl = 'http://localhost:3030/jsonstore/matches';

const matchesList = document.querySelector('#list');

const loadBtn = document.querySelector('#load-matches');

function attachEvents() {
    loadBtn.addEventListener('click', loadMatchesHandler);
}

async function loadMatchesHandler() {
    clearMatchesList();

    const response = await fetch(baseUrl);
    const matches = await response.json();

    Object.values(matches).forEach(match => {
        const newMatchLiEl = document.createElement('li');
        newMatchLiEl.className = 'match';

        const newInfoDiv = document.createElement('div');
        newInfoDiv.className = 'info';

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



    })



}

//---------- Helpers ---------------------

function clearMatchesList () {
    matchesList.innerHTML = '';
}

attachEvents();