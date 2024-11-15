function solve() {
    const searchedElement = document.querySelector('#searchField').value;
    const rowElements = document.querySelectorAll('table:not(tr:first-child) tr td');

    console.log(searchedElement)
    rowElements.forEach(el => {

        if (el.textContent.includes(searchedElement)) {
            el.style.backgroundColor = 'yellow';
        }
    })
}