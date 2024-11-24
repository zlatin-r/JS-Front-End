document.addEventListener('DOMContentLoaded', solve);

function solve() {
    const textEl = document.querySelector('input#newItemText');
    const valueEl = document.querySelector('input#newItemValue');
    const selectEl = document.querySelector('#menu');
    const addButtonEl = document.querySelector('input[type="submit"]')

    addButtonEl.addEventListener('click', (e) => {
        e.preventDefault();

        const newOptionEl = document.createElement('option');

        newOptionEl.textContent = textEl.value;
        newOptionEl.value = valueEl.value;

        selectEl.appendChild(newOptionEl);

        textEl.value = '';
        valueEl.value = '';
    });
}


// GPT Solution:
//
// function solve() {
//     // Get references to the elements
//     const textEl = document.querySelector('#newItemText');
//     const valueEl = document.querySelector('#newItemValue');
//     const selectEl = document.querySelector('#menu');
//     const addButtonEl = document.querySelector('input[type="submit"]');
//
//     // Add an event listener to the submit button
//     addButtonEl.addEventListener('click', function(e) {
//         e.preventDefault(); // Prevent the form from being submitted
//
//         // Get values from the input fields
//         const textValue = textEl.value;
//         const valueValue = valueEl.value;
//
//         // Create a new <option> element
//         const newOptionEl = document.createElement('option');
//         newOptionEl.textContent = textValue;  // Set the text of the option
//         newOptionEl.value = valueValue;       // Set the value of the option
//
//         // Append the new option to the select element
//         selectEl.appendChild(newOptionEl);
//
//         // Clear the input fields
//         textEl.value = '';
//         valueEl.value = '';
//     });
// }