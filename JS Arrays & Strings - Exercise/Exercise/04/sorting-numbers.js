function solve(arr) {
    arr.sort((a, b) => a - b);

    const result = [];
    const n = arr.length;

    let left = 0;
    let right = n - 1;

    while (left <= right) {
        if (left === right) {
            result.push(arr[left]);
        } else {
            result.push(arr[left]);
            result.push(arr[right]);
        }
        left++;
        right--;
    }
    return result;
}

console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]))
