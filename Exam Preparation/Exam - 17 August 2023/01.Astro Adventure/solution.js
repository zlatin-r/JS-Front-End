function solution(arr) {
    const n = parseInt(arr.shift());
    const astronauts = {};

    for (let i = 0; i < n; i++) {
        const [astronautName, oxygenLevel, energyReserve] = arr.shift().split(' ');
        astronauts[astronautName] = {oxygen: parseInt(oxygenLevel), energy: parseInt(energyReserve)};
    }

    let command = arr.shift();

    while (command !== 'End') {
        const parts = command.split(' - ');
        const action = parts[0];
        const name = parts[1];
        const amount = parseInt(parts[2]);

        if (action === 'Explore') {
            if (astronauts[name].energy >= amount) {
                astronauts[name].energy -= amount;
                console.log(`${name} has successfully explored a new area and now has ${astronauts[name].energy} energy!`);
            } else {
                console.log(`${name} does not have enough energy to explore!`)
            }
        } else if (action === 'Refuel') {
            const energyBeforeRefuel = astronauts[name].energy;
            astronauts[name].energy = Math.min(astronauts[name].energy + amount, 200);
            console.log(`${name} refueled their energy by ${astronauts[name].energy - energyBeforeRefuel}!`)
        } else if (action === 'Breathe') {
            const oxygenBeforeRefuel = astronauts[name].oxygen;
            astronauts[name].oxygen = Math.min(astronauts[name].oxygen + amount, 100);
            console.log(`${name} took a breath and recovered ${astronauts[name].oxygen - oxygenBeforeRefuel} oxygen!`);
        }
        command = arr.shift();
    }

    Object.entries(astronauts).forEach(([name, data]) => {
        console.log(`Astronaut: ${name}, Oxygen: ${data.oxygen}, Energy: ${data.energy}`);
    });
}

solution([
    '4',
    'Alice 60 100',
    'Bob 40 80',
    'Charlie 70 150',
    'Dave 80 180',
    'Explore - Bob - 60',
    'Refuel - Alice - 30',
    'Breathe - Charlie - 50',
    'Refuel - Dave - 40',
    'Explore - Bob - 40',
    'Breathe - Charlie - 30',
    'Explore - Alice - 40',
    'End'
]);