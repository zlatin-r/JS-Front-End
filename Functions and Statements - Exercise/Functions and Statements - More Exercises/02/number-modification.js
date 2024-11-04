function solve(number) {

    function avrSum(value) {
        let arrDigits = String(value).split('').map(Number);
        let totalSum = 0

        for (let num of arrDigits) {
            totalSum += num;
        }

        return totalSum / arrDigits.length;
    }

    while (avrSum(number) <= 5) {
        number += '9'
    }

    console.log(number);
}

solve(101)
solve(5835)
