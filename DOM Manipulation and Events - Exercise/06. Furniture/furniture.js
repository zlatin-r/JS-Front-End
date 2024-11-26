document.addEventListener('DOMContentLoaded', solve);

function solve() {
    const inputDataEl = document.querySelector('#input textarea');
    const matches = inputDataEl.value.match(/{.*?}/g);
    const tableEl = document.querySelector('table');

    matches.forEach(match => {
        const strToJson = JSON.parse(match);

        console.log(strToJson.name);
        console.log(strToJson.img);
        console.log(strToJson.price);
        console.log(strToJson.decFactor);

        const newRow = document.createElement('tr');
        const newTd = document.createElement('td');
        const newImg = document.createElement('img');
        // newImg.setAttribute('src', match.img);
        const newP = document.createElement('p');
        const newInput = document.createElement('input');
        newInput.type = 'checkbox';


        newTd.appendChild(newP);
        newTd.appendChild(newP);
        newTd.appendChild(newP);
        newTd.appendChild(newImg);
        newRow.appendChild(newTd);
        tableEl.appendChild(newRow);

    });
}
