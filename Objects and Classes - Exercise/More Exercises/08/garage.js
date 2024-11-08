function solve(input) {
    let garages = {};

    for (let line of input) {
        let garageNumber = Number(line[0]);

        if (!garages.hasOwnProperty(garageNumber)) {
            garages[garageNumber] = {};
        }
        let data = line.slice(4).split(', ');

        for (let carInfo of data) {
            let [key, value] = carInfo.split(': ');
            garages[garageNumber][key] = value;
        }
    }

    for (let garageNumber in garages) {
        console.log(`Garage № ${garageNumber}`);
        let cars = garages[garageNumber];
        for (let key in cars) {
            console.log(`--- ${key} - ${cars[key]}`);
        }
    }

}

solve([
    '1 - color: blue, fuel type: diesel',
    '1 - color: red, manufacture: Audi',
    '2 - fuel type: petrol',
    '4 - color: dark blue, fuel type: diesel, manufacture: Fiat']
)