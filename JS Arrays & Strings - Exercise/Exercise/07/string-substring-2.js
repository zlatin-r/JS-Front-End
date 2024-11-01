function solve(word, text) {
    if (text.toLowerCase().includes(word)) {
        console.log(word);
    } else {
        console.log(`${word} not found!`);
    }
}

solve('javascript', 'javascript is the best programming language javascript')
solve('python', 'JavaScript is the best programming language')
