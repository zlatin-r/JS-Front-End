function solve(arr) {
    const ridersCount = arr.shift();
    const ridersData = arr.splice(0, ridersCount);

    const riders = ridersData.reduce((riders, rider) => {
        let [name, fuel, position] = rider.split('|');

        riders[name] = {fuel: +fuel, position: +position};

        return riders;
    }, {});

    let riderOne = '';

    arr.forEach(entry => {
        const line = entry.split(' - ');
        const command = line.shift();

        switch (command) {
            case 'StopForFuel':
                riderOne = line.shift();
                let [minFuel, newPosition] = line;

                if (riders[riderOne].fuel < Number(minFuel)) {
                    riders[riderOne].fuel = 100;
                    riders[riderOne].position = Number(newPosition);

                    console.log(`${riderOne} stopped to refuel but lost his position, now he is ${newPosition}.`);
                } else {
                    console.log(`${riderOne} does not need to stop for fuel!`);
                }
                break;
            case 'Overtaking':
                riderOne = line.shift();
                const riderTwo = line.shift();

                if (riders[riderOne].position < riders[riderTwo].position) {
                    [riders[riderOne].position, riders[riderTwo].position] = [riders[riderTwo].position, riders[riderOne].position];

                    console.log(`${riderOne} overtook ${riderTwo}!`);
                }
                break;
            case 'EngineFail':
                riderOne = line.shift();
                const lapsLeft = line.shift();

                delete riders[riderOne];

                console.log(`${riderOne} is out of the race because of a technical issue, ${lapsLeft} laps before the finish.`);
                break;
        }
    });
    Object.entries(riders).forEach(([name, data]) => {
        console.log(`${name}: ${data.position}`);
    })
}

solve([
    "4",
    "Valentino Rossi|100|1",
    "Marc Marquez|90|3",
    "Jorge Lorenzo|80|4",
    "Johann Zarco|80|2",
    "StopForFuel - Johann Zarco - 90 - 5",
    "Overtaking - Marc Marquez - Jorge Lorenzo",
    "EngineFail - Marc Marquez - 10",
    "Finish"
]);

