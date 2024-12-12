// 90 points in Judge -------------------------------------------------------

function solution(array) {
    const horses = array.shift().split('|');

    let horse = '';
    let currIndex = 0;

    while (array.length > 0) {
        const row = array.shift();
        const parts = row.split(' ');
        const action = parts.shift();

        if (action === 'Finish') break;

        switch (action) {
            case 'Retake':
                const [overtakingHorse, overtakenHorse] = parts;
                const overtakingIndex = horses.indexOf(overtakingHorse);
                const overtakenIndex = horses.indexOf(overtakenHorse);

                if (overtakingIndex < overtakenIndex) {

                    [horses[overtakingIndex], horses[overtakenIndex]] =
                        [horses[overtakenIndex], horses[overtakingIndex]];

                    console.log(`${overtakingHorse} retakes ${overtakenHorse}.`);
                }
                break;
            case 'Trouble':
                horse = parts[0];
                currIndex = horses.indexOf(horse);

                if (currIndex > 0) {
                    [horses[currIndex], horses[currIndex - 1]] =
                        [horses[currIndex - 1], horses[currIndex]];
                    console.log(`Trouble for ${horse} - drops one position.`)
                }
                break;
            case 'Rage':
                horse = parts[0];
                currIndex = horses.indexOf(horse);

                if (currIndex < horses.length - 1) {
                    let newIndex = Math.min(currIndex + 2, horses.length - 1);

                    const [movedHorse] = horses.splice(currIndex, 1);

                    horses.splice(newIndex, 0, movedHorse);

                    console.log(`${horse} rages 2 positions ahead.`);
                }
                break;
            case 'Miracle':
                const lastHorse = horses.shift();
                horses.push(lastHorse);

                console.log(`What a miracle - ${lastHorse} becomes first.`);
                break;
        }
    }
    console.log(horses.join('->'));
    console.log(`The winner is: ${horses[horses.length - 1]}`);
}

solution([
    'Fancy|Lilly',
    'Retake Lilly Fancy',
    'Trouble Lilly',
    'Trouble Lilly',
    'Finish',
    'Rage Lilly'
])