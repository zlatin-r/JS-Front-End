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


// function solve() {
//     let newElement = document.getElementById("newText").value;
//     let list = document.getElementById("items");
//
//     if (newElement.length === 0) return;
//
//     let listItem = document.createElement("li");
//     listItem.textContent = newElement;
//
//     let remove = document.createElement("a");
//     let linkText = document.createTextNode("[Delete]");
//
//     remove.appendChild(linkText);
//     remove.href = "#";
//     remove.addEventListener("click", deleteItem);
//
//     listItem.appendChild(remove);
//     list.appendChild(listItem);
//
//     function deleteItem() {
//         listItem.remove();
//     }
// }
