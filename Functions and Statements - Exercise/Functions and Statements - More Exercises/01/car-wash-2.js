function solve(arr) {
    let cleaned = 0

    function soap(value) {
        return value += 10;
    }

    function water(value) {
        return value * 1.20;
    }

    function vacuum(value) {
        return value * 1.25;
    }

    function mud(value) {
        return value *= 0.90;
    }

    for (let command of arr) {
        if (command === 'soap') {
            cleaned = soap(cleaned)
        } else if (command === 'water') {
            cleaned = water(cleaned)
        } else if (command === 'vacuum cleaner') {
            cleaned = vacuum(cleaned)
        } else if (command === 'mud') {
            cleaned = mud(cleaned)
        }
    }

    console.log(`The car is ${cleaned.toFixed(2)}% clean.`)
}

solve(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water'])
solve(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"])
