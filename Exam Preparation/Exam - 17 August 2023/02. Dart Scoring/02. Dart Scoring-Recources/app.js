window.addEventListener("load", solve);

function solve() {
    const playerNameInputEl = document.getElementById("player");
    const scoreInputEl = document.getElementById("score");
    const roundInputEl = document.getElementById("round");

    const addButtonEl = document.getElementById("add-btn");
    const clearButtonEl = document.querySelector(".clear");

    const sureListEl = document.getElementById("sure-list");
    const scoreBoardListEl = document.getElementById("scoreboard-list");

    clearButtonEl.addEventListener("click", () => {location.reload()});

    addButtonEl.addEventListener("click", () => {
        if (playerNameInputEl.value === "" || scoreInputEl.value === "" || roundInputEl.value === "") {
            return;
        }

        const newDartItemEl = document.createElement("li");
        newDartItemEl.className = 'dart-item';

        const articleEl = document.createElement("article");

        const nameParagraphEl = document.createElement("p");
        const playerName = playerNameInputEl.value;
        nameParagraphEl.textContent = playerName;

        const scoreParagraphEl = document.createElement("p");
        const score = scoreInputEl.value;
        scoreParagraphEl.textContent = `Score: ${score}`;

        const roundParagraphEl = document.createElement("p");
        const round = roundInputEl.value;
        roundParagraphEl.textContent = `Round: ${round}`;

        const editButtonEl = document.createElement("button");
        editButtonEl.className = 'btn edit';
        editButtonEl.textContent = 'edit';
        editButtonEl.addEventListener("click", editData)

        const okButtonEl = document.createElement("button");
        okButtonEl.className = 'btn ok';
        okButtonEl.textContent = 'ok';
        okButtonEl.addEventListener("click", saveData);

        articleEl.appendChild(nameParagraphEl);
        articleEl.appendChild(scoreParagraphEl);
        articleEl.appendChild(roundParagraphEl);

        newDartItemEl.appendChild(articleEl);
        newDartItemEl.appendChild(editButtonEl);
        newDartItemEl.appendChild(okButtonEl);

        sureListEl.appendChild(newDartItemEl);

        playerNameInputEl.value = "";
        scoreInputEl.value = "";
        roundInputEl.value = "";

        addButtonEl.disabled = true;

        function editData() {
            playerNameInputEl.value = playerName;
            scoreInputEl.value = score;
            roundInputEl.value = round;

            sureListEl.removeChild(newDartItemEl);
            addButtonEl.disabled = false;
        }

        function saveData() {
            sureListEl.removeChild(newDartItemEl);
            newDartItemEl.removeChild(editButtonEl);
            newDartItemEl.removeChild(okButtonEl);

            scoreBoardListEl.appendChild(newDartItemEl);

            addButtonEl.disabled = false;
        }
    });
}
  