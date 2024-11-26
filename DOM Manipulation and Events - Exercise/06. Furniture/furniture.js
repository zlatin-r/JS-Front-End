document.addEventListener('DOMContentLoaded', solve);

function solve() {
    const inputDataEl = document.querySelector('#input textarea');
    const matches = inputDataEl.value.match(/{.*?}/g);
    const tableEl = document.querySelector('table');
    const generateEl = document.querySelector('input[value="Generate"]');
    const buyEl = document.querySelector('input[value="Buy"]');

    const tBodyRows = document.querySelectorAll('#shop tbody tr');
    const broughtFurniture = [];
    let totalPrice = 0;
    let totalDecFactor = 0;

    generateEl.addEventListener('click', (e) => {
        e.preventDefault();

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

            tableEl.appendChild(newRow);
        });
    });

    buyEl.addEventListener('click', (e) => {
        e.preventDefault();

        tBodyRows.forEach(row => {
            const checkbox = row.querySelector('input[type="checkbox"]');

            if (checkbox.checked && checkbox) {
                broughtFurniture.push(row.querySelector('td:nth-child(2) p').textContent);
                totalPrice += parseFloat(row.querySelector('td:nth-child(3) p').textContent);
                totalDecFactor += parseFloat(row.querySelector('td:nth-child(4) p').textContent);
            }
        });

        console.log(`Bought furniture: ${broughtFurniture.join(', ')}`);
        console.log(`Total price: ${totalPrice}`);
        console.log();
    });

}
