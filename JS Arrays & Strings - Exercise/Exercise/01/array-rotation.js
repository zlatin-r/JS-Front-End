function solve(arr, num) {
    let firstEl = 0;

    for (let i = 0; i < num; i++) {
        firstEl = arr.shift();
        arr.push(firstEl);
    }
    console.log(arr);
}

solve([1, 2, 3, 4, 5], 3)
solve([51, 47, 32, 61, 21], 2)
solve([32, 21, 61, 1], 4)
solve([2, 4, 15, 31], 5)
