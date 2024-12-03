window.addEventListener("load", solve);

function solve() {
    const addLaptopFormInputEl = document.querySelectorAll('.laptop-info input');
    const addBtnEl = document.querySelector('.laptop-info button');
    const checkListEl = document.querySelector('#check-list');

    addBtnEl.addEventListener('click', (e) => {
        e.preventDefault();

        const model = addLaptopFormInputEl[0].value
        const memory = addLaptopFormInputEl[1].value
        const price = addLaptopFormInputEl[2].value

        checkListEl.innerHTML = `
          <li class="laptop-item">
            <article>
                <p>${model}</p>
                <p>Memory: ${memory}</p>
                <p>Price: ${price}</p>
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

            const laptopItem = e.target.closest('.laptop-item');
            const article = laptopItem.querySelector('article');
            const model = article.querySelector('p:nth-of-type(1)').textContent;
            const memory = article.querySelector('p:nth-of-type(2)').textContent
                .replace('Memory: ', '');
            const price = article.querySelector('p:nth-of-type(3)').textContent
                .replace('Price: ', '');

            addLaptopFormInputEl[0].value = model;
            addLaptopFormInputEl[1].value = memory;
            addLaptopFormInputEl[2].value = price;
        }
        addBtnEl.disabled = false;
        const laptopItem = e.target.closest('.laptop-item');
        laptopItem.remove();
    });
}
  