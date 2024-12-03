window.addEventListener("load", solve);

function solve() {
    let eventNameEl = document.querySelector('#name');
    let dateTimeEl = document.querySelector('#time');
    let descriptionEl = document.querySelector('#description');
    let addBtnEl = document.querySelector('#add-btn');

    addBtnEl.addEventListener('click', (event) => {
        event.preventDefault();
        publish()
    });

    function publish() {
        if (eventNameEl.value === "" ||
            dateTimeEl.value === "" ||
            descriptionEl.value === "") {
            return;
        }

        console.log(eventNameEl.value, dateTimeEl.value, descriptionEl.value);
    }
}
