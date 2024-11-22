function addItem() {
    const listElement = document.querySelector('#items');
    const inputText = document.querySelector('#newItemText').value;
    const newListElement = document.createElement('li');
    newListElement.textContent = inputText;
    listElement.appendChild(newListElement);
    inputText.value = '';
}
