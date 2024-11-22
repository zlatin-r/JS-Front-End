// function deleteByEmail() {
//     const inputElement = document.querySelector('input[name="email"]');
//     const allEmailElements = document.querySelectorAll('tbody tr td:nth-of-type(2)');
//     const resultElement = document.querySelector('#result');
//     let flagFound = false;
//
//     allEmailElements.forEach(el => {
//         if (el.textContent === inputElement.value) {
//             el.parentElement.remove();
//             flagFound = true;
//         }
//     });
//
//     if (flagFound) {
//         resultElement.textContent = 'Deleted.';
//     } else {
//         resultElement.textContent = 'Not found.';
//     }
//
//     inputElement.value = '';
// }

function deleteByEmail() {
    const inputEl = document.querySelector('input[name="email"]');
    const searchStr = inputEl.value.toLowerCase();
    const people = document.querySelectorAll('table tbody tr td:nth-child(2)');
    const resultEl = document.querySelector('#result');

    if (searchStr === '') return;

    const [matchedEl] = [...people].filter(person => {
        return person.textContent.toLowerCase().includes(searchStr);
    });

    if (matchedEl) {
        matchedEl.parentElement.remove();
        resultEl.textContent = 'Deleted.';
    } else {
        resultEl.textContent = 'Not found.';
    }
    inputEl.value = '';
}