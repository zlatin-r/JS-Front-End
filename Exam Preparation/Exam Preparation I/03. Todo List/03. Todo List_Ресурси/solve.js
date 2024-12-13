const baseUrl = 'http://localhost:3030/jsonstore/tasks'
const endpoints = {
    update: (id) => `${baseUrl}/${id}`,
    delete: (id) => `${baseUrl}/${id}`,
}

const todoListEl = document.querySelector('#todo-list');

const loadAllTasksBtnEl = document.querySelector('#load-button');

function attachEvents() {
      loadAllTasksBtnEl.addEventListener('click', loadAllTasks)
}

async function loadAllTasks() {
    const response = await fetch(baseUrl);
    const data = await response.json();

    Object.values(data).forEach((task) => {
            const newTaskEl = document.createElement('li');
            const taskName = task.name;

            const removeBtnEl = document.createElement('button');
            removeBtnEl.textContent = 'Remove';

            const editBtnEl = document.createElement('button');
            editBtnEl.textContent = 'Edit';

            newTaskEl.appendChild(taskName);
            newTaskEl.appendChild(removeBtnEl);
            newTaskEl.appendChild(editBtnEl);

            todoListEl.appendChild(newTaskEl);
    })

    console.log(data);
}

function clearToDoList() {
    todoListEl.innerHTML = '';
}


attachEvents();
