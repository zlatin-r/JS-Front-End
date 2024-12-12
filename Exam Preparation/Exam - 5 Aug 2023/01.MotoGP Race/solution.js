function solve(arr) {
    const ridersCount = arr.shift();
    const ridersData = arr.splice(0, ridersCount);

    const riders = ridersData.reduce((riders, rider) => {
        let [name, fuel, position] = rider.split('|');

        riders[name] = {fuel: +fuel, position: +position};

        return riders;
    }, {});

    console.log(riders, arr)
}

solve([
    "3",
    "Valentino Rossi|100|1",
    "Marc Marquez|90|2",
    "Jorge Lorenzo|80|3",
    "StopForFuel - Valentino Rossi - 50 - 1",
    "Overtaking - Marc Marquez - Jorge Lorenzo",
    "EngineFail - Marc Marquez - 10",
    "Finish"
])
