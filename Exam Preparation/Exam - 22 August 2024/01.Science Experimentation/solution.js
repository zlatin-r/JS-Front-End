function solve(array) {
    const n = Number(array.shift());
    const chemicals = {};

    for (let i = 0; i < n; i++) {
        const [chemical, quantity] = array.shift().split(' # ');
        chemicals[chemical] = {quantity: Number(quantity), formula: ''};
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
            let chemOneQuantity = chemicals[chemOne].quantity;
            let chemTwoQuantity = chemicals[chemTwo].quantity;

            if (chemOneQuantity >= amount && chemTwoQuantity >= amount) {
                chemOneQuantity -= amount;
                chemTwoQuantity -= amount;
                console.log(`${chemOne} and ${chemTwo} have been mixed. ${amount} units of each were used.`);
            } else {
                console.log(`Insufficient quantity of ${chemOne}/${chemTwo} to mix.`)
            }
        } else if (action === 'Replenish') {
            let currQuantity = chemicals[chem].quantity;

            if (chemicals.includes(chem)) {
                currQuantity += amount;

                if (currQuantity > 500) {
                    currQuantity = 500;
                    console.log(`${chem} quantity increased by ${currQuantity} units, reaching maximum capacity of 500 units!`);
                } else {
                    console.log(`${chem} quantity increased by {amount} units!`);
                }
            } else {
                console.log(`The Chemical ${chem} is not available in the lab.`);
            }
        } else {
            if (chemicals.includes(chem)) {
                chemicals[chem].formula = formula;
                console.log(`${chem} has been assigned the formula ${formula}.`);
            } else {
                console.log(`The Chemical ${chem} is not available in the lab.`);
            }
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