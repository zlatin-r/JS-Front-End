function solve(number) {
    let pattern = 'ATCGTTAGGG'
    let asterisk = '*'
    let dash = '-'

    for (let i = 0; i < number; i ++) {
        if (i === pattern.length) {

        }
        console.log(`${pattern[i]} ${dash} ${pattern[i + 1]}`)
    }
}

solve(10)