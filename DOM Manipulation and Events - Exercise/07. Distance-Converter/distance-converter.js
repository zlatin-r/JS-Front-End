document.addEventListener('DOMContentLoaded', solve);

function solve() {
    const convertBtnEl = document.querySelector('#convert');

    convertBtnEl.addEventListener('click', (e) => {
        e.preventDefault();

        const inputTypeEl = document.querySelector('#inputUnits');
        const outputTypeEl = document.querySelector('#outputUnits');

        console.log(inputTypeEl.value, outputTypeEl.value);

    });
}