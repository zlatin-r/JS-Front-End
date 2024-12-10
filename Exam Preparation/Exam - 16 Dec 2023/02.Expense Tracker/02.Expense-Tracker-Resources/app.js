window.addEventListener("load", solve);

const expenseInputEl = document.querySelector("#expense");
const amountInputEl = document.querySelector("#amount");
const dateInputEl = document.querySelector("#date");

const previewListEl = document.querySelector("#preview-list");
const expensesListEL = document.querySelector("#expenses-list");

const addBtnEl = document.querySelector("#add-btn");

function solve() {
    addBtnEl.addEventListener("click", addBtnClickHandler);
}

function addBtnClickHandler() {
    if (expenseInputEl.value === "" || amountInputEl.value === "" || dateInputEl.value === "") {
        return;
    }

    const newExpenseItem = document.createElement("li");
    newExpenseItem.className = "expense-item";

    const articleEl = document.createElement("article");

    const typeEl = document.createElement("p");
    typeEl.textContent = `Type: ${expenseInputEl.value}`;
    const type = expenseInputEl.value;

    const amountEl = document.createElement("p");
    amountEl.textContent = `Amount: ${amountInputEl.value}$`;
    const amount = amountInputEl.value;

    const dateEl = document.createElement("p");
    dateEl.textContent = `Date: ${dateInputEl.value}`;
    const date = dateInputEl.value;

    const buttonWrapperEl = document.createElement("div");
    buttonWrapperEl.className = "buttons";

    const editBtnEl = document.createElement("button");
    editBtnEl.className = "btn edit";
    editBtnEl.textContent = `edit`;
    editBtnEl.addEventListener('click', editPreview);

    const okBtnEl = document.createElement("button");
    okBtnEl.className = "btn ok";
    okBtnEl.textContent = `ok`;
    okBtnEl.addEventListener('click', saveRecord);

    buttonWrapperEl.append(editBtnEl);
    buttonWrapperEl.append(okBtnEl);

    articleEl.append(typeEl);
    articleEl.append(amountEl);
    articleEl.append(dateEl);

    newExpenseItem.append(articleEl);
    newExpenseItem.append(buttonWrapperEl);

    previewListEl.append(newExpenseItem);
    clearInputs();
    disableAddBtn();

    function editPreview() {
        expenseInputEl.value = type;
        amountInputEl.value = amount;
        dateInputEl.value = date;

        previewListEl.removeChild(newExpenseItem);
        enableAddBtn();
    }

    function saveRecord() {
        previewListEl.removeChild(newExpenseItem);
        newExpenseItem.removeChild(buttonWrapperEl);

        const deleteBtnEl = document.createElement("button");
        deleteBtnEl.className = "btn delete";
        deleteBtnEl.textContent = `Delete`;
        deleteBtnEl.addEventListener('click', reloadApp);

        newExpenseItem.append(deleteBtnEl);
        expensesListEL.append(newExpenseItem);
        enableAddBtn();
    }

    function reloadApp() {
        expensesListEL.innerHTML = '';
        enableAddBtn();
    }
}


function disableAddBtn() {
    addBtnEl.disabled = true;
}

function enableAddBtn() {
    addBtnEl.disabled = false;
}

function clearInputs() {
    amountInputEl.value = "";
    dateInputEl.value = "";
    expenseInputEl.value = "";
}

