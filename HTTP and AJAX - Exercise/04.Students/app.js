function attachEvents() {
    const firstNameInputEl = takeElementByTag('input[name="firstName"]');
    const lastNameInputEl = takeElementByTag('input[name="lastName"]');
    const facultyNumberInputEl = takeElementByTag('input[name="facultyNumber"]');
    const gradeInputEl = takeElementByTag('input[name="grade"]');
    const submitBtnEl = takeElementByTag('#submit');

    const baseUrl = 'http://localhost:3030/jsonstore/collections/students';

    submitBtnEl.addEventListener('click', createStudent);

    async function createStudent() {

        const studentInfo = {
            firstName: firstNameInputEl.value,
            lastName: lastNameInputEl.value,
            facultyNumber: facultyNumberInputEl.value,
            grade: gradeInputEl.value,
        }

        await fetch(baseUrl, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(studentInfo),
        });
    }
}

function takeElementByTag(tag) {
    return document.querySelector(tag);
}

function createElement(tag) {
    return document.createElement(tag);
}

attachEvents();