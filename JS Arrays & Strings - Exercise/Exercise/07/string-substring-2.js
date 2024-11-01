function solve(word, text) {

    let lowerCaseWord = word.toLowerCase();
    let lowerCaseText = text.toLowerCase().split(' ');
    let found = false;

    for (w of lowerCaseText) {
        if (lowerCaseWord === w) {
            found = true;
            break;
        }
    }
    if (found) {
        console.log(word);
    } else {
        console.log(`${word} not found!`);
    }
}

solve('javascript', 'javascript is the best programming language javascript')
solve('python', 'JavaScript is the best programming language')
