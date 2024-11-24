document.addEventListener('DOMContentLoaded', solve);

function solve() {
    const inputStrings = document.querySelector('input[type="text"]').value;
    const arrStrings = inputStrings.split(', ');
    const contendElement = document.querySelector('#contend');
    const generateElement = document.querySelector('input[type="submit"]');

    generateElement.addEventListener('click', (e) => {
        arrStrings.forEach((str) => {
            const newDiv = document.createElement('div');
            const newParagraph = document.createElement('p');
            newParagraph.textContent = str;
            console.log(newParagraph);
            newDiv.appendChild(newParagraph);
            contendElement.appendChild(newDiv);
        });
    })
}