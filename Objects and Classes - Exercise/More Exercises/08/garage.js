function solve(input) {
    let garages = {};

    for (let line of input) {
        let [garageInfo, carInfo] = line.split(' - ');
        let garageNumber = Number(garageInfo.trim());

        if (!garages.hasOwnProperty(garageNumber)) {
            garages[garageNumber] = [];
        }
        carInfo = carInfo.replace(/:/g, ' -')
        garages[garageNumber].push(carInfo);
    }

    for (let garageNumber in garages) {
        console.log(`Garage № ${garageNumber}`);
        let cars = garages[garageNumber];
        for (let car of cars) {
            console.log(`--- ${car}`);
        }
    }
}

solve([
    '1 - color: blue, fuel type: diesel',
    '1 - color: red, manufacture: Audi',
    '2 - fuel type: petrol',
    '4 - color: dark blue, fuel type: diesel, manufacture: Fiat'
]);
