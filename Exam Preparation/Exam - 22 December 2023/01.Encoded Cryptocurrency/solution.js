function solve(arr) {
    let message = arr.shift();
    let command = arr.shift();

    while (command !== 'Buy') {
        let parts = command.split('?');
        let action =  parts[0];

        if (action === 'TakeEven') {
            message = message.split('').filter((_, x) => x % 2 === 0).join('');
            console.log(message);
        } else if (action === 'ChangeAll') {
            const substring = parts[1];
            const replacement = parts[2];

            message = message.split(substring).join(replacement);
            console.log(message);
        } else if(action === 'Reverse') {
            const substring = parts[1];

            if (message.includes(substring)) {
                message = message.replace(substring, '');
                message += substring.split('').reverse().join('');

                console.log(message);
            } else {
                console.log('error');
            }
        }
        command = arr.shift();
    }
    console.log(`The cryptocurrency is: ${message}`);
}

solve([
    "z2tdsfndoctsB6z7tjc8ojzdngzhtjsyVjek!snfzsafhscs",
    "TakeEven",
    "Reverse?!nzahc",
    "ChangeAll?m?g",
    "Reverse?adshk",
    "ChangeAll?z?i",
    "Buy"
]);
