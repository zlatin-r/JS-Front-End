document.addEventListener('DOMContentLoaded', solve);

function solve() {
    document.querySelector('.buttons').addEventListener('click', (e) => {
        e.preventDefault();

        if (e.target.value === 'Quick Check') {
            const allRows = document.querySelectorAll('tr');
            const tableData = [];

            allRows.forEach((row, index) => {
                const cells = row.querySelectorAll('td');
                const rowData = [];

                cells.forEach((cell, colIndex) => {
                    const input = cell.querySelector('input');
                    if (input) {
                        rowData.push(input.value);
                    }
                });
                tableData.push(rowData);
            });
            console.log(tableData);
        } else if (e.target.value === 'Clear') {
            console.log('Clear');
        }
    });
}