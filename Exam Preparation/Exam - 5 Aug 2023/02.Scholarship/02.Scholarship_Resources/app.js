window.addEventListener("load", solve);

//Functionality: Works! // In Judge: 70 points------------------------------------------------------

function solve() {

    function createElement(tag, properties, container) {
        const element = document.createElement(tag);

        Object.keys(properties).forEach(key => {
            if (typeof properties[key] === "object") {
                if (!element[key]) element[key] = {}; // same like: element[key] ??= {};
                Object.assign(element[key], properties[key]);
            } else {
                element[key] = properties[key];
            }
        });

        if (container) {
            container.appendChild(element);
        }

        return element;
    }

    const fields = [...document.querySelectorAll('#student, #university, #score')];
    const btnNext = document.querySelector('#next-btn');

    const previewListEl = document.querySelector('#preview-list');
    const candidatesListEl = document.querySelector('#candidates-list');

    function createEntry({student, uni, score}) {
        const entryEl = createElement('li', {
                className: 'application',
                dataset: {student, uni, score}
            },
            previewListEl);
        const articleEl = createElement('article', {}, entryEl);

        createElement('p', {textContent: student}, articleEl);
        createElement('p', {textContent: `University: ${uni}`}, articleEl);
        createElement('p', {textContent: `Score: ${score}`}, articleEl);

        createElement('button', {
            className: 'action-btn edit',
            textContent: 'edit',
            onclick: editHandler
        }, entryEl);
        createElement('button', {
            className: 'action-btn apply',
            textContent: 'apply',
            onclick: applyHandler
        }, entryEl);
    }

    btnNext.addEventListener('click', (e) => {

        const [student, uni, score] = fields.map(field => field.value);

        if (!student || !uni || !score) return;

        createEntry({student, uni, score});

        e.target.disabled = true;

        fields.forEach(field => field.value = '');
    });

    function editHandler(e) {
        const entryEl = e.target.closest('li');
        entryEl.remove();

        const values = [entryEl.dataset.student, entryEl.dataset.uni, entryEl.dataset.score]

        fields.forEach((field, index) => field.value = values[index]);

        btnNext.disabled = false;
    }

    function applyHandler(e) {
        const entryEl = e.target.closest('li');
        entryEl.remove();

        entryEl.querySelector('.action-btn').remove();
        entryEl.querySelector('.action-btn').remove();

        candidatesListEl.appendChild(entryEl);

        btnNext.disabled = false;
    }
}
  