function addItem() {
    const listElement = document.querySelector('#items');
    const inputElement = document.querySelector('#newItemText');
    const inputText = inputElement.value;
    const newListElement = document.createElement('li');

    newListElement.textContent = inputText;
    listElement.appendChild(newListElement);
    inputElement.value = '';
}