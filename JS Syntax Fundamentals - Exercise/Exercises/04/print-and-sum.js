function solve(a, b) {

    let numbers = '';
    let sum = 0

    for (let i = a; i <= b; i++) {
        sum += i
        numbers += i + ' '
    }
    console.log(numbers);
    console.log(`Sum: ${sum}`)
}

solve(5, 10)
solve(0, 26)
solve(50, 60)
