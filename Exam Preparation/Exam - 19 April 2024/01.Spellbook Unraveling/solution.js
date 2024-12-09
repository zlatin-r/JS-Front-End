function solution(arr) {
    let spell = arr.shift();
    let command = arr.shift();

    while (command !== 'End') {
        const parts = command.split('!');
        const action = parts[0];

        if (action === 'RemoveEven') {
            spell = spell
                .split('')
                .filter((_, index) => index % 2 === 0)
                .join('');
            console.log(spell);

        } else if (action === 'TakePart') {
            const fromIndex = parseInt(parts[1]);
            const toIndex = parseInt(parts[2]);
            spell = spell.substring(fromIndex, toIndex);
            console.log(spell);

        } else if (action === 'Reverse') {
            const subString = parts[1];

            if (spell.includes(subString)) {
                spell = spell.replace(subString, '');
                spell += subString
                    .split('')
                    .reverse()
                    .join('');
                console.log(spell);

            } else {
                console.log('Error')
            }
        }
        command = arr.shift();
    }
    console.log(`The concealed spell is: ${spell}`);
}

solution([
    "hZwemtroiui5tfone1haGnanbvcaploL2u2a2n2i2m",
    "TakePart!31!42",
    "RemoveEven",
    "Reverse!anim",
    "Reverse!sad",
    "End"
]);