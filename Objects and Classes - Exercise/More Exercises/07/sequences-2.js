function uniqueSequences(stringsArray) {
    let uniqueArrays = []

    for (let data of stringsArray) {
        data = JSON.parse(data).sort((a, b) => b - a);
        if (uniqueArrays.length === 0) uniqueArrays.push(data);
        else if (!(JSON.stringify(uniqueArrays).includes(JSON.stringify(data)))) {
            uniqueArrays.push(data)
        }

    }

    for (let element of uniqueArrays.sort((a, b) => a.length - b.length)) {
        console.log(`[${element.join(", ")}]`);
    }
}

uniqueSequences(["[-3, -2, -1, 0, 1, 2, 3, 4]",
"[10, 1, -17, 0, 2, 13]",
"[4, -3, 3, -2, 2, -1, 1, 0]"])
