document.addEventListener('DOMContentLoaded', solve);

function solve() {
    const textAreaElement = document.querySelector('textarea');
    const allButtonElements = document.querySelectorAll('button');

    allButtonElements.addEventListener('click', e => {
        const price = e.target.parentElement.lastChild.textContent;
        console.log(price);
    });
}
