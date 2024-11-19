function solve() {
    const textElement = document.querySelector('#input').value;
    let sentences = textElement
        .split(".")
        .map(s => s.trim())
        .filter(s => s.length > 0);

    console.log(sentences.length);
    console.log(sentences);

}
