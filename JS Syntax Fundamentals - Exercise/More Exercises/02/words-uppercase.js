function solve(input) {

    let result = '';
    const regex = /\b\w+\b/g;
    let match;

    while ((match = regex.exec(input)) !== null) {

        result += (result ? ', ' : '') + match[0].toUpperCase();
    }

    console.log(result);
}

solve('Hi, how are you?')
