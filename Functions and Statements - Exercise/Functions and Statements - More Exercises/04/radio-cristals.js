function solve(arr) {
    const targetThickness = arr.shift();
    let chunks = arr;
    let xrayUsed = false;

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

    function printTransportingAndWashing() {
        console.log('Transporting and washing');
    }

    for (let currChunk of chunks) {

        let cutCount = 0;
        let lapCount = 0;
        let grindCount = 0;
        let etchCount = 0;

        while (currChunk !== targetThickness) {
            console.log(`Processing chunk ${currChunk} microns`);

            while (cut(currChunk) >= targetThickness || cut(currChunk) === targetThickness - 1) {
                cutCount++
                currChunk = cut(currChunk);
            }
            if (cutCount) {
                console.log(`Cut x${cutCount}`)
                currChunk = transportAndWashing(currChunk);
                printTransportingAndWashing()
            }
            while (lap(currChunk) >= targetThickness || lap(currChunk) === targetThickness - 1) {
                lapCount++
                currChunk = lap(currChunk);
            }
            if (lapCount) {
                console.log(`Lap x${lapCount}`)
                currChunk = transportAndWashing(currChunk);
                printTransportingAndWashing()
            }
            while (grind(currChunk) >= targetThickness || grind(currChunk) === targetThickness - 1) {
                grindCount++
                currChunk = grind(currChunk);
            }
            if (grindCount) {
                console.log(`Grind x${grindCount}`)
                currChunk = transportAndWashing(currChunk);
                printTransportingAndWashing()
            }
            while (etch(currChunk) >= targetThickness || etch(currChunk) === targetThickness - 1) {
                etchCount++
                currChunk = etch(currChunk);
            }
            if (etchCount) {
                console.log(`Etch x${etchCount}`)
                currChunk = transportAndWashing(currChunk);
                printTransportingAndWashing()
            }
            if (currChunk === targetThickness - 1 && !xrayUsed) {
                xrayUsed = true;
                currChunk = xray(currChunk);
                console.log(`X-ray x1`)
            }
            console.log(`Finished crystal ${currChunk} microns`);
        }
    }
}

solve([1000, 4000, 8100])
// solve([1375, 50000])
