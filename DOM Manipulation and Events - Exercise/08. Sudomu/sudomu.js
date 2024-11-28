document.addEventListener('DOMContentLoaded', solve);

function solve() {
    const resultMessageEl = document.querySelector('#check');

    document.querySelector('.buttons').addEventListener('click', (e) => {
        e.preventDefault();

        if (e.target.value === 'Quick Check') {
            const allRows = document.querySelectorAll('tr');
            const allRowsData = [];

            allRows.forEach((row) => {
                const cells = row.querySelectorAll('td');
                const rowData = [];

                cells.forEach((cell) => {
                    const input = cell.querySelector('input');
                    if (input) {
                        rowData.push(input.value);
                    }
                });
                allRowsData.push(rowData);
            });

            const allColsData = [0, 1, 2].map(colIndex => {
                const column = []
                allRowsData.forEach(row => {
                    column.push(row[colIndex]);
                });
                return column;
            });

            if (areArraysUnique(allRowsData) && areArraysUnique(allColsData)) {
                resultMessageEl.textContent = 'Success!';
            } else {
                resultMessageEl.textContent = 'Keep trying ...';
            }

        } else if (e.target.value === 'Clear') {
            document.querySelector('form').reset();
            resultMessageEl.textContent = '';
        }
    });

    function areArraysUnique(arrays) {
        return arrays.every((array, index, self) => {

            const isUniqueElements = new Set(array).size === array.length;
            const isUniqueArray = self.findIndex(a => JSON.stringify(a) === JSON.stringify(array)) === index;

            return isUniqueElements && isUniqueArray;
        });
    }
}