function solve(arr) {
    const n = parseInt(arr.shift());
    const team = {};

    for (let i = 0; i < n; i++) {
        const [name, shift, coffeeTypes] = arr.shift().split(' ');
        team[name] = {shift: shift, coffeeType: coffeeTypes.split(', ')};
    }

    const data = arr.shift().split(' / ');
    const action = data[0];

    while (action !== 'Closed') {
        if (action === 'Prepare') {

        }
    }
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
