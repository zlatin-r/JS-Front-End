document.addEventListener('DOMContentLoaded', solve);

// Lector's Solution:

function solve() {
    const inputFormEl = document.querySelector('#input');

    inputFormEl.addEventListener('submit', (e) => {
        e.preventDefault();

        const inputEl = e.target.querySelector('textarea');
        const data = JSON.parse(inputEl.value);
        const productLisEl = document.querySelector('table tbody');

        data.forEach((item) => {
            const product = document.createElement('tr');

            const productImgCell = document.createElement('td');
            const productImgEl = document.createElement('img');
            productImgEl.setAttribute('src', item.img)
            productImgCell.append(productImgEl);

            const productNameCell = document.createElement('td');
            productNameCell.textContent = item.name;

            const productPriceCell = document.createElement('td');
            productPriceCell.textContent = item.price;

            const productDecFactorCell = document.createElement('td');
            productDecFactorCell.textContent = item.decFactor;

            const productCheckCell = document.createElement('td');
            const productCheckInput = document.createElement('input');
            productCheckInput.setAttribute('type', 'checkbox');
            productCheckCell.append(productCheckInput);

            product.append(
                productImgCell,
                productNameCell,
                productPriceCell,
                productDecFactorCell,
                productCheckCell
            );

            productLisEl.append(product);
        });
    });

    const shopFormEl = document.querySelector('#shop');

    shopFormEl.addEventListener('submit', (e) => {
        e.preventDefault();

        const outputEl = e.target.querySelector('textarea');
        const data = [...document.querySelectorAll('table tbody tr:has(input:checked)')].map((el) => ({
            name: el.children[1].textContent.trim(),
            price: Number(el.children[2].textContent),
            decFactor: Number(el.children[3].textContent)
        }));

        let output = `Bought furniture: ${data.map(el => el.name).join(', ')}\n`;
        output += `Total price: ${data.reduce((total, el) => total + el.price, 0)}\n`
        output += `Average decoration factor: ${data.reduce((factor, el) => factor + el.decFactor, 0) / data.length}\n`

        outputEl.value = output;
    });
}


//------------------------------------------------------------------------------------------------------------------

// function solve() {
//     const inputData = JSON.parse(document.querySelector('#input textarea').value);
//     const generateBtnEl = document.querySelector('input[value="Generate"]');
//     const buyBtnEl = document.querySelector('input[value="Buy"]');
//     const tBody = document.querySelector('table tbody');
//     const resultTextarea = document.querySelector('#shop textarea');
//
//     generateBtnEl.addEventListener('click', (e) => {
//         e.preventDefault();
//
//         inputData.forEach((obj) => {
//             const row = document.createElement('tr');
//
//             row.innerHTML = `
//                 <td><img src="${obj.img}" alt="${obj.name}"></td>
//                 <td><p>${obj.name}</p></td>
//                 <td><p>${obj.price}</p></td>
//                 <td><p>${obj.decFactor}</p></td>
//                 <td><input type="checkbox"></td>
//             `;
//
//             tBody.appendChild(row);
//         });
//     });
//
//     buyBtnEl.addEventListener('click', (e) => {
//         e.preventDefault();
//
//         const allRows = document.querySelectorAll('tr');
//         const selectedFurniture = [];
//         let totalPrice = 0;
//         let totalDecorationFactor = 0;
//         let selectedCount = 0;
//
//         allRows.forEach((row) => {
//             const checkbox = row.querySelector('input[type="checkbox"]');
//
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
//         const averageDecFactor = selectedCount > 0 ? (totalDecorationFactor / selectedCount) : 0;
//         resultTextarea.value = `Bought furniture: ${selectedFurniture.join(', ')}\n`;
//         resultTextarea.value += `Total price: ${totalPrice.toFixed(2)}\n`;
//         resultTextarea.value += `Average decoration factor: ${averageDecFactor.toFixed(2)}`;
//     });
// }


//---------------------------------------------------------------------------------------------------

// function solve() {
//     const inputDataEl = document.querySelector('#input textarea');
//     const matches = inputDataEl.value.match(/{.*?}/g);
//     const tableBodyEl = document.querySelector('table tbody');
//     const generateEl = document.querySelector('input[value="Generate"]');
//     const buyEl = document.querySelector('input[value="Buy"]');
//
//     const broughtFurniture = [];
//     let totalPrice = 0;
//     let totalDecFactor = 0;
//
//     const resultTextArea = document.querySelector('#shop textarea')
//
//     generateEl.addEventListener('click', (e) => {
//         e.preventDefault();
//
//         matches.forEach(match => {
//             const obj = JSON.parse(match);
//
//             const newRow = document.createElement('tr');
//
//             const newTdImg = document.createElement('td');
//             const newImg = document.createElement('img');
//
//             newImg.setAttribute('src', obj.img);
//             newTdImg.appendChild(newImg);
//             newRow.appendChild(newTdImg);
//
//             const newTdName = document.createElement('td');
//             const newParagraphForName = document.createElement('p');
//             newParagraphForName.textContent = obj.name;
//
//             newTdName.appendChild(newParagraphForName);
//             newRow.appendChild(newTdName);
//
//             const newTdPrice = document.createElement('td');
//             const newParagraphForPrice = document.createElement('p');
//             newParagraphForPrice.textContent = obj.price;
//
//             newTdPrice.appendChild(newParagraphForPrice);
//             newRow.appendChild(newTdPrice);
//
//             const newTdDecFactor = document.createElement('td');
//             const newParagraphForDecFactor = document.createElement('p');
//             newParagraphForDecFactor.textContent = obj.decFactor;
//
//             newTdDecFactor.appendChild(newParagraphForDecFactor);
//             newRow.appendChild(newTdDecFactor);
//
//             const newTdCheckbox = document.createElement('td');
//             const newInput = document.createElement('input');
//             newInput.type = 'checkbox';
//
//             newTdCheckbox.appendChild(newInput);
//             newRow.appendChild(newTdCheckbox);
//
//             tableBodyEl.appendChild(newRow);
//         });
//     });
//
//     buyEl.addEventListener('click', (e) => {
//         e.preventDefault();
//         const allRows = document.querySelectorAll('tbody tr');
//
//         allRows.forEach(row => {
//             const checkbox = row.querySelector('input[type="checkbox"]');
//
//             if (checkbox.checked && checkbox) {
//                 broughtFurniture.push(row.querySelector('td:nth-child(2) p').textContent);
//                 totalPrice += parseFloat(row.querySelector('td:nth-child(3) p').textContent);
//                 totalDecFactor += parseFloat(row.querySelector('td:nth-child(4) p').textContent);
//             }
//         });
//
//         const avgDecFactor = (totalDecFactor / broughtFurniture.length).toFixed(2);
//
//         resultTextArea.textContent += `Bought furniture: ${broughtFurniture.join(', ')}\n`;
//         resultTextArea.textContent += `Total price: ${totalPrice}\n`;
//         resultTextArea.textContent += `Average decoration factor: ${avgDecFactor}`;
//     });
// }

//---------------------------------------------------------------------------------------------------
// Chat GPT
//
// function solve() {
//     const generateButton = document.querySelector('#input input[value="Generate"]');
//     const buyButton = document.querySelector('#shop input[value="Buy"]');
//     const tableBody = document.querySelector('#shop tbody');
//     const resultTextarea = document.querySelector('#shop textarea');
//
//     generateButton.addEventListener('click', (event) => {
//         event.preventDefault();
//
//         const furnitureData = JSON.parse(document.querySelector('#input textarea').value);
//
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
//     buyButton.addEventListener('click', (event) => {
//         event.preventDefault();
//
//         const selectedFurniture = [];
//         let totalPrice = 0;
//         let totalDecorationFactor = 0;
//         let selectedCount = 0;
//
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
//         const averageDecFactor = selectedCount > 0 ? (totalDecorationFactor / selectedCount) : 0;
//         resultTextarea.value = `Bought furniture: ${selectedFurniture.join(', ')}\n`;
//         resultTextarea.value += `Total price: ${totalPrice.toFixed(2)}\n`;
//         resultTextarea.value += `Average decoration factor: ${averageDecFactor.toFixed(2)}`;
//     });
// }




