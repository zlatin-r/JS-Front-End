window.addEventListener("load", solve);

function solve() {
    const nameInputEl = document.querySelector('#name');
    const phoneInputEl = document.querySelector('#phone');
    const categoryInputEl = document.querySelector('#category');

    const addBtnEl = document.querySelector('#add-btn');

    const checkListEl = document.querySelector('#check-list');

    addBtnEl.addEventListener('click', addBtnHandler)

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
        <li>
            <article>
                <p>name: ${name}</p>
                <p>phone: ${phone}</p>
                <p>category: ${category}</p>
            </article>
            <div class="buttons">
                <button class="edit-btn"></button>
                <button class="save-btn"></button>
            </div>
        </li>
        `

        checkListEl.append(newContact);

        clearInput();
    }

}

