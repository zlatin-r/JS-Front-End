function solve(number) {
    if (number < 100) {
        let percentSigns = '%'.repeat(number / 10)
        let dots = '.'.repeat(10 - (number / 10))

        console.log(`${number}% [${percentSigns}${dots}]\nStill loading...`)
    } else {
        console.log('100% Complete!\n[%%%%%%%%%%]')
    }
}

solve(30)
solve(50)
solve(100)
