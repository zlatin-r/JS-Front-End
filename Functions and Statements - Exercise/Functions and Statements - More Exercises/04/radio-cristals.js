function solve(arr) {
    const targetThickness = arr[0];
    let chunks = arr.slice(1);


    function cut(value) {
        return value /= 4;
    }

    function lap(value) {
        return value *= 0.80;
    }

    function grind(value) {
        return value -= 20;
    }

    function etch(value) {
        return value -= 2;
    }

    function xray(value) {
        return value += 1;
    }

    function transportAndWashing(value) {
        return value = Math.floor(value)
    }

    for (let currChunk of chunks) {
        while (currChunk > targetThickness) {
            while (cut(currChunk) >= targetThickness) {
                currChunk = cut(currChunk);
            }
            while (lap(currChunk) > targetThickness) {
                currChunk = cut(currChunk);
            }
        }
    }
    console.log(currChunk);
}

solve([1000, 4000, 8100])