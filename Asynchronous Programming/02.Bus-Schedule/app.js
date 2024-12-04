function solve() {

    const infoBox = document.querySelector(".info");
    const departButton = document.getElementById("depart");
    const arriveButton = document.getElementById("arrive");

    let currentStop = {
        name: "",
        next: "depot", // Началната спирка
    };

    function depart() {
        const url = `http://localhost:3030/jsonstore/bus/schedule/${currentStop.next}`;

        let responsePromise = fetch(url);

        responsePromise
            .then(response => response.json())
            .then(data => {
                currentStop.name = data.name;
                currentStop.next = data.next;

                infoBox.textContent = `Next stop ${currentStop.name}`;

                departButton.disabled = true;
                arriveButton.disabled = false;
            })
            .catch(() => handleError());
    }

    async function arrive() {
        try {
            infoBox.textContent = `Arriving at ${currentStop.name}`;
            departButton.disabled = false;
            arriveButton.disabled = true;
        } catch (error) {
            handleError();
        }
    }

    function handleError() {
        infoBox.textContent = "Error";
        departButton.disabled = true;
        arriveButton.disabled = true;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();