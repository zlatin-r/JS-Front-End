function subtract() {
    let firstNum = parseFloat(document.querySelector('#firstNumber').value);
    let secondNum = parseFloat(document.querySelector('#secondNumber').value);

    document.querySelector('#result').textContent = firstNum - secondNum;
}

// function subtract() {
//     const [num1, num2] = [...document.querySelectorAll('input[type="text"]')].map(el => Number(el.value));
//     document.querySelector("#result").textContent = num1 - num2;
// }
