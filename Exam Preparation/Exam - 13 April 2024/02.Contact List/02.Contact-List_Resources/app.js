window.addEventListener("load", solve);

function solve() {
    const nameInputEl = document.querySelector('#name');
    const phoneInputEl = document.querySelector('#phone');
    const categoryInputEl = document.querySelector('#category');

    const addBtnEl = document.querySelector('#add-btn');

    const checkListEl = document.querySelector('#check-list');

    addBtnEl.addEventListener('click', addBtnHandler);

    function clearInput() {
        nameInputEl.value = '';
        phoneInputEl.value = '';
        categoryInputEl.value = '';
    }

    function addBtnHandler() {
        const name = nameInputEl.value.trim();
        const phone = phoneInputEl.value.trim();
        const category = categoryInputEl.value;

        if (!name || !phone || !category) {
            return;
        }

        const newContact = document.createElement('li');

        newContact.innerHTML = `
            <article>
                <p>Name: ${name}</p>
                <p>Phone: ${phone}</p>
                <p>Category: ${category}</p>
            </article>
            <div class="buttons">
                <button class="edit-btn">Edit</button>
                <button class="save-btn">Save</button>
            </div>
        `;

        checkListEl.append(newContact);

        const editBtnEl = newContact.querySelector('.edit-btn');
        editBtnEl.addEventListener('click', editBtnHandler);

        clearInput();

        function editBtnHandler() {
            nameInputEl.value = name;
            phoneInputEl.value = phone;
            categoryInputEl.value = category;

            checkListEl.removeChild(newContact);
        }
    }

}
