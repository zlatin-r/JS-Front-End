function solve(input) {
    let searchedWords = input.shift().split(" ")
    let result = [];

    for (let w of searchedWords) {
        let obj = {word: w, count: 0}
        result.push(obj);
    }

    for (let currWord of input) {
        let word = result.find(obj => obj.word === currWord)

        if (word) {
            word.count += 1;
        }
    }
    result.sort((a, b) => b.count - a.count);

    for (let i of result) {
        console.log(`${i.word} - ${i.count}`);
    }
}

solve([
    'is the',
    'first', 'sentence', 'Here', 'is', 'another',
    'the', 'And', 'finally', 'the', 'the', 'sentence'
])
