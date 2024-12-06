function attachEvents() {
    const tableEl = takeElementByTag('#results tbody');
    const submitBtnEl = takeElementByTag('#submit');

    const baseUrl = 'http://localhost:3030/jsonstore/collections/students';

    submitBtnEl.addEventListener('click', createStudent);

    async function createStudent() {

        const firstName = takeElementByTag('input[name="firstName"]').value.trim();
        const lastName = takeElementByTag('input[name="lastName"]').value.trim();
        const facultyNumber = takeElementByTag('input[name="facultyNumber"]').value.trim();
        const grade = takeElementByTag('input[name="grade"]').value.trim();

        if (!firstName || !lastName || !facultyNumber || grade) {
            return
        }

        const studentInfo = {
            firstName,
            lastName,
            facultyNumber,
            grade: Number(grade),
        };

        await fetch(baseUrl, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(studentInfo),
        });

        const response = await fetch(baseUrl);
        const data = await response.json();

        console.log(data);

        Object.entries(data).forEach(([key, value]) => {
            const newTrEl = createElement('tr');

            const firstNameTdEl = createElement('td');
            firstNameTdEl.textContent = value.firstName;
            const lastNameTdEl = createElement('td');
            lastNameTdEl.textContent = value.lastName;
            const facultyNumTdEl = createElement('td');
            facultyNumTdEl.textContent = value.facultyNumber;
            const gradeTdEl = createElement('td');
            gradeTdEl.textContent = value.grade;

            newTrEl.appendChild(firstNameTdEl);
            newTrEl.appendChild(lastNameTdEl);
            newTrEl.appendChild(facultyNumTdEl);
            newTrEl.appendChild(gradeTdEl);

            tableEl.appendChild(newTrEl);
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