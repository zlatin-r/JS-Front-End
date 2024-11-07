function solve(input) {
    let parking = [];

    for (let line of input) {
        let [direction, number] = line.split(", ");

        if (direction === "IN") {
            if (!parking.includes(number)) {
                parking.push(number);
            }
        } else if (direction === 'OUT') {
            parking = parking.filter(car => car !== number);
        }
    }
    if (parking.length !== 0) {
        let sortedParking = parking.sort();
        console.log(sortedParking.join('\n'));
    } else {
        console.log('Parking Lot is Empty')
    }
}

solve(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']
)
