document.addEventListener('DOMContentLoaded', solve);

function solve() {
    const contendElement = document.querySelector('#content');
    const generateElement = document.querySelector('input[type="submit"]');
    const inputStrings = document.querySelector('input[type="text"]').value;
    const arrStrings = inputStrings.split(', ');

    arrStrings.forEach((word) => {
        let currentParagraph = document.createElement("p");
        let currentDiv = document.createElement("div");

        currentParagraph.textContent = word;
        currentParagraph.style.display = 'none';

        currentDiv.appendChild(currentParagraph);
    })
}


// function solve() {
//
//     const contendElement = document.querySelector('#content');
//     const generateElement = document.querySelector('input[type="submit"]');
//
//     generateElement.addEventListener('click', (e) => {
//         e.preventDefault();
//
//         const inputStrings = document.querySelector('input[type="text"]').value;
//         const arrStrings = inputStrings.split(', ');
//
//
//         arrStrings.forEach((str) => {
//
//             const newDiv = document.createElement('div');
//             const newParagraph = document.createElement('p');
//
//             newParagraph.textContent = str;
//             newDiv.appendChild(newParagraph);
//             contendElement.appendChild(newDiv);
//         });
//     });
// }


