function solve() {
    const outputElement = document.querySelector('#output');
    const newParagraphElement = document.createElement('p');
    const textElement = document.querySelector('#input').value;
    let sentences = textElement
        .split(".")
        .map(s => s.trim())
        .filter(s => s.length > 0);

    if (sentences.length <= 3) {

    }
    console.log(sentences.length);
    console.log(sentences);

}
