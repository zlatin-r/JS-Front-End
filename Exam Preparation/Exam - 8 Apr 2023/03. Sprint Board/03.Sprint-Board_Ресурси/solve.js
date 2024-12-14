const baseUrl = 'http://localhost:3030/jsonstore/tasks'
const endpoints = {
    update: (id) => `${baseUrl}/${id}`,
    delete: (id) => `${baseUrl}/${id}`,
}

const todoSectionEl = document.querySelector('#todo-section');
const inProgressSectionEl = document.querySelector('#in-progress-section');
const codeReviewSectionEl = document.querySelector('#code-review-section');
const doneSectionEl = document.querySelector('#done-section');

const taskTitleEl = document.querySelector('#title');
const descriptionEl = document.querySelector('#description');

const loadBtnEl = document.querySelector('#load-board-btn');
const addTaskBtnEl = document.querySelector('#create-task-btn');

let taskId = null;

loadBtnEl.addEventListener('click', loadTasks);
addTaskBtnEl.addEventListener('click', addTask);

function loadTasks() {
    clearTasks();

    fetch(baseUrl)
        .then(res => res.json())
        .then((res) => {
            Object.values(res).forEach((task) => {
                const taskEl = document.createElement('li');
                taskEl.className = 'task';

                const titleEl = document.createElement('h3');
                titleEl.textContent = task.title;

                const descriptionEl = document.createElement('p');
                descriptionEl.textContent = task.description;

                taskEl.appendChild(titleEl);
                taskEl.appendChild(descriptionEl);

                const buttonEl = document.createElement('button');

                switch (task.status) {
                    case 'ToDo':
                        buttonEl.textContent = 'Move to In Progress';
                        taskEl.appendChild(buttonEl);
                        todoSectionEl.appendChild(taskEl)
                        break;
                    case 'In Progress':
                        buttonEl.textContent = 'Move to Code Review';
                        taskEl.appendChild(buttonEl);
                        inProgressSectionEl.appendChild(taskEl);
                        break;
                    case 'Code Review':
                        buttonEl.textContent = 'Move to Done';
                        taskEl.appendChild(buttonEl);
                        codeReviewSectionEl.appendChild(taskEl);
                        break;
                    case 'Done':
                        buttonEl.textContent = 'Close';
                        taskEl.appendChild(buttonEl);
                        doneSectionEl.appendChild(taskEl);
                        break;
                }
            });
            addEventListeners();
        });
}

function addTask() {
    // TODO check if empty input fields needed

    const headers = {
        method: 'POST',
        body: JSON.stringify({
            title: taskTitleEl.value,
            description: descriptionEl.value,
            status: 'ToDo'
        }),
    }
    fetch(baseUrl, headers)
        .then(() => {
            loadTasks();
            clearInputs();
        });
}

function addEventListeners() {
    const moveButtons = document.querySelectorAll(
        '#todo-section button, #in-progress-section button, #code-review-section button'
    );
    const closeButtons = document.querySelectorAll('#done-section button');

    moveButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const currTask = e.target.parentElement;
            const taskTitle = currTask.querySelector('h3').textContent;
            const currBoard = currTask.parentElement.id;
            changeStatus(taskTitle, currBoard);
        });
    });

    closeButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const currTask = e.target.parentElement;
            const taskTitle = currTask.querySelector('h3').textContent;
            deleteTask(taskTitle);
        })
    })
}

//---------- Helpers ---------------------
async function changeStatus(title, SectionId) {
    taskId = await getIdByTitle(title);
    let newStatus = null;

    switch (SectionId) {
        case 'todo-section':
            newStatus = 'In Progress';
            break;
        case 'in-progress-section':
            newStatus = 'Code Review';
            break;
        case 'code-review-section':
            newStatus = 'Done';
            break;
    }

    const headers = {
        method: 'PATCH',
        body: JSON.stringify({
            status: newStatus,
        })
    }

    fetch(endpoints.update(taskId), headers)
        .then(() => {
            loadTasks();
        });
}

function deleteTask(title) {
    getIdByTitle(title)
        .then((id) =>
            fetch(endpoints.delete(id), {method: 'DELETE'}))
        .then(() => {
            loadTasks();
        });
}

function getIdByTitle(title) {
    return fetch(baseUrl)
        .then(res => res.json())
        .then((res) => Object.entries(res).find(t => t[1].title === title)[1]._id);
}

function clearInputs() {
    taskTitleEl.value = '';
    descriptionEl.value = '';
}

function clearTasks() {
    todoSectionEl.innerHTML = '';
    inProgressSectionEl.innerHTML = '';
    codeReviewSectionEl.innerHTML = '';
    doneSectionEl.innerHTML = '';
}
