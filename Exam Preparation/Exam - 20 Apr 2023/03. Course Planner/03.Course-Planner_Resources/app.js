const baseUrl = 'http://localhost:3030/jsonstore/tasks';
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

let courseId = null;

loadButtonEl.addEventListener('click', loadBtnHandler);
addCourseBtnEl.addEventListener('click', addBtnHandler);
editCourseBtnEl.addEventListener('click', editBtnHandler);


function loadBtnHandler() {
    coursesListEl.innerHTML = '';

    fetch(baseUrl)
        .then(res => res.json())
        .then(data => {
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
            attachEventListeners();
        })
        .catch(err => console.log(err));
}

function attachEventListeners() {
    const editButtonsEl = document.querySelectorAll('.edit-btn');
    const finishButtonsEl = document.querySelectorAll('.finish-btn');

    editButtonsEl.forEach(button => {
        button.addEventListener('click', (e) => {
            const currCourse = e.target.closest('.container');
            const courseTitle = currCourse.querySelector('h2').textContent;
            const courseTeacher = currCourse.querySelector('h3:nth-of-type(1)').textContent;
            const courseType = currCourse.querySelector('h3:nth-of-type(2)').textContent;
            const courseDescription = currCourse.querySelector('h4').textContent;
            populateInputFields(courseTitle, courseTeacher, courseType, courseDescription);
            coursesListEl.removeChild(currCourse);
        });
    });

    finishButtonsEl.forEach(button => {
        button.addEventListener('click', (e) => {

        });
    });
}

function populateInputFields(title, teacher, type, desc) {
    courseId = getIdByTitle(title);

    titleInputEl.value = title;
    teacherNameInputEl.value = teacher;
    typeInputEl.value = type;
    descriptionInputEl.value = desc;

    editCourseBtnEl.disabled = false;
    addCourseBtnEl.disabled = true;
}

function getIdByTitle(courseTitle) {
    return fetch(baseUrl)
        .then(res => res.json())
        .then(res => Object.entries(res).find(course => course[1].title === courseTitle)[1]._id);
}

function addBtnHandler(e) {
    e.preventDefault();

    if (!titleInputEl.value || !typeInputEl.value || !teacherNameInputEl.value || !descriptionInputEl.value) return;

    const headers = {
        method: 'POST',
        body: JSON.stringify({
            title: titleInputEl.value,
            type: typeInputEl.value,
            teacher: teacherNameInputEl.value,
            description: descriptionInputEl.value,
        }),
    }

    fetch(baseUrl, headers)
        .then(() => {
            loadBtnHandler();
            clearInputFields();
        })
        .catch(err => console.log(err));

    // clearInputFields
}

function editBtnHandler() {
    const data = {
        title: titleInputEl.value,
        type: typeInputEl.value,
        teacher: teacherNameInputEl.value,
        description: descriptionInputEl.value,
        _id: courseId
    }

    fetch(endpoints.update(data._id), {
        method: 'PUT',
        body: JSON.stringify(data),
    }).then(() => {
        loadBtnHandler()
    })

    editCourseBtnEl.disabled = false;
    addCourseBtnEl.disabled = true;
}

function clearInputFields() {
    titleInputEl.value = '';
    typeInputEl.value = '';
    teacherNameInputEl.value = '';
    descriptionInputEl.value = '';
}
