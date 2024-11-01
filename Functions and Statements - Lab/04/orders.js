function priceCalculator(product, quantity) {
    let total = 0

    switch (product) {
        case 'coffee':
            total = quantity * 1.50;
            break;
        case 'water':
            total = quantity * 1.00;
            break;
        case 'coke':
            total = quantity * 1.40;
            break;
        case 'snacks':
            total = quantity * 2.00;
            break;
    }

    return total.toFixed(2);
}

console.log(priceCalculator('coffee', 2));
console.log(priceCalculator('water', 5));
