document.addEventListener('DOMContentLoaded', solve);

function solve() {

    const contendElement = document.querySelector('#content');
    const generateElement = document.querySelector('input[type="submit"]');

    generateElement.addEventListener('click', (e) => {
        e.preventDefault();

        const inputStrings = document.querySelector('input[type="text"]').value.split(', ');

        inputStrings.forEach((str) => {

            const newDiv = document.createElement('div');
            const newParagraph = document.createElement('p');

            newParagraph.textContent = str;
            newParagraph.style.display = 'none';

            newDiv.appendChild(newParagraph);
            newDiv.addEventListener('click', (e) => {
                e.target.querySelector('p').style.display = 'block';
            });

            contendElement.appendChild(newDiv);
        });
    });
}


//---------------------------------------------------------------------------------------------------------------------
// Lector's Solution
//
// function solve() {
//     const formEl = document.querySelector('#task-input');
//     const contentEl = document.querySelector('#content');
//
//     formEl.addEventListener('submit', (e) => {
//         e.preventDefault();
//
//         const sections = formEl.querySelector('input[type="text"]').value.split(', ');
//         sections.forEach(el => {
//
//             const newDivEl = document.createElement('div');
//             const newPEl = document.createElement('p');
//
//             newPEl.textContent = el;
//
//             newPEl.style.display = 'none';
//
//             newDivEl.appendChild(newPEl);
//             newDivEl.addEventListener('click', (e) => {
//                 e.target.querySelector('p').style.display = 'block';
//             });
//
//             contentEl.appendChild(newDivEl);
//         });
//     });
// }