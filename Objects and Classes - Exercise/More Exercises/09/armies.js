function solve(input) {
    let leaders = {};
    let leaderName = '';
    let armyInfo = '';

    for (let line of input) {
        if (line.includes('arrives')) {
            leaderName = line.slice(0, -8)
            leaders[leaderName] = {totalArmy: 0};
        } else if (line.includes('defeated')) {
            leaderName = line.slice(0, -9)

            if (leaders.hasOwnProperty(leaderName)) {
                delete leaders[leaderName];
            }
        } else if (line.includes(':')) {
            [leaderName, armyInfo] = line.split(': ');

            if (leaders.hasOwnProperty(leaderName)) {
                let [armyName, armyCount] = armyInfo.split(', ');
                leaders[leaderName][armyName] = Number(armyCount);
                leaders[leaderName].totalArmy += Number(armyCount);
            }
        } else if (line.includes('+')) {
            let [armyName, armyCount] = armyInfo.split(', ');

            Object.values(leaders).map((value) => {
                    if (Object.keys(value).includes(armyName)) {
                        value[armyName] += Number(armyCount);
                        value.totalArmy += Number(armyCount);
                    }
                }
            )
        }
    }
    let sortedLeaders = Object.keys(leaders)
        .sort((a, b) => leaders[b].totalArmy - leaders[a].totalArmy);

    for (let leader of sortedLeaders) {
        console.log(`${leader}: ${leaders[leader].totalArmy}`);
        Object.entries(leaders[leader]).sort((a, b) => b[1] - a[1])
            .forEach(([key, value]) => {
                if (key != "totalArmy") console.log(`>>> ${key} - ${value}`);
            })
    }
}

solve(['Rick Burr arrives',
    'Fergus: Wexamp, 30245',
    'Rick Burr: Juard, 50000',
    'Findlay arrives',
    'Findlay: Britox, 34540',
    'Wexamp + 6000', 'Juard + 1350',
    'Britox + 4500', 'Porter arrives',
    'Porter: Legion, 55000',
    'Legion + 302',
    'Rick Burr defeated',
    'Porter: Retix, 3205'
])
