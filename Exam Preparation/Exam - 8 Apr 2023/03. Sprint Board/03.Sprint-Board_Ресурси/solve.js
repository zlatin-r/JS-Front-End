const baseUrl = 'http://localhost:3030/jsonstore/tasks'
const endpoints = {
    update: (id) => `${baseUrl}/${id}`,
    delete: (id) => `${baseUrl}/${id}`,
}
const loadBoardBtnEl = document.querySelector('#load-board-btn');
const addTaskBtnEl = document.querySelector('#create-task-btn');

const todoListEl = document.querySelector('#todo-section .task-list');
const inProgressListEl = document.querySelector('#in-progress-section .task-list');
const codeReviewListEl = document.querySelector('#code-review-section .task-list');
const doneListEl = document.querySelector('#done-section .task-list');

const titleInputEl = document.querySelector('#title');
const descriptionInputEl = document.querySelector('#description');

let taskId = null;

loadBoardBtnEl.addEventListener('click', loadBoard);
addTaskBtnEl.addEventListener('click', addTask);

function attachListeners() {
    const moveButtons = document.querySelectorAll('.task-list button');
    const doneButtons = document.querySelectorAll('#done-section button');

    moveButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const currTaskTitle = e.target.parentElement.querySelector('h3').textContent;
            const currSectionId = e.target.closest('article').id;
            changeStatus(currTaskTitle, currSectionId);
        });
    });

    doneButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const currTaskTitle = e.target.parentElement.querySelector('h3').textContent;
            deleteTask(currTaskTitle);
        });
    });
}

function addTask() {
    const headers = {
        method: 'POST',
        body: JSON.stringify({
            title: titleInputEl.value,
            description: descriptionInputEl.value,
            status: "ToDo"
        }),
    }
    fetch(baseUrl, headers)
        .then(() => {
            loadBoard();
            clearInputFields();
        });
}

async function loadBoard() {
    clearTaskList();

    const response = await fetch(baseUrl);
    const data = await response.json();

    Object.values(data).forEach((task) => {
        const newTask = document.createElement('li');
        newTask.className = 'task';

        const taskTitle = document.createElement('h3');
        taskTitle.textContent = task.title;

        const taskDescription = document.createElement('p');
        taskDescription.textContent = task.description;

        const taskButton = document.createElement('button');

        newTask.appendChild(taskTitle);
        newTask.appendChild(taskDescription);

        switch (task.status) {
            case 'ToDo':
                taskButton.textContent = 'Move to In Progress';
                newTask.appendChild(taskButton);
                todoListEl.appendChild(newTask);
                break;
            case 'In Progress':
                taskButton.textContent = 'Move to Code Review';
                newTask.appendChild(taskButton);
                inProgressListEl.appendChild(newTask);
                break;
            case 'Code Review':
                taskButton.textContent = 'Move to Done';
                newTask.appendChild(taskButton);
                codeReviewListEl.appendChild(newTask);
                break;
            case 'Done':
                taskButton.textContent = 'Close';
                newTask.appendChild(taskButton);
                doneListEl.appendChild(newTask);
                break;
        }
    });
    attachListeners();
}

async function changeStatus(title, SectionId) {
    taskId = await getTaskByIdTitle(title);

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
            _id: taskId,
        })
    }
    fetch(endpoints.update(taskId), headers)
        .then(() => {
            loadBoard();
        })
}

async function deleteTask(taskTitle) {
    taskId = await getTaskByIdTitle(taskTitle);

    fetch(endpoints.delete(taskId), {
        method: 'DELETE',
    }).then(() => {
        loadBoard();
    })
}

function getTaskByIdTitle(title) {
    return fetch(baseUrl)
        .then(response => response.json())
        .then(data => Object.entries(data).find(task => task[1].title === title)[1]._id);
}

function clearInputFields() {
    titleInputEl.value = '';
    descriptionInputEl.value = '';
}

function clearTaskList() {
    todoListEl.innerHTML = '';
    inProgressListEl.innerHTML = '';
    doneListEl.innerHTML = '';
    codeReviewListEl.innerHTML = '';
}
