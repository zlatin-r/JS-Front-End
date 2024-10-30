function solve(num1, operator, num2) {
    let result = eval(`${num1} ${operator} ${num2}`)
    console.log(result.toFixed(2));
}

solve(5, '+', 10)
solve(25.5, '-', 3)
