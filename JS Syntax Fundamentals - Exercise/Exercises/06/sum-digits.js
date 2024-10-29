function solve(number) {
    let sum = 0;
    const digits = number.toString();

    for (const digit of digits) {
        sum += parseInt(digit, 10); // Convert each character to an integer and add to sum
    }
    console.log(sum);
}

solve(245678)
solve(97561)
solve(543)
