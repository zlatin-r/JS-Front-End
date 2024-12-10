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

        const foodType = document.querySelector('#food');
        foodType.innerText = meal.name;
    });
}

//---------------------------- Helpers ---------------------------------------------------
function clearMealList() {
    mealListEl.innerHTML = '';
}
attachEvents();