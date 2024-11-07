function solve(input) {
    let elementsList = input.split(' ');
    let elements = {};
    let result = [];

    for (let el of elementsList) {
        if (elements.hasOwnProperty(el.toLowerCase())) {
            elements[el.toLowerCase()]++;
        } else {
            elements[el.toLowerCase()] = 1;
        }
    }
    for (let [key, value] of Object.entries(elements)) {
        if (value % 2 === 1) {
            result.push(key)
        }
    }
    console.log(result.join(' '));
}

solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')