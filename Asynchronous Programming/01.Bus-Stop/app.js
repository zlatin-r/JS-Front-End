function getInfo() {
    const stopId = document.getElementById('stopId').value;
    const resultDivEl = document.querySelector('#stopName');
    const resultUlEl = document.querySelector('#buses');

    const url = `http://localhost:3030/jsonstore/bus/businfo/${stopId}`;

    const responsePromise = fetch(url);

    responsePromise
        .then(response => response.json())
        .then(data => {
            resultDivEl.textContent = data.name;
            Object.entries(data.buses).forEach(([busId, time]) => {
                const newLiEl = document.createElement('li');
                newLiEl.textContent = `Bus ${busId} arrives in ${time} minutes`;
                resultUlEl.appendChild(newLiEl);
            })
        }).catch(err => {
            resultDivEl.textContent = 'Error';
            resultUlEl.innerHTML = '';
        });
}