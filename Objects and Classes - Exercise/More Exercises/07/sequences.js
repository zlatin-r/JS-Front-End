function solve(input) {

    function sortArrays(arr) {
        for (let el of arr) {
            el = el.map(Number).sort((a, b) => b - a);
        }
    }

    for (let list of input) {
        console.log(list);
        sortArrays(list)
        console.log(list)
    }
}

solve(["[-3, -2, -1, 0, 1, 2, 3, 4]",
    "[10, 1, -17, 0, 2, 13]",
    "[4, -3, 3, -2, 2, -1, 1, 0]"])
