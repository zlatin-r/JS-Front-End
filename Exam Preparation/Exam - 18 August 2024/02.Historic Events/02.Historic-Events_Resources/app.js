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
        let eventDivEl = document.createElement('div');
        let eventBtnEditEl = document.createElement('button');
        let eventBtnNextEl = document.createElement('button');

        eventDivEl.classList.add('buttons');
        eventBtnEditEl.classList.add('edit-btn');
        eventBtnEditEl.textContent = 'Edit';
        eventBtnEditEl.addEventListener('click', edit);
        eventBtnNextEl.classList.add('next-btn');
        eventBtnNextEl.textContent = 'Next';

        eventTitleParagraphEl.textContent = eventNameEl.value;
        eventDateParagraphEl.textContent = dateTimeEl.value;
        eventDescriptionParagraphEl.textContent = descriptionEl.value;

        let title = eventNameEl.value;
        let time = dateTimeEl.value;
        let description = descriptionEl.value;

        eventArticleEl.appendChild(eventTitleParagraphEl);
        eventArticleEl.appendChild(eventDateParagraphEl);
        eventArticleEl.appendChild(eventDescriptionParagraphEl);

        eventDivEl.appendChild(eventBtnEditEl);
        eventDivEl.appendChild(eventBtnNextEl);

        eventLiEl.appendChild(eventArticleEl);
        eventLiEl.appendChild(eventDivEl);

        previewListEl.appendChild(eventLiEl);

        addBtnEl.disabled = true;

        eventNameEl.value = ""
        dateTimeEl.value = ""
        descriptionEl.value = ""

        function edit() {
            eventNameEl.value = title;
            dateTimeEl.value = time;
            descriptionEl.value = description;

            previewListEl.removeChild(eventLiEl);

            addBtnEl.disabled = false;
        }

    }
}
