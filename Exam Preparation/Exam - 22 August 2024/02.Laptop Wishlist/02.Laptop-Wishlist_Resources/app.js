window.addEventListener("load", solve);

function solve() {
    const addLaptopFormInputEl = document.querySelectorAll('.laptop-info input');
    const addBtnEl = document.querySelector('.laptop-info button');
    const checkListEl = document.querySelector('#check-list');
    const editBtnEl = document.querySelector('.btn .edit');
    const okBtnEl = document.querySelector('.btn .ok');

    addBtnEl.addEventListener('click', (e) => {
        e.preventDefault();

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

    editBtnEl.addEventListener('click', (e) => {
        e.preventDefault();
        const model = document.querySelector('.laptop-item article p:nth-of-type(1)')
        const storage = document.querySelector('.laptop-item article p:nth-of-type(2)')
        const price = document.querySelector('.laptop-item article p:nth-of-type(3)')
        console.log(model, storage, price)
        addLaptopFormInputEl[0].value = model.value;
    })
}
  