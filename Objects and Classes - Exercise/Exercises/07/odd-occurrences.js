function solve(input) {
    let elementsList = input.toLowerCase().split(' ');
    let elements = {};
    let result = [];

    for (let el of elementsList) {
        if (elements.hasOwnProperty(el)) {
            elements[el]++;
        } else {
            elements[el] = 1;
        }
    }
    for (let word in elements) {
        if (elements[word] % 2 !== 0) {
            result.push(word)
        }
    }
    console.log(result.join(' '));
}

solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')
