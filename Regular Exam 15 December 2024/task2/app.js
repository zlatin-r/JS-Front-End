window.addEventListener("load", solve);

function solve() {
    const emailInputEl = document.querySelector('#email');
    const eventInputEl = document.querySelector('#event');
    const locationInputEl = document.querySelector('#location');

    const previewListEl = document.querySelector('#preview-list');
    const eventListEl = document.querySelector('#event-list');

    const nextButtonEl = document.querySelector('#next-btn');

    nextButtonEl.addEventListener('click', (event) => {
        if (!emailInputEl.value || !eventInputEl.value || !locationInputEl.value) return;

        const newApplicationEl = document.createElement("li");
        newApplicationEl.className = 'application';

        const newArticleEl = document.createElement("article");

        const emailEl = document.createElement("h4");
        let email = emailInputEl.value;
        emailEl.textContent = email;

        const newParagraphEl = document.createElement("p");

        const strongEl = document.createElement("strong");
        strongEl.textContent = 'Event:';
        let eventValue = eventInputEl.value;

        newParagraphEl.appendChild(strongEl);

        const lineBreak = document.createElement("br");
        newParagraphEl.appendChild(lineBreak);

        const text = document.createTextNode(eventValue);
        newParagraphEl.appendChild(text);

        const newParagraph2El = document.createElement("p");

        const strong2El = document.createElement("strong");
        strong2El.textContent = "Location:";
        let location = locationInputEl.value;

        newParagraph2El.appendChild(strong2El);

        const lineBreak2 = document.createElement("br");
        newParagraph2El.appendChild(lineBreak2);

        const text2 = document.createTextNode(location);
        newParagraph2El.appendChild(text2);

        const editButtonEl = document.createElement("button");
        editButtonEl.className = 'action-btn edit';
        editButtonEl.textContent = 'edit';
        editButtonEl.addEventListener('click', editBtnHandler);

        const applyButtonEl = document.createElement("button");
        applyButtonEl.className = 'action-btn apply';
        applyButtonEl.textContent = 'apply';
        applyButtonEl.addEventListener('click', applyBtnHandler);

        newArticleEl.appendChild(emailEl);
        newArticleEl.appendChild(newParagraphEl);
        newArticleEl.appendChild(newParagraph2El);

        newApplicationEl.appendChild(newArticleEl);
        newApplicationEl.appendChild(editButtonEl);
        newApplicationEl.appendChild(applyButtonEl);

        previewListEl.appendChild(newApplicationEl);

        emailInputEl.value = '';
        eventInputEl.value = '';
        locationInputEl.value = '';

        nextButtonEl.disabled = true;

        function editBtnHandler() {
            emailInputEl.value = email;
            eventInputEl.value = eventValue;
            locationInputEl.value = location;

            previewListEl.removeChild(newApplicationEl);

            nextButtonEl.disabled = false;
        }

        function applyBtnHandler() {
            previewListEl.removeChild(newApplicationEl);

            newApplicationEl.removeChild(editButtonEl);
            newApplicationEl.removeChild(applyButtonEl);

            eventListEl.appendChild(newApplicationEl);

            nextButtonEl.disabled = false;
        }
    });
}
