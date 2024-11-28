document.addEventListener('DOMContentLoaded', solve);

function solve() {
    const convertBtnEl = document.querySelector('#convert');
    const resultAreaEl = document.querySelector('#outputDistance');
    const toMeters = {
        km: 1000,
        m: 1,
        cm: 0.01,
        mm: 0.001,
        mi: 1609.34,
        yrd: 0.9144,
        ft: 0.3048,
        in: 0.0254
    };

    convertBtnEl.addEventListener('click', (e) => {
        e.preventDefault();

        const distanceValueEl = Number(document.querySelector('#inputDistance').value);

        const inputUnitEl = document.querySelector('#inputUnits');
        const outputUnitEl = document.querySelector('#outputUnits');

        const valueInMm = distanceValueEl * toMeters[inputUnitEl.value];

        resultAreaEl.value = valueInMm / toMeters[outputUnitEl.value];
    });
}
