const baseUrl = 'http://localhost:3030/jsonstore/tasks';

const endpoints = {
    update: (id) => `${baseUrl}/${id}`,
    delete: (id) => `${baseUrl}/${id}`,
}

const mealListEl = document.querySelector('#list');

const loadMealsBtnEl = document.querySelector('#load-meals');

function attachEvents() {
    loadMealsBtnEl.addEventListener('click', loadAllMeals)
}

async function loadAllMeals() {
    clearMealList();

    const response = await fetch(baseUrl);
    const data = await response.json();

    Object.values(data).forEach((meal) => {
        const newMealEl = document.createElement('div');
        newMealEl.className = "meal";

        const foodTypeEl = document.createElement('h2');
        foodTypeEl.textContent = meal.food;

        const timeEl = document.createElement('h3');
        timeEl.textContent = meal.time;

        const caloriesEl = document.createElement('h3');
        caloriesEl.textContent = meal.calories;

        const buttonWrapperEl = document.createElement('div');
        buttonWrapperEl.id = 'meal-buttons';

        const changeBtnEl = document.createElement('button');
        changeBtnEl.className = 'change-meal';
        changeBtnEl.textContent = 'Change';

        const deleteBtnEl = document.createElement('button');
        deleteBtnEl.className = 'delete-meal';
        deleteBtnEl.textContent = 'Delete';

        newMealEl.appendChild(foodTypeEl);
        newMealEl.appendChild(timeEl);
        newMealEl.appendChild(caloriesEl);

        buttonWrapperEl.appendChild(changeBtnEl);
        buttonWrapperEl.appendChild(deleteBtnEl);

        newMealEl.appendChild(buttonWrapperEl);

        mealListEl.appendChild(newMealEl);
    });
}

//---------------------------- Helpers ---------------------------------------------------
function clearMealList() {
    mealListEl.innerHTML = '';
}
attachEvents();