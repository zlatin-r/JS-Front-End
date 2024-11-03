function solve(num1, num2) {

    function findFactorial(n) {
        if (n === 0) {
            return 1;
        }
        return n * findFactorial(n - 1);
    }

    function divideFactorials(n1, n2) {
        let factOne = findFactorial(n1)
        let factTwo = findFactorial(n2)

        let result = factOne / factTwo

        return result.toFixed(2)
    }

    console.log(divideFactorials(num1, num2));
}

solve(6, 2)
