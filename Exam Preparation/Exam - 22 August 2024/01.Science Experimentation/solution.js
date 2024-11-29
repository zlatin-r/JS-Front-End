function solve(array) {
    const n = Number(array.shift());
    let chemicals = {};


    for (let i = 0; i < n; i++) {
        const [chemical, quantity] = array.shift().split(' # ');
        chemicals[chemical] = {quantity: Number(quantity), formula: ''}

    }

    for (let row of array) {
        const data = row.split(' # ');

        let action = '';
        let chemOne = '';
        let chemTwo = '';
        let chem = '';
        let amount = 0;

        if (data.length > 3) {
            [action, chemOne, chemTwo, amount] = data;
        } else {
            [action, chem, formula] = data;
        }
        if (action === 'Mix') {
            if ()
        }
    }
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