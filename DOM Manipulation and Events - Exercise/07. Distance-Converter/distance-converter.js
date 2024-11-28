document.addEventListener('DOMContentLoaded', solve);

function solve() {
    const convertBtnEl = document.querySelector('#convert');
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

        if (distanceValueEl < 1) return;

        const inputUnitEl = document.querySelector('#inputUnits');
        const outputUnitEl = document.querySelector('#outputUnits');

        const result = Number(values[inputUnitEl.value]) * distanceValueEl;

    });

    function convertTo(millimeters, unit) {

    }
}