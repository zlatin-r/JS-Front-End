document.addEventListener('DOMContentLoaded', solve);

function solve() {
   const inputStrings = document.querySelector('input[type="text"]').value;
   const arrStrings = inputStrings.split(', ');

   debugger
   arrStrings.forEach((str) => {
       const newDiv = document.createElement('div');
       const newParagraph = document.createElement('p');
       newParagraph.textContent = str;

       newDiv.appendChild(newParagraph);
   });
}