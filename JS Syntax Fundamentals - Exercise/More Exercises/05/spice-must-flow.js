function solve(amountYield) {
    let days = 0
    let storage = 0

    while (amountYield >= 100) {
        days++
        let extractedYield = 0

        extractedYield += amountYield
        extractedYield -= 26
        storage += extractedYield
        amountYield -= 10
    }
    if (storage >= 26) {
        storage -= 26
    }
    console.log(days)
    console.log(storage)
}

solve(450) //36, 8938
