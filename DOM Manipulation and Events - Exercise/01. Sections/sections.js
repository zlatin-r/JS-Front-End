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
//         const arrStrings = inputStrings.split(', ');
//
//         arrStrings.forEach((str) => {
//
//             const newDiv = document.createElement('div');
//             const newParagraph = document.createElement('p');
//
//             newParagraph.textContent = str;
//             newParagraph.style.display = 'flex';
//             newParagraph.style.color = 'transparent';
//             newParagraph.style.alignItems = 'center';
//             newParagraph.style.justifyContent = 'center';
//             newParagraph.style.width = '100%';
//             newParagraph.style.height = '100%';
//
//             newDiv.appendChild(newParagraph);
//
//             newParagraph.addEventListener('click', makeTextVisible);
//
//             contendElement.appendChild(newDiv);
//         });
//     });
//
//     function makeTextVisible(event) {
//         event.target.style.color = "white";
//     }
// }

function solve() {
    const generateElement = document.querySelector('input[type="submit"]'); // the submit button
    const contentElement = document.querySelector('#content'); // the div to append the new divs

    generateElement.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent the form from submitting

        const inputStrings = document.querySelector('input[type="text"]').value; // Get input value
        const arrStrings = inputStrings.split(', '); // Split the input string into an array

        arrStrings.forEach((str) => {
            const newDiv = document.createElement('div'); // Create new div
            const newParagraph = document.createElement('p'); // Create new paragraph

            newParagraph.textContent = str; // Set text content to the string
            newDiv.appendChild(newParagraph); // Append the paragraph to the div

            contentElement.appendChild(newDiv); // Append the div to the content section
        });
    });
}
