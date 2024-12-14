const baseUrl = 'http://localhost:3030/jsonstore/tasks';
const endpoints = {
    update: (id) => `${baseUrl}/${id}`,
    delete: (id) => `${baseUrl}/${id}`,
}

const coursesListEl = document.querySelector('#list');

const titleInputEl = document.querySelector('#course-name');
const typeInputEl = document.querySelector('#course-type');
const descriptionInputEl = document.querySelector('#description');
const teacherInputEl = document.querySelector('#teacher-name');

const loadCoursesBtnEl = document.querySelector('#load-course');
const addCourseBtnEl = document.querySelector('#add-course');
const editCourseBtnEl = document.querySelector('#edit-course');

let courseId = null;

async function attachEvents() {
    loadCoursesBtnEl.addEventListener('click', (e) => {
        e.preventDefault();
        loadCourses();
    });
    addCourseBtnEl.addEventListener('click', (e) => {
        e.preventDefault();
        addCourse();
    });
    editCourseBtnEl.addEventListener('click', (e) => {
        e.preventDefault();
        editCourse();
    });
}

async function loadCourses() {
    clearList();

    fetch(baseUrl)
        .then(res => res.json())
        .then((res) => {
            Object.values(res).forEach((course) => {
                const containerEl = document.createElement('div');
                containerEl.className = 'container';

                const courseTitleEl = document.createElement('h2');
                courseTitleEl.textContent = course.title;

                const teacherNameEl = document.createElement('h3');
                teacherNameEl.textContent = course.teacher;

                const courseTypeEl = document.createElement('h3');
                courseTypeEl.textContent = course.type;

                const courseDescriptionEl = document.createElement('h4');
                courseDescriptionEl.textContent = course.description;

                const editBtnEl = document.createElement('button');
                editBtnEl.className = 'edit-btn';
                editBtnEl.textContent = 'Edit Course';

                const finishBtnEl = document.createElement('button');
                finishBtnEl.className = 'finish-btn';
                finishBtnEl.textContent = 'Finish Course';

                containerEl.appendChild(courseTitleEl);
                containerEl.appendChild(teacherNameEl);
                containerEl.appendChild(courseTypeEl);
                containerEl.appendChild(courseDescriptionEl);
                containerEl.appendChild(editBtnEl);
                containerEl.appendChild(finishBtnEl);

                coursesListEl.appendChild(containerEl);
            });
            attachEventListeners();
        });
}

async function attachEventListeners() {
    const editButtonsEl = document.querySelectorAll('.edit-btn');
    const finishButtonsEl = document.querySelectorAll('.finish-btn');

    editButtonsEl.forEach((button) => {
        button.addEventListener('click', (e) => {
            const currCourse = e.target.parentElement;
            const title = currCourse.querySelector('h2').textContent;
            const type = currCourse.querySelector('h3:nth-of-type(1)').textContent;
            const teacher = currCourse.querySelector('h3:nth-of-type(2)').textContent;
            const description = currCourse.querySelector('h4').textContent;
            populateInputFields(title, teacher, type, description);
            coursesListEl.removeChild(currCourse);
        });
    });

    finishButtonsEl.forEach((button) => {
        button.addEventListener('click', (e) => {
            const currCourse = e.target.parentElement;
            const title = currCourse.querySelector('h2').textContent;
            deleteCourse(title);
        });
    });
}

async function deleteCourse(t) {
    getIdByTitle(t)
        .then((id) => {
            console.log(id)
            fetch(endpoints.delete(id), {
                method: 'DELETE',
            })
        })
        .then(() => {
            loadCourses();
        });
}

async function editCourse() {
    const headers = {
        method: 'PUT',
        body: JSON.stringify({
            title: titleInputEl.value,
            teacher: teacherInputEl.value,
            type: typeInputEl.value,
            description: descriptionInputEl.value,
            _id: courseId
        }),
    }
    fetch(endpoints.update(courseId), headers)
        .then(() => {
            clearInputs();
            enableAddBtn();
            loadCourses();
            courseId = null;
        });
}

async function populateInputFields(title, teacher, type, description) {
    courseId = await getIdByTitle(title);

    titleInputEl.value = title;
    teacherInputEl.value = teacher;
    typeInputEl.value = type;
    descriptionInputEl.value = description;

    enableEditBtn();
}

function getIdByTitle(title) {
    return fetch(baseUrl)
        .then(res => res.json())
        .then((data) => Object.entries(data).find(c => c[1].title === title)[1]._id);
}

async function addCourse() {
    if (!titleInputEl.value || !typeInputEl.value || !descriptionInputEl.value || !teacherInputEl.value) return;

    const headers = {
        method: 'POST',
        body: JSON.stringify({
            title: titleInputEl.value,
            type: typeInputEl.value,
            description: descriptionInputEl.value,
            teacher: teacherInputEl.value,
        }),
    }
    fetch(baseUrl, headers)
        .then(() => {
            clearInputs();
            loadCourses();
        });
}

function enableEditBtn() {
    editCourseBtnEl.disabled = false;
    addCourseBtnEl.disabled = true;
}

function enableAddBtn() {
    editCourseBtnEl.disabled = true;
    addCourseBtnEl.disabled = false;
}

function clearInputs() {
    titleInputEl.value = '';
    typeInputEl.value = '';
    descriptionInputEl.value = '';
    teacherInputEl.value = '';
}

function clearList() {
    coursesListEl.innerHTML = '';
}

attachEvents()
