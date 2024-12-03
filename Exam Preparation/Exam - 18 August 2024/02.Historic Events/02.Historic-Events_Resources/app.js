window.addEventListener("load", solve);

function solve() {
    let eventNameEl = document.querySelector('#name');
    let dateTimeEl = document.querySelector('#time');
    let descriptionEl = document.querySelector('#description');
    let addBtnEl = document.querySelector('#add-btn');

    addBtnEl.addEventListener('click', (e) => {
        e.preventDefault();
        publish()
    });

    function publish() {
        if (eventNameEl.value === "" ||
            dateTimeEl.value === "" ||
            descriptionEl.value === "") {
            return;
        }

        let previewListEl = document.getElementById('preview-list');

        let eventLiEl = document.createElement('li');
        let eventArticleEl = document.createElement('article');
        let eventTitleParagraphEl = document.createElement('p');
        let eventDateParagraphEl = document.createElement('p');
        let eventDescriptionParagraphEl = document.createElement('p');

    }
}
