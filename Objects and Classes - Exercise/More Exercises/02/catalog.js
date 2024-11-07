function solve(input) {
    let catalog = {}

    for (let line of input) {
        let [item, price] = line.split(' : ');

        if (!catalog.hasOwnProperty(item[0])) {
            catalog[item[0]] = [`${item}: ${price}`];
        } else {
            catalog[item[0]].push(`${item}: ${price}`);
        }
    }

    let sortedKeys = Object.keys(catalog).sort();

    for (let key of sortedKeys) {
        console.log(`${key}`)
        let sortedItems = catalog[key].sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))

        for (let item of sortedItems) {
            console.log(`  ${item}`)
        }
    }
}

solve([
        'Appricot : 20.4',
        'Fridge : 1500',
        'TV : 1499',
        'Deodorant : 10',
        'Boiler : 300',
        'Apple : 1.25',
        'Anti-Bug Spray : 15',
        'T-Shirt : 10'
    ]
)
