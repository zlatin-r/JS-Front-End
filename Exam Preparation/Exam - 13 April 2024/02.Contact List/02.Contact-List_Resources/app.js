window.addEventListener("load", solve);

function solve() {
    const nameInputEl = document.querySelector('#name');
    const phoneInputEl = document.querySelector('#phone');
    const categoryInputEl = document.querySelector('#category');

    const addBtnEl = document.querySelector('#add-btn');

    const checkListEl = document.querySelector('#check-list');
    const contactListEl = document.querySelector('#contact-list');

    addBtnEl.addEventListener('click', addBtnHandler);

    function clearInput() {
        nameInputEl.value = '';
        phoneInputEl.value = '';
        categoryInputEl.value = '';
    }

    function takeArticle() {
        return document.querySelector('#check-list li article');
    }

    function addBtnHandler() {
        const name = nameInputEl.value.trim();
        const phone = phoneInputEl.value.trim();
        const category = categoryInputEl.value;

        if (!name || !phone || !category) {
            return;
        }

        const tempContactLiEl = document.createElement('li');

        const newArticleEl = document.createElement('article');

        const namePEl = document.createElement('p');
        namePEl.textContent = `name:${name}`;

        const phonePEl = document.createElement('p');
        phonePEl.textContent = `phone:${phone}`;

        const categoryPEl = document.createElement('p');
        categoryPEl.textContent = `category:${category}`;

        const buttonsDivEl = document.createElement('div');
        buttonsDivEl.className = 'buttons';

        const editBtnEl = document.createElement('button');
        editBtnEl.className = 'edit-btn';
        editBtnEl.addEventListener('click', editBtnHandler);

        const saveBtnEl = document.createElement('button');
        saveBtnEl.className = 'save-btn';
        saveBtnEl.addEventListener('click', saveBtnHandler);

        buttonsDivEl.appendChild(editBtnEl);
        buttonsDivEl.appendChild(saveBtnEl);

        newArticleEl.appendChild(namePEl);
        newArticleEl.appendChild(phonePEl);
        newArticleEl.appendChild(categoryPEl);

        tempContactLiEl.appendChild(newArticleEl);
        tempContactLiEl.appendChild(buttonsDivEl);

        checkListEl.appendChild(tempContactLiEl);

        clearInput();

        function editBtnHandler() {
            nameInputEl.value = name;
            phoneInputEl.value = phone;
            categoryInputEl.value = category;

            checkListEl.removeChild(tempContactLiEl);
        }
    }

    function saveBtnHandler() {
        const articleData = takeArticle();
        const newContact = document.createElement('li');
        const newDeleteBtnEl = document.createElement('button');
        newDeleteBtnEl.className = 'del-btn';
        newDeleteBtnEl.addEventListener('click', deleteBtnHandler);

        newContact.appendChild(articleData);
        newContact.appendChild(newDeleteBtnEl);

        contactListEl.appendChild(newContact);

        checkListEl.innerHTML = '';
    }

    function deleteBtnHandler(event) {
        const clickedContactEl = event.target.parentElement;

        contactListEl.removeChild(clickedContactEl);
    }
}
