function solve(arr) {
    const n = Number(arr.shift());
    const heroes = {};

    for (let i = 0; i < n; i++) {
        const [heroName, superPowers, energy] = arr.shift().split('-');
        heroes[heroName] = {};
        heroes[heroName] = {powers: superPowers.split(','), energy: Number(energy)};
    }
    for (let row of arr) {
        if (!row.includes('Evil Defeated!')) {
            if (row.includes('Use Power')) {
                let [action, name, power, energy] = row.split(' * ');
                    if (heroes[name].powers.includes(power) && heroes[name].energy >= Number(energy)) {
                        heroes[name].energy -= Number(energy);
                        console.log(`${name} has used ${power} and now has ${heroes[name].energy} energy!`);
                    } else {
                        console.log(`${name} is unable to use ${power} or lacks energy!`);
                    }
            } else if (row.includes('Train')) {
                let [action, name, energy] = row.split(' * ');
                const currEnergy = heroes[name].energy;
                heroes[name].energy = Math.min(100, currEnergy + energy);
            }
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