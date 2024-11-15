// function sumTable() {
//     const prices = document.querySelectorAll
//     ("table tbody tr:nth-child(-n+3) td:nth-of-type(even)");
//     let sum = 0;
//
//     prices.forEach(price => {
//         const value = parseFloat(price.textContent);
//         sum += value;
//     });
//
//     document.querySelector("#sum").textContent = sum.toFixed(2);
// }

function sumTable() {
    const tableCells = document.querySelectorAll('table tbody tr:not(:last-child) td:last-child');
    const sumElement = document.querySelector('#sum');

    sumElement.textContent = [...tableCells]
        .map(el => Number(el.textContent))
        .reduce((a, b) => a + b, 0);
}