function calc() {
    const numOne = document.getElementsByTagName('input')[0].value;
    const numTwo = document.getElementsByTagName('input')[1].value;

    const result = Number(numOne) + Number(numTwo);

    document.getElementsByTagName('input')[2].value = result;
}
