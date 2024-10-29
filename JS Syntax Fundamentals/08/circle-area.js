function solve(value) {

    let result
    let inputType = typeof (value)

    if (inputType === 'number') {
        result = Math.pow(value, 2) * Math.PI
        console.log(result.toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${inputType}.`)
    }
}

solve(5)
solve('name')
