function solve(number) {

    const strNumber = number.toString();

    let oddSum = 0;
    let evenSum = 0;

    for (let i = 0; i < strNumber.length; i++) {
        let currNum = Number(strNumber[i])

        if (currNum % 2 === 0) {
            evenSum += currNum;
        } else {
            oddSum += currNum;
        }
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}


solve(1000435)
solve(3495892137259234)
