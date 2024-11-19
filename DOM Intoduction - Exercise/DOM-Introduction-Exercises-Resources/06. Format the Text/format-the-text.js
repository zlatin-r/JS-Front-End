function solve() {
    const outputElement = document.querySelector('#output');
    const textElement = document.querySelector('#input').value;
    let sentences = textElement
        .split(".")
        .filter(s => s.trim().length > 0);

    for (let i = 0; i < sentences.length; i += 3) {
        const group = sentences.slice(i, i + 3);
        const newParagraphElement = document.createElement('p');

        newParagraphElement.textContent = group.map(el => `${el}.`).join('');
        outputElement.appendChild(newParagraphElement);
    }
}
