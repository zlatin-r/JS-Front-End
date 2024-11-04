function solve(arr) {
    let cleaned = 0

    for (let command of arr) {
        switch(command) {
            case 'soap': cleaned += 10; break;
            case 'water': cleaned *= 1.20; break;
            case 'vacuum cleaner': cleaned *= 1.25; break;
            case 'mud': cleaned *= 0.90; break;
        }
    }
    console.log(`The car is ${cleaned.toFixed(2)}% clean.`)
}

solve(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water'])
solve(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"])
