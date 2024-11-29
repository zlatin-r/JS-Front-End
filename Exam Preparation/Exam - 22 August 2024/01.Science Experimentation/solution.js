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

            let chemOneQuantity = chemicals[chemOne].quantity;
            let chemTwoQuantity = chemicals[chemTwo].quantity;

            if (chemOneQuantity >= numAmount && chemTwoQuantity >= numAmount) {
                chemOneQuantity -= numAmount;
                chemTwoQuantity -= numAmount;
                console.log(`${chemOne} and ${chemTwo} have been mixed. ${numAmount} units of each were used.`);
            } else {
                console.log(`Insufficient quantity of ${chemOne}/${chemTwo} to mix.`)
            }
        } else if (data[0] === 'Replenish') {
            const [action, chem, amount] = data;
            let currQuantity = chemicals[chem].quantity;

            if (chemicals.hasOwnProperty(chem)) {
                currQuantity += Number(amount);

                if (currQuantity > 500) {
                    currQuantity = 500;
                    console.log(`${chem} quantity increased by ${currQuantity} units, reaching maximum capacity of 500 units!`);
                } else {
                    console.log(`${chem} quantity increased by ${amount} units!`);
                }
            } else {
                console.log(`The Chemical ${chem} is not available in the lab.`);
            }
        } else if (data[0] === 'Add Formula'){
            const [action, chem, formula] = data;

            if (chemicals.hasOwnProperty(chem)) {
                chemicals[chem].formula = formula;
                console.log(`${chem} has been assigned the formula ${formula}.`);
            } else {
                console.log(`The Chemical ${chem} is not available in the lab.`);
            }
        } else {
            chemicals.forEach(c => {
                console.log(`Chemical:, Quantity: ${c.quantity}`)})
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