function solve(array) {
    const n = Number(array.shift());
    let chemicals = {};

    for (let i = 0; i < n; i++) {
        const [chemical, quantity] = array[i].split(' # ');
        chemicals[chemical] = Number(quantity);
    }

    console.log(n, chemicals, array);
}


solve([
    '4',
    'Water # 200',
    'Salt # 100',
    'Acid # 50',
    'Base # 80',
    'Mix # Water # Salt # 50',
    'Replenish # Salt # 150',
    'Add Formula # Acid # H2SO4',
    'End']
)