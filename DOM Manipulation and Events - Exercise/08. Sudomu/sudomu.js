document.addEventListener('DOMContentLoaded', solve);

function solve() {
    document.querySelector('.buttons').addEventListener('click', (e) => {
        e.preventDefault();

        if (e.target.value === 'Quick Check') {
            const allRows = document.querySelectorAll('tr');
            const allRowsData = [];
            const allColsData = [];

            debugger
            allRows.forEach((row, index) => {
                const cells = row.querySelectorAll('td');
                const rowData = [];
                const colData = [];

                cells.forEach((cell, colIndex) => {
                    const input = cell.querySelector('input');
                    if (input) {
                        rowData.push(input.value);
                        if (colIndex % 3 === 0) {
                            colData.push(input.value);
                        }
                    }
                });
                allRowsData.push(rowData);
            });
            allColsData.push(colData);

        } else if (e.target.value === 'Clear') {

        }
    });
}