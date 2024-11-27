document.addEventListener('DOMContentLoaded', solve);

// function solve() {
//
//     const contendElement = document.querySelector('#content');
//     const generateElement = document.querySelector('input[type="submit"]');
//
//     generateElement.addEventListener('click', (e) => {
//         generateElement.disabled = true;
//         e.preventDefault();
//
//         const inputStrings = document.querySelector('input[type="text"]').value;
//
//         if (inputStrings.trim() !== "") {
//             const arrStrings = inputStrings.split(', ');
//             arrStrings.forEach((str) => {
//
//                 const newDiv = document.createElement('div');
//                 const newParagraph = document.createElement('p');
//
//                 newParagraph.textContent = str;
//                 newParagraph.style.display = 'flex';
//                 newParagraph.style.color = 'transparent';
//                 newParagraph.style.alignItems = 'center';
//                 newParagraph.style.justifyContent = 'center';
//                 newParagraph.style.width = '100%';
//                 newParagraph.style.height = '100%';
//
//                 newDiv.appendChild(newParagraph);
//                 newParagraph.addEventListener('click', makeTextVisible);
//                 contendElement.appendChild(newDiv);
//             });
//         }
//     });
//
//     function makeTextVisible(event) {
//         event.target.style.color = "white";
//     }
// }

//---------------------------------------------------------------------------------------------------------------------

function solve() {
    const formEl = document.querySelector('#task-input');
    const contentEl = document.querySelector('#content');

    formEl.addEventListener('submit', (e) => {
        e.preventDefault();

        const sections = formEl.querySelector('input[type="text"]').value.split(', ');
        sections.forEach(el => {

            const newDivEl = document.createElement('div');
            const newPEl = document.createElement('p');

            newPEl.textContent = el;

            newDivEl.appendChild(newPEl);

            contentEl.appendChild(newDivEl);

        })
    })
}