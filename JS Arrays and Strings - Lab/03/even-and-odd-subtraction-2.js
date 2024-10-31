function solve(arr) {

    function sum(arr) {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        return sum;
    }

    let evenArr = arr.filter(number => number % 2 === 0)
    let oddArr = arr.filter(number => number % 2 !== 0)

    console.log(sum(evenArr) - sum(oddArr));
}

solve([1, 2, 3, 4, 5, 6])
solve([3, 5, 7, 9])
solve([2, 4, 6, 8, 10])