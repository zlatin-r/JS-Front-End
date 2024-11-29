document.addEventListener('DOMContentLoaded', solve);

function solve() {
    const mainParentEl = document.querySelector('main');

    mainParentEl.addEventListener('click', (e) => {
        e.preventDefault();

        if (e.target.textContent === 'onclick') {
            console.log('clicked');
        }
    });

}