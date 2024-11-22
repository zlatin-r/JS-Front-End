function deleteByEmail() {
    const inputElement = document.querySelector('input[name="email"]');
    const allEmailElements = document.querySelectorAll('tbody tr td:nth-of-type(2)');
    const resultElement = document.querySelector('#result');
    let flagFound = false;

    allEmailElements.forEach(el => {
        if (el.textContent === inputElement.value) {
            el.parentElement.remove();
            flagFound = true;
        }
    });

    if (flagFound) {
        resultElement.textContent = 'Deleted.';
    } else {
        resultElement.textContent = 'Not Found.';
    }

}
