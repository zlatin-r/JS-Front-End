function solve(char1, char2) {
    const valueOne = char1.charCodeAt(0)
    const valueTwo = char2.charCodeAt(0)

    const startValue = Math.min(valueOne, valueTwo) + 1
    const endValue = Math.max(valueOne, valueTwo)

    let result = []

    for (let i = startValue; i < endValue; i++) {
        result.push(String.fromCharCode(i))
    }

    console.log(result.join(' '))
}

solve('a', 'd')
solve('#', ':')
solve('C', '#')
