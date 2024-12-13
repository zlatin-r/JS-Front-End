window.addEventListener("load", solve)

function solve() {
    const modelInputEl = document.querySelector('#laptop-model');
    const storageInputEl = document.querySelector('#storage');
    const priceInputEl = document.querySelector('#price');

    const checkListEl = document.querySelector('#check-list');
    const laptopsListEl = document.querySelector('#laptops-list');

    const clearBtnEl = document.querySelector('.clear');
    clearBtnEl.addEventListener('click', () => {location.reload()});

    const addBtnEl = document.querySelector('#add-btn');
    addBtnEl.addEventListener('click', publish)

    function publish() {
        if (!modelInputEl.value || !storageInputEl.value || !priceInputEl.value) return;

        const newLaptop = document.createElement('li');
        newLaptop.className = 'laptop-item';

        const articleEl = document.createElement('article');

        const modelEl = document.createElement('p');
        let model = modelInputEl.value;
        modelEl.textContent = model;

        const storageEl = document.createElement('p');
        let storage = storageInputEl.value;
        storageEl.textContent = `Memory: ${storage} TB`;

        const priceEl = document.createElement('p');
        let price = priceInputEl.value;
        priceEl.textContent = `Price: ${price}$`;

        const editBtnEl = document.createElement('button');
        editBtnEl.className = 'btn edit';
        editBtnEl.textContent = 'edit';
        editBtnEl.addEventListener('click', editBtnHandler);

        const okBtnEl = document.createElement('button');
        okBtnEl.className = 'btn ok';
        okBtnEl.textContent = 'ok';
        okBtnEl.addEventListener('click', okBtnHandler);

        articleEl.appendChild(modelEl);
        articleEl.appendChild(storageEl);
        articleEl.appendChild(priceEl);

        newLaptop.appendChild(articleEl);
        newLaptop.appendChild(editBtnEl);
        newLaptop.appendChild(okBtnEl);

        checkListEl.appendChild(newLaptop);

        modelInputEl.value = '';
        storageInputEl.value = '';
        priceInputEl.value = '';

        addBtnEl.disabled = true;

        function editBtnHandler() {
            modelInputEl.value = model;
            storageInputEl.value = storage;
            priceInputEl.value = price;

            checkListEl.removeChild(newLaptop);

            addBtnEl.disabled = false;
        }

        function okBtnHandler() {
            checkListEl.removeChild(newLaptop);

            newLaptop.removeChild(editBtnEl);
            newLaptop.removeChild(okBtnEl);

            laptopsListEl.appendChild(newLaptop);

            addBtnEl.disabled = false;
        }
    }
}
