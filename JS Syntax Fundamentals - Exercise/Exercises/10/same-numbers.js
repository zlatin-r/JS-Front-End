function solve(number) {
    let sum = 0
    let strNumber = number.toString()
    let result = true
    let prevNum = Number(strNumber[0])

    for (let i = 0; i < strNumber.length; i++) {

        let curNum = Number(strNumber[i])
        sum += curNum

        if (prevNum !== curNum) {
            result = false
        }

        prevNum = curNum
    }
    console.log(result)
    console.log(sum)
}

solve(2222222)
solve(1234)
