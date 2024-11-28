document.addEventListener('DOMContentLoaded', solve);

// function solve() {
//     const resultMessageEl = document.querySelector('#check');
//
//     document.querySelector('.buttons').addEventListener('click', (e) => {
//         e.preventDefault();
//
//         if (e.target.value === 'Quick Check') {
//             const allRows = document.querySelectorAll('tr');
//             const allRowsData = [];
//
//             allRows.forEach((row) => {
//                 const cells = row.querySelectorAll('td');
//                 const rowData = [];
//
//                 cells.forEach((cell) => {
//                     const input = cell.querySelector('input');
//                     rowData.push(input.value);
//                 });
//                 allRowsData.push(rowData);
//             });
//
//             const allColsData = [0, 1, 2].map(colIndex => {
//                 const column = []
//
//                 allRowsData.forEach(row => {
//                     column.push(row[colIndex]);
//                 });
//                 return column;
//             });
//
//             if (areArraysUnique(allRowsData) && areArraysUnique(allColsData)) {
//                 resultMessageEl.textContent = 'Success!';
//             } else {
//                 resultMessageEl.textContent = 'Keep trying ...';
//             }
//
//         } else if (e.target.value === 'Clear') {
//             resultMessageEl.textContent = '';
//         }
//     });
//
//     function areArraysUnique(arrays) {
//         return arrays.every((array, index, self) => {
//
//             const isUniqueElements = new Set(array).size === array.length;
//             const isUniqueArray = self.findIndex(a => JSON.stringify(a) === JSON.stringify(array)) === index;
//
//             return isUniqueElements && isUniqueArray;
//         });
//     }
// }
//
//---------------------------------------------------------------------------------------------------------------------

//Lector's Solution

function solve() {
    const formEl = document.querySelector('#solutionCheck');
    const outputEl = document.querySelector('#check');

    let status = '';
    let size = 3;

    formEl.addEventListener('submit', (e) => {
        e.preventDefault();

        const rows = e.target.querySelectorAll('table tbody tr');

        rows.forEach((row) => {
            const values = [...row.children].map(el => el.children[0].value);
            const duplicates = values.filter((item, index) => values.indexOf(item) !== index);

            if (!duplicates.length > 0) {
                status += '1';
            }
        });

        status += 'x';

        for (let i = 1; i <= size; i++) {
            const column = [...e.target.querySelectorAll(`tbody tr td:nth-child(${i})`)].map(el => el.children[0].value);
            const duplicates = column.filter((item, index) => column.indexOf(item) !== index);

            if (!duplicates.length > 0) {
                status += '1';
            }
        }

        if (status === '111x111') {
            outputEl.classList.remove('fail');
            outputEl.classList.add('success');
            outputEl.textContent = 'Success!';
        } else {
            outputEl.classList.add('fail');
            outputEl.classList.remove('success');
            outputEl.textContent = 'Keep trying ...';
        }
    });
}