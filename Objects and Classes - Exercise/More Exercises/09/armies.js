function solve(input) {
    let leaders = {};
    let leaderName = '';

    for (let line of input) {
        if (line.includes('arrives')) {
            leaderName = line.slice(0, -8)
            leaders[leaderName] = [];
            console.log(leaders)
        } else if (line.includes('defeated')) {
            leaderName = line.slice(0, -9)
            leaders = leaders.filter(leader => leaderName !== leaderName);
            console.log(leaders);
        }
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
    'Porter: Retix, 3205']
)