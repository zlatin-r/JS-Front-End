document.addEventListener('DOMContentLoaded', solve);

function solve() {
    const convertBtnEl = document.querySelector('#convert');
    const resultAreaEl = document.querySelector('#outputDistance');
    const values = {
        mm: 1,
        cm: 10,
        in: 25.4,
        ft: 304.8,
        yrd: 914.4,
        m: 1000,
        km: 1000000,
        mi: 1609344
    }

    convertBtnEl.addEventListener('click', (e) => {
        e.preventDefault();

        const distanceValueEl = Number(document.querySelector('#inputDistance').value);

        const inputUnitEl = document.querySelector('#inputUnits');
        const outputUnitEl = document.querySelector('#outputUnits');

        const valueInMm = distanceValueEl * values[inputUnitEl.value];
        const result = valueInMm / values[outputUnitEl.value];

        resultAreaEl.value = result;
    });
}
