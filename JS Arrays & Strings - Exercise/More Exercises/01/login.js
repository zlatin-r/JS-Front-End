function solve(arr) {
    let username = arr[0];
    let password = username.split('').reverse().join('');

    for (let i = 0; i < 4; i++) {
        let input = arr[i + 1];
        if (input === password) {
            console.log(`User ${username} is logged in.`);
            break;

        } else {
            console.log('Incorrect password. Try again');
        }
        if (i === 3) {
            console.log(`User ${username} is blocked!`);
        }
    }
}

solve(['Acer','login','go','let me in','recA'])
solve(['momo','omom'])
solve(['sunny','rainy','cloudy','sunny','not sunny'])