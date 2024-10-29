function solve(group, type, day) {
    let price

    switch (type) {
        case 'Students':
            if (day === 'Friday') price = group * 8.45;
            else if (day === 'Saturday') price = group * 9.80;
            else if (day === 'Sunday') price = group * 10.46;
            if (group >= 30) price *= 0.85;
            break;

        case 'Business':
            if (group > 100) group -= 10
            if (day === 'Friday') price = group * 10.90;
            else if (day === 'Saturday') price = group * 15.60;
            else if (day === 'Sunday') price = group * 16;
            break;

        case 'Regular':
            if (day === 'Friday') price = group * 15;
            else if (day === 'Saturday') price = group * 20;
            else if (day === 'Sunday') price = group * 22.50;
            if (group >= 10 && group <= 20) price *= 0.95
            break;
    }
    console.log(`Total price: ${price.toFixed(2)}`);
}

solve(30, 'Students', 'Sunday') // expected 266.73
solve(40, 'Regular', 'Saturday') // expected 800.00
