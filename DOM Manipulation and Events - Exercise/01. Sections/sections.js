document.addEventListener('DOMContentLoaded', solve);

function solve() {

    const contendElement = document.querySelector('#content');
    const generateElement = document.querySelector('input[type="submit"]');

    generateElement.addEventListener('click', (e) => {
        e.preventDefault();

        const inputStrings = document.querySelector('input[type="text"]').value;
        const arrStrings = inputStrings.split(', ');

        arrStrings.forEach((str) => {

            const newDiv = document.createElement('div');
            const newParagraph = document.createElement('p');

            newParagraph.textContent = str;
            // newParagraph.style.display = 'none';

            newDiv.appendChild(newParagraph);

            newParagraph.addEventListener('click', makeTextVisible);

            contendElement.appendChild(newDiv);
        });
    });
    function makeTextVisible(event) {
        event.target.style.display = "block"
    }
}


