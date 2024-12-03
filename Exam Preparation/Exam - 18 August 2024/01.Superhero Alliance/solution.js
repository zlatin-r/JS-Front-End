function solve(arr) {
    const heroes = addHeroes(arr);

    function addHeroes(array) {
        const n = Number(array.shift());
        const result = {};

        for (let i = 0; i < n; i++) {
            const [heroName, superPowers, energy] = arr.shift().split('-');
            result[heroName] = {};
            result[heroName] = {powers: superPowers.split(','), energy: Number(energy)};
        }
        return result;
    }

    function usePower(line) {
        let [x, name, power, energy] = line.split(' * ');

        if (heroes[name].powers.includes(power) && heroes[name].energy >= Number(energy)) {
            heroes[name].energy -= Number(energy);
            console.log(`${name} has used ${power} and now has ${heroes[name].energy} energy!`);
        } else {
            console.log(`${name} is unable to use ${power} or lacks energy!`);
        }
    }

    function train(line) {
        let [x, name, energy] = line.split(' * ');
        const currEnergy = heroes[name].energy;

        if (currEnergy === 100) {
            console.log(`${name} is already at full energy!`);
        } else {
            heroes[name].energy = Math.min(100, currEnergy + Number(energy));
            const gainedEnergy = heroes[name].energy - currEnergy;
            console.log(`${name} has trained and gained ${gainedEnergy} energy!`);
        }
    }

    function learn(line) {
        let [x, name, power] = line.split(' * ');

        if (heroes[name].powers.includes(power)) {
            console.log(`${name} already knows ${power}.`);
        } else {
            heroes[name].powers.push(power);
            console.log(`${name} has learned ${power}!`);
        }
    }

    function postResult(heroesData) {
        for (const [hero, data] of Object.entries(heroesData)) {
            console.log(`Superhero: ${hero}\n- Superpowers: ${data.powers.join(', ')}\n- Energy: ${data.energy}`);
        }
    }

    for (let row of arr) {
        if (!row.includes('Evil Defeated!')) {
            if (row.includes('Use Power')) {
                usePower(row)
            } else if (row.includes('Train')) {
                train(row)
            } else if (row.includes('Learn')) {
                learn(row)
            }
        } else {
            postResult(heroes)
        }
    }
}

solve([
    "3",
    "Iron Man-Repulsor Beams,Flight-80",
    "Thor-Lightning Strike,Hammer Throw-10",
    "Hulk-Super Strength-60",
    "Use Power * Iron Man * Flight * 30",
    "Train * Thor * 20",
    "Train * Hulk * 50",
    "Learn * Hulk * Thunderclap",
    "Use Power * Hulk * Thunderclap * 70",
    "Evil Defeated!"
])