window.addEventListener("load", solve);

function solve() {
    const taskListEl = document.querySelector("#task-list");
    const doneListEl = document.querySelector("#done-list");

    const placeInputEl = document.querySelector("#place");
    const actionInputEl = document.querySelector("#action");
    const personInputEl = document.querySelector("#person");

    const addBtnEl = document.querySelector("#add-btn");

    addBtnEl.addEventListener("click", addTask)

    function addTask() {

        if (placeInputEl.value === '' ||
            actionInputEl.value === '' ||
            personInputEl.value === '') {
            return
        }

        const newTaskEl = document.createElement("li");
        newTaskEl.className = "clean-task"

        const articleEl = document.createElement("article");

        const placeParagraphEl = document.createElement("p");
        placeParagraphEl.textContent = `Place:${placeInputEl.value}`;
        let place = placeInputEl.value;

        const actionParagraphEl = document.createElement("p");
        actionParagraphEl.textContent = `Action:${actionInputEl.value}`;
        let action = actionInputEl.value;

        const personParagraphEl = document.createElement("p");
        personParagraphEl.textContent = `Person:${personInputEl.value}`;
        let person = personInputEl.value;

        const buttonWrapperEl = document.createElement("div");
        buttonWrapperEl.className = "buttons";

        const editBtnEl = document.createElement("button");
        editBtnEl.className = "edit";
        editBtnEl.textContent = "Edit";
        editBtnEl.addEventListener("click", editTask);

        const doneBtnEl = document.createElement("button");
        doneBtnEl.className = "done";
        doneBtnEl.textContent = "Done";
        doneBtnEl.addEventListener("click", doneTask);

        buttonWrapperEl.appendChild(editBtnEl);
        buttonWrapperEl.appendChild(doneBtnEl);

        articleEl.appendChild(placeParagraphEl);
        articleEl.appendChild(actionParagraphEl);
        articleEl.appendChild(personParagraphEl);

        newTaskEl.appendChild(articleEl);
        newTaskEl.appendChild(buttonWrapperEl);

        taskListEl.appendChild(newTaskEl);

        clearInputs();

        function editTask() {
            placeInputEl.value = place;
            actionInputEl.value = action;
            personInputEl.value = person;

            taskListEl.removeChild(newTaskEl)
        }

        function doneTask() {
            newTaskEl.removeChild(buttonWrapperEl);

            const deleteBtnEl = document.createElement("button");
            deleteBtnEl.className = "delete";
            deleteBtnEl.textContent = "Delete";
            deleteBtnEl.addEventListener('click', deleteTask)

            newTaskEl.appendChild(deleteBtnEl);

            doneListEl.appendChild(newTaskEl);
            taskListEl.removeChild(newTaskEl);

            function deleteTask() {
                doneListEl.removeChild(newTaskEl);
            }
        }
    }

    function clearInputs() {
        placeInputEl.value = "";
        actionInputEl.value = "";
        personInputEl.value = "";
    }
}