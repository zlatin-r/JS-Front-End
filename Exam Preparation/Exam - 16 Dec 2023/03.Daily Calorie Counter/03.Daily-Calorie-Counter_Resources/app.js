const baseUrl = 'http://localhost:3030/jsonstore/tasks';

const endpoints = {
    update: (id) => `${baseUrl}/${id}`,
    delete: (id) => `${baseUrl}/${id}`,
}

const mealListEl = document.querySelector('#list');

const loadMealsBtnEl = document.querySelector('#load-meals');
const addMealBtnEl = document.querySelector('#add-meal');
const editMealBtnEl = document.querySelector('#edit-meal');

const foodInputEl = document.querySelector('#food');
const timeInputEl = document.querySelector('#time');
const caloriesInputEl = document.querySelector('#calories');

let mealId = null;

function attachEvents() {
    loadMealsBtnEl.addEventListener('click', loadAllMeals);
    addMealBtnEl.addEventListener('click', addMeal);
    editMealBtnEl.addEventListener('click', editMeal);
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

    addEventListeners();
}

function addEventListeners() {
    const changeButtonsEl = document.querySelectorAll('.change-meal');
    const deleteButtonsEl = document.querySelectorAll('.delete-meal');

    changeButtonsEl.forEach(button => {
        button.addEventListener('click', (e) => {
            const currMealEl = e.target.closest('.meal');
            const food = currMealEl.querySelector('h2').textContent;
            const time = currMealEl.querySelector('h3:first-of-type').textContent;
            const calories = currMealEl.querySelector('h3:last-of-type').textContent;
            populateInputFields(food, time, calories);
            enableEditBtn();
        });
    });

    deleteButtonsEl.forEach(button => {
        button.addEventListener('click', (e) => {
            const currMealEl = e.target.closest('.meal');

        })
    })
}

function addMeal() {
    checkInputFields();

    const headers = {
        method: 'POST',
        body: JSON.stringify({
            food: foodInputEl.value,
            calories: caloriesInputEl.value,
            time: timeInputEl.value,
        }),
    }

    fetch(baseUrl, headers)
        .then(loadAllMeals);

    clearInputFields();
}

function editMeal() {
    const data = {
        food: foodInputEl.value,
        calories: caloriesInputEl.value,
        time: timeInputEl.value,
        _id: mealId,
    }

    fetch (endpoints.update(data._id), {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data),
    }).then(() => {
        loadAllMeals();
        clearInputFields();
        enableAddBtn();
        mealId = null;
    });
}

function deleteMeal() {

}


//---------------------------- Helpers ---------------------------------------------------
function enableEditBtn() {
    editMealBtnEl.disabled = false;
    addMealBtnEl.disabled = true;
}

function enableAddBtn() {
    addMealBtnEl.disabled = false;
    editMealBtnEl.disabled = true;
}

function getIdByName(name) {
    return fetch(baseUrl)
        .then(res => res.json())
        .then(res => Object.entries(res).find(m => m[1].food === name)[1]._id);
}

async function populateInputFields(f, t, c) {
    mealId = await getIdByName(f);

    foodInputEl.value = f;
    timeInputEl.value = t;
    caloriesInputEl.value = c;
}

function clearInputFields() {
    foodInputEl.value = '';
    timeInputEl.value = '';
    caloriesInputEl.value = '';
}

function clearMealList() {
    mealListEl.innerHTML = '';
}

function checkInputFields() {
    if (foodInputEl.value === '' || timeInputEl.value === '' || caloriesInputEl.value === '') {
        return
    }
}

attachEvents();