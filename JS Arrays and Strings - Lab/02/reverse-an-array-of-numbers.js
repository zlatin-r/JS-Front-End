function solve(num, array) {
    let sliceArray = array.slice(0, num);
    let revArray = sliceArray.reverse();
    console.log(revArray.join(' '));
}

solve(3, [10, 20, 30, 40, 50])
solve(4, [-1, 20, 99, 5])
solve(2, [66, 43, 75, 89, 47])
