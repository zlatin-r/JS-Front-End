document.addEventListener('DOMContentLoaded', solve);

function solve() {
    const convertBtnEl = document.querySelector('#convert');
    const values = {mm: 1, cm: 10, in: 25.4, ft: 304.8, yrd: 914.4, m: 1000, km: 1000000, mi: 1609344}

    convertBtnEl.addEventListener('click', (e) => {
        e.preventDefault();

        const inputTypeEl = document.querySelector('#inputUnits');
        const outputTypeEl = document.querySelector('#outputUnits');

        console.log(inputTypeEl.value, outputTypeEl.value);

    });
}