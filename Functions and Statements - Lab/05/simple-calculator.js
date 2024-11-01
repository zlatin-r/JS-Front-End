function calculator(numOne, numTwo, operator) {

  const operations = {
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b,
    add: (a, b) => a + b,
    subtract: (a, b) => a - b
  };

  return operations[operator](numOne, numTwo);
}

console.log(calculator(5, 5, 'multiply'));
console.log(calculator(40, 8, 'divide'));
console.log(calculator(12, 19, 'add'));
console.log(calculator(50, 13, 'subtract'));
