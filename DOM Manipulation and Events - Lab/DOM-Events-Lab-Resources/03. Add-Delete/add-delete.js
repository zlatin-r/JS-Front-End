function addItem() {

    function deleteItem(e) {
        e.currentTarget.parentElement.remove();
    }

    const listElement = document.querySelector('#items');
    const inputElement = document.querySelector('#newItemText');

    const newListElement = document.createElement('li');
    const deleteButtonElement = document.createElement('a');

    newListElement.textContent = inputElement.value;

    deleteButtonElement.textContent = '[Delete]';
    deleteButtonElement.setAttribute('href', '#');

    deleteButtonElement.addEventListener('click', deleteItem);

    newListElement.appendChild(deleteButtonElement);
    listElement.appendChild(newListElement);

    inputElement.value = '';
}
