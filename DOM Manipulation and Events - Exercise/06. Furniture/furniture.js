document.addEventListener('DOMContentLoaded', solve);

function solve() {
    const inputDataEl = document.querySelector('#input textarea');
    const matches = inputDataEl.value.match(/{.*?}/g);
    const tableBodyEl = document.querySelector('table tbody');
    const generateEl = document.querySelector('input[value="Generate"]');
    const buyEl = document.querySelector('input[value="Buy"]');

    const broughtFurniture = [];
    let totalPrice = 0;
    let totalDecFactor = 0;

    const resultTextArea = document.querySelector('#shop textarea')

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

            tableBodyEl.appendChild(newRow);
        });
    });

    buyEl.addEventListener('click', (e) => {
        e.preventDefault();
        const allRows = document.querySelectorAll('tbody tr');

        allRows.forEach(row => {
            const checkbox = row.querySelector('input[type="checkbox"]');

            if (checkbox.checked && checkbox) {
                broughtFurniture.push(row.querySelector('td:nth-child(2) p').textContent);
                totalPrice += parseFloat(row.querySelector('td:nth-child(3) p').textContent);
                totalDecFactor += parseFloat(row.querySelector('td:nth-child(4) p').textContent);
            }
        });

        const avgDecFactor = (totalDecFactor / broughtFurniture.length).toFixed(2);

        resultTextArea.textContent += `Bought furniture: ${broughtFurniture.join(', ')}\n`;
        resultTextArea.textContent += `Total price: ${totalPrice}\n`;
        resultTextArea.textContent += `Average decoration factor: ${avgDecFactor}`;
    });
}

// function solve() {
//     const generateButton = document.querySelector('#input input[value="Generate"]');
//     const buyButton = document.querySelector('#shop input[value="Buy"]');
//     const tableBody = document.querySelector('#shop tbody');
//     const resultTextarea = document.querySelector('#shop textarea');
//
//     // Generate furniture rows
//     generateButton.addEventListener('click', (event) => {
//         event.preventDefault();
//
//         // Parse the furniture data from the input textarea
//         const furnitureData = JSON.parse(document.querySelector('#input textarea').value);
//
//         // Add each furniture item to the table
//         furnitureData.forEach(item => {
//             const row = document.createElement('tr');
//
//             row.innerHTML = `
//                 <td><img src="${item.img}" alt="${item.name}"></td>
//                 <td><p>${item.name}</p></td>
//                 <td><p>${item.price}</p></td>
//                 <td><p>${item.decFactor}</p></td>
//                 <td><input type="checkbox"></td>
//             `;
//
//             tableBody.appendChild(row);
//         });
//     });
//
//     // Buy selected furniture
//     buyButton.addEventListener('click', (event) => {
//         event.preventDefault();
//
//         const selectedFurniture = [];
//         let totalPrice = 0;
//         let totalDecorationFactor = 0;
//         let selectedCount = 0;
//
//         // Find all checked rows
//         const rows = tableBody.querySelectorAll('tr');
//         rows.forEach(row => {
//             const checkbox = row.querySelector('input[type="checkbox"]');
//             if (checkbox && checkbox.checked) {
//                 const name = row.querySelector('td:nth-child(2) p').textContent;
//                 const price = parseFloat(row.querySelector('td:nth-child(3) p').textContent);
//                 const decorationFactor = parseFloat(row.querySelector('td:nth-child(4) p').textContent);
//
//                 selectedFurniture.push(name);
//                 totalPrice += price;
//                 totalDecorationFactor += decorationFactor;
//                 selectedCount++;
//             }
//         });
//
//         // Calculate averages and display results
//         const averageDecFactor = selectedCount > 0 ? (totalDecorationFactor / selectedCount) : 0;
//         resultTextarea.value = `Bought furniture: ${selectedFurniture.join(', ')}\n`;
//         resultTextarea.value += `Total price: ${totalPrice.toFixed(2)}\n`;
//         resultTextarea.value += `Average decoration factor: ${averageDecFactor.toFixed(2)}`;
//     });
// }

