function solve(arr) {
    const n = parseInt(arr.shift());
    const team = {};

    for (let i = 0; i < n; i++) {
        const [name, shift, coffeeTypes] = arr.shift().split(' ');
        team[name] = {shift: shift, coffeeType: coffeeTypes.split(',')};
    }

    let data = arr.shift();

    while (data !== 'Closed') {
        let parts = data.split(' / ');
        const action = parts[0];

        if (action === 'Prepare') {
            const baristaName = parts[1];
            const baristaShift = parts[2];
            const coffee = parts[3];

            if (team[baristaName].shift === baristaShift && team[baristaName].coffeeType.includes(coffee)) {
                console.log(`${baristaName} has prepared a ${coffee} for you!`);
            } else {
                console.log(`${baristaName} is not available to prepare a ${coffee}.`);
            }
        } else if (action === 'Change Shift') {
            const baristaName = parts[1];
            const newShift = parts[2];

            team[baristaName].shift = newShift;

            console.log(`${baristaName} has updated his shift to: ${newShift}`);

        } else if (action === 'Learn') {
            const baristaName = parts[1];
            const newCoffee = parts[2];

            if (team[baristaName].coffeeType.includes(newCoffee)) {
                console.log(`${baristaName} knows how to make ${newCoffee}.`);
            } else {
                team[baristaName].coffeeType.push(newCoffee);
                console.log(`${baristaName} has learned a new coffee type: ${newCoffee}.`);
            }
        }
        data = arr.shift();
    }

    Object.keys(team).forEach(key => {
        console.log(`Barista: ${key}, Shift: ${team[key].shift}, Drinks: ${team[key].coffeeType.join(', ')}`);
    });
}

solve([
    '3',
    'Alice day Espresso,Cappuccino',
    'Bob night Latte,Mocha',
    'Carol day Americano,Mocha',
    'Prepare / Alice / day / Espresso',
    'Change Shift / Bob / night',
    'Learn / Carol / Latte',
    'Learn / Bob / Latte',
    'Prepare / Bob / night / Latte',
    'Closed'
]);
