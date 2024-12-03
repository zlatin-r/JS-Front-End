function solve(arr) {
    const n = Number(arr.shift());
    const heroes = [];

    for (let i = 0; i < n; i++) {
        const [heroName, superPowers, energy] = arr[i].split('-');
        const newHero = {name: heroName, powers: superPowers.split(','), energy: energy};
        heroes.push(newHero);
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