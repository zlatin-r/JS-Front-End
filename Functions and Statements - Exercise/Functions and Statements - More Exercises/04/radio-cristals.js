function solve(arr) {
    const targetThickness = arr[0];
    let chunks = arr.slice(1);
    let xrayUsed = false;

    let cutCount = 0;
    let lapCount = 0;
    let grindCount = 0;
    let etchCount = 0;

    let result = []

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
        xrayUsed = true;
        return value += 1;
    }

    function transportAndWashing(value) {
        return value = Math.floor(value)
    }

    for (let currChunk of chunks) {
        while (currChunk > targetThickness) {
            console.log(`Processing chunk ${currChunk} microns`);

            while (cut(currChunk) >= targetThickness || cut(currChunk) === targetThickness - 1) {
                cutCount++
                currChunk = cut(currChunk);
            }
            console.log(`Cut x${cutCount}`)
            currChunk = transportAndWashing(currChunk);
            console.log('Transporting and washing');

            while (lap(currChunk) >= targetThickness || lap(currChunk) === targetThickness - 1) {
                lapCount++
                currChunk = lap(currChunk);
            }
            console.log(`Lap x${lapCount}`)
            currChunk = transportAndWashing(currChunk);
            console.log('Transporting and washing');

            while (grind(currChunk) >= targetThickness || grind(currChunk) === targetThickness - 1) {
                grindCount++
                currChunk = grind(currChunk);
            }
            console.log(`Grind x${grindCount}`)
            currChunk = transportAndWashing(currChunk);
            console.log('Transporting and washing');

            while (etch(currChunk) >= targetThickness || etch(currChunk) === targetThickness - 1) {
                etchCount++
                currChunk = etch(currChunk);
            }
            console.log(`Etch x${etchCount}`)
            currChunk = transportAndWashing(currChunk);
            console.log('Transporting and washing');

            if (currChunk === targetThickness - 1 && !xrayUsed) {
                xrayUsed = true;
                xray(currChunk);
                console.log(`X-ray x1`)
            }
        }
        console.log(`Finished crystal ${currChunk} microns`);
    }
}

solve([1000, 8100])