function solve(input) {
    let heroesList = [];

    for (let line of input) {
        let [heroName, heroLevel, inventory] = line.split(' / ');
        heroesList.push({name: heroName, level: heroLevel, inventory: inventory});
    }

    heroesList.sort((a, b) => a.level - b.level);

    for (let hero of heroesList) {
        console.log(`Hero: ${hero.name}\nlevel => ${hero.level}\nitems => ${hero.inventory}`);
    }
}

solve([
        'Batman / 2 / Banana, Gun',
        'Superman / 18 / Sword',
        'Poppy / 28 / Sentinel, Antara'
    ]
)
