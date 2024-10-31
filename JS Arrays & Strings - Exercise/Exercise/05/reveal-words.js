function solve(keyWords, text) {
    let keys = keyWords.split(', ');

    for (w of keys) {
        let wordLen = Number(w.length);
        let searchedWord = '*'.repeat(wordLen);

        text = text.replace(searchedWord, w)
    }
    console.log(text)
}

solve('great, learning', 'softuni is ***** place for ******** new programming languages')
