function subtract() {
    let firstNum = parseFloat(document.querySelector('#firstNumber').value);
    let secondNum = parseFloat(document.querySelector('#secondNumber').value);

    document.querySelector('#result').textContent = firstNum - secondNum;
}