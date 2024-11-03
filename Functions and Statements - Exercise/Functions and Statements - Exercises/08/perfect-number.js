function solve(number) {
    let divisorsSum = 0

    for (let i = 1; i < number; i++) {
        if (number % i === 0) {
            divisorsSum += i
        }
    }
    console.log(number === divisorsSum ? 'We have a perfect number!' : 'It\'s not so perfect.');
}

solve(1236498)
