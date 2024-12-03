window.addEventListener("load", solve);

function solve() {
    const addLaptopFormInputEl = document.querySelectorAll('.laptop-info input');
    const addBtnEl = document.querySelector('.laptop-info button');
    const checkListEl = document.querySelector('#check-list');

    addBtnEl.addEventListener('click', (e) => {
        e.preventDefault();
        const model = addLaptopFormInputEl[0].value
        const memory =

        checkListEl.innerHTML = `
          <li class="laptop-item">
            <article>
                <p>${addLaptopFormInputEl[0].value}</p>
                <p>Memory: ${addLaptopFormInputEl[1].value}</p>
                <p>Price: ${addLaptopFormInputEl[2].value}</p>
            </article>
            <button class="btn edit">edit</button>
            <button class="btn ok">ok</button>
          </li>
          `;

        addLaptopFormInputEl.forEach(el => {
            el.value = ''
        });
        addBtnEl.disabled = true;
    });

    checkListEl.addEventListener('click', (e) => {
        if (e.target.classList.contains('edit')) {
            const model = document.querySelector('.laptop-item article p:nth-of-type(1)');
            const storage = document.querySelector('.laptop-item article p:nth-of-type(2)').textContent;
            const price = document.querySelector('.laptop-item article p:nth-of-type(3)').textContent;

            console.log(model.textContent, storage.textContent, price.textContent);

            addLaptopFormInputEl[0].value = model.textContent;
            addLaptopFormInputEl[1].value = storage;
            addLaptopFormInputEl[2].value = price;
        }
    });
}
  