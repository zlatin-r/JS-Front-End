window.addEventListener("load", solve);

function solve() {
    const expenseInputEl = document.querySelector("#expense");
    const amountInputEl = document.querySelector("#amount");
    const dateInputEl = document.querySelector("#date");

    let previewListEl = document.querySelector("#preview-list");
    let expensesListEL = document.querySelector("#expenses-list");

    const addBtnEl = document.querySelector("#add-btn");
    const deleteBtnEl = document.querySelector(".delete");

    addBtnEl.addEventListener("click", addBtnClickHandler);

    function addBtnClickHandler() {
        if (expenseInputEl.value === "" || amountInputEl.value === "" || dateInputEl.value === "") {
            return;
        }
        
        const newExpenseItem = document.createElement("li");
        newExpenseItem.className = "expense-item";

        const articleEl = document.createElement("article");

        const typeEl = document.createElement("p");
        const type = expenseInputEl.value;
        typeEl.textContent = `Type: ${type}`;

        const amountEl = document.createElement("p");
        const amount = amountInputEl.value;
        amountEl.textContent = `Amount: ${amount}$`;

        const dateEl = document.createElement("p");
        const date = dateInputEl.value;
        dateEl.textContent = `Date: ${date}`;

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

            expensesListEL.append(newExpenseItem);
            enableAddBtn();
            deleteBtnEl.addEventListener("click", deleteAll);
        }
    }

    function deleteAll() {
        location.reload();
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
}



