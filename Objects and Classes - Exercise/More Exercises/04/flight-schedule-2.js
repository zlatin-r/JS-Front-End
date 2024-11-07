function solve(input) {
    let flightsList = input[0];
    let canceledFlights = input[1];
    let status = input[2][0];
    let allFlights = {};
    let cancelledFlightNumbers = [];

    for (let flight of canceledFlights) {
        let [number, x] = flight.split(' ');
        cancelledFlightNumbers.push(number);
    }

    for (let flight of flightsList) {
        let [number, destination] = flight.split(' ');
        allFlights[number] = {'Destination': destination, 'Status': status};
    }

    if (status === 'Ready to fly') {
        for (let item in allFlights) {
            if (!cancelledFlightNumbers.includes(item)) {
                console.log(allFlights[item]);
            }
        }
    } else if (status === 'Cancelled') {
        for (let item in allFlights) {
            if (cancelledFlightNumbers.includes(item)) {
                item['Status'] = status;
                console.log(allFlights[item]);
            }
        }
    }
}

solve([['WN269 Delaware',
        'FL2269 Oregon',
        'WN498 Las Vegas',
        'WN3145 Ohio',
        'WN612 Alabama',
        'WN4010 New York',
        'WN1173 California',
        'DL2120 Texas',
        'KL5744 Illinois',
        'WN678 Pennsylvania'],
        ['DL2120 Cancelled',
            'WN612 Cancelled',
            'WN1173 Cancelled',
            'SK330 Cancelled'],
        ['Ready to fly']
    ]
)
