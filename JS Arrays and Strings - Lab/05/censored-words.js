function solve(text, word) {

    let censoredText = text;
    const stars = '*'.repeat(word.length);

    while (censoredText.includes(word)) {
        censoredText = censoredText.replace(word, stars);
    }
    console.log(censoredText);
}

solve('A small sentence with some words', 'small')
solve('Find the hidden word and one more hidden', 'hidden')
