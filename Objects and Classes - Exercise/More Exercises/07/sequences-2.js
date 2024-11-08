function solve(input) {
    let result = [];

    for (let list of input) {
        let numList = JSON.parse(list).sort((a, b) => b - a);
        let strList = JSON.stringify(numList).split(',').join(', ')

        if (!result.includes(strList)) {
            result.push(strList);
        }
    }

    let sortedResult = result.sort((a, b) => a.length - b.length);
    console.log(sortedResult.join('\n'));
}

solve(["[7.14, 7.180, 7.339, 80.099]",
    "[7.339, 80.0990, 7.140000, 7.18]",
    "[7.339, 7.180, 7.14, 80.099]"]
)
