function solve(arr) {
    const n = Number(arr.shift());
    const charactersList = {};
    const maxBullets = 6;
    const maxHp = 100;

    for (let i = 0; i < n; i++) {
        const [name, hp, bullets] = arr.shift().split(' ');
        charactersList[name] = {hp: parseInt(hp), bullets: parseInt(bullets)};
    }

    for (let command of arr) {
        if (command !== "Ride Off Into Sunset") {
            const data = command.split(' - ');

            if (data.length === 3) {
                const [action, charName, target] = data;
                const currCharacter = charactersList[charName];

                if (action === 'FireShot') {
                    if (currCharacter.bullets) {
                        currCharacter.bullets--;
                        console.log(`${charName} has successfully hit ${target} and now has ${currCharacter.bullets} bullets!`);
                    } else {
                        console.log(`${charName} doesn't have enough bullets to shoot at ${target}!`);
                    }
                } else if (action === 'PatchUp') {
                    if (currCharacter.hp === maxHp) {
                        console.log(`${charName} is in full health!`);
                    } else {
                        const currHp = currCharacter.hp;
                        currCharacter.hp = Math.min(currCharacter.hp + Number(target), maxHp);
                        const hpRecovered = currCharacter.hp - currHp;
                        console.log(`${charName} patched up and recovered ${hpRecovered} HP!`);
                    }
                }

            } else if (data.length === 4) {
                const [action, charName, damage, attacker] = data;
                const currCharacter = charactersList[charName];

                currCharacter.hp -= Number(damage);

                if (currCharacter.hp > 0) {
                    console.log(`${charName} took a hit for ${damage} HP from ${attacker} and now has ${currCharacter.hp} HP!`);
                } else {
                    delete charactersList[charName];
                    console.log(`${charName} was gunned down by ${attacker}!`)
                }
            } else if (data.length === 2) {
                const charName = data[1];
                const currCharacter = charactersList[charName];

                if (currCharacter.bullets < maxBullets) {
                    const currBullets = currCharacter.bullets;
                    currCharacter.bullets = maxBullets;
                    const reloadedBullets = maxBullets - currBullets;
                    console.log(`${charName} reloaded ${reloadedBullets} bullets!`);
                } else {
                    console.log(`${charName}'s pistol is fully loaded!`);
                }
            }
        } else {
            break;
        }
    }

    Object.entries(charactersList).forEach(([name, data]) => {
        console.log(`${name}\n HP: ${data.hp}\n Bullets: ${data.bullets}`);
    });
}

solve([
    "2",
    "Gus 100 0",
    "Walt 100 6",
    "Ride Off Into Sunset",
    "FireShot - Gus - Bandit",
    "TakeHit - Gus - 100 - Bandit",
    "Reload - Walt"
]);

