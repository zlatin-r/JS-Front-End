function solve(num) {
    let stringNum = num.toString() + ' ';

    for (let i = 1; i <= num; i++) {
        console.log(stringNum.repeat(num));
    }
}

solve(7)
