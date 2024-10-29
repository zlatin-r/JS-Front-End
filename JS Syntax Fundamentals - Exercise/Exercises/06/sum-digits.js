function solve(number) {
    let sum = 0;
    const digits = number.toString();

    for (let i = 0; i < digits.length; i++) {
        sum += Number(digits[i]);
    }
    console.log(sum);
}

solve(245678)
solve(97561)
solve(543)
