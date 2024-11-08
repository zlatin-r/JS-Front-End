function solve(input) {
    let result = [];

    for (let list of input) {
        list = JSON.parse(list).sort((a, b) => b - a);

        if (!JSON.stringify(result).includes(JSON.stringify(list))) {
            result.push(list);
        }
    }

    for (let el of result.sort((a,b) => a.length - b.length)) {
        console.log(`[${el.join(", ")}]`);
    }
}

solve(["[-3, -2, -1, 0, 1, 2, 3, 4]",
    "[10, 1, -17, 0, 2, 13]",
    "[4, -3, 3, -2, 2, -1, 1, 0]"]
)
