function addItem() {
    const listElement = document.querySelector('#items');
    const inputElement = document.querySelector('#newItemText');
    const inputText = inputElement.value;
    const newListElement = document.createElement('li');

    newListElement.textContent = inputText;
    listElement.appendChild(newListElement);
    inputElement.value = '';
}


// function addItem() {
//     let text = document.getElementById('newItemText').value;
//     let li = document.createElement("li");
//     li.appendChild(document.createTextNode(text));
//     document.getElementById("items").appendChild(li);
//
//     document.getElementById('newItemText').value = '';
// }
