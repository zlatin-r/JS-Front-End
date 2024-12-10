window.addEventListener("load", solve);

const expenseInputEl = document.querySelector("#expense");
const amountInputEl = document.querySelector("#amount");
const dateInputEl = document.querySelector("#date");

const previewListEl = document.querySelector("#preview-list");

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

    const amountEl = document.createElement("p");
    amountEl.textContent = `Amount: ${amountInputEl.value}$`;

    const dateEl = document.createElement("p");
    dateEl.textContent = `Date: ${dateInputEl.value}`;

    const buttonWrapperEl = document.createElement("div");
    buttonWrapperEl.className = "buttons";

    const editBtnEl = document.createElement("button");
    editBtnEl.className = "btn edit";
    editBtnEl.textContent = `edit`;

    const okBtnEl = document.createElement("button");
    okBtnEl.className = "btn ok";
    okBtnEl.textContent = `ok`;

    buttonWrapperEl.append(editBtnEl);
    buttonWrapperEl.append(okBtnEl);

    articleEl.append(typeEl);
    articleEl.append(amountEl);
    articleEl.append(dateEl);

    newExpenseItem.append(articleEl);
    newExpenseItem.append(buttonWrapperEl);

    previewListEl.append(newExpenseItem);



}