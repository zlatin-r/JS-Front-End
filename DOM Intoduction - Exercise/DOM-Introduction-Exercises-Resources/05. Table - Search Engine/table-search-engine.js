function solve() {
    const searchedElement = document.querySelector('#searchField').value;
    const rowElements = document.querySelectorAll('table:not(tr:first-child) tr');

    rowElements.forEach(row => {
        row.style.backgroundColor = "white";
    })

    rowElements.forEach(el => {
        if (el.textContent.toLowerCase().includes(searchedElement.toLowerCase())) {
            el.style.backgroundColor = 'yellow';
        }
    });

    document.querySelector('#searchField').value = '';
}
