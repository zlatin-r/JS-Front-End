function solve(number) {

    function printPercentSings(number) {
        return '%'.repeat(number / 10)
    }

    function printDots(number) {
        return  '.'.repeat(10 - (number / 10))
    }

    if (number < 100) {
        console.log(`${number}% [${printPercentSings(number)}${printDots(number)}]\nStill loading...`)
    } else {
        console.log('100% Complete!\n[%%%%%%%%%%]')
    }
}

solve(30)
solve(50)
solve(100)
