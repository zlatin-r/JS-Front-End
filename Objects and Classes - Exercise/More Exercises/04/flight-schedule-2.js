function solve(input) {
    let flightsList = input[0];
    let canceledFlights = input[1].map(flight => flight.split(' ')[0]);
    let status = input[2][0];
    let allFlights = {};

    for (let flight of flightsList) {
        let [number, destination] = flight.split(' ');
        allFlights[number] = {'Destination': destination, 'Status': status};

        if (status === 'Ready to fly') {
            if (!canceledFlights.includes(number)) {
                console.log(allFlights[number]);
            }
        } else if (status === 'Cancelled') {
            if (canceledFlights.includes(number)) {
                number['Status'] = status;
                console.log(allFlights[number]);
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
            'SK430 Cancelled'],
        ['Cancelled']
    ]
)
