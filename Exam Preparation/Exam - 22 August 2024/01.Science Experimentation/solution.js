function solve(array) {
    const n = Number(array.shift());
    const chemicals = {};

    for (let i = 0; i < n; i++) {
        const [chemical, quantity] = array.shift().split(' # ');
        chemicals[chemical] = {quantity: Number(quantity), formula: ''};
    }

    for (let row of array) {
        const data = row.split(' # ');

        if (data[0] === 'Mix') {
            const [action, chemOne, chemTwo, amount] = data;
            const numAmount = Number(amount);

            if (chemicals[chemOne].quantity >= numAmount && chemicals[chemTwo].quantity >= numAmount) {
                chemicals[chemOne].quantity -= numAmount;
                chemicals[chemTwo].quantity -= numAmount;
                console.log(`${chemOne} and ${chemTwo} have been mixed. ${numAmount} units of each were used.`);
            } else {
                console.log(`Insufficient quantity of ${chemOne}/${chemTwo} to mix.`)
            }
        } else if (data[0] === 'Replenish') {
            const [action, chem, amount] = data;

            if (chemicals.hasOwnProperty(chem)) {
                const currQuantity = chemicals[chem].quantity;
                chemicals[chem].quantity += Number(amount);

                if (chemicals[chem].quantity > 500) {
                    const increased = 500 - currQuantity
                    chemicals[chem].quantity = 500;
                    console.log(`${chem} quantity increased by ${increased} units, reaching maximum capacity of 500 units!`);
                } else {
                    console.log(`${chem} quantity increased by ${amount} units!`);
                }
            } else {
                console.log(`The Chemical ${chem} is not available in the lab.`);
            }
        } else if (data[0] === 'Add Formula') {
            const [action, chem, formula] = data;

            if (chemicals.hasOwnProperty(chem)) {
                chemicals[chem].formula = formula;
                console.log(`${chem} has been assigned the formula ${formula}.`);
            } else {
                console.log(`The Chemical ${chem} is not available in the lab.`);
            }
        } else {
            for (const [name, details] of Object.entries(chemicals)) {
                const {quantity, formula} = details;
                if (formula) {
                    console.log(`Chemical: ${name}, Quantity: ${quantity}, Formula: ${formula}`);
                } else {
                    console.log(`Chemical: ${name}, Quantity: ${quantity}`);
                }
            }
            break;
        }
    }
}


solve([
    '3',
    'Sodium # 300',
    'Chlorine # 100',
    'Hydrogen # 200',
    'Mix # Sodium # Chlorine # 200',
    'Replenish # Sodium # 250',
    'Add Formula # Sulfuric Acid # H2SO4',
    'Add Formula # Sodium # Na',
    'End',
    'Mix # Hydrogen # Chlorine # 50'
])