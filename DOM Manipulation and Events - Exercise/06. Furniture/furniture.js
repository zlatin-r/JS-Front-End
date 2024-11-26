document.addEventListener('DOMContentLoaded', solve);

function solve() {
    const inputDataEl = document.querySelector('#input textarea');
    const matches = inputDataEl.value.match(/{.*?}/g);
    const tableEl = document.querySelector('table');

    matches.forEach(match => {
        const obj = JSON.parse(match);

        const newRow = document.createElement('tr');

        const newTdImg = document.createElement('td');
        const newImg = document.createElement('img');

        newImg.setAttribute('src', obj.img);
        newTdImg.appendChild(newImg);
        newRow.appendChild(newTdImg);

        const newTdName = document.createElement('td');
        const newParagraphForName = document.createElement('p');
        newParagraphForName.textContent = obj.name;

        newTdName.appendChild(newParagraphForName);
        newRow.appendChild(newTdName);

        const newTdPrice = document.createElement('td');
        const newParagraphForPrice = document.createElement('p');
        newParagraphForPrice.textContent = obj.price;

        newTdPrice.appendChild(newParagraphForPrice);
        newRow.appendChild(newTdPrice);

        const newTdDecFactor = document.createElement('td');
        const newParagraphForDecFactor = document.createElement('p');
        newParagraphForDecFactor.textContent = obj.decFactor;

        newTdDecFactor.appendChild(newParagraphForDecFactor);
        newRow.appendChild(newTdDecFactor);

        const newTdCheckbox = document.createElement('td');
        const newInput = document.createElement('input');
        newInput.type = 'checkbox';

        newTdCheckbox.appendChild(newInput);
        newRow.appendChild(newTdCheckbox);

    });
}
