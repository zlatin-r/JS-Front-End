function solve(array) {
    const n = Number(array.shift());
    let chemicals = [];
    let action = '';
    let chemOne = '';
    let chemTwo = '';
    let chem = '';
    let formula = '';
    let amount = 0;

    for (let i = 0; i < n; i++) {
        const currEl = array.shift();
        const [chemical, quantity] = currEl.split(' # ');
        chemicals[chemical] = Number(quantity);
    }

    for (let row of array) {
        const data = row.split(' # ')
        if (data.length > 3) {
            [action, chemOne, chemTwo, amount] = data;
        } else {
            [action, chem, formula] = data;
        }
        if (action === 'Mix') {
            if (chemicals[chemOne] >= Number(amount) && chemicals[chemTwo] >= Number(amount)) {
                console.log(`${chemOne} and ${chemTwo} have been mixed. ${amount} units of each were used.`);
            } else {
                console.log(`Insufficient quantity of ${chemOne}/${chemTwo} to mix.`);
            }
        } else if (action === 'Replenish') {
            if (!checkIfIncludes(chem, chemicals)) {
                console.log(`The Chemical ${chem} is not available in the lab.`)
            } else {
                chemicals[chem] += Number(amount);
                if (chemicals[chem] > 500) {
                    chemicals[chem] = 500;
                    console.log(`${chem} quantity increased by ${chemicals[chem]} units, reaching maximum capacity of 500 units!`)
                } else {
                    console.log(`${chem} quantity increased by ${chemicals[chem]} units!`)
                }
            }
        } else {
            if (!chemicals.hasOwnProperty(chem)) {
                console.log(`The Chemical ${chem} is not available in the lab.`)
            } else {
                chemicals[chem]['formula'] = formula
            }
        }
    }

    function checkIfIncludes(el, obj) {
        return Object.keys(obj).includes(el);
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