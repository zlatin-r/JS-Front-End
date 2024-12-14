const baseUrl = 'http://localhost:3030/jsonstore/tasks'
const endpoints = {
    update: (id) => `${baseUrl}/${id}`,
    delete: (id) => `${baseUrl}/${id}`,
}

const todoSectionEl = document.querySelector('#todo-section');
const inProgressSectionEl = document.querySelector('#in-progress-section');
const codeReviewSectionEl = document.querySelector('#code-review-section');
const doneSectionEl = document.querySelector('#done-section');

const loadBtnEl = document.querySelector('#load-board-btn');

loadBtnEl.addEventListener('click', loadTasks);

function loadTasks() {
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
        });
}