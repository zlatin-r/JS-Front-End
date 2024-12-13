const baseUrl = 'http://localhost:3030/jsonstore/tasks/';
const endpoints = {
    update: (id) => `${baseUrl}/${id}`,
    delete: (id) => `${baseUrl}/${id}`,
}

const coursesListEl = document.querySelector('#list');

const titleInputEl = document.querySelector('#course-name');
const typeInputEl = document.querySelector('#course-type');
const descriptionInputEl = document.querySelector('#description');
const teacherNameInputEl = document.querySelector('#teacher-name');

const loadButtonEl = document.querySelector('#load-course');
const addCourseBtnEl = document.querySelector('#add-course');
const editCourseBtnEl = document.querySelector('#edit-course');

loadButtonEl.addEventListener('click', loadBtnHandler);
addCourseBtnEl.addEventListener('click', addBtnHandler);


function loadBtnHandler() {

    fetch(baseUrl)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            Object.values(data).forEach((course) => {
                const newContainer = document.createElement('div');
                newContainer.className = 'container';

                const titleEl = document.createElement('h2');
                titleEl.textContent = course.title;


                const teacherNameEl = document.createElement('h3');
                teacherNameEl.textContent = course.teacher;

                const typeEl = document.createElement('h3');
                typeEl.textContent = course.type;

                const descriptionEl = document.createElement('h4');
                descriptionEl.textContent = course.description;

                const editButtonEl = document.createElement('button');
                editButtonEl.className = 'edit-btn';
                editButtonEl.textContent = 'Edit Course';

                const finishButtonEl = document.createElement('button');
                finishButtonEl.className = 'finish-btn';
                finishButtonEl.textContent = 'Finish Course';

                newContainer.appendChild(titleEl);
                newContainer.appendChild(teacherNameEl);
                newContainer.appendChild(typeEl);
                newContainer.appendChild(descriptionEl);
                newContainer.appendChild(editButtonEl);
                newContainer.appendChild(finishButtonEl);

                coursesListEl.appendChild(newContainer);
            });
        })
        .catch(err => console.log(err));
}

function addBtnHandler(e) {
    e.preventDefault();

    console.log('clicked');
    if (!titleInputEl.value || !typeInputEl.value || !teacherNameInputEl.value || !descriptionInputEl.value) return;

    const headers = {
        method: 'POST',
        body: JSON.stringify({
            title: titleInputEl.value,
            type: typeInputEl.value,
            teacherName: teacherNameInputEl.value,
            description: descriptionInputEl.value,
        }),
    }

    fetch(baseUrl, headers)
        .then(loadBtnHandler)
        .catch(err => console.log(err));

    titleInputEl.value = '';
    typeInputEl.value = '';
    teacherNameInputEl.value = '';
    descriptionInputEl.value = '';
}
