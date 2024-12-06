function attachEvents() {
    const tableBodyEl = takeElementByTag('#results tbody');
    const submitBtnEl = takeElementByTag('#submit');
    const firstName = takeElementByTag('input[name="firstName"]').value.trim();
    const lastName = takeElementByTag('input[name="lastName"]').value.trim();
    const facultyNumber = takeElementByTag('input[name="facultyNumber"]').value.trim();
    const grade = takeElementByTag('input[name="grade"]').value.trim();

    const baseUrl = 'http://localhost:3030/jsonstore/collections/students';

    submitBtnEl.addEventListener('click', createStudent);

    async function createStudent() {

        const studentInfo = {
            firstName,
            lastName,
            facultyNumber,
            grade,
        };

        await fetch(baseUrl, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(studentInfo),
        });
    }

    fetch(baseUrl)
        .then(res => res.json())
        .then(data => {
            Object.values(data).forEach((student) => {
                const newTrEl = createElementWithTextContent('tr');

                newTrEl.appendChild(createElementWithTextContent('td', student.firstName));
                newTrEl.appendChild(createElementWithTextContent('td', student.lastName));
                newTrEl.appendChild(createElementWithTextContent('td', student.facultyNumber));
                newTrEl.appendChild(createElementWithTextContent('td', student.grade));

                tableBodyEl.appendChild(newTrEl);
            });
        });
}

function takeElementByTag(tag) {
    return document.querySelector(tag);
}

function createElementWithTextContent(tag, text) {
    const element = document.createElement(tag);
    element.textContent = text;
    return element;
}

attachEvents();