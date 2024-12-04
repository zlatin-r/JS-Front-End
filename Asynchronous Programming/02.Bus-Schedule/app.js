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
    }

    async function arrive() {
        // TODO:
    }

    return {
        depart,
        arrive
    };
}

let result = solve();