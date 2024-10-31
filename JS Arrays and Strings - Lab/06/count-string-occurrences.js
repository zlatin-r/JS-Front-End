function solve(text, word) {
    const matches = text.match(new RegExp(`\\b${word}\\b`, 'g'));

    console.log(matches ? matches.length : 0);
}

solve('This is a word and it also is a sentence',
'is')
solve('softuni is great place for learning new programming languages',
'softuni')
