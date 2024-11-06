function wordsTracker(input) {
    let wordsToTrack = input[0].split(' ');
    let wordsCount = {};

    for (let word of wordsToTrack) {
        wordsCount[word] = 0;
    }

    for (let i = 1; i < input.length; i++) {
        let currentWord = input[i];
        if (wordsCount.hasOwnProperty(currentWord)) {
            wordsCount[currentWord]++;
        }
    }

    let sortedWords = Object.entries(wordsCount).sort((a, b) => b[1] - a[1]);

    for (let [word, count] of sortedWords) {
        console.log(`${word} - ${count}`);
    }
}

wordsTracker([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences',
    'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]);

wordsTracker([
    'is the',
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence'
]);
